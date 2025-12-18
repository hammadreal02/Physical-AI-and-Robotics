---
sidebar_position: 3
---

# Services and Actions - week 03

Building upon topics and messages, this week we explore two other crucial communication paradigms in ROS 2: Services and Actions. These mechanisms allow for more structured and complex interactions between nodes.

## ROS 2 Services: Synchronous Request/Reply

**Services** in ROS 2 provide a synchronous request/reply mechanism. This is useful when you need a node to perform a specific task and return a result immediately. Think of it like a function call in a distributed system.

*   **Service Server**: A node that offers a service. It waits for incoming requests, performs the computation, and sends back a response.
*   **Service Client**: A node that calls a service. It sends a request and blocks (or waits asynchronously) until it receives a response.

## ROS 2 Actions: Asynchronous, Long-running Tasks

**Actions** are designed for long-running tasks that provide periodic feedback and can be preempted. They are built on top of topics and services and provide a more robust way to handle complex behaviors like "move to a goal" or "pick up object."

An action consists of three parts:

*   **Goal**: The target of the action (e.g., target pose for navigation).
*   **Result**: The outcome of the action (e.g., success/failure, final pose).
*   **Feedback**: Intermediate updates during the execution of the action (e.g., current pose, remaining distance).

## Hands-on: Implementing a Simple ROS 2 Service and Action

1.  **Service Example**: Create a service that takes two integers as input and returns their sum. Implement both a server node and a client node.
2.  **Action Example**: Develop a simple action that counts from 1 to N, providing feedback on the current count and allowing the client to cancel the counting process.

These examples will demonstrate when to choose services over topics, and actions over services, based on the communication requirements of your robot's tasks.
