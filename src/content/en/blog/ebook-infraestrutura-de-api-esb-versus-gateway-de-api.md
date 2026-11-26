---
title: "eBook – API Infrastructure: ESB versus API Gateway"
slug: "ebook-infraestrutura-de-api-esb-versus-gateway-de-api"
date: "2024-10-04T12:13:03"
modified: "2026-02-02T20:38:45"
status: "publish"
author: "admin"
excerpt: "For modern businesses, providing enjoyable experiences based on customer obsession has become commonplace. A Forrester research report from June 2021 shows customer obsessed companies reporting 2,5 times higher revenue growth and 2,2 times better customer retention. Gartner predicts that, in the next two years, self service digital channels, along with predictive analytics of customer behavior, […]"
categories: ["nao-categorizado"]
tags: ["api", "esb", "ia", "inteligencia-artificial"]
featuredImage: "/wp-content/uploads/2026/02/ebook-infraestrutura-de-api-esb-versus-gateway-de-api.jpg"
wpId: 165113
originalUrl: "https://vertigo.com.br/ebook-infraestrutura-de-api-esb-versus-gateway-de-api/"
contentSource: "rest"
lang: "en"
seo:
  title: "eBook - API Infrastructure: ESB versus API Gateway - Vertigo"
  description: "Learn all about API Gateways versus ESBs. Check out the eBook and find out how your company can benefit."
  canonical: "https://vertigo.com.br/en/ebook-infraestrutura-de-api-esb-versus-gateway-de-api/"
  ogImage: "/wp-content/uploads/2026/02/ebook-infraestrutura-de-api-esb-versus-gateway-de-api.jpg"
  robots: "index, follow"
---

## **Introduction**

For modern businesses, providing enjoyable experiences based on customer obsession has become commonplace. A Forrester research report from June 2021 shows customer-obsessed companies reporting 2,5 times higher revenue growth and 2,2 times better customer retention. Gartner predicts that, in the next two years, self-service digital channels, along with predictive analytics of customer behavior, will soon be the most valuable resources for service organizations.

However, implementing systems that place the customer at the center requires leveraging all of the organization's resources in a way that is greater than the sum of its parts. Thus, connectivity is a fundamental part of any modern IT infrastructure. Previously, the Enterprise Service Bus (ESB) was the primary connectivity provider for a Service-Oriented Architecture (SOA).

However, times are changing. Organizations are moving towards decentralization, replacing monoliths with microservices and abandoning the idea of ​​having entire companies using multiple technologies in favor of a diversity of languages, platforms, and solutions.

They are freeing up siloed data and modernizing legacy applications, and they are using [**APIs**](/en/Kong-Gateway%3A-6-tips-to-improve-API-performance./) in this process. Furthermore, organizations are migrating their services and applications to the cloud.

Amidst all of this, connectivity that provides more interconnected customer experiences is even more critical than before.

API gateways are a modern connectivity solution, and their use allows teams to focus on innovation and efficiency, meeting the key demands of modern businesses.

In this ebook, we'll first look at why connectivity is becoming more important every day, and then we'll discuss the ESB—what it is, how it emerged, and where it has been used. Next, we'll analyze another connectivity solution, the API gateway, and compare it to the ESB. Finally, we'll discuss how current organizations can evolve.

## **Connectivity for delightful experiences.**

The world is becoming increasingly digital. Digital transformation, or the integration of digital technology into all areas of a company, continues to expand. It is no longer simply the integration of a new piece of software or hardware, but a cultural shift.

A cultural factor that fundamentally affects how organizations operate and what they aim for.

One of these new targets is customer obsession. It's not enough to simply say you're a customer-centric company. Customer obsession comes from a focus and commitment from the entire organization to putting the customer's needs at the center of everything. From sales and marketing to operations and support, every department needs to share in this commitment.

From there, it becomes possible to generate enjoyable experiences for your customers. In the age of social media, organizations that go beyond merely satisfying needs and actively seek to delight their audience gain immense influence and a new mindset.

While none of this is new, new levels are being reached. The focus and data required to drive all of this are relentless and demand that the organization pursue them tirelessly. Connectivity plays a key role in delivering this enjoyable experience.

### **The importance of connectivity**

To provide customers with optimal digital experiences, it's important to connect the sum of all interactions an organization has with its audience. This ability to connect marketing, sales, IT, and all its...

Integrating departments with the customer is also known as a "360º view." By linking and synchronizing information from different angles, the organization gains a more holistic understanding—order history, demographic information, loyalty data, complaint history, and much more.

