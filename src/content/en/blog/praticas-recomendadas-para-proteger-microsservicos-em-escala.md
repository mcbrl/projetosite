---
title: "Best practices for securing microservices at scale."
slug: "praticas-recomendadas-para-proteger-microsservicos-em-escala"
date: "2020-12-14T13:16:24"
modified: "2020-12-14T13:16:24"
status: "publish"
author: "admin"
excerpt: "DevOps culture is becoming increasingly widespread among companies, forcing them to plan for higher levels of interactivity, as well as evolve their security measures. Microservices, for example, can be deployed anywhere, regardless of where they are hosted, so they require an effective and scalable security strategy. Delivering security at scale becomes difficult for organizations migrating […]"
categories: ["microsservicos"]
tags: ["api", "arquitetura-de-microsservicos", "devops", "docker", "kong", "microservices", "microsservicos", "plataformas-digitais"]
featuredImage: "/wp-content/uploads/2020/12/microsservicos-3.png"
wpId: 5386
originalUrl: "https://vertigo.com.br/praticas-recomendadas-para-proteger-microsservicos-em-escala/"
contentSource: "rest"
lang: "en"
seo:
  title: "Best practices for securing microservices at scale - Vertigo"
  description: "A more established and experienced company will not necessarily have an advantage when dealing with the security or threat ecosystem of interconnected microservices."
  canonical: "https://vertigo.com.br/en/praticas-recomendadas-para-proteger-microsservicos-em-escala/"
  ogImage: "/wp-content/uploads/2020/12/microsservicos-3.png"
  robots: "index, follow"
---

DevOps culture is becoming increasingly widespread among companies, forcing them to plan for higher levels of interactivity, as well as evolve their security measures. Microservices, for example, can be deployed anywhere, regardless of where they are hosted, so they require an effective and scalable security strategy.
Delivering security at scale becomes difficult for organizations migrating their legacy systems to microservices, as these new challenges require an end-to-end action plan. Microservices architecture is a journey that will positively impact your organization in several ways – culturally, technically, and operationally.
A more established and experienced company will not necessarily have an advantage when dealing with the security or threat ecosystem of interconnected microservices. 
With that in mind, we've listed some best practices to help any company become more quickly familiar with microservices security. Keep reading our article and find out!

## Use API gateway

Many more complex threats begin at the access, authentication, or authorization levels. When an API for access is made available outside your organization, some form of gateway must be implemented for security purposes.
Whether using an approach *device-based* Whether using a smart reverse proxy or other means, all API calls must be inspected and authenticated. Furthermore, they must be properly evaluated so that only those meeting the desired criteria are allowed. And to ensure auditability, each transaction must be logged.
To ensure security in API-based projects, we use Kong Gateway, the world's most popular open-source API gateway. Built for multi-cloud and hybrid cloud environments, it is optimized for microservices and distributed architectures, offering the following benefits:

- Authentication; 
- Traffic control;
- Analytics;
- Real-time transformation;
- Logging;
- Serverless.

Kong Gateway differentiates itself from other similar solutions on the market due to its cutting-edge features:

- Performance: We achieve industry-leading performance and ensure seamless communication across all our services, regardless of where they are delivered.
- Designed for the cloud: We maximize resource efficiency and minimize footprint. We scale stacks linearly to handle trillions of API calls with zero reduction in performance or stability.
- Flexibility and extensibility: We run Kong Gateway in any environment, platform, or deployment pattern – from *bare metal* From containers to Kubernetes, extend the solution to fit any use case with custom plugins.

## Verification and protection of containers and microservices

The first rule for securing microservices is to examine them. End-to-end monitoring is crucial, but the container is also a prone location for attack and intrusion.
In addition to conducting periodic vulnerability and security scans, professionals should always keep in mind that the underlying container image itself can be corrupted after being infiltrated.
To combat this, the container image signature should always be verified or, at least, locked until verification can occur. The use of unverified signatures for traffic within containers should be avoided at all costs, as it can lead to improper access or breaches. Automating regular container testing during production or CI processes becomes essential when running microservices at scale.
Orchestration management can also help mitigate risks by producing abstractions that specify the number of containers needed to run a given image and the resources to host them.
In our projects here at Vertigo, we generally use the [Docker orchestration manager](/en/Docker-EE-tutorial/)This technology provides an important layer of security in the multi-layered model. It enables a number of benefits at a very low cost compared to traditional IT approaches.

