---
title: "The evolution of APIs: the journey from RPC to SOAP and XML."
slug: "a-evolucao-das-apis-a-jornada-de-rpc-a-soap-e-xml"
date: "2022-11-18T16:44:01"
modified: "2022-11-18T16:44:01"
status: "publish"
author: "admin"
excerpt: "Does your company use APIs? Today's technological reality makes us dependent on interconnected applications, which can be massive and highly complex, but are also often built from reusable building blocks. We call each of these building blocks an Application Programming Interface, also known by the term \"API\". We interact with APIs every day, and sometimes […]"
categories: ["apis"]
tags: ["apis"]
featuredImage: "/wp-content/uploads/2022/11/Historia_das_APIs_BLOG_IMAGEM_DESTAQUE.png"
featuredImageAlt: "A história das APIs."
wpId: 161504
originalUrl: "https://vertigo.com.br/a-evolucao-das-apis-a-jornada-de-rpc-a-soap-e-xml/"
contentSource: "rest"
lang: "en"
seo:
  title: "The evolution of APIs: the journey from RPC to SOAP and XML - Vertigo"
  description: "Learn the history of APIs and how they are vital for improving the application integration process. Read more on our blog."
  canonical: "https://vertigo.com.br/en/a-evolucao-das-apis-a-jornada-de-rpc-a-soap-e-xml/"
  ogImage: "/wp-content/uploads/2022/11/Historia_das_APIs_BLOG_IMAGEM_DESTAQUE.png"
  robots: "index, follow"
---

Does your company use APIs? Today's technological reality makes us dependent on interconnected applications, which can be massive and highly complex, but are also often built from reusable building blocks.

We call each of these building blocks an Application Programming Interface, also known by the term "API".

We interact with [APIs](/en/APIs-in-the-financial-sector%3A-see-5-reasons-to-use-them./) every day, and sometimes we don't even realize it. When we order food through iFood, take an Uber, or browse Netflix, we're using APIs. We use an API when we show our phone's camera on Instagram or log into an application via Google or Facebook. However, APIs are the result of the natural evolution of how computer software is written. Understanding what APIs are and how they came about is fundamental to your ability to thrive as a software architect, application developer, or IT decision-maker.