The data from this 360º view is used to provide an omnichannel digital experience. The organization can then provide a pleasant, personalized experience tailored to the customer's needs, who, in turn, no longer feels like they are just representing a physical person, but is finally being treated as a human being.

To generate this 360º view and an omnichannel experience, connectivity is fundamental. All business systems and processes within the company must be connected and up-to-date so that the customer has a seamless and enjoyable experience.

### **The ESB and connectivity**

Connectivity has always been important. However, in the past, the focus was on organizational efficiency. The Enterprise Service Bus (ESB) was originally conceived as a connector for all the different types of existing services. In a service-oriented architecture (SOA) – which was still growing and evolving – the challenge of connecting different services with different standards and protocols was significant, and the ESB emerged to meet this challenge.

In a centralized environment, the ESB has become a significant component, as it enables a monolithic enterprise architecture. To meet the need to connect large applications and local databases, the ESB has been crucial. Let's see how it accomplished this task.

[![ESB x API gateway](/wp-content/uploads/2024/10/Ebook-Infraestrutura-de-API-ESB-versus-Gateway-de-API_BANNER_INTERNO.png)](/en/projects/API-infrastructure-ESB-versus-API-gateway/)

## **The Enterprise Service Bus (ESB)**

### **What is an ESB?**

An ESB is an intermediary that connects applications in an SOA. Instead of direct point-to-point or client-server communication, the ESB integrates with all endpoints. It gained prominence in the early 2000s and has since grown to become an important part of the IT infrastructure of large enterprises.

Since there is no single standard to be followed by all ESBs, this ebook refers to the features of ESBs in general. A given implementation may not contain all features, but there are major similarities across the ESB space.

### **The role of the ESB**

An ESB serves to decouple the various services and applications that exist in an SOA-based IT environment. Each service only needs to configure a single integration with the ESB. From there, the ESB makes that service available to all other services connected to it, typically handling format transformation, protocol negotiation, queuing, and in some cases, even additional business logic.

By doing so, the ESB presents itself as a one-stop shop for any application or service that intends to consume or publish data.

The point here is that the ESB is an intermediary for all service-to-service communication, typically offering the best benefits.

### **Site-centered architecture**

In its role as a negotiator and mediator of communication between services, the ESB tends to become a central hub of the IT infrastructure. It provides many resources that allow integration with virtually all available services, including legacy services.

As more services pass through the ESB, the impetus to bring in each new service increases. There's a "network effect" similar to that of large social networking applications like Facebook. The more people on the network, the more it will attract other people.

Therefore, the ESB eventually becomes an essential monolithic service in its own right. Each integration with the ESB tends to go a little further and contain a bit more logic. In a short time, the business logic ceased to reside in the individual services and moved to the ESB.

### **The ESB team – Central IT**

As the ESB grows, it naturally requires more maintenance and attention. This responsibility typically falls to a dedicated IT team tasked with maintaining the ESB.

Since the ESB acts as a centralized hub for all service-to-service communications, your team should function similarly, working and communicating with the various application teams. Coordinating new features and releases prevents downstream dependency breakdowns.

### **Advantages and disadvantages of an ESB**

Now that we have a general understanding of ESBs, let's take a look at the specific challenges they solve, their benefits, and some disadvantages.

#### **What challenges do ESBs solve?**

In an era when service formats and even protocols were not standardized, the ESB provided a way to centralize these integrations. Consider an enterprise context where there were five services. Without an ESB, 10 point-to-point integrations would be needed for each of these services to communicate with each other. Add one more service and the total jumps to 15.

With each new service, the number of integrations required grows exponentially, as do the resources needed for initial development and maintenance. With an ESB, each new service requires only one new integration, directly with the ESB.

Furthermore, since ESBs have centralized access to all services, they offer orchestration benefits, that is, the ability to aggregate data from multiple services and present them as a single entity. As the number of services grows and application needs become more complex, orchestration enables simpler application development and interfacing.

#### **Benefits of ESB**

One of the main benefits of an ESB is service discovery. Since services must connect to the ESB to access others, it also serves as a service directory within the organization. This is one of the benefits of the ESB's network effect: in addition to simple integrations, it can serve as a continuous and up-to-date source of documentation on any service. It contains not only general information about the service but also technical details on how to consume and use its data. Obviously, this information is geared towards the developer, providing an engineering-level understanding rather than a business-level understanding. ESBs also add resilience to the service architecture. As an intermediary for service communication, ESBs can add middleware-like functionality to that communication.

