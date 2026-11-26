---
title: "Dynatrace & Liferay: 10 tips for getting the best results"
slug: "dynatrace-liferay-gestao-performance-digital"
date: "2016-11-09T07:26:58"
modified: "2026-02-02T20:38:42"
status: "publish"
author: "admin"
excerpt: "The words \"digital transformation\" can mean many things, right? And one of them is the difficulty in managing the applications that emerge in this increasingly digital landscape. In this post, we'll talk about how to manage and monitor your applications that are using the Liferay platform. We see that many companies are looking to transform […]"
categories: ["gestao-de-performance-digital", "plataformas-digitais"]
tags: ["dasboards", "dynatrace", "liferay", "liferay-7", "liferay-portal", "monitar-aplicacao", "monitoramento-das-aplicacoes", "monitorar-performance", "portal"]
featuredImage: "/wp-content/uploads/2026/02/dynatrace-liferay-gestao-performance-digital.png"
wpId: 1157
originalUrl: "https://vertigo.com.br/dynatrace-liferay-gestao-performance-digital/"
contentSource: "rest"
lang: "en"
seo:
  title: "Dynatrace & Liferay: 10 tips for getting the best results"
  description: "We're here to share how you can monitor and understand the health of your applications running on Liferay. Check out this post and discover these 10 tips!"
  canonical: "https://vertigo.com.br/en/dynatrace-liferay-gestao-performance-digital/"
  ogImage: "/wp-content/uploads/2026/02/dynatrace-liferay-gestao-performance-digital.png"
  robots: "index, follow"
---

The words "digital transformation" can mean many things, right? And one of them is the difficulty in managing the applications that emerge in this increasingly digital landscape. In this post, we'll talk about how to manage and monitor your applications that are using the Liferay platform. We see that many companies are looking to transform and enrich their digital experiences for customers, partners, and employees.

According to Forrester, the challenge of integrating numerous and complex back-end systems and data sources represents a real challenge, and a real threat, to the success of any company. And not knowing the health of these applications is an absurd risk that can jeopardize the entire operation of your business.

