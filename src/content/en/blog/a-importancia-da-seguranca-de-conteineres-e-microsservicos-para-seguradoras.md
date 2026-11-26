---
title: "The importance of container security and microservices for insurance companies."
slug: "a-importancia-da-seguranca-de-conteineres-e-microsservicos-para-seguradoras"
date: "2020-11-19T13:33:20"
modified: "2020-11-19T13:33:20"
status: "publish"
author: "admin"
excerpt: "The responsibility for system security is increasingly falling on product teams and their DevSecOps engineers, as they possess a broad view of system architecture and the pipelines used to deploy containers and microservices. This trend should be taken into account, as a good DevSecOps strategy makes the delivery, operation, and monitoring of applications orders of […]"
categories: ["microsservicos"]
tags: ["api", "cloud", "devops", "devsecops", "hashicorp", "microsservicos", "seguradoras", "seguros", "vault"]
featuredImage: "/wp-content/uploads/2020/11/seguranca-conteiner-microsservicos.png"
wpId: 5351
originalUrl: "https://vertigo.com.br/a-importancia-da-seguranca-de-conteineres-e-microsservicos-para-seguradoras/"
contentSource: "rest"
lang: "en"
seo:
  title: "The importance of container security and microservices for insurance companies - Vertigo"
  description: "A great solution for promoting security in your containers and microservices is Vault, a Hashicorp tool used in projects by Vertigo."
  canonical: "https://vertigo.com.br/en/a-importancia-da-seguranca-de-conteineres-e-microsservicos-para-seguradoras/"
  ogImage: "/wp-content/uploads/2020/11/seguranca-conteiner-microsservicos.png"
  robots: "index, follow"
---

The responsibility for system security is increasingly falling on product teams and their DevSecOps engineers, as they possess a broad view of system architecture and the pipelines used to deploy containers and microservices. This trend should be taken into account, as a good [DevSecOps](/en/Devsecops-and-its-main-performance-indicators./) strategy makes the delivery, operation, and monitoring of applications orders of magnitude more secure and effective than in traditional IT management.

While these new technologies, processes, and culture have enriched our possibilities for innovation and business growth, one of their main virtues is reconciling speed, quality, and security in software development practices. Containers, for example, drastically reduce the attack surface compared to VMs, although they also potentially bring some new risks. A major challenge is staying ahead in cybersecurity, since cyberattacks never stop.

The “WannaCry” ransomware attack in May 2017, for example, affected more than 200 systems worldwide, followed by “Petya,” which had its epicenter in Ukraine and caused widespread global disruption. Recently, the computer systems of the Superior Court of Justice of Brazil (STJ) were the target of a hacker attack, causing inconvenience and delays in the judgment of more than 12 cases.

Globally, cybercrime costs approximately US$400 billion per year. This means that cyber risks are among the top costs that companies must consider when it comes to their resilience and continuity planning.
As new cyber threats are constantly emerging, companies need to understand that in order to protect themselves more effectively against these attacks... *It's not enough to constantly monitor your applications, nor is it enough to simply update your systems periodically.*. **An organization's system resilience and ability to react to attacks are closely linked to shared responsibility models, provisioning automation, and software delivery automation, which are fundamental to DevSecOps practice.**.

But what about the insurance sector specifically? How are insurers faring in the cyber battle, and what should their priorities be? To find out, keep reading our article.

## Increasing pressure on the insurance sector.

Insurance companies deal with significant security risks every day. But when it comes to investing in cybersecurity, the sector may have fallen behind.
In part, this is due to a matter of necessity: banks were prime targets for cyberattacks and needed to act quickly to protect their reputation, their customers, and their bottom line. Cyber ​​warfare has traditionally been much quieter in the insurance market.
Signs indicate that this is changing. As the financial sector becomes more secure, hackers are seeking more vulnerable targets, putting insurance companies in the line of fire.
The stakes are high, after all, insurance companies hold enormous amounts of data on individuals. At the same time, regulators have begun asking insurance CEOs tough questions about their cyber resilience.

## The current cyber risk