Many ESBs serve as a message queue, enabling the decoupling of services, as they no longer need to be online at the same time to communicate. This makes communication between services more resilient, less prone to network outages, and able to withstand the failure of any individual service.

In addition to messaging, ESBs also add load balancing and transactions. Load balancing allows for greater service availability, and transactions enable the execution of complex operations such as atomic units with reversible capabilities.

Finally, as ESBs grew in prominence, even more features were added. Some include centralized business logic and rules—with no-code and low-code solutions available to organization members—and generate graphical architectural models.

Furthermore, more adapters were introduced to handle large enterprise applications and even EDI (electronic data interchange) communication. While each of these features added value, they also increased the scope and complexity of the ESB application.

#### **The future of ESBs**

With these questions in mind, what does the future hold for ESBs? Let's take a look at the modern IT landscape and how ESBs fit in.

#### **The role of service connectivity in the modern IT landscape.**

In a modern IT landscape, service development has shifted to an API-first approach. We are no longer in the SOA world, and APIs have become much more standardized in terms of protocols.

Furthermore, modern API development has shifted to a spec-first approach. This means that teams wishing to consume and integrate a particular service no longer need to wait for it to be developed before working on their own application. With the technical contract already in place, development can happen in parallel.

IT is moving towards separate and distributed teams. As organizations continue to pursue agility and innovation, small development teams require increasingly greater amounts of autonomy.

Organizations are no longer solely on-premise or cloud-only; instead, they are working with hybrid and multi-cloud environments. There can no longer be integration points that function only within a specific environment; these integration points must be able to span multiple types of environments.

#### **Challenging old ways of connecting via ESB.**

Finally, the move towards microservices is fundamentally at odds with the traditional monolithic ESB. By dividing the ESB monolith into multiple focused services, it retains many of the advantages while increasing flexibility and agility.

With an understanding of ESBs and the changes occurring in the modern enterprise, it's time to look at a new integration model: the API gateway.

