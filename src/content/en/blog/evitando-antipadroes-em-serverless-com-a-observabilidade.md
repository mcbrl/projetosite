---
title: "Avoiding anti-patterns in serverless architecture with observability."
slug: "evitando-antipadroes-em-serverless-com-a-observabilidade"
date: "2020-12-30T11:57:30"
modified: "2026-02-02T20:39:12"
status: "publish"
author: "admin"
excerpt: "Serverless applications offer opportunities that are transforming the way we think about cloud native development. The days of worrying about a complex and fragile cloud infrastructure are coming to an end. All these responsibilities are increasingly being delegated to a vendor, allowing you to focus on your business logic. However, as we place more responsibilities […]"
categories: ["observabilidade"]
tags: ["cloud-native", "observabilidade", "serverless", "serverless-container", "ti-moderna", "transformacao-cloud-native", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2026/02/evitando-antipadroes-em-serverless-com-a-observabilidade.png"
wpId: 5441
originalUrl: "https://vertigo.com.br/evitando-antipadroes-em-serverless-com-a-observabilidade/"
contentSource: "rest"
lang: "en"
seo:
  title: "Avoiding anti-patterns in serverless architecture with observability - Vertigo"
  description: "We analyze some of the key anti-patterns unique to serverless and describe how the right observability strategy can mitigate this impact."
  canonical: "https://vertigo.com.br/en/evitando-antipadroes-em-serverless-com-a-observabilidade/"
  ogImage: "/wp-content/uploads/2026/02/evitando-antipadroes-em-serverless-com-a-observabilidade.png"
  robots: "index, follow"
---

Serverless applications offer opportunities that are transforming the way we think about cloud-native development. The days of worrying about a complex and fragile cloud infrastructure are coming to an end. All these responsibilities are increasingly being delegated to a vendor, allowing you to focus on your business logic.
However, as we place more responsibilities on third parties, we relinquish control and the ability to observe. This leads to a black box situation, where we become unaware of how and why our serverless architecture behaves in a certain way. This makes it more difficult to detect anti-patterns, which are certain patterns in software development that are considered bad programming practices.
New users of serverless are more susceptible to anti-patterns, so being unaware of or not understanding this effect can be frustrating, as it creates a barrier to adopting this type of approach.
The ability to observe mitigates this black box effect, and understanding potential anti-patterns allows us to monitor the correct metrics and thus take appropriate actions.
In this article we analyze some of the main anti-patterns unique to serverless and describe how the right strategy for [observability](/en/Why-observability-and-the-future-of-systems-monitoring/) This can lessen the impact. Happy reading!

## Use synchronization.

As teams and companies begin to adopt serverless architecture, one of the biggest mistakes they can make is designing their architecture without a monolithic mindset. This leads to the introduction of controller functions and the loss of wait functions. As a result, the idle function will also be charged because it is still technically active. This goes against the principle of serverless partitioning.
This problem is even more evident when functions are chained. This is the process by which one function makes an asynchronous call to another function, waiting for a response, while the second function performs a read/write operation on a storage service. This increases the possibility of unreliability, as the first function may time out. This is even worse when functions make calls to local storage devices or devices outside the vendor's ecosystem.

## What do we need to look out for?

The visible effects of an antipattern are potentially higher costs and a greater likelihood of timeout. Therefore, the first step is to keep an eye on it.
Depending on your monitoring tool, the process can become more efficient by setting up alerts on these metrics. For in-depth analysis, investigating the widespread traces of your application can lead to better-informed insights. This is because, as the transition to microservices occurs, the system itself becomes distributed.
Thus, the [observability](/en/Observability-in-the-process-of-new-business-evolution./) This facilitates a more holistic approach, in which each transaction flow must be tracked. An error or delay in a service can be caused by upstream, downstream, or both.

## Is sharing necessary?

There are scenarios where libraries, business logic, or even codebases need to be shared between functions. This, however, leads to a form of dependency and coupling that goes against serverless architecture.
The most frequent pitfall resulting from this is that scalability becomes difficult to achieve. Because the scale of your systems and functions constantly depends on each other, there is a greater risk of errors, downtime, and latency. As a result, an anti-pattern for the serverless scalability property is created.
One example where such problems arise is in machine learning, when large libraries need to be shared among various functions used to process test, validation, and training datasets.
In most cases, the need to share code and logic libraries not only creates an anti-pattern, but also a technical limitation for serverless functions.

## What do we need to look out for?

If the intention is to share information and couple serverless functions, no preventative measure solves the problem. In this case, it becomes imperative to measure the effects of the architectural configuration. If one of the functions experiences latency, this can have a cascading effect on all other coupled functions.
Generally, the entire architecture should be mapped. Being aware of how the cloud-native architecture is being developed is the only way the problem can be effectively avoided.

## Granular functions

By dividing large, compact businesses into smaller, independent functions, there is a possibility of reaching a level of granularity that may eventually prove detrimental.
The need to communicate events between individual functions leads to thinking about [APIs](/en/best-security-practices-for-using-APIs/)In other words, an increase in engineering efforts, security risks, and latency. 
In these times when concerns multiply as the number of tasks increases, we utilize our solution of **Systems Integration & API Management** in our clients' projects. 
The concept is simple: integrate your company's processes, organize your data, and make it available for other people or companies to use. In other words, create a new business within your business.
As one of Kong's main partners in Brazil, we are prepared to connect your ecosystem of clients and partners, allowing your IT department to exchange information with your audience in a much easier, faster, and more secure way. Furthermore, see the other benefits of starting the integration of your systems and your API strategy:

- Faster mobile applications;
- New sources of revenue;
- Monetizing your digital business;
- Traceability.

## What do we need to look out for?

Architectures, in general, can become extremely complicated as your system grows. Therefore, the first thing to look for when starting to adopt serverless is a map of your system's architecture.
Another sign of overly granular architectures is when serverless functions start generating a lot of communication. The communication overhead and unnecessary calls mean more engineering complexity and potentially higher costs. 
Furthermore, as mentioned, the shift from a monolith to microservices and eventually to a serverless architecture results in the need for communication infrastructure. Therefore, it becomes necessary to monitor the payload of the data being sent between these channels.

## Conclusion

The truth is that serverless is growing, but not without its own pitfalls. There are several best practices for avoiding anti-patterns. However, the ultimate solution is to combine them with observability. Those who adopt this approach need to be aware not only of the possible anti-patterns, but also of what to monitor.
Observability is still a developing area. A specialized monitoring tool is needed to achieve true observability according to the three pillars of "metrics," "traces," and "logs." To learn more about how this methodology influences Modern IT and the Digital Transformation process, we suggest you read our Whitepaper “[Resilience and Observability](https://materiais.vertigo.com.br/resiliencia-observabilidade?_fs=cb445e0d-89fc-4623-8fbe-72abea1c06ea)".
Did you enjoy our content? Would you like to know how to introduce the concept of observability into your company? [Talk to one of our experts](/en/us/)We'll be happy to help you.

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/en/cloud-native-assessment/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
