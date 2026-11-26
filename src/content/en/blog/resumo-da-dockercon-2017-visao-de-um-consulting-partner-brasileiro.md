---
title: "Summary of DockerCon 2017 – Perspective of a Brazilian Consulting Partner"
slug: "resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro"
date: "2017-11-06T17:47:28"
modified: "2026-02-02T20:42:47"
status: "publish"
author: "admin"
excerpt: "We're back to Vertigo Technology After a week in Copenhagen, Denmark, where the European edition of DockerCon took place, our teams received two backpacks full of goodies and stickers, much to their delight. Personally, I was a little worried that DockerCon EU wouldn't bring many new things, but since Vertigo didn't attend the American DockerCon […]"
categories: ["devops"]
tags: ["docker"]
featuredImage: "/wp-content/uploads/2026/02/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro.jpg"
wpId: 1674
originalUrl: "https://vertigo.com.br/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro/"
contentSource: "rest"
lang: "en"
seo:
  title: "Summary of DockerCon 2017 - Perspective of a Brazilian Consulting Partner - Vertigo"
  description: "We're back at Vertigo Tecnologia after a week in Copenhagen, Denmark, where the European edition of DockerCon took place. Two backpacks full of goodies and stickers delighted our teams. Personally, I was a little worried that DockerCon EU wouldn't bring many new things, but since Vertigo didn't attend the American DockerCon (in Austin), we went […]"
  canonical: "https://vertigo.com.br/en/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro/"
  ogImage: "/wp-content/uploads/2026/02/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro.jpg"
  robots: "index, follow"
---

We're back to [Vertigo Technology](/en/) After a week in Copenhagen, Denmark, where the European edition of DockerCon took place, our teams received two backpacks full of goodies and stickers, much to their delight.
Personally, I was a little worried that DockerCon EU wouldn't bring many new things, but since Vertigo didn't attend the American DockerCon (in Austin), we went there to check it out.
I'm sharing our findings here.

## The event

DockerCon took place over two days of simultaneous talks covering diverse areas of knowledge. The content was so rich that my company, Vertigo Tecnologia, sent two people – and even then, the choice was always difficult.
As interesting as the lectures on the two main days of the event were the... *summit* (exclusive events that took place before and after DockerCon) – *Organizer Summit* (for the organizers of *meetups* in the world), *Enterprise Summit* (for those interested in deploying Docker EE with the MTA strategy, which we will discuss later) and *Moby Summit* (for those interested in the ecosystem of open-source projects that comprise or revolve around Docker).
In addition to the lectures and summits, we also had... *Hallway Tracks* – scheduled one-on-one or group meetings to discuss topics suggested by the participants themselves. It was at a Hallway Track that I was able to speak personally with the director of MetLife, Jeff Murr, about his ambitious initiative to modernize traditional Java/JEE applications, which I will discuss later.
![](/wp-content/uploads/2017/11/docker_2-768x577-1.jpg)

## A DockerCon “Enterprise”…

More and more corporations are realizing that containerization is crucial to any IT modernization strategy, therefore success stories are multiplying worldwide. Unlike other DockerCons where the focus was heavily on strategies for... *early adopters*In both DockerCons of 2017 (Austin and Copenhagen), we had several presentations from companies that had implemented... **Docker EE** with success in very different scenarios. To mention a few names of corporate speakers: MetLife, Société Générale, GlaxoSmithKline and Intesa Sanpaolo.
We can classify these "enterprise" scenarios into several groups:

- **Developer Onboarding**By containerizing all the developer tools, the cost (and time) of onboarding developers on a project is significantly reduced, in addition to potentially bringing to the workstation the same build mechanism that will be used in the delivery pipelines;
- **CI/CD tooling**Containers not only simplify setting up a CI/CD (continuous integration and continuous delivery) environment, but also allow the agents of these environments (e.g., Jenkins slaves and GitLab runners) to be "dumb" and delegate their work to containers as well.
- **Container orchestration**With the number of containers in production increasing from dozens to hundreds (or even thousands), it's impossible to move forward without tools that bring sanity to environment management. This ecosystem is far from consolidated, and anyone who thinks it's just about Kubernetes or Swarm is very much mistaken (more on that later);
- **Modernizing Traditional Applications**While most vendors focus on serving the "greenfield" scenario of delivering microservices and containers, Docker pays special attention to the transition of traditional applications (even on the Windows platform);
- **Server Optimization**Corporations with private data centers or that rent infrastructure from providers like Equinix have a particular interest in optimizing the use of servers (virtual or otherwise). Container orchestrators (Kubernetes or Swarm, open-source or Docker EE) allow for a higher density of processes per machine and/or VM.

## …But Still Open-Source

Although DockerCon increasingly attracts "suits," its younger audience still maintains a strong interest in the latest news from Docker and Project Moby (an umbrella project encompassing various components that make up – and extend beyond – Docker CE and Docker EE).
Several "stars" of the Docker universe were present, showcasing their successful open-source projects:

