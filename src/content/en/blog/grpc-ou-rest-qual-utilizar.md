---
title: "gRPC or REST: which one to use?"
slug: "grpc-ou-rest-qual-utilizar"
date: "2020-10-16T11:39:38"
modified: "2020-10-16T11:39:38"
status: "publish"
author: "admin"
excerpt: "For some time now, REST has been dominating the modern API landscape, especially when it comes to web applications and microservices based infrastructures. However, REST is not the only API architecture available, and in some cases, the use of the gRPC model can play a crucial role. Want to learn more about gRPC and whether […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-management", "api-rest", "arquitetura-de-microsservicos", "grpc", "microsservicos", "rest"]
featuredImage: "/wp-content/uploads/2020/10/gRPC-ou-REST.png"
wpId: 5195
originalUrl: "https://vertigo.com.br/grpc-ou-rest-qual-utilizar/"
contentSource: "rest"
lang: "en"
seo:
  title: "gRPC or REST: which one to use? - Vertigo"
  description: "The most widely used architectural style for APIs is the REST API. However, gRPC APIs also exist. Check them out now."
  canonical: "https://vertigo.com.br/en/grpc-ou-rest-qual-utilizar/"
  ogImage: "/wp-content/uploads/2020/10/gRPC-ou-REST.png"
  robots: "index, follow"
---

## REST is predominant, but it is not the only alternative.

For some time now, REST has been dominating the modern API landscape, especially when it comes to web applications and microservices-based infrastructures. However, REST is not the only API architecture available, and in some cases, the use of the gRPC model can play a crucial role.

Want to learn more about gRPC and whether it can be an alternative to REST APIs in your next development project? Follow our article.

Good reading!

### Microservices-based applications

[Microservices-](/en/What-are-microservices/) based applications can overcome the major limitations found in traditional monolithic applications.

A monolithic application contains the programming of all its services and features in a single, indivisible codebase that manages them all. However, as developers add new services and features to the existing structure, it becomes more difficult to modify, update, and resize that application. In this case, a small change in one area can negatively affect other areas, requiring the entire system to be restarted from scratch.

With microservices-based application architecture, this doesn't happen. It allows you to break down a monolith and run each component as a standalone application.

In turn, these individual microservices use [APIs](/en/What-is-API-Understand-it-in-a-simple-way./) to interact and connect with each other. Together, all these microservices form the larger architecture of the application, resulting in more efficient, resilient, scalable, and flexible systems.

As mentioned above, the most widely used architectural style for APIs is the REST API. However, gRPC APIs also exist, and the big question is when to use one or the other.

### Overview of REST and gRPC

APIs have rules that enable applications to communicate and interact with each other. An API defines the types of calls and requests that one application can make to another, how to make those requests, the data formats that will be used, and a number of other conventions that clients must follow.

When we talk about REST and gRPC, we are referring to different architectural styles for building APIs. And, in a simplified way, we can define both as follows:

### REST API (Representational State Transfer)

REST is the most popular architectural style for building APIs, primarily for web-based applications and microservices-based infrastructures. It defines specific constraints that support operability between microservices and web-based applications.

Although a REST API can receive and return messages written in a variety of formats, the most common format used is JSON, a readable text format that is flexible, efficient, and independent of language or platform.

REST-based APIs are great for modeling your domain (i.e., resources or entities), making CRUD (create, read, update, delete) operations available for all your data.

REST architecture was popularized primarily after Facebook and Twitter released their open APIs that followed REST-based architectural patterns.

### gRPC (Google Remote Procedure Call)

gRPC is an open-source RPC architecture designed by Google to achieve high-speed communication between microservices. It allows developers to integrate services programmed in different languages.

The gRPC architecture uses the protobuf (protocol buffers) message format, which is highly compressed and efficient for serializing structured data.

RPC-based APIs are great for actions (i.e., procedures or commands) and, as we will see later, in some contexts, can serve as a more efficient alternative than a REST API.

### Differences between REST and gRPC APIs

Let's now examine the differences between REST APIs and gRPC.

1.  **Protobuf instead of JSON/XML**

Both REST APIs and RPC APIs send and receive messages using JSON or XML message formats.

JSON has become a popular format because it is flexible, efficient, platform-neutral, language-independent, text-based, and human-readable. However, in certain use cases, JSON is not fast or lightweight enough to transmit data between systems.