The number of attacks has increased significantly, coinciding with the development of technologies and the growing number of networked devices. This scenario creates a series of vulnerabilities that can be exploited by criminals seeking confidential information to gain financial advantage from insurance companies.

One of the factors responsible for this growth is the popularization of smartphones and the pursuit of mobility, in contrast to the lack of preparedness of many IT teams that have not updated their security policies and practices.
The most common attacks involve network disruption and the interception or access to sensitive data, which is then sent outside the private network.

Cloud solution providers (SaaS) can also be targets of distributed attacks. *denial-of-Service* directed towards public services, which causes collateral damage and disruption for other customers.
Whatever the attacker's intention, the consequences of this type of situation are immediate, and the response must be too. The more informed the IT team is about the dangers, the easier it will be to maintain a secure system.

## The true cost of cybercrime

The extent of these costs varies considerably and can be affected by a number of factors. This includes the type of company attacked, the data processed, and the regulatory and legal implications of any incident. This means that cyberattacks with similar impacts can have very different costs.

### Immediate costs

These are the largely unavoidable costs that include the immediate impact on business and media, as well as the cost of restoring the confidentiality, integrity, and availability of data and systems. They are:

- Legal and forensic investigation costs;
- Customer notification costs;
- Credit monitoring for customers;
- Potential costs of business interruption;
- Public relations expenses;
- Costs of fraud, extortion, physical damage, and IT/Business remediation.

### Slow-burn costs

They vary according to the type and severity of the event and how it is handled, but typically include the long-term business impact and costs incurred in compensating victims, as well as reparations and penalties for non-compliance with obligations. These include:

- Expenses related to third-party litigation;
- Customer churn due to reputational damage (*churn*);
- Fines and regulatory penalties;
- Impact on stock prices, for those listed on the Stock Exchange;
- Loss of management focus, competitive advantage, and revenue.

## Working with containers and microservices

