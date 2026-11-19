---
title: "WSO2 e a Internet das Coisas"
slug: "wso2-e-a-internet-das-coisas"
date: "2015-11-24T07:00:48"
modified: "2015-11-24T07:00:48"
status: "publish"
author: "admin"
excerpt: "Quando falamos sobre integração de API, podemos citar uma grande variedade de tecnologias que fazem isso. Uma delas é a WSO2. Apesar dessa ferramenta open-source ter problemas, como a elevadíssima curva de aprendizado, algumas empresas como Ebay, Cisco e HP e outras, utilizam o WSO2 como ferramenta de Middleware. Mas, o que tudo isso tem a […]"
categories: ["mundo-das-apis"]
tags: ["api-management", "bps", "business-process-server", "data-services-server", "dss", "enterprise-service-bus", "esb", "message-broker-3-0", "wso2"]
featuredImage: "/wp-content/uploads/2015/11/wso2-e-a-internet-das-coisas.png"
wpId: 1576
originalUrl: "https://vertigo.com.br/wso2-e-a-internet-das-coisas/"
contentSource: "rest"
seo:
  title: "WSO2 e a Internet das Coisas"
  description: "Quando falamos sobre integração de API, podemos citar uma grande variedade de tecnologias que fazem isso. Uma delas é a WSO2. Em nosso artigo você vê uma relatório aprofundado sobre essa ferramenta. Confira aqui!"
  canonical: "https://vertigo.com.br/wso2-e-a-internet-das-coisas/"
  ogImage: "/wp-content/uploads/2015/11/wso2-e-a-internet-das-coisas.png"
  robots: "index, follow"
---

Quando falamos sobre integração de API, podemos citar uma grande variedade de tecnologias que fazem isso. Uma delas é a WSO2. Apesar dessa ferramenta open-source ter problemas, como a elevadíssima curva de aprendizado, algumas empresas como Ebay, Cisco e HP e outras, utilizam o WSO2 como ferramenta de *Middleware*. Mas, o que tudo isso tem a ver com **internet das coisas**?

## **Confira recursos do WSO2: Integração e Orquestração com processos de Internet das Coisas.**

A **Internet das Coisas** está promovendo novos modelos de negócios em uma variedade de mercados. Vemos exemplos, cotidianamente, no transporte, saúde, automotivo, fabricação e outros. Entretanto, a implementação da Internet da Coisas, depende de integrar informações dos dispositivos com os sistemas e a habilidade de gerenciar essas informações. A WSO2 possui funcionalidades na Plataforma de Integração que melhoram o serviço e a orquestração de processos para as aplicações em IoT (*Internet of Things*) e são:

- **WSO2 Message Broker 3.0 e WSO2 Enterprise Bus (ESB WSO2) 4.9**: As versões suportam *Message Queuing Telemetry Transport* (MQTT). Este, é um protocolo de mensagens leve, amplamente adotado para a conexão de dispositivos, sensores e *gateways*.
- **WSO2 Business Process Server (WSO2 BPS) 3.5**: Possui o motor *Open Source Activiti* para gerenciamento de processos de negócios (BPM). Este, faz uso do *Business Process Modeling Notation (BPMN) 2.0*, que é reconhecido como um dos mais abrangentes *softwares* para modelagem de processos.
- **WSO2 Data Services Server** **(WSO2 DSS) 3.5**: Adiciona suporte para o protocolo *Open Data* 4.0 (OData), fornecendo assim, a capacidade de consultar dados de uma variedade de fontes via padrão APIs RESTful, abertas. Esses recursos podem trabalhar tanto em dispositivos móveis, tanto quanto em sistemas Web, seja em nuvem ou não.

![](/wp-content/uploads/2015/11/das-overview.png)

## **A otimização dos novos recursos**

Para auxiliar o WSO2 Message Broker, WSO2 ESB, e WSO2 BPS e o **WSO2 Application Server**, a Plataforma de Integração também inclui o WSO2 API Manager. Isso permite o gerenciamento de API sobre os dispositivos que estão conectados e as mensagens que estão sendo trocadas. Com 2,2 trilhões de transações de clientes por ano na plataforma, a WSO2 oferece a escalabilidade e confiabilidade para lidar com grandes volumes de interações voltadas para o IOT.
Além disso, todos os produtos da plataforma estão totalmente habilitados para utilização em *Cloud,* de modo que o mesmo software pode ser implantado em servidores dentro de casa (*on-premises*), ou na nuvem. Isso proporciona flexibilidade na implantação que algumas empresas exigem, pois preferem ter ambientes híbridos para suas soluções.
“*Cada vez mais, estamos vendo os clientes corporativos globais padronizando nossa **Plataforma de Integração WSO2**, para suas implementações da Internet das coisas.* Estes, vão desde o transporte de automóveis, indústria transformadora, construção, saúde, comunicações e cidades inteligentes”, disse Edgar Silva, VP Latam WSO2.
“*Com a adição do suporte para MQTT para se conectar com dispositivos da **Internet das coisas**, BPMN 2.0 para modelagem de processo IoT-aware, e OData 4.0 para APIs de dados IoT, estamos construindo nosso compromisso de oferecer tecnologias padrão da indústria que abordam empresas com demandas de solução IoT.*”, reforçou Edgar Silva.

## **WSO2 Message Broker 3.0**

