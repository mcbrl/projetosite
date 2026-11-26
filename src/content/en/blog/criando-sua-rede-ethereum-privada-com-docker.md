---
title: "Creating Your Private Ethereum Network with Docker – Part 1"
slug: "criando-sua-rede-ethereum-privada-com-docker"
date: "2018-08-20T14:08:37"
modified: "2018-08-20T14:08:37"
status: "publish"
author: "admin"
excerpt: "This is the first article in the series “Creating Your Private Ethereum Network with Docker”. We will cover topics such as using the official Docker images (“ethereum/go ethereum”), using the local Wallet, provisioning Ethereum nodes in public clouds, and deploying a simple application. This is the introductory part of the topic. You can get the […]"
categories: ["blog", "devops"]
tags: ["docker", "docker-blockchain", "docker-blockchain-ethereum", "docker-ethereum"]
featuredImage: "/wp-content/uploads/2018/08/homestead-ethereum2.png"
wpId: 2810
originalUrl: "https://vertigo.com.br/criando-sua-rede-ethereum-privada-com-docker/"
contentSource: "rest"
lang: "en"
seo:
  title: "Create your own private Ethereum network with Docker now!"
  description: "The Ethereum network features extreme levels of fault tolerance, guarantees availability (zero downtime), and ensures the inviolability, immutability, and non-censorship of stored data. Learn how to create one here!"
  canonical: "https://vertigo.com.br/en/criando-sua-rede-ethereum-privada-com-docker/"
  ogImage: "/wp-content/uploads/2018/08/homestead-ethereum2.png"
  robots: "index, follow"
---

*This is the first article in the series “Creating Your Private Ethereum Network with Docker”. We will cover topics such as using the official Docker images (“ethereum/go-ethereum”), using the local Wallet, provisioning Ethereum nodes in public clouds, and deploying a simple application.*

*This is the introductory part of the topic. [You can get the complete tutorial by clicking here](https://materiais.vertigo.com.br/rede-privada-ethereum-docker) . But, if you just want an overview of the importance of the subject, feel free to read our content written by our CTIO – André Fernandes, who is a leading authority on the subject! Let's go?*

*Please note that this is advanced content. If you don't know much about the subject yet, we recommend that you read the articles below!*

[Learn what Docker is here!](/en/What-is-Docker/)

[Discover what Blockchain is – The future is now!](/en/What-is-blockchain-and-how-does-it-help-generate-business/)

## **Introduction**

Both of these technologies – blockchain and Docker – have been in intense focus in recent years.

Docker has gone far beyond the hype and has become the *de facto* standard for containers, just as the use of containers is almost ubiquitous in the workflow and development delivery pipelines today (except for those who have been hiding in a cave).

Blockchain, on the other hand, has not yet become popular as a solution in several sectors for which its wonders have been promised. Besides cryptocurrencies (like Bitcoin), blockchain technology has generic applicability in various scenarios (property titles – digital or not, voting, identity and privacy management, among many others). From an entrepreneur's point of view, a modern blockchain network can be seen as a platform upon which a whole new set of products can be built.

Warning: these articles assume some familiarity with basic blockchain technology concepts, but do not explain them in detail at any point.

[Are Docker containers insecure? Of course not! Learn more here!](/en/Truths--myths--modernization-of-containerized-applications/)

## **About Ethereum**

The Ethereum network was designed to deliver the concept of a platform, going beyond the concept of currency and transactions of Bitcoin. According to Ethereum's own documentation:

> *Ethereum is an open blockchain that allows anyone to build and use decentralized applications on top of this technology.*

Therefore, viewed as a platform for decentralized applications, the Ethereum Network presents “…extreme levels of fault tolerance, guarantees availability (zero downtime) and ensures the inviolability, immutability and non-censorship of stored data.”

## **But is it "the network" or "a network"?**

This question means: Is there a single Ethereum network (“the” network) or an infinite number of networks? Well, both are correct.

Yes, there is “the” Ethereum Network, public and decentralized, not controlled by anyone in particular. This main Ethereum network (also known as the “mainnet”) is the one we usually refer to when we say “Ethereum Network”.

There is also a "sister" network to the *mainnet* called *testnet* , where tests can be conducted without compromising real resources. There is also a *fork* of the Ethereum network known as *Ethereum Classic* , but that's [another story](https://www.coindesk.com/ethereum-classic-explained-blockchain/).

While in a traditional cloud platform you "own" the nodes (control and trust) where your applications run, in a public blockchain the opposite is true: it is entirely made up of participants you don't trust, but who build consensus in a reliable way (this is the "miracle" of blockchain). The meaning of a blockchain being public is this: anyone can read, transact, and participate in the search for consensus (simply by using a [wallet](http://ethdocs.org/en/latest/account-management.html#using-mist-ethereum-wallet) , for example ) – its value lies in decentralization.

This is a little hard to understand at first: nobody controls all the nodes in the network, but at the same time, developers need to evolve the software and its protocol – that is, the software is updated from time to time because everyone agrees to do so. This explains the concepts of "soft fork" and "hard fork," but the whole purpose is always to preserve the intrinsic value of decentralization while evolving the software running on all nodes.

### Can anyone create?

Since Ethereum is open-source software, there is nothing preventing anyone from creating a new public network – it just doesn't make sense to do so. From a technical point of view, each blockchain network differs essentially from another in its "genesis block" (even with the same algorithms and protocols) – but the value of a network lies in its widespread use (i.e., decentralization).

Private blockchain networks, on the other hand, can be instantiated for any purpose imaginable (there are a large number of plausible scenarios). To reiterate, simply define a "genesis block," fire up its nodes, and put them to work.

[It's easy to find heated discussions](https://blog.ethereum.org/2015/08/07/on-public-and-private-blockchains) online about whether or not to use private blockchain networks as business solutions (why use a decentralized and inefficient solution if you *trust* the participants), but from the perspective of solution developers, it's highly desirable to be able to completely create and destroy their scenarios – several times a day. *This is the case for which this series of articles was written.*

## **Docker Docker Docker**

Yes, I'm a fanboy. How could I not be?

**By acquiring our complete material** , you will learn how to set up a private Ethereum network – locally or in the cloud – using containers. Although there are several offerings from public cloud vendors for provisioning private blockchains (such as [Azure's Blockchain as a Service](https://azure.microsoft.com/pt-br/solutions/blockchain/) ), the container approach is much more sensible from a developer's point of view. In the time it takes for a set of VMs in this model to be provisioned (even with automation), it's possible to create and recreate a *swarm* of containers repeatedly.

You already know the advantages, and now it's time to get your hands dirty. **Download our complete material by clicking on the image below** and boost your knowledge!

[![](/wp-content/uploads/2018/08/CRIANDO-SUA-REDE-ETHEREUM-PRIVADA-COM-DOCKER.png)](https://materiais.vertigo.com.br/rede-privada-ethereum-docker?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

Until later!
