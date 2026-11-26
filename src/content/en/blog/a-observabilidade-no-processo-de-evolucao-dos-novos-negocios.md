---
title: "Observability in the process of new business evolution."
slug: "a-observabilidade-no-processo-de-evolucao-dos-novos-negocios"
date: "2020-08-28T16:42:48"
modified: "2020-08-28T16:42:48"
status: "publish"
author: "admin"
excerpt: "The rapid growth of applications with microservices architectures and cloud distribution has required observability to gain prominence in recent years, despite not being a new concept. More than just worrying about availability, observability is about data exposure and easy access to information. This is extremely important when there is a need to visualize how interactions […]"
categories: ["observabilidade"]
tags: ["monitorar-performance", "observabilidade", "ti-moderna", "ti-tradicional"]
featuredImage: "/wp-content/uploads/2020/08/01-Observabilidade_blog.png"
wpId: 5128
originalUrl: "https://vertigo.com.br/a-observabilidade-no-processo-de-evolucao-dos-novos-negocios/"
contentSource: "rest"
lang: "en"
seo:
  title: "Observability in the process of new business evolution - Vertigo"
  description: "Observability is an important concept for those working in IT infrastructure, but especially for teams that deliver software releases."
  canonical: "https://vertigo.com.br/en/a-observabilidade-no-processo-de-evolucao-dos-novos-negocios/"
  ogImage: "/wp-content/uploads/2020/08/01-Observabilidade_blog.png"
  robots: "index, follow"
---

The rapid growth of applications with microservices architectures and cloud distribution has required observability to gain prominence in recent years, despite not being a new concept.

More than just worrying about availability, observability is about data exposure and easy access to information. This is extremely important when there is a need to visualize how interactions between microservices are performing: how they fail, when they don't occur as expected, or when they shouldn't occur at all.

Monitoring is fundamental to gaining a general understanding of the health of systems, but observability goes further and aims to provide relevant data about the behavior of applications. Observability is the ability to infer internal conditions of a system based on its external outputs.

## Resilience and the challenges of traditional IT.

The traditional IT model was designed to support systems, seeking their stability and availability, with applications built in a centralized manner. However, this model has several weaknesses and makes implementing changes very difficult, something that is almost essential today.

In this management model, which seeks to maintain an extensive and almost static CMDB (Centralized Management Database), a lot of energy is spent anticipating problems and acting only if all the consequences are mapped out and if there is someone to blame when these failures occur.

Of course, problems always arise, right? After all, a model that stifles change causes it to happen in blocks, under untested and untestable conditions, and within publication windows where people are less available.

Therefore, delivering a software release in a traditional IT management environment is always unpredictable and prone to recurring failures, which in turn leads to decisions that worsen the situation, creating a vicious cycle that is difficult to break. 

However, over the past few years, the technology field has been changing at an astonishing speed, and various tools and approaches have emerged on the market with the purpose of assisting in the construction of more optimized and, above all, resilient architectures. 

And the resilience of a modern system is guaranteed by the volatility of its parts: ubiquitous technology stacks (such as [Kubernetes and containers](/en/Docker--Kubernetes--Mesos--container-orchestration./) ) enable low-cost strategies that work to simplify the automation of many routine tasks.

In this context, the role of IT becomes that of providing platforms where product teams can have complete control, visibility, and shared responsibility for their deliverables. This allows them to work within secure boundaries, but on a completely "self-service" journey. That's where observability becomes important. 

## Observability as a solution 

Observability is a very important concept not only for those working in IT infrastructure, but especially for product teams that deliver software releases. It allows us to identify problems that show us how application services are interacting and communicating with each other. In an environment with continuous delivery pipelines (ubiquitous where DevOps practices and culture exist), this means that whoever delivered a change can immediately track its result, compare it with the expected behavior, and, if necessary, revert it.

Ultimately, the entire chain, from code commit, through build and testing in the pipeline, and ending with the eventual release delivery, needs to be monitored, managed, and controlled. Only in this way, if any failure occurs, can the *author of the change* intervene to determine its cause and correct it as quickly as possible.

### The deception of the three pillars of traditional IT.

Traditional IT monitoring typically relies on three pillars: 

1.  **logs:** Textual records of activities that occurred at a given time. This activity could be from your application's servers or an action triggered by a user, for example. They are a good way to help resolve problems that the developer is able to foresee, but not prevent.
2.  **Metrics:** These are values ​​measured periodically that show the total or percentage of functional failures in your application or servers. By building time series of this type, you learn about the behavior and health of the systems.
3.  **Tracing:** Traces are a way to track the entire execution flow of a distributed system. Each trace has an identifier and a timestamp. When well implemented, a distributed tracing strategy provides insight into the dependencies and behavior of a system at runtime, as well as revealing how outdated the CI (Content Component) registration in the CMDB (Computer-to-Database) is.

![](/wp-content/uploads/2020/08/Sem-titulo-768x468-1.png)

However, this data is collected and analyzed in a completely disconnected way and with separate tools. Traditional IT disregards all context of the event and relegates to "the reader" the practically impossible task of reconstructing the circumstances from this data.

Furthermore, we encountered some problems with these elements, such as: 

- While it's possible to standardize and structure your logs, little can be done for third-party code log outputs. Therefore, in practice, we generally receive little qualified information from logs;
- Logs can be scattered across a considerable number of files with particular rotation and formats. Therefore, adjusting a collection configuration that includes all relevant logs is a challenge in itself, as is figuring out which log sources should comprise a collection relevant to troubleshooting in a distributed system.
- The cost of handling logs can increase significantly over time, and stories of the annual budget being consumed in a single month are very common.
- If viewed as tasks assigned to operations teams, the collected metrics will only be for hygiene purposes, contributing very little to understanding the behavior of the systems themselves, at most serving as an alert for some degradation or unexpected spike;
- Metrics lack additional context. Therefore, they are of little help in identifying the root of the problems they indicate.
- Tracing relies on sampling, and the available methods for selecting a sample are not always reasonable. To make matters worse, commercial tools that deliver quality tracing are often very expensive.

However, when we talk about observability, it is desirable that all this collected data be analyzed within the context of events, because logs, metrics, and traces, despite being essential components, lose almost all their value when dissociated. Thus, it is crucial to pursue models and solutions that preserve this value and not just the capacity to store a raw amount of data.

![](/wp-content/uploads/2020/08/qq-768x369-1.png)

## The path to business evolution 

An IT management model that prioritizes system stability and availability over responsiveness and value delivery represents a setback for any organization. It is imperative to pave the way for a *cloud-native* , responsive, observable, and resilient IT environment. The good news is that dynamic strategies exist, based on short-term actions with quick and measurable results, capable of driving this transformation without operational disruption.

With the transition to *cloud-native,* it is possible to significantly reduce the number of CIs (Computer Interactions) that must be maintained by traditional processes, creating new categories with automatic registration and approval in their lifecycle, or even CIs that are extremely volatile and disposable.

Implementing a culture that prioritizes shared responsibility for deliverables, greater visibility into system behavior, continuous improvement models, and the relentless pursuit of automation is at the heart of [DevSecOps](/en/devsecops/) practices , where testing and software release delivery are only part of the solution. Observability, therefore, becomes a critical component of modern IT.

Did you enjoy our content? Want to learn more about observability and how it can help your business? [Talk to one of our experts](/en/us/) ! We'd be happy to assist you.

### Assess the level of DevOps adoption and maturity in your company and understand its strengths, weaknesses, gaps, and opportunities for improvement.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/en/DevOps-maturity-index/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
