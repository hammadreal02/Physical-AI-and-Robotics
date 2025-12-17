import os
import rclpy
from rclpy.node import Node
# from ament_index_python.packages import get_package_share_directory # Not needed for this local example
from gazebo_msgs.srv import SpawnEntity

class SpawnRobotNode(Node):
    def __init__(self):
        super().__init__('spawn_robot_node')
        self.client = self.create_client(SpawnEntity, '/spawn_entity')
        self.get_logger().info('Waiting for service /spawn_entity...')
        # Check if the service is available with a timeout
        if not self.client.wait_for_service(timeout_sec=5.0):
            self.get_logger().error('Service /spawn_entity not available after 5 seconds.')
            raise RuntimeError('Gazebo spawn_entity service not available.')
        self.get_logger().info('Service /spawn_entity is available.')
        self.spawn_robot()

    def spawn_robot(self):
        # Get the path to the URDF file
        # In a real package, you'd use get_package_share_directory
        # For this standalone example, assume URDF is in the same directory as this script
        script_dir = os.path.dirname(__file__)
        urdf_path = os.path.join(script_dir, 'robot_arm.urdf')
        
        # Read the URDF content
        with open(urdf_path, 'r') as f:
            urdf_content = f.read()

        request = SpawnEntity.Request()
        request.name = 'simple_arm_model'
        request.xml = urdf_content
        request.robot_namespace = '/simple_arm'
        request.reference_frame = 'world' # Spawns relative to Gazebo's world origin

        self.get_logger().info('Spawning robot...')
        future = self.client.call_async(request)
        rclpy.spin_until_future_complete(self, future)

        if future.result() is not None and future.result().success:
            self.get_logger().info('Robot spawned successfully!')
        else:
            error_msg = future.result().status_message if future.result() else "Unknown error"
            self.get_logger().error(f'Failed to spawn robot: {error_msg}')
            raise RuntimeError(f'Failed to spawn robot: {error_msg}')


def main(args=None):
    rclpy.init(args=args)
    try:
        node = SpawnRobotNode()
    except RuntimeError as e:
        node.get_logger().error(f"Initialization failed: {e}")
        rclpy.shutdown()
        exit(1)
    finally:
        if rclpy.ok(): # Ensure rclpy is still active before shutdown
            node.destroy_node()
            rclpy.shutdown()

if __name__ == '__main__':
    main()
