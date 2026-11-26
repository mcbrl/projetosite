---
title: "How to implement Self-Healing in Kubernetes"
slug: "como-implementar-self-healing-no-kubernetes"
date: "2023-06-01T16:07:50"
modified: "2026-02-02T20:37:05"
status: "publish"
author: "admin"
excerpt: "During a long 25 year journey in the development industry, ranging from systems programming to team leadership, I observed that some events never ceased to be recurring and harmful to the entire software production chain. If you've been in this market for a while, you've probably noticed that systems fail frequently. From simple office software […]"
categories: ["kubernetes"]
tags: ["kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/como-implementar-self-healing-no-kubernetes.png"
wpId: 162106
originalUrl: "https://vertigo.com.br/como-implementar-self-healing-no-kubernetes/"
contentSource: "rest"
lang: "en"
seo:
  title: "How to implement Self-Healing in Kubernetes - Vertigo"
  description: "Learn how to implement Self-Healing in Kubernetes and gain the ability to self-restore your pods. Read more on our blog."
  canonical: "https://vertigo.com.br/en/como-implementar-self-healing-no-kubernetes/"
  ogImage: "/wp-content/uploads/2026/02/como-implementar-self-healing-no-kubernetes.png"
  robots: "index, follow"
---

During a long 25-year journey in the development industry, ranging from systems programming to team leadership, I observed that some events never ceased to be recurring and harmful to the entire software production chain.

If you've been in this market for a while, you've probably noticed that systems fail frequently. From simple office software running on a laptop, to a financial transaction system on a large server, or even your car's electronic fuel injection system, all are subject to failure.

Accepting and understanding that systems can fail, and that this will eventually happen, is the first step in learning how to effectively manage the entire structure necessary to keep the business running.

To keep the article focused, we will concentrate on systems that run on servers, such as those responsible for banking operations, purchasing products or services, among others.

About 20 years ago, I used to oversee the deployment of systems on Windows NT servers and even mainframes. Over the decades, we have had powerful tools at our disposal, such as stable and easy-to-use Linux servers, containers, and orchestrators (like [Kubernetes](/en/how-to-use-custom-metrics-in-kubernetes-horizontal-pod-autoscaler-hpa/) ).

However, it is not uncommon to find IT teams still adopting behaviors similar to those of the distant past, such as: **observing and containing damage**.

## Tell me how familiar these types of events are to you:

- Opening support tickets to revive a system or even a server that is no longer operational.

- Maintain an on-call team during the early morning hours and weekends in case of any platform shutdowns.

- Summon participants to a war room to urgently restore a backup from a damaged server.

I fully understand how **exhausting** this makes the daily lives of teams , how much **dissatisfaction** it generates in business areas, and especially among the end user.

Low-availability platforms not only limit a company's growth, but can also lead to serious **losses**.

Constant doubt regarding the effectiveness of your work and your team begins to surface frequently, gradually undermining the company's **confidence** in you, as there seems to be a complete lack of control over this situation.

## Empower your applications for self-healing: the power of Self-Healing

I know that if you're reading this article, it's because you're a great professional and you're looking to better understand what's happening in your environment. I'm sure that the infrastructure to support all the necessary requirements has been efficiently designed by you and your team.

Including observability tools in this environment will be beneficial for identifying and predicting scenarios. However, they still depend on manual and traditional actions from your team to be effective.

We have already accepted that it is not possible to have total control over the behavior of your applications.

So what do you think about teaching these applications to recognize when they are not feeling well and to request assistance, just like an injured player in a football match asks to be substituted? Or empowering them to protect themselves from potential harm and even take care of themselves, administering their own medication, before their **condition worsens**?

Believe me, **this is entirely feasible , and I'm about to share with you this strategy for keeping** **Vertigo** 's client applications always available without the cost of an on-call team, simply by using [Kubernetes](/en/Implementing-microservices-with-Kubernetes%3A-creating--testing--and-sharing-Helm-charts---Part-2/).

**Self-healing** is the ability of an environment to automatically correct and prevent failures, ensuring the availability and reliability of its applications.

Kubernetes uses several strategies to ensure the integrity of applications in its environment using **self-healing** , such as those I refer to below:

- **Validating integrity**When a container detects that it is not operating healthily, and its self-correction attempts are ineffective, it notifies Kubernetes that it needs to be removed and requests its replacement with a new instance.

- **Avoiding damage**If an application receives requests without having all its technical and business dependencies met, it may experience failures and generate data inconsistencies. Kubernetes allows the container to only open network traffic when these dependencies are met.

- **Modifying the environment**If a container fails on a particular node, Kubernetes may restart it on a different node in an attempt to provide a more favorable environment for its operation, with more available memory and less processing contention, for example.

- **Creating replicas and climbing**Based on resource usage metrics, Kubernetes automatically creates new replicas of a container to meet unforeseen demand, scaling this number up or down.

- **Avoiding known problems**It is possible, through Kubernetes scheduling, to create routines for checking for common problems and acting before an interruption occurs. For example, if a volume is nearing its available space limit, automatic storage expansion is possible.

**Discover how to teach your application to communicate with Kubernetes and request assistance whenever necessary, ensuring its integrity.**

It is evident that we possess highly effective strategies to reduce application downtime and interruptions in your environment. In this article, we will explore in a practical way the implementation of the two strategies that I consider the most relevant:

## Validating integrity and preventing damage.

The entire Kubernetes environment where an application runs needs to receive constant information about the health and availability of its services. This information enables actions such as the **automatic replacement of a compromised replica** and the **release of request routing** for that application.

## What is needed to implement these solutions?

**1 – Notify the orchestrator that the application is healthy (Liveness)** – the online components and integrations must be operational;

**2 – Notify the orchestrator if the application is ready to receive requests** – all business dependencies and available processing capacity must be operational.

![Kubernetes](/wp-content/uploads/2023/06/notificando_kubernetes.png)

**To implement this solution, we will use a simulation of three applications:**

The **\`api-internet\`** is the main application in our demonstration. For it to understand that it is healthy, it needs to frequently check if the **\`servico-de-persistencia\`** application is operational and that its integration with it is active. Otherwise, it will understand that it is not healthy and will request Kubernetes **to replace** it in an attempt to **correct** this communication failure.

Being healthy is not enough to maintain the integrity of the application and its data. All **business** components must also be operational. To ensure this, the **internet-API** will only open network traffic and receive new requests when it determines that the **business-service** application is operational. Otherwise, it will close network traffic, preventing the overload of operations it cannot handle.

The following steps will facilitate and guide our understanding of how to construct this scenario:

The api-internet application will implement and provide **two entry points to its API** , which in turn will validate the following scenarios:

**1 – Application Health** – Checks if communication with the module responsible for persistence is operational. This can be verified by validating the integration with the **persistence-service** application . Otherwise, it will request Kubernetes **to replace** itself in an attempt to re-establish this connection.

**2 – Ready to meet business needs** – If communication with the module responsible for providing information to operationalize the business is available. This is possible through validation of the integration with the **business-service** application . Otherwise, the application will remain healthy but with the request flow closed to avoid overload and possibly the generation of inconsistent data, since it cannot meet business needs.

To illustrate this entire scenario, I have already made an example with these three applications available on **Github** and **Docker** **Hub** , where you can understand in practice how this process is configured.

The links to these repositories are below:

**Github** : [https://github.com/Vertigo-Learn](https://github.com/Vertigo-Learn)

**Docker Hub** : [https://hub.docker.com/search?q=vtglearn](https://hub.docker.com/search?q=vtglearn)

I'm going to show you how we set up this communication between the **api-internet** application and **Kubernetes**.

The following example assumes that the **api-internet service deployment is of the** **deployment** type , and configures **Liveness** and **Readness** . The checks will be recurring and at 30-second intervals.

Liveness will check the application's health using the **"how-is-my-health"** entry point **,** and **Readness will check if the application is ready to serve the business using the** **"can-serve-the-business"** entry point.

apiVersion: apps/v1 kind: Deployment metadata: name: api-internet-deployment labels: app: api-internet spec: replicas: 1 selector: matchLabels: app: api-internet template: metadata: labels: app: api-internet spec: containers: - name: api-internet image: vtglearn/api-internet ports: - containerPort: 7001 livenessProbe: httpGet: path: /hello/como-esta-minha-saude port: 7001 initialDelaySeconds: 15 timeoutSeconds: 30 readinessProbe: httpGet: path: /hello/posso-atender-ao-negocio port: 7001 initialDelaySeconds: 15 timeoutSeconds: 30

After installing the 3 applications with the configurations mentioned in this article, we will begin to perform tests and observe their behavior.

![](/wp-content/uploads/2023/06/kubernetes2.png)

**1 – Remove the persistence-service** application from our environment, simulating that it is unavailable. This is possible using this command:

$ kubectl scale deploy servico-de-persistencia-deployment --replicas=0

2 – Now note that in a few seconds the **api-internet application** will request a reset from Kubernetes, increasing the number of restarts recorded:

![](/wp-content/uploads/2023/06/kubernetes3.png)

3 – Reapply the **persistence service** , making it available again. This can be done using this command:

$ kubectl scale deploy servico-de-persistencia-deployment --replicas=1

4 – Note that the **api-internet** application has now started informing Kubernetes that it is healthy and has stopped requesting replacements, after 2 requests.

![](/wp-content/uploads/2023/06/kubernetes4.png)

**5 – Remove the business-service** application from our environment, simulating that it is available. This is possible using this command:

$ kubectl scale deploy servico-de-negocio-deployment --replicas=0

6 – Now observe that in a few seconds the **api-internet** application will close its network **traffic** , preventing new requests, but it will not request replacement because it is healthy; it simply cannot fulfill the business request.

![](/wp-content/uploads/2023/06/kubernetes5.png)

7 – Reactivate the **business-service** application , making it available again. This can be done using this command:

$ kubectl scale deploy servico-de-negocio-deployment --replicas=1

8 – Now observe that in a few seconds the **api-internet** application will open its network traffic, allowing new requests:

![](/wp-content/uploads/2023/06/kubernetes6.png)

The solution I presented is guaranteed to improve and increase the resilience of your environment, allowing you and your team to leave behind the traditional model of **observing** and **containing damage**.

The maturity of this process can be enhanced when it is possible to rely on the support of **experts** providing guidance on best practices and training internal teams.

*It's important to remember that a stable environment that can adapt to unforeseen events improves the user experience and ensures greater satisfaction and peace of mind for the professionals involved.*

## Implement Kubernetes with Vertigo Technology

For over two decades, Vertigo has been operating in the market, providing revolutionary solutions and contributing to the improvement of companies' results in different sectors.

Within our portfolio of collaborations, [Mirantis Kubernetes](/en/partnerships/Mirantis/) offers container-based solutions that can reduce costs and improve team efficiency.

Get in touch with our team of specialized professionals, clarify your doubts, and gain access to the most effective solutions to boost your company's projects.

*This article is authored by our DevOps Practice Leader, Carlos Aiello.*

![](/wp-content/uploads/2023/06/Assinaturas-site_Aielo.png)
