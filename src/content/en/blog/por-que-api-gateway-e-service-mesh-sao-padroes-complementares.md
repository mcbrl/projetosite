---
title: "Why are API Gateway and Service Mesh complementary patterns?"
slug: "por-que-api-gateway-e-service-mesh-sao-padroes-complementares"
date: "2020-12-14T15:42:24"
modified: "2020-12-14T15:42:24"
status: "publish"
author: "admin"
excerpt: "For many years, API Management (APIM), and the adoption of an API gateway, was the primary methodology used to implement APIs inside and outside the data center. However, these technologies have evolved significantly in the last decade. It's not just the runtime that connects, protects, and governs API traffic in the data plane of requests, […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-gateway", "api-management", "arquitetura-de-microsservicos", "microservices", "microsservicos", "service-mesh"]
featuredImage: "/wp-content/uploads/2020/12/API-gateway.png"
wpId: 5389
originalUrl: "https://vertigo.com.br/por-que-api-gateway-e-service-mesh-sao-padroes-complementares/"
contentSource: "rest"
lang: "en"
seo:
  title: "Why are API Gateway and Service Mesh complementary patterns? - Vertigo"
  description: "The API gateway pattern performs an additional hop in the network that each request will have to go through to consume the underlying APIs."
  canonical: "https://vertigo.com.br/en/por-que-api-gateway-e-service-mesh-sao-padroes-complementares/"
  ogImage: "/wp-content/uploads/2020/12/API-gateway.png"
  robots: "index, follow"
---

For many years, API Management (APIM), and the adoption of an API gateway, was the primary methodology used to implement APIs inside and outside the data center. However, these technologies have evolved significantly in the last decade.
It's not just the runtime that connects, protects, and governs API traffic in the data plane of requests, but also a series of functionalities that enable the creation, testing, documentation, monetization, monitoring, and overall exposure of APIs in a much broader context, targeting a larger set of users.

In other words, there is a complete lifecycle of creating and exposing APIs as a product to users and clients; it's not just managing the network runtime that allows us to expose and consume APIs (RESTful or not).
Around 2017, another standard emerged in the industry: Service Mesh. But the industry failed to recognize how it worked with API gateways, and a great deal of confusion began to arise.

Over time, technology implementations have achieved the original vision of this infrastructure, and more and more users have implemented this pattern and shared their experiences. This allows us, now, to have a more serious rationale about what Service Mesh is (and what it is not) and what the role of the API gateway (and APIM) is in this process.
Many people have tried to describe the differences between API gateways and Service Mesh, commonly stating that the former is for north-south traffic and the latter for east-west traffic. This statement, besides not being precisely correct, also exposes a fundamental misunderstanding about these patterns.

In this article, we'll show how API gateway and Service Mesh approaches are complementary and explain when to use one or the other. Happy reading!

##
API Gateway

The API gateway pattern performs an additional hop in the network that each request must pass through to consume the underlying APIs. In this context, some people call it centralized deployment.
Located in the execution path of each API call, the API gateway receives requests from a client and can apply traffic and user policies before ultimately acting as a reverse proxy for these requests to the underlying APIs. It can also enforce policies on the response received from the underlying API before sending the request back to the original client.
This infrastructure may have a *control plane* integrated to manage and configure what the *data plan* It does, or both can be grouped into the same process.
The API gateway is deployed on its own instance (its own VM, host, or pod) separate from the client and APIs. Deployment is therefore very simple because it is completely separate from the rest of the system and lives in its own architectural layer.
This type of API typically covers three use cases for internal and external service connectivity, as well as for traffic both inside and outside the data center. These are:

## API as a product