[![AI Governance](/wp-content/uploads/2024/10/Integracao-de-APIs-com-IA_-Playbook-para-uma-Governanca-Responsavel.png)](https://materiais.vertigo.com.br/ebook-integracao-de-apis-com-ia-playbook-para-uma-governanca-responsavel)

## **The API gateway**

### **What is an API gateway?**

It is a component of modern infrastructure that mediates between customers and services, acting as a single point of entry for customers. This contrasts with an ESB, which handles all communication between services.

Similar to ESBs, API gateways serve to connect different services and integrate this information. However, with the emergence of APIs, connectivity has become more focused.

### **Changing from service-first (ESB view) to API-first.**

APIs provide the standardized contract that was missing in the SOAP environment. In their original form, ESBs were a technical solution to an old standards problem, and with the advent of spec-first API development, the contract between the client and the service no longer needs to wait for the service to be developed, further decoupling development teams.

Furthermore, this approach focuses on business requirements, prioritizing results and customers, rather than simply putting together a spec for a back-end system. API-first design leads to better reusability and relevance of business-driven "products".

### **Why is API management so important for the modern enterprise?**

With the advent of microservices-based architectures, the number of services to manage and oversee has increased dramatically. This is where API management comes into play: it simplifies this oversight task for you by considering the entire API lifecycle – design, documentation or a developer portal, deployment, discovery and connectivity to an API gateway, and other details.

### **What is the function of an API gateway?**

An [**API gateway**](/en/kong-dominate-apis-with-api-gateway-giant/) simplifies the task of connecting to any API. It handles secondary concerns such as authentication, logging, and monitoring. Furthermore, it can also manage orchestration to reduce round trips. Finally, an API gateway can provide the correct API to each client.

### **What benefits does an API gateway offer?**

Now that we have a general understanding of what an API gateway is, let's take a closer look at its benefits and use cases.

#### **1) Leaner microservices**

First, API gateways allow for the centralization of common functions to reduce overhead. Instead of reinventing the wheel with each service, secondary concerns such as authentication, logging, and monitoring can be handled at the gateway level. This makes each service leaner and reduces development time, allowing developers to focus on the real business logic and competitive advantage of each service. It also decreases the overall system complexity, as these secondary concerns can be implemented once at the gateway.

#### **2) Decoupled customers and services**

API gateways also decouple clients from the implementation details of services. This allows for the orchestration of multiple microservices into a single client API. Similarly, different clients can receive different APIs tailored to their needs, in a variation of the "back-end to front-end" pattern.

#### **3) API Discovery**

API gateways serve as a natural place to discover APIs. This accelerates the development of new clients and functionalities. A developer portal working alongside an API gateway promotes the adoption and reuse of APIs, ensuring they are highly discoverable, well-documented, and easy to consume.

#### **4) Reduction in the number of requests required**

API gateways can also improve performance by reducing the number of requests and round trips required for a given API call. Through orchestration, multiple API calls on the backend can be aggregated into a single round trip from the client to the API gateway and back. This can improve the user experience.

Through caching, [**API gateways**](/en/API-governance%3A-how-to-ensure-high-availability-and-cost-reduction-of-your-services./) can determine which requests can receive cached responses with recent data, thereby reducing unnecessary load on services.

#### **5) Registration, monitoring and analysis**

Due to its role as a customer service intermediary, the API gateway is well-positioned to provide logging, monitoring, and analytics data. Again, this is similar to an ESB, although ESBs provide this for all service-to-service communications. API gateways do this only for requests between the client and themselves.

#### **6) Consistency through plugins**

An API gateway can handle providing more consistent governance, [**security, and observability**](/en/DevSecCops-in-API-Development%3A-4-Digital-Security-Tips-for-Your-Application/) practices , and address all other secondary concerns. This is most easily done through plugins and policies applied at the gateway level. The aspects that an API gateway manages include:

- Authentication and authorization
- Traffic control and shaping
- Request and response transformation
- Safety
- Logging
- routing

### **How do API gateways compare to ESBs?**

When comparing API gateways with ESBs, the similarities are clear. Both solutions occupy a similar place in the architecture: the centralized intermediary for communication with services. However, API gateways offer advantages, as well as a more modern approach to achieving those advantages.

The main advantage is that API gateways have a clear scope. ESBs were conceived as the ultimate solution for communication between all applications and services. As they grew in this role, additional features were added, allowing rules and business logic to be incorporated into the system. Thus, the ESB became very convenient; what began as a project to reduce system complexity evolved into a massively complex system of its own.

On the other hand, API gateways play a more focused role. First, a gateway is not responsible for protocol transformation and negotiation. As [**API standards**](/en/How-to-reduce-high-computational-demand-with-API-gateways./) have matured, the API gateway can be leaner than an ESB, focusing specifically on secondary issues. Furthermore, the gateway is primarily focused on client-to-service communication, rather than all service-to-service communication.

Once again, this focus allows it to remain lean and specialized.

This specific scope allows gateways to avoid being overextended, so they don't become another monolith to be broken. When selecting an API gateway, it's important to find a product with a clear identity rather than an extensive feature set.

In contrast to the centralized and highly coupled nature of ESBs, API gateways enable decentralization and distribution. This aspect empowers both types of companies—those migrating to the cloud and those adopting a hybrid approach.

### **When should you use an API gateway?**

API gateways are a good option for modern businesses focused on evolving faster and enabling innovation. Let's understand why organizational culture is important for this.

[![API X Service Mesh](/wp-content/uploads/2024/10/Infografico_Diferenciando-API-Gateway-de-Service-Mesh_BANNER_INTERNO.png)](https://materiais.vertigo.com.br/infografico-diferenciando-gateway-de-api-e-service-mesh)

### **Why is the right culture so important for the modern company?**

In the modern company, the focus is on increasing agility and fostering innovation. This is achieved through distributed teams with independence and the ability to perform their work. In general, the shift to decentralization is not only technical but also cultural. Thus, selecting the right tool for the job becomes fundamental – not only for its technical specifications but also for its alignment with the culture the company wishes to promote.

ESBs fail to meet this standard because they are large, centralized monoliths, leading to increased coupling between teams and decreased independence. On the other hand, API gateways, thanks to their scope specificity, allow teams to focus on their individual tasks. By handling secondary concerns, API gateways enable teams to be leaner and more specialized.

API gateways—with developer portals—also promote a design-first approach to APIs and a discovery-driven consumption approach. By providing the right API for each client, API gateways can enable greater adoption, reuse, and speed of interaction.

This also facilitates the consumption and discovery of APIs across the organization and enables the use of no-code or low-code tools. Again, the focus is on empowering independent teams, rather than coupling them to the API gateway team itself.

### **How to select an API gateway in 4 steps?**

When considering adopting an API gateway, the selection is critical, involving several criteria to be considered.

#### **1) Implementation complexity**

First, consider the gateway's technical requirements. How many components need to be configured to achieve a minimally viable installation? Many require the configuration of an additional database.

The initial complexity of deployment is also relevant when considering future maintenance requirements. Your deployment complexity also depends on your infrastructure approach: will your systems be in the cloud, on-premise, or hybrid? Will you leverage container orchestration platforms like Kubernetes?

#### **2) Proprietary versus open source**

Consider the platform's extensibility, as well as the likelihood of long-term support. Introducing an API gateway into your environment is a significant architectural change that affects many teams, and it's not something you want to be forced to change.

#### **3) Ease of climbing**

Since the API gateway will be on the critical route for every client-service interaction, scalability is paramount. Consider your growth plans and whether the API gateway can scale horizontally and vertically. Scale management is best achieved by providing support for modern, orchestrated, and declarative approaches such as Kubernetes.

#### **4) Set of resources**

An API gateway should, at a minimum, support the entire API lifecycle. Beyond that, however, whether or not an API gateway has more features should be a secondary concern. As we saw in the ESB journey, increased scope and excessive features lead to a less effective product.

Carefully consider the API gateway's function and look for a product specifically focused on fulfilling that function, regardless of the size of its feature set.

### **API Gateways in Modern Enterprise Architecture**

In modern API-first enterprise architecture, API gateways are a purposefully made fit. The proliferation of microservices means there are an infinite number of services that need to be identified, discovered, documented, protected, controlled, and secured. API gateways provide an anchor and a point of reference that allows clients to interact with numerous services in a manageable way.

By avoiding the monolithic nature of ESBs, API gateways also provide some efficiencies similar to centralization, allowing your microservices teams to operate in a faster and leaner manner.

An API gateway allows development teams to focus more, increasing their independence and speed.

Finally, by avoiding the centralization of business logic, API gateways allow this logic to be distributed closer to the services that require it. This, again, increases the team's independence.

[![5 questions for an API gateway](/wp-content/uploads/2024/10/5-perguntas-para-fazer-ao-seu-fornecedor-de-gateway-de-API.png)](https://materiais.vertigo.com.br/ebook-5-perguntas-para-fazer-ao-seu-fornecedor-de-gateway-de-api)

### **Putting it all together**

Now that we have a clear understanding of ESBs and API gateways, let's put it all together. Perhaps you already have an ESB and are considering adopting an API gateway, or perhaps you're already introducing an API gateway into your architecture. How do you proceed from here?

#### **The power of ESB + API gateway for the modern enterprise.**

The journey of the modern enterprise involves moving toward agility and rapid innovation to delight the customer. By increasing the independence of teams and allowing them to remain lean and focused, this journey is possible. To do this, IT organizations must become technically heterogeneous and diverse, rather than homogeneous.

They must adopt the best solution for each case. This requires diversity in solutions and technical approaches. After all, changing direction is multifaceted. Here are some examples:

- On-premise or cloud-only → Hybrid and/or multi-cloud environments
- Centralized → Distributed
- Monolithic architecture → Microservices
- Servers → Serverless; roles; Kubernetes; containers
- Organizational languages ​​→ Multilingual teams and organizations

With regard to integration platforms, the focus should now shift to APIs. Connectivity is the new competitive battleground, and API gateways are a solution specifically designed for this purpose.

In most situations, a gradual hybrid approach is the best starting point. Begin by implementing an API gateway with new APIs and slowly bring in more services as opportunity and time allow. Over time, this gradual approach will break down the ESB monolith. Take advantage of this to extract the business logic within the ESB and distribute it across new microservices.

The goal is not necessarily to completely replace the ESB, as it still has a place among legacy services that may never be updated. However, the focus is on removing the ESB from the critical path for new development.

Furthermore, focus on these new APIs and the API management capabilities unlocked by the gateway. Generate value through connectivity, and the underlying implementation should naturally shift to the location with the most value.

#### **The long-term perspective**

Every IT business should focus on generating value for the customer more than any specific implementation. This is because business needs will evolve and change over time. The systems you connect to and the data you consume will also change.

However, in the medium term, API contracts will become more long-lasting, creating business-level dependencies upon them. Thus, focusing on API connectivity will generate value for the modern enterprise.

## **References**

This ebook is a translation of the [**original ebook**](https://konghq.com/resources/e-book/esb-vs-api-gateway#ebookpdf) written by the Kong team.

To access other Kong content and implement API integration within your company, [**contact**](/en/us/) the Vertigo Tecnologia technical team. We're ready to help!