- Reduced delivery time: The delivery method of an application is reduced to a common denominator (the container), regardless of the technology, framework, or language in which it is written. The use of images makes it possible to reproduce the original environment defined by the developer ([infrastructure as code](/en/Infrastructure-as-code%3A-a-competitive-advantage-in-retail./)This is trivial. In this way, it is not necessary to dedicate time from the infrastructure area to the installation and configuration of applications.
- Reducing resource usage: Not only is server provisioning trivial, but any public cloud provider will be able to run the applications. The low cost of isolating an application in a container ensures optimized use of available hardware resources. Only what is necessary for the application is used. This applies to both... *bare metal*as much as for the cloud.
- Scalability: Cloud-based systems greatly benefit businesses and individual users by reducing provisioning and management costs. In the case of companies, they can maximize the scalability of their systems, taking advantage of the available elasticity.

Container orchestration allows for greater control over scalability and allocated resources, as well as faster and more secure deployments, as demonstrated by our IT Manager, Rubens Freitas:

<iframe src="https://www.youtube.com/embed/OjCmuzw_h5Y" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Prioritize vulnerabilities with defense-in-depth.

The original concept of *defense-in-depth* It was created by the United States National Security Agency (NSA) with regard to information security and protection measures.
This defense model relies on multiple layers of security controls placed at key points throughout the system. This helps prevent a unified attack from easily penetrating and spreading.
*Defense-in-depth* It can expose vulnerabilities even if they are buried under layers of protection. Redundancy measures like this can prevent future panic, forcing faster action to resolve problems. This preventative vigilance is mandatory risk management for many organizations with sensitive data or strict anti-risk policies.
This approach is generally accepted in the microservices community because it is agile, multi-layered, and provides the best security option due to the highly distributed nature of the environment. The evolving nature of threats further emphasizes the need for this approach. 
Even without this technology, it is possible to monitor a system over time, learn about its workings, and then plan a sequenced attack strategy.
Security teams defending the home environment from "major threats" can often become desensitized to more common threats. This conditioning can create significant problems, as many sophisticated threats often enter the system in stages, stealthily patrolling and paving the way through modest, low-level threats.
A multi-layered system has the advantage of incorporating more layers of security without adding excessive processing overhead and with enough flexibility to react to new attack patterns. *machine learning algorithm* It can also help overburdened teams better handle the volume and sophistication of coordinated intruders hiding beyond the security barrier.

## Simplify monitoring, security, and baseline with a central tool.

To ensure the security and integrity of the microservice and API, a distributed firewall with granular control must be incorporated. As microservices proliferate, the ability to focus on an event and associate it with other known actors becomes essential and requires a centralized monitoring tool to help connect these points.
Automated updates represent another form of centralized monitoring to protect the DevOps environment, production, and any ongoing operations. With automated updates as part of this method, there are fewer cracks and attacks.
A centralized monitoring method can also help avoid the need to write cryptographic code, which, for some development teams, can become difficult to operate.
Managing the various facets of security becomes complicated and beyond the reach of smaller, inexperienced teams when deploying microservices at scale. Based on this learning curve, professionals can easily get lost in managing this complexity and inadvertently hinder other IT departments attempting to build teams and manage the transition from a monolithic model to microservices.

## Ensure security compliance of the host operating platform.

Since your microservices deployment can be on-premise or in the cloud, it's crucial to know your host's security protocols and track record. If you're operating with a PaaS hosting setup, you should verify that the platform takes all necessary precautions to ensure that other users, malicious applications, or negligence don't compromise the platform's security.
This can be complicated because many organizations are traditionally accustomed to allowing users to test their own security, but not the overall security of the platform.
If you don't plan on hosting your own applications, be sure to verify that the proposed cloud host is suitable for the comprehensive benchmark checklist. Selecting the correct operating system host is an important decision for ensuring DevOps security and production integrity.

## Conclusion

Examining each of the topics above and exploring their individualized implications for your own DevOps needs may yield some surprising insights and inspire much-needed changes in your understanding of your corporate IT culture.
It is crucial to involve all stakeholders to understand how their individual and collective needs can simultaneously be best met by the right centralized monitoring tools.
All the solutions presented in this article are available and implemented in our digital projects. Organizations such as B2W, Ipiranga, Grupo Petrópolis, Grupo Tigre, Sharecare, Icatu Seguros, the Public Prosecutor's Office of Rio de Janeiro, and the National Research Network have modernized their systems integration strategies with us.
Become a success story too! If you don't take action now, your company will be left behind on the Digital Transformation journey. [Get in touch with our experts](/en/us/).

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![Cloud Native Assessment](/wp-content/uploads/2020/12/cloud-native-quadrado.png)](/en/cloud-native-assessment/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