We prepared this article based on a translation of much of the content from the [ebook](https://konghq.com/resources/e-book/apis-rpc-soap-xml) produced by our partner, Kong. Learn more about the history of APIs and their evolution.

Good reading!

## APIs: building blocks of modern applications

An API is software that allows a computer program to communicate with another application to exchange data or consume some type of service. These programs can run on the same computer or on different computer networks separated by thousands of kilometers.

## How APIs work

An [API](/en/API-integration-creating-connectivity-in-the-industrial-sector/) connects an application that makes the call (the client) and an application that is called (the service).

The "service" can be a web server, a database server, middleware, or even a monolithic application written in COBOL. As far as the client is concerned, it only needs to know how to communicate with the API (endpoint URI, protocol, required parameters, etc.) without worrying about the underlying implementation of the service.

The API is the program's logic for authenticating, validating, verifying, and understanding user input. It then processes the request and responds to the client.

The client begins by sending a request – a query to the API endpoint.

After the API authenticates the client's identity, it validates the request message and performs further processing. Then, the API passes the request to the service (sometimes called the "back-end" or "back-end application").

The service executes its operation based on the request, likely retrieving some requested data. It then returns a response message to the API, which includes the operation status (success or failure) and the requested data.

## APIs in the distant past

Unlike many other developments in information technology, the API was not invented by a single individual or company, nor did its evolution and adoption occur with the breakneck speed we typically see in today's technological landscape. Instead, the roots of the API predate the era of the modern personal computer, going back to the very beginnings of computing.

## Pre-API Period

During the 1960s and 1970s, computer programs were written for large mainframes and minicomputers. Programming and data entry began with punch cards. This then shifted to terminals that would interface humans with the computer.

There was no dedicated network operating system. The internet was still under construction, and programs ran primarily within the confines of the physical computer. At the time, programs were large, monolithic code documents that you typed onto a floppy disk.

Having left this and other batch jobs with the computer operator to run overnight, you could only hope they would execute without errors. Programming languages ​​evolved as operating systems did. They began to incorporate debugging instructions and no longer needed to perform low-level tasks such as physical memory allocation.

Programs could then use pre-compiled code libraries included in the operating system. This was the first step towards code reuse.

## Subroutines and functions

Next came the use of subroutines, dividing the code into manageable parts and calling these parts from the main program. This development significantly helped to clean up existing code and promoted collaboration among developers.

People could write a subroutine based on specific criteria, which other programmers could then include in their code. Subroutines soon gave way to their more versatile cousins: functions. A function can accept one or more arguments (input data) and produce a predictable output.

Functions have been incorporated into programming languages ​​for everyday tasks (such as numerical calculations or text manipulation). Developers can call these functions from their code.

## Scripting languages

Operating systems also exposed their scripting capabilities, which system administrators could use to automate the most common workflows. These reusable scripts would include a series of operating system commands to perform specific system administration tasks. While not full-fledged programming languages, scripting languages ​​had all the elements of high-level programming: looping, conditional branching, and user input validation.

Since the operating system executed the script, there was no longer a need for compilations and runtimes.

## Programming Languages ​​for PC

When the PC era began in the early 80s, more and more programming languages ​​became available on personal computers.

One of the first native PC languages ​​was Microsoft BASIC. This interpreted language is supplied with the Microsoft DOS operating system. Other programming languages ​​such as C, Pascal, and Fortran soon followed suit. Commercial software development began to emerge when vendors started writing applications for the corporate market and mass consumers.

These applications had graphical user interfaces, made use of newer hardware such as mice and graphics cards, and accessed low-level operating system code libraries. Program packages would be divided into core binaries and supporting files.

Binaries initialize and load the application into memory. If a requested function was not part of the application binary, it would also access the supporting file and load it. These were the seeds of client-server computing.

## APIs in the 90s

A significant change occurred in the late 80s and early 90s when Microsoft introduced the Windows operating system.

At the time, Windows was not popular and did not increase in popularity until the release of Windows 3.1 much later.

## Using APIs with Windows

Windows was one of the forerunners of the modern, modularized, and reusable programming paradigm.

It introduced the use of dynamic link libraries (DLLs) that encapsulated different program modules. Windows, or Windows-hosted applications, could load or unload these DLLs into memory during execution. To distribute software, custom DLLs needed to be packaged with the application installer, but the system-provided DLLs would already be present on the target machine. Meanwhile, Microsoft exposed more operating system functions as part of the Windows Software Development Kit (SDK).

The development community can use these functions to access hardware components, perform low-level storage operations, or render advanced graphics assets. Even today, SDKs are still offered by modern operating systems such as iOS or Android.

Many applications also provide their libraries through language-specific SDKs. Two other significant developments occurred during the early to mid-90s: the widespread adoption of Object-Oriented Programming (OOP) and the rise of the networked enterprise with client-server computing.

## Object Oriented Programming

The wider adoption of OOP in the latter part of the century helped developers create genuinely reusable components. An object is a piece of software code that encapsulates behavior and data that are exposed through functions.

Objects were instantiated from classes, which were the blueprints for the objects. For example, a developer could easily create three button objects from the same command button class and use them in a dialog box object created from a dialog box class; the programmer wouldn't have to write any command button or dialog box code from scratch because the classes would already be provided by the programming language.

In the call application, the programmer writes code for events when a user interacts with the dialog box or buttons. The event code, for example, might call the methods of the associated object to save the input data to a file.

The rise of OOP greatly facilitated enterprise software development. Teams would create class libraries that they could use in subsequent projects. Programming languages ​​emerged with rich class libraries for interacting with hardware, graphics, printers, file systems, or even the network.

Along with the rise of OOP, we saw a growing popularity of network-capable operating systems, such as Novell's Netware, Microsoft's Windows NT, and the first version of Linux in the early 90s. Most servers connected to the Internet today run on some form of Linux.

The adoption of the internet by the masses was well underway by the mid-90s. However, the average company was still far from running application workloads over the HTTP protocol. They used HTTP only for their public-facing websites. Internally, however, companies were beginning to create network-centric applications using the client-server model.

## Client-Server Computing

Early client-server computing used a two-tier architecture in which a server would run on a corporate network.

At the same time, users' workstations (the clients) would connect to it via TCP/IP or NetBIOS. The server could be a database server, an application server, or even a web server. In the mid-90s, this two-tier approach soon gave way when Microsoft introduced two new development technologies for client-server programming: Component Object Model (COM) and Distributed COM (DCOM).

## APIs in the early days of the Internet

The third phase of API evolution emerged between the late 90s and the early years of this century. Companies realized the potential of the internet to do more than just provide their publicly accessible corporate websites; they could use the internet to deliver application services.

Java had already been on the market for some time as an established product. Interactive Java applets were widely used as embedded objects in websites. The natural trend was to host the application middleware, in this case, a Java Application Server. These applications were known as Enterprise Java Beans (EJB) components.

## Enterprise Java Beans

EJB is a Java specification that allows developers to write distributed applications. EJB components are back-end applications hosted on an application server such as Apache Tomcat or IBM WebSphere. EJB applications can encapsulate business logic, scale with increasing demand, and be accessible with client applications written in Java.

The application server that hosts EJBs can also host servlets and Java Server Pages (JSPs). Users access the application through a browser, communicating with a web server.

The web server interacts with the application server to dynamically serve the application's pages. Because EJB components were portable, they could be hosted on any Java application server, thus allowing for scalability.

## Internet

At the beginning of the century, Microsoft launched one of its revolutionary software development frameworks: .NET. This new framework was a significant departure from how applications would be written. It came with a framework (the .NET framework) that included the Common Language Runtime (CLR). The CLR is the mechanism that takes care of the low-level services needed for any application (such as type safety, memory management, garbage collection, exception handling, security, or thread management).

.NET also came with an extensive class library (such as ADO.NET for database connectivity or ASP.NET for web applications). Programming languages ​​other than those developed by Microsoft could create .NET applications, as long as they were using the framework. Like Enterprise Java, .NET also allowed the creation of distributed applications.

## XML

Another development during this period was the eXtensible Markup Language (XML). XML is a data interchange mechanism that allows anyone to create a set of rules for encoding data. Data written in XML format can be read by both machines and humans. XML is a tag-based language, similar to HTML.

However, unlike HTML, XML tags can be anything – based on the XML schema – used to describe the data. For example, a data exchange use case for customer data might define an XML schema to include first name, last name, email address, and phone number. 

Using XML, data exchange between applications (and even between companies) suddenly became quite simplified. All they needed to do was agree on an XML schema for the data they would exchange through two communicating applications. The calling application would create an XML document to encode the input parameters for the remote application and send it over the network. The receiver would then use the same XML schema to parse the document and unpack the input parameters. The results would be returned using another XML document, perhaps even based on a different schema.

Distributed computing has matured, with different technologies and languages ​​available.

The development of application servers and platform-independent components shifted the focus of innovation to finding a common protocol that would allow humans and applications to access remote applications, regardless of where they were running. That protocol was HTTP, and the message format was XML, thus beginning the journey of web services.

## Web services

A web service is a standalone piece of software accessible via HTTP. The client application accessing a web service can run on the same server or, more commonly, on a different server communicating over the network. The client and the web service can be written in different languages ​​and run on different operating systems.

The reason why web clients and services can be platform- and language-independent is because they exchange information in XML. When a client wants to call a web service, it sends an XML message. The web service performs the requested operation and also sends the result back in XML. Communication between the client and the web service occurs via HTTP.

## Now ask yourself: are web services modern APIs?

The answer is yes. Web services are APIs because a web service exposes an application's data, performs some kind of operation to retrieve that data, and is invoked by a client. In addition to HTTP and XML, two other components are common to web services: SOAP and WSDL.

The Simple Object Access Protocol (SOAP) is a lightweight messaging framework for clients and services to exchange standardized XML data over a network.

It uses XML as its message format. SOAP is relatively rigid in how it stipulates the request and response syntax. For message transfer, SOAP uses the application-layer protocols HTTP or Simple Mail Transfer Protocol (SMTP). SOAP is still used by some web APIs today.

Web Services Description Language (WSDL) is an XML-based language for describing the functions of a web service. Remember that XML allows you to create custom message formats based on tags—WSDL is just that. This is a document that a web service uses to describe its functionality and that clients use to find a web service.

## Tight coupling versus loose coupling

In computer software engineering, tight coupling means that all parts of an application stack are so dependent on each other that you cannot change one part without making a major change to the other parts. For example, to publish an application as a web service, you need to ensure that it complies with the SOAP specification. The data is encoded as XML and uses HTTP for transport.

For example, if you want to publish a legacy application as a web service, but that legacy application only exposed its data in CSV format, this would mean extra work. You would have to change the application code to export its data as XML or write a wrapper to convert the CSV data to XML.

## How do I implement APIs in my company? Talk to Vertigo.

Vertigo Tecnologia specializes in implementing solutions involving API integration technology, thus generating growth opportunities for your company. Talk to our [team of experts](/en/us/) and learn about our solutions geared towards the API market.
