---
title: "Best security practices for API usage."
slug: "as-melhores-praticas-de-seguranca-para-o-uso-de-api"
date: "2020-11-30T17:51:27"
modified: "2020-11-30T17:51:27"
status: "publish"
author: "admin"
excerpt: "As organizations begin their digital transformation, the first step in designing and executing their initiatives is often the adoption of... API approachThis, along with Agile and DevOps practices, is at the heart of the transformation. APIs provide a clear framework for implementing and driving DevOps, which brings agility to software releases. However, it is necessary […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-management", "apis", "devops", "devsecops", "https", "kong", "seguranca", "transformacao-cloud-native", "transformacao-digital"]
featuredImage: "/wp-content/uploads/2020/11/seguranca-aplicacoes.png"
wpId: 5377
originalUrl: "https://vertigo.com.br/as-melhores-praticas-de-seguranca-para-o-uso-de-api/"
contentSource: "rest"
lang: "en"
seo:
  title: "Best security practices for using the Vertigo API."
  description: "If these practices are not carefully considered, the agility of DevOps can result in hidden APIs, beyond the reach of corporate IT."
  canonical: "https://vertigo.com.br/en/as-melhores-praticas-de-seguranca-para-o-uso-de-api/"
  ogImage: "/wp-content/uploads/2020/11/seguranca-aplicacoes.png"
  robots: "index, follow"
---

As organizations begin their digital transformation, the first step in designing and executing their initiatives is often the adoption of... [API approach](/en/How-to-make-a-successful-API/)This, along with Agile and DevOps practices, is at the heart of the transformation. APIs provide a clear framework for implementing and driving DevOps, which brings agility to software releases.
However, it is necessary to ensure that APIs are validated and the application is not slow. With the agile methodology, the challenge arises of keeping all stakeholders in sync. Therefore, to stay up-to-date, it is necessary to verify and apply security protections dynamically.
If these practices are not carefully considered, the agility of DevOps can result in hidden APIs, beyond the reach of corporate IT. This creates an opening for cybercrime: according to Mark O'Neill, Vice President Analyst at [Gartner Research](https://www.gartner.com)The misuse of APIs will be the most frequent attack vector in 2022.
In other words, even if all your API usage is internal, security issues can still arise. With that in mind, we've compiled a list of best practices for securing an API or web service. Keep reading our article to find out more!

## Use HTTPS

The era of standard HTTP is over! With browsers flagging URLs that don't use a secure layer, it's time to do the same with your API. HTTPS uses Transport Layer Security (TLS) to encrypt traffic, including all communication between client and server.
For your API, this means that the content sent is protected by third parties, but more importantly, the access credentials are protected.

## Authentication

Speaking of access credentials, the simplest way to prevent unexpected use of your API is to ensure proper authentication. Authentication is how you allow or deny access to the API. Even those that are publicly available or free to use should have an authentication strategy.
Thus, it is possible to limit or remove those who abuse the API and also protect your users by giving them the ability to reset their credentials if necessary.

## Authorization

Authorization goes hand in hand with authentication: while the former is concerned with who the user of your API is, the latter focuses on what they have access to or what actions they can perform. For example, someone with a free subscription plan to your service may only be authorized to access a subset of your API.
Another example is social login: in integrations like this, the user authorizes your application to read data from their own profile on the social platform.

## Security in resources and endpoints

It is common to protect an endpoint or a set of endpoints through authorization. A digital transformation approach also aims to protect individual resources. 
This prevents misconfigured authorization at the endpoint level from reaching sensitive data, meaning that the data itself is not restricted by user type, but instead by resource controls that determine who can or cannot view it.

## Limit rate (*Rate Limit*)

When we think about security, we usually think about unauthorized access, but it can also be useful to think about it in terms of resource management. Creating a rate limit is a technique to protect your financial resources by limiting the use of an API, but also to ensure that your servers are not overloaded by a flood of unwanted simultaneous requests.
Many rate limiting relationships are time-based, but they can also be configured for a billing period or an intermittent procedure to limit large request flows. If you have ever encountered HTTP status code 429, then you have experienced rate limiting.

## Validate and sanitize the entrance.

One of the oldest points of attack is the input field. The way data is accessed may have changed, but not the need to validate any user input.
Validation *clientside* It's useful for preventing errors and improving the user experience, but your API also needs to validate and sanitize all inputs before running.
Data sanitization removes malware or malicious code, and validation ensures that the data meets the necessary criteria, which may be based on type, format, or even factors such as password structure.

## Show only what is necessary.

It might be tempting to take a shortcut and map data models directly to endpoints, but this approach can end up providing unnecessarily detailed responses, increasing bandwidth usage and exposing data that users don't need access to.
For example, consider a "/user" endpoint that returns to the user's profile. It might need some basic information, but not the password or access levels.