- **Play-With-Docker**PWD is a fantastic publicly available web environment for Docker that eliminates the need for local tool installation, as its interface is 100% browser-based. With PWD, it's possible to run "mini-VM" environments with a Linux console and a Docker engine available in seconds, and to combine several of these environments into a single swarm. PWD has moved from AWS to Azure, but its URL remains the same: [http://play-with-docker.com](http://play-with-docker.com/)The new feature is that it's now also possible to start Windows Server VMs (!!!), using a different access URL: [https://microsoft.play-with-docker.com](https://microsoft.play-with-docker.com/)In this environment, it's possible to create hybrid swarms (Linux and Windows). The PWD was created by @marcosnils and @xetorthio.
- **Open-FaaS**Created by @alexellisuk, the Open FaaS (Functions as a Service) project allows you to create serverless functions supported by Docker images in a simplified workflow. The project can be viewed at \[link to project\]. [https://github.com/openfaas/faas](https://github.com/openfaas/faas)Since its showing in Austin, this project has been gaining more momentum – it's worth following.

## The Circus (Expo Hall)

I always hope that the Exhibition Hall will give me the opportunity to learn more about the products that make up the immense ecosystem of container solutions, both as a potential customer and as a potential partner/reseller/representative in Brazil. However, the Hall functions more as a distribution center for giveaways and raffles of toys and drones. Red Hat was the red hat factory, jFrog was the cafeteria, Sysdig distributed Legos and Drones, the rest were shirt manufacturers. The discussions we managed to have with vendors about their products were very superficial and rushed – not to mention that there was nothing new there.
At every DockerCon it's like this: the people who know what they're doing aren't in the Exhibit Hall – they're out there giving talks.

![](/wp-content/uploads/2017/11/docker_3-768x577-1.jpg)

## The News

The two major announcements made at the opening of each day were:

- **Kubernetes Integration**Docker EE will have native integration with Kubernetes, allowing this orchestration option to also benefit from the other advantages of Docker EE (which includes security throughout the delivery chain and ease of installation);
- **IBM as a global MTA partner**IBM is now among other global partners for the MTA (Modernize Traditional Applications) program.

Both pieces of news are important. Let's take them one step at a time:

### Docker EE + Kubernetes = Love Story

Born before Docker launched its orchestrator, Kubernetes was originally created by Google to solve the problem of delivering, scaling, and managing containers across multiple hosts. Docker's native Swarm Mode (and the core of Docker EE) came after Kubernetes had already established itself, but its arrival was not without controversy.
It is undeniable, however, that deploying a production cluster with swarm mode is much simpler than deploying the same cluster with Kubernetes. There is considerable functionality absorbed into a... *swarm manager node* (particularly in Docker EE) whose configuration is cumbersome in Kubernetes. Moreover, Docker preserves the developer experience by maintaining the usefulness in production of command-line syntaxes and descriptors such as docker-compose – in Kubernetes it is necessary to assimilate a whole redundant syntax, for example, for pods.
Personally, I *always* I recommend that corporate clients start with swarm mode – the learning curve is absurdly shorter. *When it comes to adopting disruptive technologies like containers, it is essential to reduce risks and friction points.*It's necessary to achieve those first wins as early as possible – in my opinion, starting with Kubernetes is a terrible choice.
The next Docker EE release will end the "torture" of this choice and will be able to handle both orchestration technologies. In the demos, we saw deployments working against nodes that were listed as cluster members by both APIs ("docker node ls" and "kubectl get nodes").
This environment with Swarm and Kubernetes will also be available to developers using Docker for Mac or Docker for Windows.

### IBM + Docker = MTA

The MTA (Modernize Traditional Applications) program lists several global partners capable of implementing a methodology for modernizing pre-existing applications for clients willing to validate the gains of containerization in real-world applications. IBM is one of them, offering the MTA strategy to migrate workloads to its own public cloud.
MTA's approach is the same one Vertigo applies to its clients – it's based on the fact that a typical corporate IT department spends most of its efforts on application maintenance (not development). Much of this cost is inherent in the use of now-obsolete technologies that cause friction between development and delivery (such as traditional JEE servers), or stems from the absence of automated testing and delivery pipelines.
With an MTA proof of concept, it's possible to migrate a traditional application to a containerized delivery model against a Docker EE environment in a secure and non-intrusive way, bringing sanity to the workflow and allowing resources to be allocated in the future to evolve the application.

## The Docker Captains

Docker Captains are a group of Docker experts with a well-known dedication to the developer community, a title bestowed upon them by Docker itself. With extensive field experience and independent vendor perspectives, any opportunity to speak with a Docker Captain is always rich in information and experience.
Several Captains were available for direct conversations on the Hallway Track. I had the pleasure of speaking directly with @chanwit, @jeffmur, @spiddy, and @bretfisher – in all cases, this interaction was more fruitful than the talks I missed at the same time.

![](/wp-content/uploads/2017/11/docker_4-768x577-1.jpg)

## Case Studies

DockerCon is known for the fantastic exchange of experiences among participants, but its latest editions have been enriched by the presence of "corporate champions"—leaders who have successfully implemented their innovative proposals in conservative IT departments.
The MetLife case was my favorite, as it was similar in many aspects to a challenge I faced in 2015 at the Central Bank of Brazil: migrating JEE applications from a "classic" WebSphere environment to Docker containers running the Liberty profile (a lightweight JEE runtime compatible with traditional WebSphere). It's interesting to observe how large corporations repeat the same challenges both there and here – and the requirements for the success of such an undertaking are essentially the same. But that's a topic for another article…

## Docker Certified Associate

A new certification for Docker professionals was launched at DockerCon EU, and is available to event attendees before the rest of the world.
Of course I wouldn't miss this chance!
It wasn't easy (the test requires knowledge of Docker's internal mechanisms, Swarm Mode, and Docker EE components), but Docker provided a study guide that was sufficient.

![](/wp-content/uploads/2017/11/docker_6-768x593-1.jpg)

New, more demanding certifications will be launched in the future, but this is certainly a good start for those who want to stand out in the market.
