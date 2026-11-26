---
title: "What are the cloud security challenges for 2021?"
slug: "quais-sao-os-desafios-de-seguranca-da-nuvem-para-2021"
date: "2021-01-22T14:40:21"
modified: "2021-01-22T14:40:21"
status: "publish"
author: "admin"
excerpt: "Security and compliance in the cloud are top concerns for IT organizations. In an era of cutting edge technology, rife with cyber threats, it's important for companies to be able to deploy applications on a platform that adheres to stringent security baselines. The booming growth of cloud native technologies and solutions shows no signs of […]"
categories: ["transformacao-cloud-native"]
tags: ["cloud", "cloud-native", "hashicorp", "multicloud", "nuvem", "seguranca", "transformacao-cloud-native", "vault"]
featuredImage: "/wp-content/uploads/2021/01/blog-13.png"
wpId: 5460
originalUrl: "https://vertigo.com.br/quais-sao-os-desafios-de-seguranca-da-nuvem-para-2021/"
contentSource: "rest"
lang: "en"
seo:
  title: "What are the cloud security challenges for 2021? - Vertigo"
  description: "Security teams are eager for solutions that provide clarity about the risks of their cloud presence. Read the article!"
  canonical: "https://vertigo.com.br/en/quais-sao-os-desafios-de-seguranca-da-nuvem-para-2021/"
  ogImage: "/wp-content/uploads/2021/01/blog-13.png"
  robots: "index, follow"
---

Security and compliance in the cloud are top concerns for IT organizations. In an era of cutting-edge technology, rife with cyber threats, it's important for companies to be able to deploy applications on a platform that adheres to stringent security baselines.
The booming growth of cloud-native technologies and solutions shows no signs of slowing down; quite the opposite. The world is trending towards an increasingly widespread adoption of the cloud across all areas of business. Looking ahead to 2021, we will begin to see a growing increase in companies – even governments – migrating to or creating their solutions in the cloud.
Moving to the cloud also means recreating and optimizing your *stacks* with depth to achieve a cloud-native implementation. This means that some new security trends will emerge in the coming years.
To ensure you're prepared for the rapidly approaching cloud-native future, we've compiled cloud security challenges you need to be aware of. Happy reading!

## Cloud security consolidation

Many organizations understand the inherent risk in using dozens of security products to manage cloud infrastructure. Even a small company might manage 15 to 20 separate tools. However, some of the largest organizations often find themselves overwhelmed by the effort of managing hundreds of products.
Security teams are eager for solutions that provide clarity on the risks of their cloud presence. Most organizations use multiple cloud providers, in addition to their own private clouds or on-premise hardware. This hybrid operating model is a security problem that many providers are still unable to solve.
Starting this year, we will begin to see the emergence of cloud-native security platforms that will allow teams to manage public, private, and hybrid clouds from a single administration console.
Standalone security solutions will be connected to these comprehensive platforms. Features such as governance and compliance, threat detection and response, container security, data loss prevention, and... [serverless security](/en/Avoiding-antipatterns-in-serverless-environments-with-observability./) They will be on a single panel.

- ### Machine Learning will need to evolve.

*Machine Learning* It has been positioned by the IT industry as an almost magical solution for virtually any challenge. However, in practice, it still needs considerable development to be fully integrated into security practices.
This will begin to change in the coming months, when we will see examples of ML deployed and specific use cases in areas such as data classification, malware detection, and automated reasoning. In other words, enabling the evaluation of security configurations from many different perspectives, just as an attacker would.
A great example of its use would be in the area of ​​identity and access management. Automated reasoning is used to determine whether policies are effective, permissive, etc.

- ### DevOps encouraging security teams to Shift Left Testing