As Liferay and Dynatrace partners, we're here to share the knowledge we've gained from some of our clients who are using Dynatrace's Digital Performance Management Solution in their Liferay environments.
O [Dynatrace FastPack](https://www.dynatrace.com/technologies/liferay-monitoring/) For Liferay, along with screenshots that we will use throughout the post, are available for free at [APM Dynatrace Community](https://community.dynatrace.com/community/display/DL/Liferay+Portal+FastPack?_ga=1.161769468.1564637137.1449584425) and have been updated to work with Liferay version 7.

If you are interested in testing it, download and try it for 30 days and check the performance of your Liferay applications. You can download it here: [Personal License](https://www.dynatrace.com/en/products/dynatrace-personal-license.html?utm_medium=VertigoParceiro&utm_source=dynatrace&utm_campaign=devops&utm_term=agrabner)

## Tip 1: Liferay Overview

There are many positive aspects to Liferay, one of which is the ability to identify performance issues, and using Dynatrace makes this easy to do. In this example, we created this high-level dashboard to provide information about the main services in Liferay, such as Blogs, Media Gallery, and Search. Besides showing the health of page performance, this overview provides a window into the main metrics that may be affecting application performance. These include site load, database activity, and others. Furthermore, Breakdown provides a view of the layer where classes are consuming the most time, while Breakdown Agent highlights how much time and, more importantly, which resource – CPU, Database, Sync, Wait & Suspend – is being consumed at each layer.

Starting with the Liferay Overview, teams can quickly determine the nature of the problem at hand and move on to defining a diagnosis, involving only the people responsible, instead of putting everyone together in an unnecessary war room where each person will be more concerned with defending themselves than understanding where the problem lies.

All Dashboard widgets are interactive. For more information, you can delve into the context to determine what is causing the problem.

![](/wp-content/uploads/2016/11/Liferay-Overview.png)

## Tip 2: Understand your Pages and Portlets

Most portlets use the Liferay MVC framework. Identifying pages with a business transaction is not only key to delivering alerts on the dashboard, but also key to understanding the performance of different page types within your Liferay platform. Most portlets can be identified by any type of request or Resource Served. By identifying and monitoring portlets by Portlet Phase, a slow Wiki page can be identified as actually a slow Wiki action being Processed by the page. This narrows the scope of an issue and immediately provides teams with a systematic subset of data to better analyze the root cause of that slowness.

![](/wp-content/uploads/2016/11/Entenda-as-suas-Paginas-e-Portlet.png)

## **Tip 3: Understand your CMS**

Uma parcela muito grande de páginas embarcadas em solução Liferay poderão utilizar o Gerenciamento de Conteúdo Liferay (CMS). Dizer que as páginas em CMS são lentas não é tão útil, pois essas páginas podem ser páginas de site privado, páginas de usuários privados ou páginas públicas. Além disso, elas podem ser afetados por portlets individuais que estejam  presentes na página, certo? Em última análise, então, quando as “páginas são lentas”, é importante saber:

1.  Quais são essas páginas;
2.  se de fato estão apresentando um carregamento lento;
3.  Comparadas com quais outras páginas elas são lentas.

Isso ajuda a determinar se é por causa de um portlet específico na página ou se é algo mais amplo, como uma consulta lenta ou problemas em outras partes do código.

Dynatrace traz essa clareza através da identificação e análise de páginas CMS . A Visão geral do CMS fornece detalhes sobre o desempenho, rendimento e erros, através de múltiplas dimensões. Ele ainda permite que você saiba se há algum problema de saúde no Host ou nos processos que podem estar contribuindo para tal lentidão.

![](/wp-content/uploads/2016/11/Dica-3_Entenda-o-seu-CMS.png)

## Tip 4: What's in your cache?

Liferay uses Ehcache to help provide a fast user experience. A common rule is, if something can be cached, then it should be. What's not good is ignoring whether the cache is optimized. Often, the mistake happens when enabling the cache without being sure that it's optimized, or even if it's being used in the best way.

The Ehcache panel, with predefined limit alerts, is designed to provide insight into conscious cache usage. Specifically, this panel monitors the In-Memory Cache Occupancy Rate and the In-Memory Hit percentage for different Ehcache caches. If page performance is slower, it's very easy to determine if poor Ehcache configuration is contributing to the problem. After tuning the cache parameters, you can confirm in Dynatrace whether caching is behaving better and whether performance has improved or not.

![](/wp-content/uploads/2016/11/Dica-4_O-que-tem-no-seu-cache.png)

## Tip 5: Monitor processes and hosts

Not every problem is code-related. In fact, many problems are simply the result of a poorly defined JVM. And even with finely tuned code, a JVM host will always have a limit. The two host/process-related dashboards in Fastpack provide insight into the state of these components. The most common causes of latency in a Liferay system include GC pauses and misconfigured thread pools. The “Liferay Performance Process” dashboard monitors:

- the CPU status;
- The use of heap/GC;
- The impact of GC on response times;
- the JVM/Liferay Thread pool.

This information provides insight into when to adjust threads and memory, or when not to.

![](/wp-content/uploads/2016/11/Dica-5_-Monitorar-processos-e-hosts_1.png)

The Liferay Monitoring System Dashboard adds context to the host performance metrics landscape, such as host CPU, host memory, disk I/O, and network I/O, along with page performance and visitor load. Sometimes a problem is as simple as a full disk because log cleanup was incorrectly configured. With an eye on page and visitor load, it's easy to determine if the server/process is simply overloaded with traffic, or if there's a larger problem like low load.

![](/wp-content/uploads/2016/11/Dica-5_Monitorar-processos-e-hosts_2.png)

## Tip 6: Liferay Database Performance

In almost all applications, database performance still ranks as one of the biggest performance issues. Teams working with Liferay see the same thing in their commitment to their clients. Three of the most common database-related problems are:

1.  the query N + 1;
2.  slow consultations;
3.  Use of the JDBC pool.

The Liferay Database Performance Dashboard prominently features these and other database issues, including the host database status, which is relevant and significant.

![](/wp-content/uploads/2016/11/Dica-6_Desempenho-do-banco-de-dado-Liferay.png)

## Tip 7: Correct your worst performances.

The key to a great user experience isn't as simple as fixing what's broken. The key lies in having a consistent experience across the entire website. To provide a quality digital experience, we must focus on both guidance and prevention; that is, if the application isn't already down, fix it and improve its performance. What we really mean is: take a look at the worst-performing parts of your website.

Liferay's worst performers provide insight into the slowest operations. In the top half, there's a performance level and package comparison, comparing the fastest ninetieth percentile with the slowest tenth. Overall, this tells you where the latency is coming from, i.e., what the slowest activity is on your site. The bottom half contains what we like to think of as an improvement checklist. It includes requests such as:

- the slowest web requests;
- The slower actions that users call;
- the slowest web services;
- Slow database queries;
- Errors from the main client (browser/device);
- Errors in major applications.

Based on these lists, it's easy to prioritize where to spend time making improvements to existing websites, right?

![](/wp-content/uploads/2016/11/Dica-7_Corrija-seus-piores-desempenhos.png)

## Tip 8: Always return with an answer.

Don't leave your users stranded on a search. Liferay uses external search engines to do the work, and it's important to monitor the search status and performance. The Liferay search tool works with Elastic Search, but it can also be configured to use Solr. The Index search engine determines which of the two engines is implemented and delegates the search to the implementation best suited to that search engine.

Faceted search returns documents that specifically match the search query. Liferay Fastpack exposes the time spent on each facet and its impact on actual individual search operations. Additionally, it's important to monitor the overall performance of the Search portlet page by rendering the search view. By using Liferay Search Overview Dashboards, you can be sure your users won't get stuck without results, which is frustrating for those searching for something.

## Tip 9: Make sure your visitor has a good experience.

When you have guests, it's always important to provide them with both a warm welcome to your home and a heartfelt farewell. That's why it's important to monitor application logins and exits. Visitors log into your site and should feel welcome entering and leaving your site. The "Login" and "Logout" overview dashboard appears similar to the portlet pages described in Tip 2. Login can be identified in Liferay in two different ways: SSO access and non-SSO authentication, which monitors the performance of the login and exit action. There are also two signals in portlet views to monitor pages with this element: Entry by rendered view and entry by processed action.

![](/wp-content/uploads/2016/11/Dica-9_Faca-seu-visitante-ter-uma-boa-experiencia.png)

## Tip 10: JavaScript and CSS Files

Poor web page performance is often caused by ignoring best practices, a problem that has plagued website managers for years and continues to plague them today. User Experience Management (UEM) provides in-depth insight into the performance of the page as a whole, as well as its components and third-party objects. However, no matter how optimized your pages are, server-side issues can still create serious problems.

Fastpack Dynatrace Liferay provides two Liferay dashboards that you can use to monitor JS and CSS performance to ensure that backend latency doesn't ruin a good digital experience for your users. The Server Side CSS and JavaScript Overview dashboard tracks the performance of these individual web server elements across workloads. Client Side CSS & JavaScript tracks these same operations all the way to the users' browser.

![](/wp-content/uploads/2016/11/Dica-10_Arquivos-JavaScript-e-CSS.png)

## Conclusion

Delivering an amazing, high-quality customer experience is more than just having a beautiful, responsive, or even native interface for that device. It's about unlocking and utilizing the intrinsic value embedded in back-end systems and data sources to enrich and engage customers and employees in delivering the best digital experience. The Liferay platform provides a broad framework for achieving this engagement. However, to ensure that the delivered customer experience is exceptional, it's essential to have depth and breadth of understanding across all applications involved in that business solution.

So, did you enjoy the article? Feel free to share this post with anyone using Liferay.
