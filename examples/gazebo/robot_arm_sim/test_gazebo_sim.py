import subprocess
import time
import os
import signal

def run_gazebo_sim_test():
    print("Starting Gazebo Simulation Test...")

    gazebo_process = None
    spawn_process = None
    test_passed = False

    try:
        # 1. Launch Gazebo in a separate process
        print("Launching Gazebo (ROS2 integrated empty world)...")
        # Ensure that 'gazebo_ros' package is sourced correctly in your environment
        gazebo_launch_command = ["ros2", "launch", "gazebo_ros", "gazebo.launch.py", "empty_world:=true"]
        gazebo_process = subprocess.Popen(
            gazebo_launch_command,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            # preexec_fn=os.setsid # Linux-specific, removed for broader compatibility
        )
        print(f"Gazebo launch process started with PID: {gazebo_process.pid}")
        time.sleep(15) # Give Gazebo more time to start up

        # 2. Run the spawn_robot.py script
        print("Running spawn_robot.py...")
        spawn_script_path = os.path.join(os.getcwd(), 'static', 'examples', 'gazebo', 'robot_arm_sim', 'spawn_robot.py')
        spawn_command = ["python", spawn_script_path]
        spawn_process = subprocess.Popen(
            spawn_command,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            # preexec_fn=os.setsid # Linux-specific, removed for broader compatibility
        )
        print(f"Spawn script process started with PID: {spawn_process.pid}")
        time.sleep(7) # Give spawn script time to execute

        # 3. Verify that the robot is spawned
        # This is done by checking the output of the spawn_robot.py for success message.
        spawn_output, spawn_stderr = spawn_process.communicate(timeout=5) # Use communicate to wait for process end and get output
        spawn_output = spawn_output.decode()
        spawn_stderr = spawn_stderr.decode()
        print("Spawn script output:\n", spawn_output)
        print("Spawn script stderr:\n", spawn_stderr)
        
        if "Robot spawned successfully!" in spawn_output:
            test_passed = True
            print("Test Passed: Robot appears to have been spawned successfully.")
        else:
            print("Test Failed: Robot spawn unsuccessful.")

    except Exception as e:
        print(f"An error occurred during testing: {e}")
    finally:
        print("Terminating processes...")
        # Terminate spawn process first
        if spawn_process and spawn_process.poll() is None:
            try:
                spawn_process.terminate()
                spawn_process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                spawn_process.kill()
                print("Spawn process forcefully killed.")

        # Terminate Gazebo process
        if gazebo_process and gazebo_process.poll() is None:
            try:
                # Gazebo processes often require SIGINT for graceful shutdown
                # On Windows, terminate() sends SIGTERM, kill() sends SIGKILL
                # For ROS2 launch, SIGINT is usually handled by the launch system
                if os.name == 'posix': # Linux/macOS
                    os.kill(gazebo_process.pid, signal.SIGINT)
                else: # Windows
                    # On Windows, Ctrl+C equivalent for process groups is complex.
                    # Just terminate the main process and hope for the best.
                    gazebo_process.terminate()
                
                gazebo_process.wait(timeout=10) # Give Gazebo more time to shut down
            except subprocess.TimeoutExpired:
                gazebo_process.kill()
                print("Gazebo process forcefully killed.")
        
        if not test_passed:
            # Print any remaining error output from processes if they were not fully captured
            print("\n--- Gazebo Stderr (if any remaining) ---")
            if gazebo_process and gazebo_process.stderr:
                print(gazebo_process.stderr.read().decode())
            print("\n--- Spawn Script Stderr (if any remaining) ---")
            if spawn_process and spawn_process.stderr:
                print(spawn_process.stderr.read().decode())
            raise Exception("Gazebo Simulation Test Failed")

    return test_passed

if __name__ == '__main__':
    # Set up ROS_DOMAIN_ID for isolation to avoid conflicts with other ROS2 instances
    os.environ['ROS_DOMAIN_ID'] = '42' # Choose a unique ID for testing

    try:
        run_gazebo_sim_test()
    except Exception as e:
        print(f"Test execution failed: {e}")
        exit(1)
