---
title: "What is FaaS (function-as-a-service)?"
slug: "o-que-e-faas-function-as-a-service-3"
date: "2018-05-27T09:37:15"
modified: "2026-02-02T20:41:51"
status: "publish"
author: "admin"
excerpt: "27 May 2018 Function as a Service (FaaS) is a cloud computing service that seeks to abstract away the issue of servers and machines where your programs run. In detail, it derives from philosophy. Serverless, which delegates to the cloud computing provider the responsibility of provisioning a platform that allows the client to develop, run, […]"
categories: ["blog"]
tags: ["faas"]
featuredImage: "/wp-content/uploads/2026/02/o-que-e-faas-function-as-a-service-3.png"
wpId: 3103
originalUrl: "https://vertigo.com.br/o-que-e-faas-function-as-a-service-3/"
contentSource: "live-html"
lang: "en"
seo:
  title: "What is FaaS (function-as-a-service)? - Vertigo"
  description: "Function as a Service (FaaS) is a cloud computing service that seeks to abstract away the issue of servers and machines where your programs run."
  canonical: "https://vertigo.com.br/en/o-que-e-faas-function-as-a-service-3/"
  ogImage: "/wp-content/uploads/2026/02/o-que-e-faas-function-as-a-service-3.png"
  robots: "index, follow"
---

###### Blog

# What is FaaS (function-as-a-service)?

- 27 May 2018

Function as a Service (FaaS) is a cloud computing service that seeks to abstract away the issue of servers and machines where your programs run. In detail, it derives from philosophy. [Serverless](/en/Learn-about-serverless-BAAS-FAAS-and-container./), which delegates to the cloud computing provider the responsibility of provisioning a platform that allows the client to develop, run, and manage applications. In this way, the complexity of a person having to assemble and maintain the infrastructure, the current standard in the entire corporate market, is reduced. By building an application with this pattern, we implement the Serverless theory and create a native microservices architecture.

# **Function-as-a-Service Providers**

FaaS is a very recent technology. It was first made available by Hook.io in 2014 and followed by major players: Amazon AWS Lambda, Google Cloud Functions, MS Azure Functions, IBM / Apache OpenWhisk, and recently even Oracle Cloud Functions. Using FaaS, your code runs in response to events you define. However, you don't manage or control the computing resources. You should focus on building applications that respond faster to changes and new information. An event that initiates the execution mentioned above would be one of parameters chosen by the developer, such as: a URL call, a timer, an image upload, or a connected device.

## **Benefits**

Another interesting point is the execution time-based billing model, unlike the costs of maintaining virtual machines with clusters and container hosts. You are charged based on what you executed, whether it's a few times a day or thousands of times per second. In very simple terms, FaaS is a way to execute a business rule based on some other event that triggers it. An example in Amazon Lambda for those who enjoy coding is the famous "Hello, world!": ====================================================================== ================ exports.handler = function (event, context) {    context.succeed('hello world'); }; ====================================================================== ================ When you call the URL associated with this function, it returns a page that says "Hello, world!", something that, for those who actually do the work, there really isn't a shorter code than this. Traditional developers don't worry about servers. Therefore, because it helps abstract the server, this technology is gaining traction. But this is different from DevOps, which understands and cares about the trajectory of the production environment.    

### **Key points to consider:**

1- A lot of innovation is emerging in this area, and things are always changing and evolving. 2- Remember: not every app will fit well into the FaaS model. 3- If you focus on microservices architecture, then FaaS was made for you.

## **Use Case**

USE CASE: Netflix, the world's largest streaming service for movies, documentaries, and series, present in over 130 countries, uses FaaS on AWS Lambda to manage its entire AWS infrastructure. It's worth noting that AWS is the largest cloud infrastructure provider for businesses. Taking this example as a starting point, many other companies are currently studying and structuring themselves to use this power to simplify code and support a high volume of transactions. Their services, which normally run hundreds of times per hour, would be ready to support a surge of millions of executions per second (the famous case of Black Friday). This is very valuable! Having the power to isolate logic into functions that scale without anyone having to rewrite code or build machines. Or even, easily ensuring that no exception can interrupt and stop your services at a crucial moment for the business.

