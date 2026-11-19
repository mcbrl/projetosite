---
title: "Qual a diferença entre microsserviços e APIs?"
slug: "diferenca-entre-microsservicos-e-apis"
date: "2019-01-22T12:14:10"
modified: "2019-01-22T12:14:10"
status: "publish"
author: "admin"
excerpt: "Os termos microsserviços e APIs vêm sendo utilizados de forma crescente nos últimos anos. Ambos são incrivelmente importantes e, considerando a forma como são usados, é quase como se os dois termos fossem intercambiáveis – embora, na prática, sejam tecnologias diferentes. Neste artigo, apresentaremos os dois conceitos e examinaremos a pequena sobreposição entre eles. Ao […]"
categories: ["blog", "devops", "mundo-das-apis"]
tags: ["apis", "integracao-de-sistemas", "microservices", "microsservicos", "mulesoft"]
featuredImage: "/wp-content/uploads/2019/01/Qual-a-diferenca-entre-microsservicos-e-APIs_.png"
wpId: 3694
originalUrl: "https://vertigo.com.br/diferenca-entre-microsservicos-e-apis/"
contentSource: "rest"
seo:
  title: "Qual a diferença entre microsserviços e APIs? - Vertigo"
  description: "Os termos microsserviços e APIs vêm sendo utilizados de forma crescente nos últimos anos. Ambos são incrivelmente importantes e, considerando a forma como são usados, é quase como se os dois termos fossem intercambiáveis – embora, na prática, sejam tecnologias diferentes. Continue lendo e descubra a diferença."
  canonical: "https://vertigo.com.br/diferenca-entre-microsservicos-e-apis/"
  ogImage: "/wp-content/uploads/2019/01/Qual-a-diferenca-entre-microsservicos-e-APIs_.png"
  robots: "index, follow"
---

Os termos **microsserviços** e **APIs** vêm sendo utilizados de forma crescente nos últimos anos. Ambos são incrivelmente importantes e, considerando a forma como são usados, é quase como se os dois termos fossem intercambiáveis – embora, na prática, sejam tecnologias diferentes.

Neste artigo, apresentaremos os dois conceitos e examinaremos a pequena sobreposição entre eles. Ao final, responderemos a pergunta: qual é a diferença entre APIs e microsserviços?

## O que é um microsserviço?

A palavra “microsserviço” refere-se aos serviços individuais em uma arquitetura de microsserviços. Por sua vez, uma arquitetura de microsserviço é um estilo moderno de arquitetura para web services. São um exemplo da “[Arquitetura Orientada a Serviços”, ou SOA.](/estrategia-de-api-nao-e-estrategia-de-soa) O SOA tornou-se uma alternativa popular à abordagem tradicional de construção de aplicações singulares e autossuficientes, as quais chamamos de monólitos. Quando se fala em **microsserviços** estamos nos referindo a uma funcionalidade que pode ser **dividida** em **fragmentos menores.**

*“Na MuleSoft, definimos microsserviços como um padrão de arquitetura para criar aplicações. Sob esse padrão, as aplicações são estruturadas como uma coleção de serviços ligeiramente ligados. Isso é diferente das aplicações tradicionais, ou monólitos, que são estruturados como artefatos autocontidos únicos.”*

A razão pela qual os **microsserviços** estão na moda hoje em dia, se dá pelo fato de que eles **tornam muito mais fácil o desenvolvimento, a integração e a manutenção de aplicações**.

Com microsserviços as funcionalidades individuais da aplicação são tratadas separadamente. Inicialmente, isso permite que você construa aplicações *step-by-step* e, posteriormente, trabalhe em cada elemento de forma individual. Neste sentido, é possível adicionar, melhorar ou corrigir, sem pôr em risco a aplicação inteira.

Os **microsserviços** são especialmente úteis para grandes empresas, pois **permitem que as equipes trabalhem em itens separados**, sem a necessidade de qualquer orquestração terrivelmente complicada entre eles.

Como o Amazon Web Services os descreve:

*“Os microsserviços fomentam uma organização de pequenas equipes independentes que se apropriam de seus serviços. As equipes agem dentro de um contexto delimitado e bem compreendido, e elas têm o poder de trabalhar de forma independente e rápida, encurtando assim, os tempos de ciclo*.”

Claro, se você dividir uma aplicação em partes, é necessário que essas partes se comuniquem umas com as outras, de forma eficaz. Isso é **o que liga os microsserviços às APIs**.