The first type of use is about packaging the API as a product that other developers, partners, or teams will consume.
Client applications can initiate requests from outside the organization (as in the case of a mobile application) or from within the same company (another product, built by another team or another line of business). In either case, they will be executed outside the scope of the product (which is exposing the API) that they are consuming.
This situation is very common whenever different products/applications need to communicate, especially if they were created by different teams.
By offering APIs as a product, an API gateway will encapsulate common requirements that govern and manage requests originating from the client to the API services. For example, cases of *rate limit*Developer integration or monetization. These are use cases implemented by user policies that go beyond managing the underlying protocol, as they control how users will use the product.
An API gateway is also used as an abstraction layer that allows you to change the underlying APIs over time without necessarily having to update the clients that consume them. This is especially important in scenarios where client applications are built by developers outside the organization. In this case, this pattern can be used to maintain backward compatibility, since the underlying APIs update over time.

## Service connectivity

Another use case involves applying network policies to connect, secure, encrypt, and monitor traffic between the client and the API gateway, as well as with the APIs.
After a request is processed by the API gateway, the gateway itself will have to make a request to the underlying API to obtain a response (after all, the gateway is a reverse proxy).
Typically, we want to protect the request through mutual Transport Layer Security (TLS), log the requests, and generally monitor network communication.
The gateway also acts as a load balancer and implements features such as HTTP routing, request proxy support for different API versions, as well as exception handling, and so on.
The underlying APIs that are exposed through the API gateway can be built on any architecture (monolithic or microservices), as long as they expose a consumable interface.

## Complete API lifecycle management

Managing APIs and their users, as well as client applications and their traffic, are just some of the many steps involved in executing a successful API strategy.
APIs need to be created, documented, tested, and simulated. Once running, they must be monitored and observed to detect anomalies in their use.
Furthermore, by offering APIs as a product, they will have to provide a portal for end users to register their applications, retrieve credentials, and begin consuming them.
This broader experience, which encompasses various points in the API lifecycle, is called full API lifecycle management. Most API solutions on the market provide answers to implement all the above issues, bundled into one or more products that connect to the API gateway to execute policy enforcement.

## Service Mesh

With Service Mesh, each time a service wants to make a network request to another service (for example, a monolith consuming the database or a microservice consuming another microservice), that request needs to be handled, making it more secure and observable.
It's a pattern that can be applied to any architecture (monolithic or microservice-oriented) and any platform (VMs, containers, Kubernetes).
In this sense, Service Mesh doesn't introduce new use cases, but rather improves the implementation of existing ones. Even before its emergence, application teams were already implementing traffic policies such as security, observability, and error handling to enhance the connectivity of any inbound or outbound network request.
In this situation, teams were writing more code for their services. This meant that different teams would continually reimplement the same functionality – in different programming languages ​​– creating fragmentation and security risks for the organization in managing network connectivity.
With Service Mesh, the network management of any incoming or outgoing requests made by any service is "outsourced" to a proxy application that will manage all requests.
Since the proxy will run on a replica of each service, Service Mesh is also called a decentralized deployment. Furthermore, because there are extra network hops to keep latency to a minimum, the proxy runs on the same machine (VM, host, pod) as the already running service.
Since a proxy application instance will be running for each replica, there will be many proxies running on the systems. To configure them all, a... *control plane* that acts as a source for the configuration and connects to proxies to dynamically propagate the configuration. 
The Service Mesh pattern, therefore, is more invasive than the API gateway pattern because it requires a proxy for *control plane* It should be deployed close to each instance of each service, requiring that CI/CD jobs be substantially updated when deploying applications. 
Although other deployment types exist, the one described above is considered the industry standard because it ensures the best and highest availability, as well as allowing the assignment of a unique identity (through an mTLS certificate) to each replica of each service.
With Service Mesh, we fundamentally deal with one primary use case:

## Service connectivity