Most organizations already understand the tactical benefits of *Shift Left Test*However, its adoption has been slow. Nevertheless, as cloud security consolidation progresses and cloud-native security platforms become more commonplace, security and DevOps teams will have a more viable path.
These platforms will provide the ability to connect security to the construction pipeline and ensure independent protection across all clouds.
Many companies are adopting the [Infrastructure as Code (IaC)](/en/Infrastructure-as-code%3A-a-competitive-advantage-in-retail./) As teams try to automate their cloud build processes further, they can avoid manually creating and configuring infrastructure in favor of writing code – IaC templates are a great way to consistently apply security standards.
Security platforms can scan IaC models for issues in the build pipeline and also offer automated remediation to quickly resolve any security problems in the cloud-native environment.

- ### Provider consolidation will increase visibility.

The widespread adoption of a multicloud strategy creates visibility issues. As they move forward, security teams and IT leaders will continue to look for ways to regain the level of visibility they previously enjoyed in the past. *on premise*Highly dynamic cloud resources make visibility difficult.
However, security platforms that utilize cloud provider APIs will offer a richer context for cloud-native workloads, including [containers](/en/The-importance-of-container-security-and-microservices-for-insurance-companies./)serverless and PaaS. 

## Prepare today for the future of cloud-native security.

As we enter a new era of cloud security, there is little doubt that public cloud platforms will continue to evolve at high speed. This unprecedented shift will force organizations to continually rethink how they build and manage their applications.
The accessibility and ease of use provided by the cloud have opened the door to unrestricted innovation – empowering business owners to move quickly and add greater value.
This accessibility and ease of use have also had the adverse effect of making many traditional security and governance models virtually obsolete. As a result, security teams need to reassess existing processes and tools to ensure they are able to keep pace with the risks and demands that businesses require in the cloud-native era.
For enhanced cloud security, HashiCorp Vault is a great solution, a tool used in projects by Vertigo. With it, your organization can achieve advanced data protection and encryption, as well as complete secret management. 

## Secrets Management

Application and system secrets need to be centralized, and static IP-based solutions don't scale in dynamic environments. Hashicorp Vault centrally manages and enforces access to secrets and systems based on trusted application sources and user identity.
In addition, it performs centralized storage, access, and dissemination of secrets such as API keys, AWS IAM/STS credentials, SQL/NoSQL databases, X.509 certificates, SSH credentials, and more. Learn about its features:

- **Secret Storage:** encrypt and store data in *Back-end* of your choice.
- **Dynamic Secrets:** They are ephemeral, generated programmatically when accessed and do not exist until they are read, reducing the risk of theft or access by another person, and can be revoked immediately after use, minimizing their lifespan.
- **Namespaces:** Secure multi-tenancy with isolated and self-managed environments.
- **Rental and revocation of secrets:** The impact of exposing secrets is minimized by limiting how long credentials can last, creating tokens based on revocation time, and automatic or manual management.

## Data Encryption

All application data must be encrypted, but deploying encryption and key management infrastructure is expensive, difficult to build, and not cloud-compatible or *multi-data center*.
Hashicorp Vault provides encryption as a service with centralized key management to simplify this process both in transit and in storage.
This allows you to protect confidential data with centralized key management and simple APIs for data encryption. See its features:

- **API-based cryptography:** Centralized key management, encryption algorithm, and more.
- **Cryptographic key rollover:** Updating and implementing new keys across the entire deployed infrastructure, while maintaining decryption capabilities.
- **Replication filters:** choose between Whitelist / Blacklist and enable or disable mounts for replication filtering.

## Conclusion

The expansion of the cloud-native approach is only set to increase! It accelerates the development of solutions and simplifies their maintenance. Organizations begin to build a new culture, practices, and tools that, combined with autonomous teams and software supply chain automation, promote frequent changes in an agile and secure way.
We at Vertigo Tecnologia are here to guide you on this journey to the future of technology! As official Hashicorp partners, we utilize the most modern technologies to ensure the security of your cloud, transforming your IT into a catalyst for innovation.
Count on our excellence to help you with your digital challenges in the digital transformation process. [talk to our experts.](/en/us/)

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