*“Em suma, o estilo arquitetural de microsserviço é uma abordagem para desenvolver uma única aplicação como um conjunto de pequenos serviços, cada um executando em seu próprio processo e comunicando-se com mecanismos leves, geralmente uma API de recurso HTTP.”*

### Quer saber mais sobre microsserviços e APIs? Inscreva-se no nosso blog!

## O que é uma API?

[API significa Application Programming Interface](/o-que-e-api-entenda-de-uma-maneira-simples), onde a palavra-chave é interface. As APIs são as portas, por assim dizer, que permitem aos desenvolvedores interagir com uma aplicação.

As APIs existem desde o surgimento da computação, permitindo que os computadores chamem funções de repetição para diminuir o inchaço da aplicação. Quando falamos sobre as APIs na economia digital, no entanto, geralmente estamos falando de **web APIs**, que facilitam a comunicação B2B.

Em termos gerais, **as APIs permitem aos desenvolvedores**, internos e externos, **acessar os dados de uma aplicação** ou **usar as funcionalidades de uma aplicação**. De modo geral, é assim que os eletrônicos, aplicativos e páginas da Web, do mundo todo, estão conectados para se comunicarem e trabalharem juntos.

*“Usar uma conta de rede social para autenticar em um site, ter o serviço meteorológico em seu telefone, acessar mapas do Google a partir de uma aplicação separada ou acionar dispositivos da Internet das Coisas (IoT) – todos eles dependem de APIs para funcionar.”*

Embora muitas APIs sejam criadas para que terceiros façam uso das chamadas [APIs Públicas](/api-publica-ou-privada-como-saber), a crescente popularidade de uma arquitetura de microsserviço levou à proliferação de mais [APIs privadas](/apis-publicas-privadas-e-entre-parceiros-qual-a-diferenca). Neste caso, as APIs agem como uma solução leve para que microsserviços individuais se comuniquem uns com os outros.

De uma perspectiva técnica, as APIs geralmente enviam dados por meio de solicitações HTTP. Estas retornam um arquivo de texto, normalmente no formato JSON, que os desenvolvedores podem usar como quiserem. Os tipos de estilos de design da API incluem REST, SOAP, GraphQL, gRPC e outros. Muitos usam formatos de especificação como OpenAPI, RAML ou AsyncAPI para definir interações de API amigáveis para máquinas e humanos.

## A diferença entre APIs e microsserviços

Neste ponto, você está familiarizado com os conceitos de APIs e microsserviços. Agora, vamos destacar as diferenças.

Microsserviços são um estilo de arquitetura para web service, em que a funcionalidade é dividida em pequenos serviços da web. Já as APIs são os frameworks, através dos quais, os desenvolvedores podem interagir com uma aplicação da web.

Como mencionamos, há definitivamente uma sobreposição entre os dois, já que muitos microsserviços usam APIs para estabelecer comunicação entre si.

## O que você deve saber sobre APIs e microsserviços?

Caso você não seja um técnico, é desnecessário aprender todos os detalhes sobre APIs e microsserviços. Contudo, é importante que você saiba como as APIs e os microsserviços podem ser úteis para a rotina da sua empresa.

Os microsserviços são hoje uma maneira popular de construir aplicações web, pelas razões descritas acima. Para recapitular, uma **arquitetura de microsserviço** torna mais **fácil e rápido construir e trabalhar em partes individuais** de uma aplicação e, portanto, na aplicação como um todo.

O apelo das APIs é duplo para a maioria das empresas. As **APIs costumam ser o meio pelo qual os microsserviços se comunicam**. Além disto, podem ser usadas para expor os dados e as funcionalidades de uma aplicação a terceiros, abrindo caminho para integrações poderosas.

Especialmente nos últimos anos, as APIs públicas se estabeleceram como produtos de negócios autênticos, já que as integrações aumentam a satisfação e a retenção do cliente. Dito isto, as próprias APIs podem ser [monetizadas](/parte-1-a-economia-das-apis-ja-esta-aqui-voce-esta-pronto) diretamente, o que as torna ainda mais atraentes como produtos.

---

A Vertigo acelera a **Transformação Digital** de grandes empresas, utilizando soluções baseadas em **APIs e Microsserviços**. Somos especialistas em ajudar empresas a criar uma estratégia de APIs, integrar seus sistemas legados, modernizar suas aplicações, migrar para a nuvem e modernizar a TI com a adoção de DevOps.

### Quer adotar uma estratégia de APIs ou implantar microsserviços em sua empresa?

### Agende uma conversa com nossos especialistas.
