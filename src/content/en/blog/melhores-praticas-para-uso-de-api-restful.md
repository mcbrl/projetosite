---
title: "Best practices for using RESTful APIs"
slug: "melhores-praticas-para-uso-de-api-restful"
date: "2021-02-17T11:45:01"
modified: "2021-02-17T11:45:01"
status: "publish"
author: "admin"
excerpt: "Representational State Transfer REST is a software architecture model used in the development of online services known as RESTful Web Services. In terms of RESTful API Specifically, the API is merely the surface layer of the underlying service: what end users see and interact with, the front end that transmits the entered data to the […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-management", "api-rest", "api-restful", "apis", "estrategia-soa", "kong", "rest", "soa"]
featuredImage: "/wp-content/uploads/2021/02/869683e77646455c99958694fc1b6d78_original.png"
wpId: 5478
originalUrl: "https://vertigo.com.br/melhores-praticas-para-uso-de-api-restful/"
contentSource: "rest"
lang: "en"
seo:
  title: "Best practices for using RESTful APIs - Vertigo"
  description: "A RESTful API is the intermediary layer between these resources and the end user, which can be accessed through web browsers."
  canonical: "https://vertigo.com.br/en/melhores-praticas-para-uso-de-api-restful/"
  ogImage: "/wp-content/uploads/2021/02/869683e77646455c99958694fc1b6d78_original.png"
  robots: "index, follow"
---

*Representational State Transfer* REST is a software architecture model used in the development of online services known as RESTful Web Services. In terms of [RESTful API](/en/grpc-or-rest--which-one-to-use/) Specifically, the API is merely the surface layer of the underlying service: what end users see and interact with, the front end that transmits the entered data to the programming code that constitutes the essence of the service.
REST helps in this process because it transmits very little data to complete the request, making it much more user-friendly and bandwidth-intensive than its predecessors, such as SOAP.
For web services, and especially customer-facing online services, the RESTful API is a simplified way – based on HTTP usage patterns and other standard protocols – to transfer data quickly and efficiently.
Because of this, it quickly became the industry's preferred method, allowing users to interact with web services while supporting many everyday online transactions.
This mandatory daily functionality is reinforced with robust response codes and error checking – with support for a variety of media and resources – which can be paginated or partially loaded to avoid adverse impacts on the reach of the web service.
A RESTful API is the intermediary layer between these resources and the end user, which can be accessed through web browsers for simplified and intuitive interactions.

## How does it work?

The REST model establishes a generic resource interface that is achieved by restricting the interface between components to ensure seamless access to resources accessible via HTTP and others located on an FTP server, for example.
This restriction is a deliberate limitation on access to various services through a single proxy. Other architectures, if necessary, can be used as parallel processes, such as an online architecture that handles email traffic separately and distinctly from web traffic.
O [API gateway](/en/Why-API-Gateway-and-Service-Mesh-are-complementary-patterns./) Kong's API, used by Vertigo in API integration and management projects, can run with any RESTful API, using plugins to add new services and extend its functionality.
As cloud-native deployments continue to increase, REST enables the development of web services that communicate seamlessly with the cloud and are used by major online brands, including Google, Amazon, and social networks like Twitter.

## What are the specifications?

Specifications are not limitations in the sense of reducing the potential of REST, but rather guidelines that establish certain expectations that should always be true in a RESTful system. Working within them ensures that the benefits of use are achieved.

### Caching capacity

Accessing cached data can eliminate the need for transmission between the client and the server, helping to optimize scalability and improve reach. Furthermore, good cache management should ensure that caches do not become outdated or obsolete.

### Client-server architecture

Concepts like [Service-Oriented Architecture (SOA)](/en/API-strategy-is-not-a-SOA-strategy./)Microservices and web services divide the monolithic application code into smaller, more manageable services that can be developed and updated independently of each other.
Client-server architecture applies the same principles to the flow of data in use. There is recognition that the processes *client side* and the *server-side* They can be quite different and independent of each other. 
By developing different client-side interfaces, web services can support access from different platforms and operating systems, improving portability while allowing teams to develop each part individually.

### Code on demand

This optional restriction allows servers to transfer program code as needed, as a way to extend client functionality. JavaScript is rendered and embedded more seamlessly into the page, enabling extensible functionality without the end user noticing.

### Layered systems

Client-server interactions can be considered as two connected gears. If you introduce more gears into the system, you can change the nature of that output, its direction, speed, and so on.
RESTful systems adopt a layered structure, allowing intermediate layers to be inserted to introduce, for example, security policies, proxies, and load balancing features, without interrupting the functionality of the system itself.

### *Stateless*