O **WSO2 Message Broker** é um servidor que apresenta suporte à alta disponibilidade (HA). Ele também possui a capacidade de escalar para vários servidores dentro de um cluster, e, consequentemente, gerenciar os pontos de falha. Ele também é projetado para gerenciar mensagens persistente que estão na fila, assinantes ou até ataques.
Nessa versão 3.0, o **Message Broker** tem novos recursos e aprimoramentos para oferecer às empresas uma arquitetura escalável. Isso tem intuito de gerenciar facilmente o volume elevado de mensagens e as demandas das soluções projetadas.

- O **protocolo MQTT** conecta dispositivos e sensores remotos. Dessa forma, uma comunicação máquina-a-máquina (M2M) que pode gerar milhões de eventos simultâneos por segundo.
- Um novo *plug-in* para banco de dados relacional, permite que os desenvolvedores configurem bancos de dados relacionais. Isso facilita o armazenamento de mensagens.
- Escalabilidade baseada nos recursos de alta disponibilidade (HA), para dimensionar facilmente o sistema de mensagens. Isso, com base no crescimento de mensagens. Isso foi introduzido pela primeira vez na versão **2.0 do *Message Broker***.
- Nova funcionalidade para a coordenação de *cluster* de servidor. Ela elimina a necessidade de tecnologias de terceiros, como *ZooKeeper*, que reduz a complexidade e manutenção de implantação demandas.

## **WSO2 Enterprise Service Bus 4.9**

**WSO2 Enterprise Service Bus (ESB)**, se baseia no *Apache Synapse ESB* para fornecer uma plataforma de mediação leve e altamente configurável. O WSO2 ESB permite que os administradores e desenvolvedores possam, de forma simples, configurar as mensagens, as conexões, a transformação, o agendamento de tarefas, o balanceamento de carga e muito mais. Além disso, ele suporta diversos padrões de integração e permitir a seleção de transporte, mediação baseada em regras, e mediação com base na prioridade de requisitos. O WSO2 ESB é projetado para transmitir grandes conjuntos de dados de forma assíncrona e *non-blocking*.
**WSO2 ESB 4.9** oferece vários recursos novos que suportam a integração com projetos de Internet das coisas, entre eles:

- Além de MQTT, eles incluem o HTTP, HTTPS, Java Message Service (JMS), Health Level 7 (HL7), Kafka, Apache CXF e protocolos RabbitMQ.
- A nova loja WSO2 Enterprise Service Bus (ESB), oferece os mais variados tipos de Connectors, disponíveis para Download. Estes, interagem com a funcionalidade e dados de um produto. Isso permite que seus clientes interajam com as APIs de serviços, como eBay, GitHub, Salesforce e Twitter.

## **WSO2 Business Process Server 3.5**

**WSO2 Business Process Server** fornece abordagem de nível empresarial para o gerenciamento de processos de negócios de forma eficiente. Tudo é alimentado pelo motor *BPEL Apache Orchestration Director Engine. Ele* permite aos desenvolvedores implementar facilmente os processos de negócios, assim como modelos que utilizam a **Web Services Business Process Execution Language (WS-BPEL)**. WSO2 BPS possui um console de gerenciamento gráfico baseado na Web. Este, permite que usuários facilmente implantem, gerenciem e visualizem processos e tarefas.
Com a versão **3.5, WSO2 BPS** acrescenta o *motor Activiti BPM*, que suporta BPMN 2.0, a especificação reconhecido como uma das abordagens mais *IoT-aware* para processo de modelagem. Assim, desenvolvedores têm a flexibilidade de usar WS-BPEL ou BPMN 2.0 para escrever seus processos de negócio, dependendo de suas necessidades. Além de Activiti, WSO2 BPS 3.5, enriquece o ambiente BPMN 2.0 com:

- **Um aplicativo da Web personalizável para visualização e gerenciamento de processos e tarefas BPMN.**
- **Suporte de geração de formulário de tarefas do usuário BPMN.**
- **Funcionalidade de publicação de estatísticas de tempo de execução.**
- **Relatórios dashboards para BPMN e tarefas humanas.**

## **WSO2 Data Services Server 3.5**

O WSO2-*Data Services Server* permite que programadores de banco de dados gerenciem *Web services* usando dados da empresa.
A versão 3.5 permite o uso de APIs RESTful para consultar dados de fontes variedade. Além de bancos de dados relacionais, permite que fontes de dados, anteriormente inacessíveis, passem a ser expostas como APIs. Isso inclui os bancos de dados SQL (NoSQL), sistemas de arquivos, sistemas de gerenciamento de conteúdo, entre outros. Usando o **OAuth 2.0** para autorização, o **WSO2 DSS 3.5** adiciona a capacidade de acessar dados de planilhas do Google através de uma API. As abertas, disponíveis através OData 4.0 e OAuth 2.0, trabalham através das muitas plataformas que as organizações utilizam.
Esperamos que você tenha gostado dessa grande ficha técnica sobre a WSO2. Como citamos no início deste conteúdo, existem diversas ferramentas que fazem integrações e APIs. A Sensedia e tem grande expertise em [Mulesoft](/mulesoft/), duas excelentes plataformas de APIs.
**Temos um super material para te oferecer.** Já que você parece interessado em APIs, veja este super conteúdo sobre o API Any Point da Mulesoft. Tenha acesso clicando na imagem abaixo!

[![](/wp-content/uploads/2015/11/Anypoint-Platform-Guia-de-Inicio-Rapido-CTA.png)](https://materiais.vertigo.com.br/mulesoft-anypoint-platform-guia-rapido?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