In contrast to REST, gRPC has no issues with speed and file size, offering greater efficiency when transmitting messages using the Protobuf format (protocol buffers).

2.  **Built on HTTP 2 instead of HTTP 1.1**

*REST APIs are typically built on HTTP 1.1, which uses a request-response* communication model . This means that when a microservice receives multiple requests from more than one client, it needs to handle them one at a time, sequentially, which slows down the entire system.

gRPC, on the other hand, uses HTTP 2 and leverages its support for bidirectional communication. Therefore, when a microservice receives multiple requests from more than one client, it achieves multiplexing, handling many requests and responses simultaneously.

3.  **Generating native code instead of using third-party tools.**

Code generation capabilities are native to gRPC. With REST APIs, it is necessary to use a third-party tool, such as Swagger, to automatically generate code for API calls in various languages.

The protoc compiler that comes with gRPC is compatible with a wide variety of programming languages. This makes it excellent for environments where you are connecting several different microservices that are coded in different languages ​​and run on different platforms.

4.  **Message transmission 7 to 10 times faster**

According to [tests](https://medium.com/@EmperorRXF/evaluating-performance-of-rest-vs-grpc-1b8bdf0b22da#:~:text=gRPC%20is%20roughly%207%20times,of%20HTTP%2F2%20by%20gRPC.) , gRPC API connections are faster than REST API connections.

Approximately 7 times faster than REST when receiving data and approximately 10 times faster than REST when sending data for this specific payload.

5.  **Slower implementation than REST.**

Despite the benefits in message transmission speed, the implementation of the gRPC API is much slower than the implementation of the REST API.

It takes approximately 45 minutes to implement a simple gRPC service compared to only about 10 minutes to implement a REST API.

This is mainly because gRPC is not yet widely adopted, especially compared to the ubiquity of REST APIs.

### When to use REST API vs. gRPC API

#### REST APIs

REST APIs are the most widely used and popular APIs for connecting microservices-based infrastructures, whether it's an internal system or one that exposes its resources to the rest of the world. They are ideal when a system needs high-speed iteration and standardization of the HTTP protocol.

With their universal support from third-party tools, REST APIs should be your first choice for application integrations, microservices integration, and web service development.

When a REST API is made publicly available as a web service, each component provided by the web service is presented to clients as a resource. Clients can access these resources through a common interface that accepts different HTTP commands such as GET, POST, DELETE, and PUT.

#### gRPC APIs

Regarding gRPC, most third-party tools still lack built-in gRPC compatibility features. As such, gRPC is primarily used in building internal systems, and with this caveat in mind, gRPC APIs can be useful in the following circumstances:

- **Microservice connections:** gRPC's low-latency, high-speed communication makes it particularly useful for connecting architectures consisting of lightweight microservices where message transmission efficiency is critical.
- **Multilingual systems:** With its native code generation support for a wide range of development languages, gRPC is excellent for managing connections in a polyglot environment.
- **Real-time streaming:** gRPC's ability to manage bidirectional streaming allows your system to send and receive messages in real time without waiting for a unary client response.
- **Low bandwidth and low power networks:** The use of Protobuf serialized messages by gRPC offers lightweight messages, greater efficiency, and speed for low-power networks and limited bandwidth.

### Conclusion regarding REST API

Due to the various advantages of the gRPC APIs mentioned here, some developers see gRPC as the "future." However, gRPC has not yet been widely adopted, and it remains to be seen whether its benefits will stimulate adoption in the coming years.

In comparison, REST is universally supported and virtually available across all microservices-based infrastructure, and is seen as the glue that holds everything together.

Furthermore, the idea that you need to choose one approach and have only one API architecture should not be considered absolute truth. An application could very easily have several additional APIs or services that are not considered the "main" API, and you could choose between following REST or gRPC rules, and perhaps you would have a REST API and some RPC services in parallel.

Therefore, understanding the differences between REST and gRPC can be incredibly useful when planning a new API and can help when working on features for existing APIs. After all, knowing how your clients will behave and what to expect from your APIs is fundamental in deciding which architecture to use.

Did you enjoy our content? Want to learn more about systems integration and API management and how it can all help your business? [Talk to one of our experts](/en/us/) ! We'd be happy to assist you.

#### Assess the level of DevOps adoption and maturity in your company and understand its strengths, weaknesses, gaps, and opportunities for improvement.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/en/DevOps-maturity-index/)

#### Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