## **Best Practices for FaaS:**

1- Reuse connections (HTTP, database, etc.) that were established in previous function calls. 2. Use environment variables to pass parameters to the function. For example, to configure access to storage. 3- Maintain control over your function's libraries and prevent changes and updates from altering its behavior. 4. Reduce the complexity of dependencies; prefer simple, fast-loading frameworks. 5. Avoid recursive code (functions calling themselves) because of the risk of uncontrolled function calls.

## **Some critical points of FaaS:**

Below, we highlight the critical points of using FaaS, to clarify whether its use is strategic for the business, even with some obstacles: 1- Being locked into a single cloud provider, as the companies we mentioned provide FaaS implementation as they see fit, and switching clouds can be complicated. 2- “Cold Start” is a phenomenon where a function takes a long time to start responding. It occurs in two situations. First, when you have just published or updated a function, because the cloud is bringing up the execution environment. Second, your function hasn't been called for a long time and the execution environment was shut down by the cloud provider. 3- You pay per call; the good thing about low prices in Production is that it can become a high price during Development, Testing, and Acceptance Testing, because you are paying for each call in the same way. 4- Each provider chooses how logs will be collected or displayed and may have a hidden cost for using monitoring services. FaaS shows promise as it diversifies options with the aim of improving application development. In a future article, we will delve into another perspective of the FaaS model coupled with Docker. Follow our blog and stay up to date with the latest news.

Share:

#### Don't miss out on the latest materials, case studies, and innovations from Vertigo.

#### Latest Articles

[

![How to use AI agents for credit analysis](/wp-content/uploads/2026/11/Agente-de-IA-analise-de-credito-300x167.jpg)

](/en/AI-agents-in-credit-analysis/)

[AI agents in credit analysis: faster decisions, healthier portfolios.](/en/AI-agents-in-credit-analysis/)

November 25th, 2026

![the role of MCP Servers and AI Gateway](/wp-content/uploads/2026/11/Papel-dos-MCP-Servers-e-do-AI-Gateway-300x167.jpg)

](/en/AI-agents--legacy-systems--MCP-servers/)

[How AI agents operate on legacy systems without requiring rewriting: the role of MCP Servers and the AI ​​Gateway.](/en/AI-agents--legacy-systems--MCP-servers/)

November 12th, 2026

[

![AI and People Management](/wp-content/uploads/2026/10/IA-e-Gestao-de-Pessoas-300x167.jpg)

](/en/AI-and-people-management--upskilling--reskilling/)

[AI and People Management: The Imperative of Upskilling, Reskilling, and Organizational Redesign](/en/AI-and-people-management--upskilling--reskilling/)

October 22th, 2026

![AI agents in financial compliance](/wp-content/uploads/2026/10/Agentes-de-IA-em-compliance-financeiro_-300x167.jpg)

](/en/AI-financial-compliance-agents/)

[AI agents in financial compliance: how to automate regulatory monitoring without sacrificing auditability.](/en/AI-financial-compliance-agents/)

October 14th, 2026

[

![](/wp-content/uploads/2026/09/IA-Conversacional-em-Seguradoras-Chatbot-vs-Agente.jpg)

](/en/Conversational-AI-in-insurance-companies%3A-chatbot-vs.-autonomous-agent/)

[Conversational AI in insurance companies: how to move from reactive chatbots to contextual agents.](/en/Conversational-AI-in-insurance-companies%3A-chatbot-vs.-autonomous-agent/)

September 28th, 2026

![Salary transparency](/wp-content/uploads/2026/09/equidade-salarial-vertigo-2026.jpeg)

](/en/Transparency-report-on-equal-pay--2nd-semester-2026/)

[Vertigo publishes Transparency and Equal Pay Report between Men and Women – 2nd Semester 2026](/en/Transparency-report-on-equal-pay--2nd-semester-2026/)

September 22th, 2026

#### Contact us:
