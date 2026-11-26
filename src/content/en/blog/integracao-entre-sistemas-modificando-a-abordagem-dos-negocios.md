---
title: "Systems integration: changing the business approach"
slug: "integracao-entre-sistemas-modificando-a-abordagem-dos-negocios"
date: "2019-07-02T13:47:57"
modified: "2019-07-02T13:47:57"
status: "publish"
author: "admin"
excerpt: "System integration is one of the most promising paths that leads IT teams to promote true Digital Transformation . However, even companies that are aware of this often present a rudimentary point to point integration scenario. In our last article, we showed how franchising principles can be applied in the IT context. This practice can […]"
categories: ["plataformas-de-integracao"]
tags: ["api-led-connectivity", "apis", "codigo-espaguete", "integracao-entre-sistemas", "mulesoft", "mulesoft-anypoint-platform"]
featuredImage: "/wp-content/uploads/2019/07/integracao-entre-sistemas-.jpg"
wpId: 4463
originalUrl: "https://vertigo.com.br/integracao-entre-sistemas-modificando-a-abordagem-dos-negocios/"
contentSource: "rest"
lang: "en"
seo:
  title: "Discover how system integration transforms business."
  description: "Discover how system integration can help your team improve productivity by up to 300%, through agile and secure deliveries."
  canonical: "https://vertigo.com.br/en/integracao-entre-sistemas-modificando-a-abordagem-dos-negocios/"
  ogImage: "/wp-content/uploads/2019/07/integracao-entre-sistemas-.jpg"
  robots: "index, follow"
---

**System integration** is one of the most promising paths that leads IT teams to promote true **Digital Transformation** . However, even companies that are aware of this often present a rudimentary point-to-point integration scenario.

In our last article, we showed how franchising principles can be applied in the IT context. This practice can boost your strategy for adopting a new, more efficient operating model. 
Now we will discuss an equally important aspect: how to establish a strategic discipline of systems integration led by APIs? 

[**Missed this article? No problem! Click here to read the full version.**](/en/new-operating-model/)

Many companies realize that the point-to-point integrations needed to build applications tend to accumulate over time. This creates technical debt, a fragile architecture, and an inability to respond quickly to constantly changing business needs.

#### To improve understanding, let's illustrate with the following example:

A company needs to develop a web application to provide real-time order status. Additionally, it needs to store order history so sales teams can provide customer service.
Now imagine that the company possesses its customers' data in... **SAP** and **Salesforce** (inventory data) and the data requested in your e-commerce system. 

In this case, the company could determine that its IT team participate and aggregate customer data, connecting the data from both systems – through code. Then, the aggregated customer data would be combined with the data collected in the e-commerce system to produce the order status and order history data – through yet another code. In this way, these two data sources would be connected to a web API application, and could be used through it.  

![](/wp-content/uploads/2019/07/WEB-APP-API-768x632-1.jpg)

## **The birth of the complicated "spaghetti code"**

The project created by the developers in the example above could be considered a success. After all, it would be launched on time, within budget, and would have the correct functionality. 

However, let's introduce a very common complication: the sales team requires that the same functionality run on their \[other systems\]. **mobile devices**because they frequently participate in negotiations outside of the business environment.
Therefore, the IT team is now tasked with creating a mobile application. But to do this, the developers, who use little or no code from previous projects, will have to redo almost all the work, which in itself does not represent a great result.

This rework is often justified by the pressure developers face to meet the numerous demands of various departments, which tend to have a large workflow.

When consultants are involved, the problem worsens because they tend to focus on the short term. Often, they disregard the fact that the project needs good planning, as changes during the project execution period can be very expensive or even impossible. In this scenario of constant changes, maintaining agility becomes almost impossible. It is then that the pattern known as "spaghetti code" takes shape, as illustrated in the following figure.
![](/wp-content/uploads/2019/07/CODIGO-ESPAGUETE.jpg)

## **The impacts of "spaghetti code"**

With each subsequent project, more **non-reusable code** is created. This undermines all the learning from the first project. And besides demotivating developers, it also creates an unmanageable, non-replicable, and expensive codebase, laying the groundwork for stifling agility.

Applications are now tightly coupled to underlying endpoints. If anything changes with these endpoints or with business requirements, the entire application or key parts of the code will need to be rewritten.
This means that the next application to be built, even using similar data, will have to be built from scratch. It also means that development teams will need the same system experts to obtain the data from the source systems, adding more time to project delivery. 

