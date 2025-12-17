---
sidebar_position: 1
---
import RosCodeExample from '@site/src/components/_client.RosCodeExample';

# ROS 2 Fundamentals: Week 1 - Getting Started

Welcome to the first week of our ROS 2 module! This week, we will lay the groundwork for understanding and working with the Robot Operating System 2 (ROS 2). ROS 2 is a flexible framework for writing robot software. It's a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behaviors across a wide variety of robotic platforms.

## What is ROS 2 and Why Use It?

ROS 2 is not an operating system in the traditional sense, but rather a meta-operating system. It provides services that are typically found in an operating system, such as hardware abstraction, low-level device control, implementation of common functionality, message-passing between processes, and package management.

**Key benefits of ROS 2 include:**

*   **Modular Design**: ROS 2 promotes breaking down complex robot systems into smaller, independent nodes that communicate with each other. This modularity makes development, testing, and debugging much easier.
*   **Distributed Architecture**: Designed for modern distributed systems, allowing components to run on different machines or even different continents, communicating over networks.
*   **Real-time Capabilities**: Enhanced real-time performance capabilities compared to ROS 1, making it suitable for industrial and mission-critical applications.
*   **Security**: Built-in security features for authentication, encryption, and access control, crucial for robotics applications in public spaces or sensitive environments.
*   **Community and Ecosystem**: A large and active community, extensive documentation, and a vast ecosystem of tools, drivers, and algorithms.

## ROS 2 Concepts

Before diving into coding, let's understand some fundamental concepts:

*   **Nodes**: Executable processes that perform computation (e.g., a node for reading sensor data, another for controlling motors).
*   **Topics**: A named bus over which nodes exchange messages. Nodes can publish messages to a topic or subscribe to messages from a topic.
*   **Messages**: Data structures used by topics to send information. ROS 2 provides standard message types, and you can define custom ones.
*   **Services**: Request/reply mechanisms for nodes to communicate synchronously. A client node sends a request, and a server node provides a response.
*   **Actions**: Long-running, asynchronous tasks that provide feedback during execution. Useful for tasks like "move to a goal" where intermediate feedback (e.g., current position) is needed.
*   **Parameters**: Configuration values that can be set dynamically for nodes.
*   **Launch Files**: XML or Python files used to start and configure multiple ROS 2 nodes simultaneously.

## Setting up Your Environment

To follow along with the examples in this module, you'll need a ROS 2 environment set up. We recommend installing the latest stable distribution of ROS 2 (e.g., Humble Hawksbill, Iron Irwini) on Ubuntu.

**Installation Steps (for Ubuntu 22.04 and ROS 2 Humble):**

1.  **Set up locale**:
    ```bash
    locale  # check for UTF-8
    sudo apt update && sudo apt install locales
    sudo locale-gen en_US en_US.UTF-8
    sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
    export LANG=en_US.UTF-8
    locale  # verify settings
    ```
2.  **Add ROS 2 apt repository**:
    ```bash
    sudo apt install software-properties-common
    sudo add-apt-repository universe
    sudo apt update && sudo apt install curl -y
    sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
    ```
3.  **Install ROS 2 packages**:
    ```bash
    sudo apt update
    sudo apt install ros-humble-desktop
    ```
    This command installs the full ROS 2 desktop environment.

4.  **Source the setup script**:
    ```bash
    source /opt/ros/humble/setup.bash
    ```
    It's recommended to add this line to your `~/.bashrc` (or equivalent shell startup file) for automatic sourcing:
    ```bash
    echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
    ```

## Your First ROS 2 Program (Conceptual)

In the next sections, we will explore practical examples. For now, imagine a simple "talker" node that publishes "Hello World" messages to a "chatter" topic, and a "listener" node that subscribes to this topic and prints the messages. This fundamental publish-subscribe pattern is the backbone of ROS 2 communication.

Stay tuned for hands-on exercises in the upcoming sections!

<RosCodeExample
  path="ros2/hello_world"
  publisherFile="publisher_member_function.py"
  subscriberFile="subscriber_member_function.py"
/>