## Configure error messages

In addition to cleaning the data going to your API, you also need to clean the information coming out of it. Error messages play a crucial role in helping users understand that an error has occurred, but you need to ensure that no confidential data is leaked.
Providing end users with details about your internal code structure can create vulnerabilities for cybercrime. Be sure to configure error messages to provide just enough information to help users report problems, but not enough to expose the inner workings of your application or confidential data.

## Do not disclose sensitive information.

To protect sensitive data, ensure you do not expose details in JSON web tokens (JWTs) or cookies. JWTs give the illusion of security, but they can be easily decoded.
Therefore, it's necessary to avoid including user information that could be used to access your application. The same advice applies to URLs: make sure that query strings are not exposing confidential details.

## Assess your dependencies.

Currently, a large portion of each codebase contains libraries, middleware, and a variety of dependencies from external sources. While it's safe to assume that popular packages are battle-tested, this doesn't mean they are completely protected against vulnerabilities.
Make sure to assess your dependencies: are they well-maintained? Are you using the latest version? Is there a history of issues? And perhaps most importantly: do you really need a third-party library for what you're doing?

## Allow users to track and reset authentication keys.

An additional way to improve the security of your API is to allow users to reset their credentials and monitor their own usage. In fact, not allowing this action is a common mistake.
If a consumer of your API accidentally exposes their key or if it is misinterpreted, the problem now directly affects your API, not just the user. To prevent this from happening, create a way for them to manage their own access.

## Standardize authentication across your services.

We've seen major players like Google, Microsoft, and Amazon standardize the authorization and authentication process for their APIs. Follow their example and consider a centralized way to do this, such as using an [API gateway](/en/API-gateway-or-API-management/) , for example, or a dedicated entry point to handle authentication requests.

## Monitor your APIs with Kong Manager.

We use the Kong Manager tool in some projects here at Vertigo and consider it to be the ideal solution for securely managing your APIs. Developed with a consumer-centric approach, it has the necessary usability to make the user feel easily involved in their processes.
In this article, we learned that as software architectures become more complex, organizations need an easier way to manage their services. Kong Manager helps with team organization, policy adjustments, and performance monitoring with just a few clicks.
Ultimately, its enterprise plugins allow for the instant implementation of policies designed for global scale. Its Visual API Analytics monitors the health of the platform and the microservices API transactions that traverse it.

![](/wp-content/uploads/2020/11/testesteste.png)

With this tool you have the possibility to group your teams, services, plugins, customer management and whatever else you need, customized exactly the way you want:

- Create routes and services;
- Activate or deactivate plugins in seconds;
- Visualize the health of the entire cluster in a single pane of glass using intuitive and customizable dashboards.

To ensure the security of your APIs, it's essential to have support for the products offered in the cloud. Kong Manager allows for their unification, providing flexibility in creating new interactive features without the fear of blocking. We can also mention other benefits, such as:

### Dynamic management

It's possible to enable or disable plugins to instantly adjust service policies, routes, and consumers. Furthermore, there's integration between internal and external developers.

### Better governance

With Kong, you can organize your teams, services, and customers in a logical and efficient way. And, for added security, you can restrict access to the right people with fully customizable role-based access controls (RBAC).

### Optimized performance

Kong Manager monitors the health of your deployment globally or at a granular level, allowing you to identify and resolve performance issues in real time.

## Signing Off

Kong Manager's flexibility allows it to run in any environment, whether public or private cloud. It also offers the ability to apply open API specifications to your running microservices. With it, organizations avoid the misuse of APIs, reinforcing best practices.
If your API relies on third-party APIs, consider implementing a solution like Kong Manager to allow you to track, monitor, react to, and receive alerts when an API is not functioning as expected.
We are official partners of Kong and specialists in Kong Enterprise Edition (EE), working on implementation in large technological projects across various sectors such as industry, government, financial services, consumer goods, and more.
Companies such as Icatu Seguros, Ipiranga, ABInBev, and the Public Prosecutor's Office of Rio de Janeiro have benefited from our systems integration and API management strategies.
Count on us to design, create, and manage your digital projects, achieve more agile mobile applications, develop new business models, monetize your digital venture, connect your ecosystem, and lead your company to market success!
To learn more about systems integration, API management and security, and how all of this can help your business, [talk to our experts](/en/us/)We'll be happy to help you.

## Discover how Cloud Native your company is with this questionnaire and receive a report with acceleration proposals.

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/en/cloud-native-assessment/)'

## Fill out the form to speak with our experts and learn how these methods can help your company achieve success.**.**
