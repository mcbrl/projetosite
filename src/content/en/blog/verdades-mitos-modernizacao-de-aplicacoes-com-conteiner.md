---
title: "Modernizing Applications with Containers – Myths and Truths"
slug: "verdades-mitos-modernizacao-de-aplicacoes-com-conteiner"
date: "2018-07-02T18:24:14"
modified: "2026-02-02T20:43:50"
status: "publish"
author: "admin"
excerpt: "DevOps, containers, and microservices are taking over the development field, just as software is dominating the world. But with the explosive growth of these technologies and methodologies for application modernization, it's becoming increasingly difficult to separate truth from falsehood. This is especially true when it comes to container security. If you're not yet familiar with […]"
categories: ["blog", "devops"]
tags: ["conteineres-docker", "conteinerizacao", "docker", "modernizacao-de-aplicacoes"]
featuredImage: "/wp-content/uploads/2026/02/verdades-mitos-modernizacao-de-aplicacoes-com-conteiner.png"
wpId: 2548
originalUrl: "https://vertigo.com.br/verdades-mitos-modernizacao-de-aplicacoes-com-conteiner/"
contentSource: "rest"
lang: "en"
seo:
  title: "Modernizing Applications with Containers - Myths and Truths"
  description: "The explosive growth in the use of containers and other methodologies for application modernization is making it increasingly difficult to separate fact from fiction. Our content explores the full potential of this incredible technology."
  canonical: "https://vertigo.com.br/en/verdades-mitos-modernizacao-de-aplicacoes-com-conteiner/"
  ogImage: "/wp-content/uploads/2026/02/verdades-mitos-modernizacao-de-aplicacoes-com-conteiner.png"
  robots: "index, follow"
---

DevOps, containers, and microservices are taking over the development field, just as software is dominating the world. But with the explosive growth of these technologies and methodologies for application modernization, it's becoming increasingly difficult to separate truth from falsehood. This is especially true when it comes to container security.

[If you're not yet familiar with the term "container," check out our article "What is Docker?", where we explain the concept.](/en/What-is-Docker/)

In this article, we will take a specific look at the myths regarding security and the opportunities that container technology presents for integrating a reliable environment at each stage of an application's lifecycle, which would be difficult to achieve without packaging technology.

The facts you're about to see are essential for anyone thinking about modernizing their applications through agile methodologies like DevOps. These are crucial tips for anyone looking to boost their operations.

[Check out our article if you still don't know what DevOps is and understand everything about the methodology.](/en/What-is-DevOps/)

## **Myth 1: Containers are unsafe.**

Containers are, in fact, a security tool that offers more methods to protect your applications. They improve application isolation and provide faster and more secure mechanisms for software patching compared to traditional systems like Virtual Machines.

The stark reality is that containers inherently have a much smaller attack surface than the alternative of delivering via VMs. When compared to the traditional JEE application server delivery model, the security improvement is calculated in orders of magnitude.

Furthermore, container platforms can have certain security features and processes integrated. Well-designed and delivered containers follow the principle of least privilege, where isolation is established by default to limit access to only the necessary resources.

Restricting the container's visibility to the outside world and limiting its communication with unnecessary resources makes least privilege orchestration a way to protect containers and applications.

## **Myth 2: Containers need additional security to protect applications.**

Before purchasing additional security, examine your container solution. The question worth asking is:

"Does your solution guarantee security throughout the application lifecycle?"

Integrated security should be an essential component of a container platform. It needs to offer protection for most use cases.

You won't want to budget for a security solution if your current container platform already meets those needs. Furthermore, nobody wants the hassle of trying to incorporate a piece of software into their technology *stack* . After all, this can disrupt the development flow and result in operational overhead.

Most secure container platforms handle seccomp profiles by default and facilitate the use of Linux Security Modules and Kernel security features. By using these features and policies that block applications, it is possible to mitigate many attacks.

If you still have doubts after leveraging the native security features of the entire container solution, then considering additional security from other tools may be the logical next step.

## **Myth 3: I need to change my applications to achieve modern security.**

Containers accelerate the development, deployment, and modernization of applications by making security updates, upgrades, and vulnerability patches quick and easy to implement. This is possible without altering the underlying nature of your existing applications. You don't need to adapt your applications' special APIs, libraries, or user interfaces (UI).

A good example of this is how containers facilitate data protection using intuitive functionalities. We can cite encrypted overlay networks, which hide and protect communications between containers. There's no need to modify applications to take advantage of this standard feature.

Security scanning and image signing provide another example. Companies want *a* security approach that doesn't hinder the development process. With security, verification, and image signing, companies can be confident knowing that images are verified and free from known security vulnerabilities. These signing policies prevent untrusted content from being deployed without affecting workflow.

One of the biggest benefits of containers is the added security. It can be included as a wrapper around an application, without the need to modify its source code. Add to that the built-in security features that come with a container platform, and organizations will have the resources to keep their applications secure.

A simple tool, such as image verification, would have detected the Equifax data breach. The incident compromised the confidential information of more than 140 million consumers.

## **Myth 4: All containers are the same.**

Not all containers are created equal. A strong security posture is necessary, using standard profiles and runtime security policies as application armor. Ensure you are using a container platform that takes this into account and establishes a secure lifecycle. This way, you know the provenance of the base container images (or "golden images"). This ensures a reliable foundation for every application you develop.

It's important to keep in mind that trusted images are pulled from private registries. They are authenticated because this allows verification of the source and their security through certificates, signatures, and trust analyses. By scanning your base image repository, you can verify compliance with regulatory requirements and ensure the security of container images before you promote them to production.

## **Myth #5: Containers are less secure than Virtual Machines**

The truth is that well-designed containers are much more secure than VMs. Vendors and developers create containers to package applications, adding a layer of security. It's much simpler to implement read-only environments with containers than to try to impose limitations on VMs. This type of environment wards off many types of attacks, such as the Panama Papers, which recently gained a lot of attention.

## **Myth #6: Compliance is difficult with containers.**

Compliance is easy with containers. They use policies that allow for the predetermination of an infrastructure that can be easily audited. These policies can be applied and reviewed across machine clusters, scaling audit resources and visibility. Furthermore, containers enable policy-based automation of access control rules that meet industry and government regulations.

It is through these policies that organizations can enforce the security of base images, supplying private repositories with verification, regardless of scale. You can promote containers and production applications aligned with regulatory compliance. This approach eliminates human error and open vulnerabilities that could lead to non-compliance.

## **Dispelling the myths**

As we have shown, the notion that containers are insecure is far from the truth. Organizations want the Holy Grail when it comes to security. They seek integrated protection features that address every stage of the application lifecycle. All this without negatively impacting developer workflows.

A container platform can help achieve this goal by protecting containers and applications by default, limiting access to the host system using native Linux seccomp directives. Furthermore, it can provide additional capabilities such as secret management, role-based access control (RBAC), and image verification.

As more companies adopt container platforms, we reach a consensus that the technology presents a unique opportunity to strengthen security throughout the application lifecycle. This allows for the creation of a strong governance model.

That's why many companies that work with personal and sensitive data use [Docker Enterprise Edition](/en/docker/) to build a progressive trust workflow for their application development process.

This content was translated and adapted from the [CSO blog](https://www.csoonline.com/article/3272830/containers/fact-vs-fiction-6-myths-about-container-security.html) . We are always producing and bringing relevant content like this to our page. How about receiving it directly in your email as soon as it's released?

Subscribe to our newsletter! Simply enter your email address in the footer of our page.

We hope to see you soon. Bye!
