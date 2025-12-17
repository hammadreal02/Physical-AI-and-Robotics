import subprocess
import time
import os
import signal

def run_ros2_hello_world_test():
    print("Starting ROS2 Hello World Test...")

    # Start publisher in a separate process
    # For Windows, preexec_fn is not available.
    # We will handle termination more directly.
    publisher_process = subprocess.Popen(
        ["python", "publisher_member_function.py"],
        cwd="static/examples/ros2/hello_world",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        # preexec_fn=os.setsid # Linux-specific
    )
    print(f"Publisher process started with PID: {publisher_process.pid}")

    # Start subscriber in a separate process
    subscriber_process = subprocess.Popen(
        ["python", "subscriber_member_function.py"],
        cwd="static/examples/ros2/hello_world",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        # preexec_fn=os.setsid # Linux-specific
    )
    print(f"Subscriber process started with PID: {subscriber_process.pid}")

    received_messages = []
    timeout_seconds = 15 # Increased timeout
    start_time = time.time()
    test_passed = False

    try:
        while time.time() - start_time < timeout_seconds:
            # Read subscriber output
            line = subscriber_process.stdout.readline().decode().strip()
            if line:
                print(f"Subscriber: {line}")
                if "I heard: \"Hello World:" in line:
                    received_messages.append(line)
                    if len(received_messages) >= 2: # Wait for at least 2 messages
                        test_passed = True
                        break
            # Read publisher output to avoid blocking
            line_pub = publisher_process.stdout.readline().decode().strip()
            if line_pub:
                print(f"Publisher: {line_pub}")

            time.sleep(0.1) # Small delay to avoid busy-waiting

        if test_passed:
            print("Test Passed: Subscriber received messages from publisher.")
        else:
            print("Test Failed: Subscriber did not receive expected messages within timeout.")

    except Exception as e:
        print(f"An error occurred during testing: {e}")
    finally:
        # Terminate processes
        print("Terminating ROS2 processes...")
        for p in [publisher_process, subscriber_process]:
            if p.poll() is None: # If process is still running
                try:
                    # Attempt graceful termination first
                    p.terminate()
                    p.wait(timeout=5) # Give it 5 seconds to terminate
                except subprocess.TimeoutExpired:
                    # If it doesn't terminate, kill it forcefully
                    p.kill()
                    print(f"Process {p.pid} forcefully killed.")
        
        # Give a moment for processes to terminate
        time.sleep(2)
        
        if not test_passed:
            # Print any remaining error output from processes
            print("\n--- Publisher Stderr ---")
            print(publisher_process.stderr.read().decode())
            print("\n--- Subscriber Stderr ---")
            print(subscriber_process.stderr.read().decode())
            raise Exception("ROS2 Hello World Test Failed") # Raise exception to fail the test

    return test_passed

if __name__ == '__main__':
    try:
        run_ros2_hello_world_test()
    except Exception as e:
        print(f"Test execution failed: {e}")
        exit(1)
