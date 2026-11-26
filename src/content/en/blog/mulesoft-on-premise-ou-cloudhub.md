---
title: "Mulesoft On-Premise or Cloudhub – Which is the best scenario for your operation?"
slug: "mulesoft-on-premise-ou-cloudhub"
date: "2018-08-21T14:23:57"
modified: "2026-02-02T20:41:19"
status: "publish"
author: "admin"
excerpt: "MuleSoft's Enterprise Service Bus (ESB) is offered in three main forms: Mule ESB Enterprise Edition (commercial, on premise version) , Cloudhub (commercial PaaS version) , and Mule ESB Community Edition (open source, on premise version) . These are three very interesting options, each with its own differences and better suited to different types of environments […]"
categories: ["blog", "mundo-das-apis"]
tags: ["api", "cloudhub", "mulesoft", "mulesoft-cloudhub", "mulesoft-on-premise", "mulesoft-runtime", "review-mule-cloudhub", "review-mule-on-premise"]
featuredImage: "/wp-content/uploads/2026/02/mulesoft-on-premise-ou-cloudhub.png"
wpId: 2375
originalUrl: "https://vertigo.com.br/mulesoft-on-premise-ou-cloudhub/"
contentSource: "rest"
lang: "en"
seo:
  title: "Mulesoft On-Premise or Cloudhub - Find out which scenario is best."
  description: "You probably already know, or have heard, about the quality of Mulesoft products. But what's the best scenario for your system integration needs? In our content, you'll find information that can help you find the best solution for your type of business. Come along!"
  canonical: "https://vertigo.com.br/en/mulesoft-on-premise-ou-cloudhub/"
  ogImage: "/wp-content/uploads/2026/02/mulesoft-on-premise-ou-cloudhub.png"
  robots: "index, follow"
---

MuleSoft's Enterprise Service Bus (ESB) is offered in three main forms: **Mule ESB Enterprise Edition (commercial, on-premise version)** , **Cloudhub (commercial PaaS version)** , and **Mule ESB Community Edition (open source, on-premise version)** . These are three very interesting options, each with its own differences and better suited to different types of environments and businesses.