By outsourcing network management to a third-party proxy application, teams can avoid implementing network management in their own services.
The proxy can then implement features such as mutual TLS encryption, identity, routing, logging, tracking, and load balancing for each deployed service and workload, including third-party services.
Since service connectivity within the organization will run on a large number of protocols, a complete Service Mesh implementation will support not only HTTP, but also any other TCP traffic, regardless of whether it is north-south or east-west.
In this context, support is offered for a wider range of services and implementation of L4/L7 traffic policies, whereas gateway APIs have historically been more focused on L7 policies.
From a conceptual point of view, the Service Mesh has a very simple view of running workloads: everything is a service, and services can communicate with each other. Since the API gateway is also a service that receives and makes requests, it would simply be one more service among many others in a mesh.
Since each replica of each service requires a proxy of *data plan*next – and the proxies of *data plan* They are effectively customer load balancers – the *control plane* A Service Mesh must know the address of each proxy so that L4/L7 routing capability can be implemented.
The address can be associated with any metadata. By doing so, Service Mesh provides integrated service discovery that doesn't necessarily require a third-party solution. A service discovery tool can still be used to communicate outside the mesh, but most likely not for traffic going inside.

## When do API gateways and Service Mesh complement each other?

Looking at the use cases, it becomes clear that there is an area of ​​overlap between API gateway and Service Mesh, such as service connectivity.
The service connectivity features that Service Mesh provides complement the connectivity features that API gateway provides. However, those provided by the former are more inclusive and complete. But there are also use cases where Service Mesh does not provide "API as a product," nor complete API lifecycle management.
A major point of divergence between the two patterns is the deployment model: in Service Mesh, it is necessary to deploy a proxy. *data plan* next to each replica of each service.
This is easy to do when a team wants to deploy it within the scope of their own product, but it becomes more difficult when the proxy has to be deployed outside that scope for three reasons:

1.  Deploying a proxy application for each service of each product may encounter resistance within the organization, since different products, teams, and business lines may have fundamentally different ways of building, running, and deploying their software.
2.  Each proxy *data plan* must initiate a connection with the *control plane* And in certain cases, access is not permitted to those deployed outside the boundaries of a product, team, or line of business.
3.  It is not possible to deploy the proxy. *data plan* with each service because they are not controllable in their entirety, as in the case of a third-party application built by a developer, client, or partner external to the organization.
4.  Services deployed on the same Service Mesh will need to use the same CA (Certificate Authority) to be provided with a valid TLS certificate to consume each other. Sharing a CA may not be possible or desirable between services belonging to different products or teams. In this case, two separate Service Meshes (each with its own CA) can be created and communicate via an intermediate API gateway.

Given that API gateways and Service Mesh focus on different use cases, the following guidance is proposed to determine when to use one or the other, based on the assumption that, in most organizations, both will be used at different times.

## When should you use each pattern?

### API gateway

To offer APIs “as a product” to internal or external customers and users through a centralized entry point to govern and control how they are being exposed and integrated via a full lifecycle APIM platform.
Typically used when different applications need to communicate with each other, and also to create an abstraction layer between clients and the underlying APIs.

### Service Mesh

To build reliable, secure, and observable L4/L7 traffic connectivity between all services running on your systems through a deployment model. *sidecar* decentralized, which can be adopted and applied in its entirety.
Typically used within the scope of an application or for the purpose of creating point-to-point connectivity between all belonging services.

## Conclusion

The API gateway and Service Mesh standards, when combined as complementary elements, are powerful business accelerators that help ensure the application of best practices and security policies.
They simplify the architecture, reducing unnecessary concerns for developers and allowing these professionals to use their time to develop apps and improve business functionalities.
Built on an open-source foundation, Kong Enterprise is a complete and extensible API management platform that manages the entire service lifecycle, allowing clients such as GLOBO, Natura, iFood, and others to protect, connect, monetize, and orchestrate their APIs.

Since we are official partners of Kong Inc. in Brazil, our clients have access to a platform. *world-class* for managing and delivering APIs and Service Mesh. Combined with Vertigo's products and services, we are prepared to deliver even more value and agility to the market.
To implement and manage the best integration standard for your application, [contact our experts](/en/us/).

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/en/cloud-native-assessment/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
