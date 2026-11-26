---
title: "Microservices: 10 new security challenges"
slug: "microsservicos-10-novos-desafios-em-relacao-a-seguranca"
date: "2020-07-10T10:15:44"
modified: "2020-07-10T10:15:44"
status: "publish"
author: "admin"
excerpt: "For DevOps teams working with microservices architecture , the challenges are constantly reinventing themselves, and they need to be prepared. To ensure that the microservices architecture works well for the business in relation to already common threat versions, and even evolving next generation ones, perspectives need to be renewed and, at the same time, intuitive. […]"
categories: ["devops", "devsecops", "microsservicos"]
tags: ["devops", "devsecops", "microservices"]
featuredImage: "/wp-content/uploads/2020/07/blog-4.png"
wpId: 5010
originalUrl: "https://vertigo.com.br/microsservicos-10-novos-desafios-em-relacao-a-seguranca/"
contentSource: "rest"
lang: "en"
seo:
  title: "Microservices: 10 new security challenges - Vertigo"
  description: "For DevOps teams working with microservices architecture, the challenges are constantly reinventing themselves, and they need to be prepared. To ensure that the microservices architecture works well for the business in relation to already common threat versions, and even evolving next-generation ones, perspectives need to be renewed and, […]"
  canonical: "https://vertigo.com.br/en/microsservicos-10-novos-desafios-em-relacao-a-seguranca/"
  ogImage: "/wp-content/uploads/2020/07/blog-4.png"
  robots: "index, follow"
---

**For DevOps** teams working with [**microservices architecture**](/en/the-advantages-of-microservices-architecture/) , the challenges are constantly reinventing themselves, and they need to be prepared. To ensure that the microservices architecture works well for the business in relation to already common threat versions, and even evolving next-generation ones, perspectives need to be renewed and, at the same time, intuitive.

When dealing with microservices, we're talking about **code** . More lines of code mean greater vulnerability. This approach involves much more complexity when it comes to security, and that's where **DevSecOps comes in**.

**The role of** [**DevSecOps**](/en/Devsecops-and-its-main-performance-indicators./) **is to provide integrated information security at all application levels** , automating security tasks so that workflow doesn't slow down, selecting the right tools, and building a new foundation for DevOps culture within the company.

The microservices approach could be described simply as an architectural style, but complexity is its distinguishing feature. Let's present ten challenges that microservices can pose to information security:

## 1\. The more complex the application, the greater the expansion of the attack surface.

**Microservices communicate with each other via APIs** regardless of the programming language, and the greater the communication and the number of interactive applications, the greater the chances of attacks. Therefore, it is important to keep the DevSecOps team one step ahead to assess whether any microservice has security flaws or not.

When a microservice experiences a problem and requires time to be operational again, it's not easy to see how it's contributing to security threats and the system as a whole. Therefore, the DevSecOps team needs to be aligned and ready to solve the problems.

## 2\. Modifying monolithic applications into microservices 

The transition from monolithic applications to environments that work with microservices architecture is becoming increasingly common in organizational settings. The need for variable API lifecycles is at the heart of these changes in many companies.
Since maintaining a microservices configuration becomes much more difficult than maintaining a monolithic one, each can evolve into a wide variety of frameworks and coding languages. These complexities will influence strategic decisions whenever monolithic systems are modified. Each additional language used to create new microservices impacts security, ensuring stability with the existing configuration.

## 3\. The *log* traditional becomes ineffective

Since microservices are independent, there will be more *logs*...and the challenge of this issue is that these *logs* They can mask problems as they arise. 
With microservices running across numerous *hosts*It is necessary to send *logs* for all of them to a single, external, and centralized location. For microservices security to be effective, the *log* The user needs to correlate events across multiple different platforms, which requires a higher vantage point for observation, independent of any API or application.

## 4\. New monitoring complications