[This is an article about APIs, if you don't already have much knowledge about the subject.](/en/What-is-API-Understand-it-in-a-simple-way./)

The purpose of this post is to provide a comparative analysis of Cloudhub and Mule ESB EE On-Premise. Both products have pros and cons. As you read this article, try to consider how the functionalities of each version would fit into your business model. Each has distinct characteristics that should be considered during your organization's decision-making process.

Very interesting and convenient features require a larger investment. The **Cloudhub option** allows a maximum of 10 applications per vCore, and each one has a high cost. However, some of the features may be worth paying for (depending on your specific situation).

## Cloudhub version details

Overall, **Cloudhub** , like many similar *cloud-based* technologies , has evolved considerably in recent years, offering customers almost all the features as if the solutions were implemented in their data center. Among the most useful features implemented in Cloudhub are: VPC offering, custom firewall rules, proxy server implementation, and out-of-the-box load balancing (for more details, see these [Mulesoft Runtime Manager](https://docs.mulesoft.com/runtime-manager/virtual-private-cloud) documents ).

The only real technical drawbacks are the inability to access local *filesystems* , transfer files between applications, and some restrictions when using *in-memory databases* . Alternative cloud solutions exist, such as using *Amazon* S3 and other cloud technologies, to mitigate this impact. That said, customers generally don't need many extras when faced with a particular Cloudhub limitation.

## The characteristics of On-Premise

Regarding the **on-premise version of Mule Runtime** , there are a few things to consider. In my opinion, the most costly aspect is the time and expertise required to properly install, maintain, and update Mule Runtime, in addition to the Java SDK/OpenJDK version, the operating system, and all the other components your application *stack will need.*

This requirement may not seem like a big burden to the technicians. For a CIO, it is a potential point of failure that must be avoided, especially if it means costs.

In addition to these costs, we have load balancers, firewalls, and other network components. These may be necessary to make your application compliant with your organizational and departmental standards. When an on-premise installation occurs in a data center, it is necessary to ensure that it is done correctly. It needs to be properly maintained throughout the entire lifecycle of an ESB.

Having all the necessary elements installed and implemented correctly is much easier said than done, for several reasons. But that's a topic for a later discussion. The point here is that proper installation and best practices will involve much more than just a few clicks and unpacking files.

## Is it possible to have the best of both worlds?

With the emergence of services like Amazon EC2, Windows Azure, and others, there are "hybrid options" that some organizations have successfully utilized. In specific scenarios, there is the option of installing a *Mule Runtime with an* *on-premise* license on a cloud-based Linux server, such as those offered by *AWS* . With this "hybrid solution," you avoid some of the limitations of *Cloudhub and* *on-premise* installations , but not all of them.

With the hybrid solution, you eliminate the restriction of only being able to deploy up to 10 applications per vCore. Furthermore, manually installing a local Mule Runtime on a cloud-hosted server can avoid several of the disadvantages mentioned above, such as the need for load balancing, firewalls, proxy servers, API gateways, and all the other drawbacks of a physically hosted server (services like Amazon offer these ready-made solutions at very affordable prices).

A hybrid solution still requires skilled resources to install Mule Runtime, Java, and all the other components your specific solution might need. But, in my opinion, this isn't a bad solution if that's the necessary path. Therefore, the use of a hybrid architecture should be evaluated very carefully and cautiously.

## Myths and Traps:

### "Cloudhub does not offer the necessary security features that our executives and senior managers would like."

False. Today, with cybersecurity and data protection being a major concern for most companies, Cloudhub has features that allow its customers to implement Virtual Private Cloud, API Proxy layers, SSL, API security protocols using LDAP, OAUTH2, custom firewall rules for static IP, and many other components and features that can keep their application *stack* and data properly secure.

Furthermore, Cloudhub is widely and successfully used in the banking, finance, and healthcare sectors, where sensitive data is transferred back and forth through numerous transactions.

### "We can obtain all the necessary components on-premise, easily installed by our team."

It's easier said than done. While many IT teams find ESB installation easy, testing requires certain levels of expertise that aren't as common. A Mule DevOps engineer must be thoroughly familiar with the complexities of the Mule server, Linux, HTTP ports, networking, firewall, boot properties, and sometimes many other technologies like Maven and Artifactory to install, maintain, monitor, and update an environment.

### "An enterprise ESB can be implemented inexpensively."

Regardless of which ESB technology you decide to use, and whether you opt for a cloud-based or on-premise solution, an ESB implementation requires skilled labor, resources, and the necessary expertise to be successfully implemented. Therefore, it is never cheap.

### "My network team will be able to implement a quick and cost-effective on-premise solution."

This is probably one of the most common pitfalls. Network problems such as port forwarding, firewall rules, and load balancing tests are difficult to resolve. Most of the time, a highly proficient and knowledgeable Mule resource is needed, in close communication and coordination with a network resource. This helps to detect and resolve network problems quickly. Using the wrong resources to try and solve problems of this nature can actually ruin your entire implementation.

### "With Cloudhub, we can guarantee that our platform will be up 100% of the time and will be 100% reliable."

Nothing in life is 100% guaranteed, not even Cloudhub. While it's a very reliable platform that rarely fails, the truth is that failures have happened in the past and will undoubtedly happen again in the future. MuleSoft has proactive monitoring and alerts, as well as post-incident analysis, that alert its customers. However, like any other human-run business, systems aren't 100% perfect and things can go wrong.

### "Application changes and deployments are much easier in Cloudhub compared to on-premises."

Best practices and a release management policy should be implemented within your team, regardless of which implementation you choose. DevOps practices are highly recommended at this stage .

> [Don't know what DevOps is? Check out our great content on the subject by clicking here.](/en/What-is-DevOps/)

Cloudhub simplifies some aspects of the deployment process; however, bad practices and poorly executed deployments can cause many headaches.

### "The architecture on Cloudhub is much simpler than on-premise."

False. Cloudhub's architectural advantages are primarily based on the automated maintenance and scalability of its application *stack* . This allows its architects to focus their energies on application architecture instead of the organization's infrastructure architecture.

## Conclusion

We are nearing the end of this content. We hope it has helped in your learning process, and perhaps in making decisions regarding any procedures you are planning to implement in your company. This review was translated from the MS³ consulting website.

Did you find this text interesting? If you enjoyed this content about **Mulesoft** , you'll also love our material on the **5 best Salesforce integration patterns** . To access it, simply click on the image below.

[![](/wp-content/uploads/2018/08/PAPER-BLOG-300x169-1.png)](https://materiais.vertigo.com.br/paper-mulesoft-os-5-melhores-padroes-de-integracao-com-salesforce?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

We at Vertigo Tecnologia are Mulesoft specialists. Companies like Ipiranga Petróleo, ABInbev, and B2W have already experienced the power of Mulesoft integrations with us. Do you have problems with system integrations or would you like to boost your business by enabling communication between different environments? Schedule a contact with us by clicking the icon below. Our specialists will certainly have a solution for your needs.

[![](/wp-content/uploads/2018/08/CONTATO-HIPERLINK-300x50-1.png)](/en/us/)

Until later!