The absence of state (*stateless*One of the most significant characteristics of RESTful web services, and especially the RESTful API, is that all information required by the service must be contained within the request and not stored by the server.
This ensures that each time the service is used, it starts with the same default configuration and that the client can provide it with updated parameters via the RESTful API.

### Uniform interface

The uniform interface used in RESTful systems means there are consistencies in the architecture to make development easier; these are:

- **Identifying resources in requests:** RESTful web services identify individual resources, for example, through the use of Uniform Resource Identifiers (URIs);
- **Resource manipulation through representations:** ensures that a representation of a client-side resource, complete with metadata, is sufficient to modify or delete that resource;
- **Self-descriptive messages:** Each RESTful message contains enough information to allow it to be processed.

A uniform interface is a fundamental characteristic of REST, decoupling the architecture in a way that allows for its evolution. The constraints, in their entirety, are derived from other common architectural styles.

## What are the best practices?

### Naming conventions

Some best practices relate to how resources are defined and, particularly, the names assigned to them, which ideally should be nouns, plural, and lowercase. While none of these characteristics necessarily break the API's functionality.

### Simple search and sorting

Searching, sorting, filtering, and paginating data does not require altering the data itself. Therefore, the GET method should be sufficient. You can achieve this by adding a query parameter to the URI transmitted via GET.
Pagination is a useful additional example of best practice, as it allows large datasets to be divided into more manageable parts, even if this is done solely for visual rendering purposes.
You can manage pagination using the 'offset' and 'limit' parameters, as well as provide links to the previous and next pages in the results.

### HTTP error and status codes

There are over 70 potential status codes defined in the HTTP standard, and while not all of them apply to every case, it's important to make good use of those that may arise from your specific API.
Many of these codes are familiar even to novice users. This way, you ensure the use of these status codes and error codes in your API, knowing that even a casual user will understand what a 404 error is telling them, should it occur.

### More HTTP semantics

It's not just status codes that must conform to HTTP semantics. Media types, also known as *MIME types*These specify the data format and can include non-binary data for web services, such as application/json and application/xml.
You can include a header. *Content-Type* In a GET request, to ensure that the retrieved data is in the correct format or a header. *Accept* to list various types of media.
If the data is not in the correct format, you will generate a 415 error (unsupported media type), and if the server cannot accept any of the types specified via an Accept header, it will return a 406 error (not acceptable). Both can be used for error handling in your API.

### Partial responses

When requesting large resources, such as high-resolution image files, it may be preferable to limit the response size. Check if this is possible using the header. *Accept Ranges*, combined with *Content-Length*to determine the overall size of the resource you are trying to retrieve. A subsequent GET request can use *Range* to download only a specific number of bytes.
If the full resource is needed later, the remainder can be downloaded, but by limiting the initial response to a partial size, you can put a limit on the amount of data transmitted and get complete responses more quickly.
This is a resource loading principle used on the web since the early days of the internet. From JPEG images that load progressive layers of increasing resolution to more recent methods, such as lazy loading of images on the page as they appear.
In RESTful web services, where speed is often an important consideration, partial responses allow the API to complete your request more quickly.
This is good not only for the end-user's perception, but it also has real-world practical applications in slower connections, such as desktops still running on dial-up connections and mobile devices and "connected things" (IoT) still using 3G.

### Version numbers

It is prudent and intelligent to give a version number (*version number*This can be part of the URI used to access APIs and is a good way to secure that access for the future. It means that if you later decide to release a completely new API, you won't need to immediately stop accessing the old version.
You can release the new version with your own unique URI and allow a grace period – or a deactivation period in the old API – before completely disabling access.
There are many reasons why this might be desirable, from third-party APIs, where you want to give external developers the chance to update their own code to use the new API, to troubleshooting where you want to revert to the old API.
It also provides an immediate indication of how the current version of the API is evolving in terms of its services. And, with web-based services, some changes will likely be introduced at some point, even if they are not anticipated in the short term.

### Version control methods

The RESTful API offers several different ways to specify the version number, and the best option will depend on your individual use case, for example:

- **Header version control:** It sends the API version number as a custom header, with the option to default to a specific version if this header is missing;
- **Query string version control:** Specifies the API version number using a parameter in the query string, for example: https://example.com.br/products/2?v=1;
- **URI version control:** The version number is specified in the URI, for example: https://example.com.br/v1/products/2.

## Conclusion

Digital transformation involves much more than just technological changes. To thrive, companies must change how they operate and even how they think.
APIs are fundamental to this winning strategy. By producing and managing APIs as digital products and supporting an ecosystem, companies can unpack and bundle their business capabilities in a way that will dynamically meet the needs of the ever-evolving digital economy.
Built on an open-source foundation, Kong Enterprise is a complete and extensible microservices and API management platform that manages their entire lifecycle. 
We are official partners of Kong Inc. in Brazil, and our clients have access to a world-class platform for managing and delivering microservices and APIs. Combined with our existing products and solutions, we are prepared to deliver even more value and agility to the market.
To learn more about RESTful APIs and how they can help your business, [talk to our experts](/en/us/)We'll be happy to help you.

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.