There is evidence that many data breaches in large companies result from misunderstandings inherent in traditional IT management: operational silos and SLAs that disregard the value chain result in notoriously dysfunctional (and, unfortunately, virtually ubiquitous) approaches to system and data security. Resource provisioning and configuration are often done through extremely slow, manual processes completely disconnected from the reality of those who will use them, just as security is commonly treated more as a perimeter issue than a matter pertinent to the applications themselves. In organizations [*cloud-native*](/en/Transform-your-corporate-IT-into-an-innovation-enabler-with-cloud-native-technology./) (where the practice [DevOps](/en/What-is-DevOps/) (It is widespread) the security configuration policies for services and systems are materialized in artifacts and tools used in automations. The culture [DevOps](/en/What-is-DevOps/) It enables continuous improvement models that not only promote safer configurations but also ensure that microservice runtime environments can be routinely discarded and redeployed in a short time.
The evolution from monolithic applications to [microservices](/en/How-to-ensure-your-microservices-are-functioning-correctly./) This means there are many more small, individual pieces of software running in the environment. And that's the essence of the security problem: by having all these new components, each one can present an attack surface within your architecture. In other words, there's a constant need to validate that they are not compromised and that there are no unknown and hostile microservices in your environment.
One solution is to build a platform that creates an identity for each microservice as it moves through the CI/CD pipeline. This ensures that it exits with a cryptographically embedded identity linked to its memory. Then, when there is a *deploy* In the context of microservices, it is used to create automatic security around them.
When identity and authentication management is delegated to a platform, it becomes much easier to control, understand, build, secure, configure, monitor, and trust your microservices. Trust in the microservices platform is a fundamental aspect of DevSecOps, no longer merely a matter of perimeter security.
This helps protect microservices against failures and exploits, ensuring they only communicate with other approved and identified microservices. The practice acts as an automated security layer that is added seamlessly through DevSecOps best practices directly from CI/CD.

## How to deal with cyber risks?

### Property and ownership

Cybersecurity is a business problem, not just an IT problem. Some of the most successful insurance companies have elevated their *Chief Security Officer* to report directly to the *Chief Operating Officer* , thus creating a clear line of sight between the business and the risk.

### Enhancing capabilities

New and improved cybersecurity capabilities are likely to be needed, but insurers will also need to assess their current "pockets" of excellence and ensure that these best practices are shared across the company. Senior management sponsorship for this change is crucial: traditional IT management, which ignores recent advancements and is oblivious to DevSecOps practices, is a formidable adversary.  
Leading insurance companies are beginning this process by ensuring that their existing resources are used appropriately.

### Awareness

Improved team awareness, starting with *C-level* professionals , is crucial. Insurance companies need to focus on improving their understanding of their partner/third-party ecosystem – unaffiliated agents, third-party service providers, and other non-employees with data access – to manage their risks consistently.

### Organization

CEOs will need to work with their business leaders to understand the right balance between centralized and decentralized services in order to best address cyber risks.

### Prevention

Successfully activating a rapid response and recovery program requires practice, commitment, and clear lines of responsibility. (From exercises) *red teaming,* From simulations of how attackers behave, to enhanced employee training and more frequent drills, insurance leaders need to carefully consider how to ensure their organization remains prepared.
However, only a cloud-native organization with maturity in DevSecOps and autonomous teams is capable of catalyzing and realizing all this preparation. **observability** e **automation** They make vulnerability detection and resolution metrics increasingly better.   

## Managing secrets and protecting confidential data with Hashicorp Vault

A great solution for promoting security in your containers and microservices is Vault, a Hashicorp tool used in Vertigo projects. With it, you can protect, store, and tightly control access to tokens, passwords, certificates, and encryption keys to safeguard secrets and other confidential data using a User Interface (UI), Command Line Interface (CLI), or HTTP API.
Ultimately, the use of secrets management and data protection in dynamic infrastructure necessitates greater security coverage.

### See what these structural differences look like:

**Static infrastructure of the traditional approach**
Traditional approach to data centers with inherently high-trust networks and clear network perimeters:

- High-trust networks;
- Clear network perimeter;
- Security applied by IP address.

**Dynamic infrastructure with HashiCorp Vault**
Multiple private clouds and data centers without a clear network perimeter:

- Low-trust networks in public clouds;
- Unknown network perimeter in the cloud;
- Security applied through identity.

## How does Hashicorp Vault work?

There is strict control over access to encryption secrets and keys through authentication with trusted identity sources. The solution also allows for granular authorization of which users and applications are permitted to access secrets and keys.
**Managing secrets:** It stores, accesses, and distributes dynamic secrets, such as tokens, passwords, certificates, and encryption keys, in a centralized manner.
**Data protection:** They keep application data secure with centralized key management and [APIs.](/en/How-to-make-a-successful-API/)

[![](/wp-content/uploads/2020/11/1534364757-vault-black-back.png)](https://www.datocms-assets.com/2885/1543956852-vault-v1-0-ui-opt.mp4)

## Hashicorp Vault Principles

**API-driven:** Enables automation and the use of CI/CD while preparing your policy to encode, protect, and control access to secrets.
**Secure with any identity:** It enables the use of any trusted identity provider. Identity is scale-independent, unlike IP addresses, which require complex firewall rules and frequent updates.
**Extend and integrate:** Request secrets from any system through a consistent, audited, and secure workflow. Using this solution, Vertigo can support public clouds, private data centers, and a wide variety of endpoint systems, including databases, cloud-native platforms, message queues, SSH, and more.

##
The closing thought

Constant security checks are necessary for automatic discovery and application mapping to adjust security points and thus protect against future attacks. In this way, when intrusion attempts are detected, they can be viewed internally.
Furthermore, if microservices are protected by application configuration management tools, changes and exceptions to the configuration policy will be sent for evaluation and handling.
When these changes are discovered, the tools further examine the container log to compare the configuration image to the last state and record the changes, which can then be shared among all the different Development and Operations teams for correction.
To accelerate the delivery of new technologies, increase end-to-end security levels, and reduce the cost of IT operations, choose the ideal platform for DevOps deployment. 
Rely on Vertigo's expertise to help you adopt a safe containerization conveyor system. [Talk to our experts](/en/us/).

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/en/cloud-native-assessment/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