And, since nothing is recorded for security, governance, and management, visibility into what is really happening is lost. This can lead to security vulnerabilities over time.

Therefore, a good way to carry out this process is through a strategy called **API-led connectivity.** It enables the new IT operational model. When we think about transitioning to a production + consumption model, there are two essential resources that must be packaged, in the name of a **well-designed API** . These are: IT resources and their capabilities.

## **Integration between systems with API-led connectivity**

![](/wp-content/uploads/2019/07/API-LED-CONNECTIVITY.jpg)
A **API-led connectivity** It is a term used by [MuleSoft](/en/mulesoft/), which expresses the method of integration between systems based on the adoption of **Public and private APIs** to connect all of a company's systems.
\[idea\][We've already written an article here on the blog about API-led connectivity. Click here to check it out!](/en/systems-integration/)\[idea\]

In this approach to connectivity, APIs are classified into three types:

- System APIs
- Process APIs
- experience APIs

Below we will detail each of these API types and their functionalities.

### **System APIs:**

Their core systems of record – such as ERP, billing and customer systems, proprietary databases, and others – are often not easily accessible because they have proprietary connectivity interfaces and **require highly specific skills** . And these skills are not readily available within the company – typically a major obstacle.

System APIs provide a way to isolate the user from the complexity or any changes in the underlying systems. This is because, once created, many users can access data without needing to learn the underlying systems. The key advantage is being able to reuse the APIs in multiple projects. 

For example, a client API to leverage a mobile application or a partner portal. Another important point is that systems specialists are no longer needed for every project that requires access to this system. 
It is the IT department that maintains and controls these APIs, given the importance of the underlying systems. The scope of a system API is to open and provide consistent managed access to the underlying data, without attempting to heavily filter the data or combine data from other sources.

### **Process APIs:** 

They naturally offer a view of the customer, order status, prescription status, etc. At this layer, **APIs interact with and model data within a single system or between systems** (breaking down data silos). Thus, they are created without depending on the source systems from which this data originates, as well as the destination channels through which this data will be delivered.

For example, customer information can be exposed through 2 or 3 system APIs. In this way, a customer view is created by combining the fields from these three APIs. 

This customer view can be a canonical model, or it can be specific to the domain in which the API is embedded. The customer API is more consumable because it restricts all possible information to only the needs of a set of applications. Also, it's easier to add new fields or create a different customer view for a different domain.

### **Experience APIs:**

Here, data is consumed across a wide range of channels. Each of which requests access to the same data, but in varying formats. For example, a retail branch point-of-sale system, an e-commerce website, and a mobile shopping app may all want to access the same customer information fields, but each will require that information in very different formats. 

Experience APIs are the means by which data can be reconfigured. This makes it easier for your target audience to consume, all from a common data source, instead of setting up separate point-to-point integrations for each channel.

Generally, an experience API is created using API design principles, in which the API is designed specifically for the user experience.

With this approach, the business will be led by APIs. Allowing the composition, recomposition, and adaptation of building blocks (APIs) to meet changing business needs. 

With **API-led connectivity** , when IT teams need to create a mobile app, they will have **reusable resources.** This tends to eliminate all the work needed to create them. And it will also be much easier to innovate and add information such as, for example, the shipping status of a product. This feature is similar to what was already programmed regarding access to the order status or history.

## **Mobile and web applications built with an API-led connectivity approach.**

Using an API-led connectivity approach to deliver IT projects can help meet deadlines. Another advantage is keeping the budget of initial projects under control by creating reusable resources. These resources are crucial for saving time and financial investment for the company.

Through this approach, an infrastructure designed for change is created, with built-in visibility, compliance, and governance. And most importantly: this will meet the business needs, which is sustained agility in the long term. 
A **API-led connectivity** It allows you to move quickly on your first project. This accelerates progress even further from your second project onwards, thanks to reusable resources and integrated organizational capabilities. In short, this approach frees up resources, allowing you to innovate and move quickly.

In the final article of this series, we'll discuss how to change your IT team's mindset. We'll explore how to create a Center **for Enablement (C4E).** This center focuses on putting valuable assets in the hands of the entire organization.

Implementing an API-driven system integration strategy becomes much easier when supported by the technology offered by MuleSoft. It's no coincidence that MuleSoft has been the choice of the world's most innovative companies.

The know-how of **Vertigo on Mulesoft** We have been contributing to the implementation of the Anypoint Platform in companies since 2012. IT teams are able to increase productivity by up to 300%.
Fill out the form below, chat with our experts, and request a live demo of the tool.
