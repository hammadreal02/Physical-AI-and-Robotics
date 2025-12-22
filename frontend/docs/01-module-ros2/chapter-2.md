---
sidebar_position: 2
---

# Nodes, Topics, and Messages - Week 02

### This week, we dive deeper into the core communication mechanisms of ROS 2: 

Nodes, Topics, and Messages. Understanding how these components interact is fundamental to building any ROS 2 application.

## ROS 2 Nodes: The Building Blocks

In ROS 2, a **node** is an executable unit that performs a specific task. A typical robot system is composed of many nodes working together. For example, one node might be responsible for reading sensor data, another for processing that data, and yet another for sending commands to motors.

## ROS 2 Topics: The Data Highways

**Topics** are named buses over which nodes exchange data. This is a publish/subscribe communication model, which means:

*   **Publishers**: Nodes that send data to a topic.
*   **Subscribers**: Nodes that receive data from a topic.

## ROS 2 Messages: The Data Format

**Messages** are simply data structures that publishers send and subscribers receive via topics. ROS 2 comes with a wide range of standard message types (e.g., `std_msgs/msg/String`, `geometry_msgs/msg/Twist`). You can also define custom message types for your specific needs.

## Hands-on: Building a Simple ROS 2 Publisher and Subscriber

Let's extend our "Hello World" example. You will create a simple publisher node that sends string messages and a subscriber node that listens to them.

1.  **Create a new ROS 2 package**.
2.  **Implement the Publisher**: Write a Python script that creates a node, initializes a publisher for a specific topic (e.g., `/my_topic`), and periodically publishes `std_msgs/msg/String` messages.
3.  **Implement the Subscriber**: Write another Python script that creates a node, initializes a subscriber to the same topic (`/my_topic`), and defines a callback function to process incoming messages.
4.  **Run and Test**: Launch both nodes and observe the messages being exchanged.

This practical exercise will solidify your understanding of how nodes communicate using topics and messages.
