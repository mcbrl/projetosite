---
title: "Primeiro a API e depois o Device!"
slug: "primeiro-a-api-e-depois-o-device"
date: "2016-03-10T07:29:55"
modified: "2016-03-10T07:29:55"
status: "publish"
author: "admin"
excerpt: "O desenvolvimento de aplicativos vem sendo moldado com tanta intensidade pelas tendências de dispositivos móveis nos últimos anos, que tornou-se comum muitas empresas focarem primeiramente em tablets e smartphones, naquilo que passamos a chamar de “mobile first”. Embora essa seja uma abordagem acertada para os  dias atuais, uma certa falta de planejamento tem feito com […]"
categories: ["mundo-das-apis"]
tags: ["api", "api-first", "internet-das-coisas", "iot", "mulesoft", "wso2"]
featuredImage: "/wp-content/uploads/2016/03/Xbox-Music-API-Integration.png"
wpId: 1589
originalUrl: "https://vertigo.com.br/primeiro-a-api-e-depois-o-device/"
contentSource: "rest"
seo:
  title: "Primeiro a API e depois o Device!"
  description: "Desenvolvedores apoiam fortemente a abordagem API-First, porque elimina configurações redundantes e retrabalho de projeto. Pense na API e depois no Device!"
  canonical: "https://vertigo.com.br/primeiro-a-api-e-depois-o-device/"
  ogImage: "/wp-content/uploads/2016/03/Xbox-Music-API-Integration.png"
  robots: "index, follow"
---

O desenvolvimento de aplicativos vem sendo moldado com tanta intensidade pelas tendências de dispositivos móveis nos últimos anos, que tornou-se comum muitas empresas focarem primeiramente em tablets e smartphones, naquilo que passamos a chamar de “mobile first”.

Embora essa seja uma abordagem acertada para os  dias atuais, uma certa falta de planejamento tem feito com que muitos desenvolvedores passem a repensar suas plataformas em algum momento – por não terem considerado as possibilidades futuras de uso, me refiro a um futuro próximo.

Ocorre que, embora o universo dos dispositivos móveis esteja crescendo em números e importância, os PCs ainda estarão presentes por um bom tempo e como a questão relacionadas ao desenvolvimento de IoT (Internet das Coisas) crescem, cada vez mais outros dispositivos estarão conectados, tais como: Carro, Geladeira, Relógio, óculos, telas de vidro e por ai vai. Conceber estratégias que desconsiderem esse fato incorre em riscos de ter que reprojetar toda uma arquitetura, pois não necessariamente aquilo que foi planejado para um app em smartphone vai atender às necessidades de algum desses outros dispositivos. Situação similar se observa com empresas que iniciaram oferecendo serviços Web e passam a oferecer aplicativos móveis posteriormente.

## API First

Por esse motivo, vem ganhando força a lógica do API First – inicia-se pelo desenvolvimento de uma API que irá suportar as diversas plataformas possíveis, para somente então fazer o desenvolvimento das interfaces com o usuário nas diversas plataformas. Essa abordagem permite a uniformização de funcionalidades entre as diversas plataformas, inclusive entre dispositivos móveis: torna-se possível encontrar as mesmas características em versões para iOS e Android desde as primeiras versões, por exemplo.

A abordagem não impede a adoção de uma estratégia do tipo “mobile first”; pelo contrário, o projeto cuidadoso de uma API irá fornecer uma base sólida para que a plataforma móvel não precise ser reconstruída em um momento futuro, se novas plataformas se mostrarem necessárias.

## Backend as a Service

A lógica da definição de uma API consistente antes de se iniciar o desenvolvimento da interface, se encaixa em uma estratégia mais ampla, conhecida como Backend as a Service. A ideia é a definição completa dos sistemas de retaguarda, compreendendo serviços em cloud como armazenamento, além de suporte a notificações do tipo “push”, com a implementação de filas de mensagens, compartilhamento de dados e ajustes.

A definição das APIs tem papel fundamental na abordagem BaaS, funcionando como o ponto focal das implementações a serem realizadas. A definição cuidadosa de uma API tem uma importância determinante no sucesso do projeto, e quanto mais completa for a definição, inclusive em termos de expansão futura, menor será a necessidade de reprojetar a arquitetura inicial.

## Desenvolvendo a cultura das APIs

Compreendida a importância de se desenvolver primeiro uma API para somente depois focar na interface, pode se desenvolver uma falsa impressão de que a definição e implementação de uma API é uma tarefa simples e fácil. De fato, pode ser; mas a falta de experiência no assunto pode levar muitas empresas a direções completamente equivocadas, por desconhecerem algumas das melhores práticas e das tecnologias corretas para a implementação de cada API conforme o caso.

Buscar quem seja especializado no assunto é sempre a melhor forma de desenvolver uma cultura dentro de uma organização, e para alavancar o conhecimento em APIs não é diferente.

## Principais Benefícios do API First

Para os leitores não familiarizados com as estratégias de negócios API, Bortenschlager dá quatro casos de uso demonstrando diferentes benefícios de oferecer uma API:

API como fonte de receita adicional: O Google disponibiliza as APIS do Google Maps para que o Uber, 99 Taxi ou outras empresas usem essas dados para mostrar, para o passageiro, onde o carro solicitado se encontra, é possível ter um zoom no mapa e até saber a previsão de chegada. Isso tudo gera uma receita adicional para o Google. Saiba mais em: [Monetização das APIs](http://blog.vertigo.com.br/estrategia-de-monetizacao-das-apis/)

API aumenta a notoriedade da marca: TripAdvisor usa API para disponibilizar fotos, comentários e dados de cada review, bem como um conjunto de APIs específicas para mostrar a disponibilidade de cada Hotel no período solicitado. Saiba mais em: [O que é uma API](http://blog.vertigo.com.br/entenda-o-que-e-uma-api/)

API promove a inovação aberta: Diversas cidades, ao redor do mundo, estão disponibilizam APIs para que desenvolvedores usem essas dados para criar apps e outras soluções que precisem de dados públicos. Saiba mais em: [O Governo o Cidadão e os Dados](http://blog.vertigo.com.br/o-governo-os-cidadaos-e-os-dados/)

## Conclusão

Uma estratégia de API-First é uma maneira para os desenvolvedores de conectar seu software e aplicativo em um dispositivo através de uma chamada de API, sem se preocupar tanto com o tipo do device.

Uma das principais razões para que desenvolvedores estejam escolhendo API-First é porque, para construir um app, começando pela Interface móvel, leva tempo e recursos e depois tudo tem que ser redesenhado para o novo dispositivo, ou seja, alguns processos precisam ser duplicados e, em seguida, personalizado através de vários parceiros ou pessoas que estejam trabalhando naquela solução. Com API-First, você pode construir o objetivo da sua solução, sem se preocupar com o front-end nesse momento, o foco é a solução, independentemente do sistema operacional que esteja sendo conectado ou mesmo do dispositivo. O grande objetivo desse conceito, é permite que a criação da API aconteça pensando em qual solução ela deve atender.

Desenvolvedores apoiam fortemente a abordagem API-First, porque elimina configurações redundantes e retrabalho de projeto. No entanto, uma orientação de API-Frist  não é para todos. Esse tipo de orientação está centrada em dados e, se não for gerida corretamente, pode criar riscos de segurança da informação que está sendo exposta.

Sim, as APIs estão mudando a nossa forma de desenvolver, projetar, viver, interagir e interpretar dados. Se você está iniciando alguma estratégia nessa direção, é fácil! Post aqui as suas dúvidas, nós iremos te responder!