Monitoring presents a new problem with microservices architecture. As new services are added to the system, maintaining and configuring monitoring for all of them becomes a new challenge. 
Automation will only be necessary to support the monitoring of all these changes on a large scale to the affected services, and load balancing is part of the security awareness that this monitoring must be responsible.

## 5\. App security is still an important factor.

Applications are, in one way or another, the foundation of microservices teams. **API security simply doesn't disappear with microservices security** . With each new additional service, the same old challenge of API maintenance, configuration, and monitoring arises. If application monitoring isn't end-to-end, isolating or troubleshooting becomes very tedious. Without automation, teams are less likely to be able to monitor changes and threats at scale across all exposed services.

## 6\. More requests

The method of using request headers to allow services to communicate data is common. This can simplify the number of requests made; however, when a large number of services are using this method, team coordination will need to increase and become more efficient, and the team itself will also need to be simplified. 
Furthermore, with a larger number of requests, developers will need to be able to understand the time required to process them. It is likely that the serialization and deserialization of service requests will evolve and become difficult to manage without adequate tools and methods, simply to track requests and link them to an autonomous security apparatus capable of operating at scale.

## 7\. Fault tolerance

Fault tolerance in a microservices architecture model becomes more complex than in a legacy monolithic system. The DevOps team must be able to handle these faults and other problems that occur for unknown reasons in the applications.
When they accumulate, it can affect other services, creating further failures in the system. *cluster*Microservices require a new focus on interdependence and a new security model to ensure stability between applications.

## 8\. Caching

While caching helps reduce the high frequency of requests made, it's a double-edged sword. With the enhanced capabilities that caching brings to the DevOps environment, these requests inevitably increase to handle a growing number of services. 
Excessive caching can increase complexity and the enormous communication needs of teams. Automating, organizing, and optimizing this communication becomes a new requirement that perhaps didn't exist before with monolithic systems. 

## 9\. Collaborative security efforts with DevOps

As responsibility for the integrity of microservices spreads across teams, DevSecOps comes into play. Thinking with a "security brain" becomes a collective, non-hierarchical endeavor. 
Collaboration and regular touchpoints at all levels become a necessity and must be worked into the data/development culture. Good security design is a matter of collaboration, addressing conflicting needs and desires regarding the baseline of known and emerging threats to the microservice and the virtualized structures they combine to create.

## 10\. Prospective security project

For all the reasons seen above, we arrive at the priority of forward-looking security design. Far from indicating a one-size-fits-all approach from a siloed security authority team, we have reached a point in DevOps culture where all possible factors contribute to considerations that form the basis of a stable security policy and protocol-building process. Without knowing how everyone will be impacted by changes in team concerns on a daily basis and by security practices, it is nearly impossible to create a good security design. 
O *scrum* Agile may become the replacement for the authority silo in the microservices model, but how can teams dedicate more time to security issues without compromising their daily tasks? This is due to the many ways in which complexity is changing the DevOps landscape and causing systems to rethink their structure. *modus operandi*Autonomy will need to replace the human factor, not only for the integrity of the service, but for the entire range of security concerns. 

## Conclusion

DevOps and DevSecOps teams should consider all ten factors above to thrive and transform into a fully suitable, self-sufficient marriage between tools and security culture. 
This holistic system needs to be able to act autonomously on known threats, from a continuous machine-learned contribution to the baseline of known threats for all these unique APIs, services, and containers, as well as some ability to predict where threats might appear in that specific environment, rather than just relying on the baseline and thus creating a false “normal environment” that doesn’t match the real one.
To better understand how microservices architecture can help in the digital development of your business, [talk to our experts](/en/us/).

### Assess the level of DevOps adoption and maturity in your company and understand its strengths, weaknesses, gaps, and opportunities for improvement.

[![](/wp-content/uploads/2020/08/Indice-de-Maturidade-DevOps.png)](/en/DevOps-maturity-index/)

### Fill out the form to speak with our experts and learn how these methods can help your company achieve success.
