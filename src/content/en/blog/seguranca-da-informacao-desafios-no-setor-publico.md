---
title: "Information security: challenges in the public sector"
slug: "seguranca-da-informacao-desafios-no-setor-publico"
date: "2021-03-01T15:53:27"
modified: "2021-03-01T15:53:27"
status: "publish"
author: "admin"
excerpt: "The hacker attacks carried out in late 2020 on computer systems of various Brazilian public bodies, such as the Superior Court of Justice, the Ministry of Health, and the Government of the Federal District, reveal the state of IT in the public sector and indicate that information security needs to be at the heart of […]"
categories: ["devsecops"]
tags: ["adotar-devops", "devops", "devsecops", "seguranca-da-informacao", "vault"]
featuredImage: "/wp-content/uploads/2021/03/setor_publico_V2.png"
wpId: 5485
originalUrl: "https://vertigo.com.br/seguranca-da-informacao-desafios-no-setor-publico/"
contentSource: "rest"
lang: "en"
seo:
  title: "Information security: challenges in the public sector - Vertigo"
  description: "In this article, we will explore the reality of information security in the public sector and its main current challenges. Enjoy your reading!"
  canonical: "https://vertigo.com.br/en/seguranca-da-informacao-desafios-no-setor-publico/"
  ogImage: "/wp-content/uploads/2021/03/setor_publico_V2.png"
  robots: "index, follow"
---

The hacker attacks carried out in late 2020 on computer systems of various Brazilian public bodies, such as the Superior Court of Justice, the Ministry of Health, and the Government of the Federal District, reveal the state of IT in the public sector and indicate that information security needs to be at the heart of every software system launched by the government.
These events demonstrate the urgent need for authorities to recognize the importance of investing in information security. After all, most public agencies lack the technical staff to develop these standards and manage solutions in case of attacks.
The digitalization of public services increases the risk of attacks, and therefore it is necessary to pay attention not only to the number of deliveries, but also to the quality and security of the services offered.
O [DevSecOps](/en/How-can-Devsecops-culture-help-in-the-process-of-adapting-to-the-LGPD-%28Brazilian-General-Data-Protection-Law%29/) It incorporates security activities into the software development lifecycle. This approach helps develop teams that seamlessly integrate security and compliance functions into their regular workflows, inserting the necessary steps into the CI/CD continuous integration and delivery pipeline.
In this article, we will explore the reality of information security in the public sector and its main current challenges. Enjoy your reading!

## Collaboration and reliable channels

Communication is an extremely effective catalyst for creating a dynamic build process and for facilitating collaboration between security, operations, and development teams. It is crucial to involve these teams in pipeline-related discussions to ensure the correct security steps are integrated.
Consistent communication between teams helps build and reinforce trust in the pipeline used in software development. Establishing security requirements early in the development process helps developers incorporate necessary security protections into their workflows and establish delivery channels that teams can trust.

## Automated pipelines reduce errors.

O [DevSecOps enables organizations to automate processes.](/en/3-ways-to-overcome-cloud-bottlenecks-with-DevSecOps/)This minimizes failures caused by human error. Public agencies deliver higher-performing and higher-quality applications by incorporating automated security controls and tests into their pipelines.
They also avoid bottlenecks and provide resources more quickly by automating tasks and processes. *gates* validation processes that don't really require a professional in *loop*.

## Secure and faster delivery

In many organizations, security is still seen as an obstacle to software delivery, a blocker that is both laborious and unavoidable. However, security can, in practice, promote speed.
DevSecOps, when executed correctly, [accelerates software delivery](/en/Devsecops-and-its-main-performance-indicators./) Because security checks are completed and defects are continuously corrected throughout the software development lifecycle.
This is great news for developers (their creations go live sooner), for security teams (they can more easily authorize the system because they know it was developed in accordance with organizational policy), and for operations teams (they inherit a system that is worthy of running on their infrastructure).

## Continuous insight and real-time compliance

Security teams gain transparency and actionable insights at every stage of software development through an audit trail, governance measures, and real-time compliance reporting, without waiting for developers to create and share post-development reports.
These continuous insights, along with reliable pipelines, eliminate red tape between the security office and development teams, resulting in faster and more secure IT.

## Cryptography and key management

Most private companies have multiple layers of security, starting at the perimeter and continuing throughout the infrastructure to establish... *defense in depth*That's what public organizations also need to do. 
O **Vault, a security solution from Hashicorp,** It was developed to withstand attacks even at its perimeter. This feature has become extremely important with the increase in threats and attacks, such as those mentioned at the beginning of the article.
Data encrypted by Vault is able to withstand independent attacks due to the design of its cryptographic barrier. *rest* – which offers options for users to protect their infrastructure according to their threat model.

## The cryptographic barrier and unlocking

Vault protects your data regardless of the host of your storage system in a framework known as a Cryptographic Barrier. This is done for two reasons: to allow operators to avoid being "locked" into a particular storage or computing infrastructure and, ultimately, to ensure that an attacker who compromises the storage infrastructure does not gain access to your secrets or confidential data configuration.
In practice: if all the data in the Vault is stolen, an independent layer of encryption – which is neither controlled nor operated by the storage system – locks the data and protects it even after a successful breach and leak of the storage backend.

## Secure key management

Regardless of the unlocking mechanism, the Vault is designed to complicate the theft of key material for the purpose of bypassing encryption. Neither approach directly stores the actual encryption key for the data, ensuring that even if an attacker with sufficient resources breaches an automatic unlocking system, they will not be able to steal the keys to decrypt the encryption barrier outside of the unlocking process.
Vault goes a step further by ensuring that users and operators never interact with the keys used to protect their secrets. The provider manages, in depth, the process of retrieving keys from the encrypted storage.
While this simplifies the usage process, it also minimizes the possibility of a key theft attack. An attacker who has breached a user's infrastructure cannot steal the key material and use it to attack encrypted data. *rest*.
In addition to secure management, the Vault infrastructure is designed to protect and encourage best practices for managing secure access to secrets, which are:

- Multi-level security;
- Access control based on role and attributes;
- Audit record;
- Dynamic credentials;
- Trust independent of the network.

## Last line of defense

The Vault was designed to serve as an independent last line of defense for secrets. Recent attack situations highlight the importance of designing encryption and key management to withstand combined attacks from skilled and well-resourced attackers.
In the future, it will be possible to allow users to migrate to new, demonstrably secure ciphers. But today, the goal remains the same: to have the best possible technology in order to keep data protected with sufficient encryption to achieve total software confidentiality.

## Conclusion

Implementing DevSecOps is a simple yet elegant way to promote continuous security and reduce vulnerabilities released into the production environment.
Public sector organizations benefit greatly from reducing errors and gaining confidence that relevant security checks have been performed.
Did you enjoy our content? Would you like to learn more about how DevSecOps culture and Vault can help your organization meet increasingly urgent demands without compromising data security? [Talk to one of our experts!](/en/us/) We will be happy to assist you.

### Assess the level of DevOps adoption and maturity in your company and understand its strengths, weaknesses, gaps, and opportunities for improvement.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/en/DevOps-maturity-index/)

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
