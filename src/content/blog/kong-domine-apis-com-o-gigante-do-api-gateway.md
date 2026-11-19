---
title: "Kong: Domine APIs com o Gigante do API Gateway"
slug: "kong-domine-apis-com-o-gigante-do-api-gateway"
date: "2023-07-03T16:36:37"
modified: "2026-02-02T20:40:10"
status: "publish"
author: "admin"
excerpt: "Quando ouvi falar do Kong pela primeira vez, confesso que minha primeira reação foi lembrar do personagem dos filmes do King Kong. Assim como a maioria das pessoas, a associação foi imediata e despertou minha curiosidade sobre esse poderoso protagonista do mundo dos API Gateways. Durante esse primeiro contato com o Kong, fiquei pensativo pelo […]"
categories: ["kong"]
tags: ["kong"]
featuredImage: "/wp-content/uploads/2026/02/kong-domine-apis-com-o-gigante-do-api-gateway.png"
wpId: 162345
originalUrl: "https://vertigo.com.br/kong-domine-apis-com-o-gigante-do-api-gateway/"
contentSource: "rest"
seo:
  title: "Kong: Domine APIs com o Gigante do API Gateway - Vertigo"
  description: "Veja como a Kong pode ajudar a sua empresa a gerenciar suas APIs de forma eficiente, trazendo melhores resultados. Leia mais."
  canonical: "https://vertigo.com.br/kong-domine-apis-com-o-gigante-do-api-gateway/"
  ogImage: "/wp-content/uploads/2026/02/kong-domine-apis-com-o-gigante-do-api-gateway.png"
  robots: "index, follow"
---

Quando ouvi falar do Kong pela primeira vez, confesso que minha primeira reação foi lembrar do personagem dos filmes do King Kong. Assim como a maioria das pessoas, a associação foi imediata e despertou minha curiosidade sobre esse poderoso protagonista do mundo dos API Gateways.

Durante esse primeiro contato com o Kong, fiquei pensativo pelo fato de que minha compreensão inicial estava em conflito com minhas experiências anteriores, onde os serviços eram disponibilizados e centralizados em um barramento de serviço SOA. Este tipo de arquitetura foi predominante por muitos anos no mercado, e é responsável pela integração e comunicação entre serviços de um ambiente distribuído.

Ela se propõe a ser  uma camada intermediária entre os serviços, roteando requisições, transformando  dados, impondo segurança e gerenciando transações. Além desses pontos, a arquitetura SOA atua suportando uma grande quantidade distinta de protocolos e formatos de mensagem, permitindo a  interoperabilidade entre os serviços.

Porém o Kong tinha uma outra proposta , em ser um API Gateway leve, diferente de produtos de barramento baseados em SOA. E tendo como foco, oferecer uma solução direcionada na exposição e no gerenciamento de APIs, atuando como um ponto de entrada na borda do ambiente de uma organização. Assim facilitando a exposição, a segurança e o monitoramento de todas as APIs.

Sua capacidade impressiona, pois é capaz de lidar com um grande volume de tráfego e fornecer recursos como autenticação, autorização, cache e balanceamento de carga de forma simplificada.

Com o tempo ficou claro para mim que o Kong se trata de uma solução  simplificada e mais barata em comparação a um barramento de serviço SOA tradicional.

Enquanto os barramentos SOA podem ser mais abrangentes e complexos, o Kong tem como foco principal as necessidades relacionadas a APIs, oferecendo uma solução mais leve e direcionada para gerenciamento destas.

Isso torna o [Kong](https://materiais.vertigo.com.br/infografico-diferenciando-gateway-de-api-e-service-mesh) uma opção mais aderente, simples de manter e barata para projetos com requisitos específicos de API e que tenham como premissa priorizar o desempenho de suas transações.

Leia mais esse artigo produzido pelo nosso líder de prática DevOps, Carlos Aiello.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/eJo6k0hI1KE?si=eukFZ_d7AB_zViaR" title="YouTube video player" width="560"></iframe>

## Mas afinal, o que é um API Gateway ?

Imagine um imenso parque empresarial em um condomínio, com vários edifícios abrigando diferentes empresas. No entanto, para acessar essas empresas, é necessário passar por um portão principal, onde equipes de segurança verificam sua identidade e permissões para acessar os edifícios dentro desse parque empresarial.

Além disso, os seguranças verificam se você está cumprindo as regras pré-estabelecidas, como entrar com um veículo adequado (por exemplo, um carro em vez de um caminhão). Caso não esteja em conformidade com as regras, sua entrada será negada.

Se você estiver dentro das regras, a portaria autorizará sua entrada e fornecerá instruções sobre como chegar ao prédio desejado e como retornar ao portão de saída.

Isso é exatamente o que um [API Gateway](https://materiais.vertigo.com.br/ebook-esb-versus-gateway-de-api) faz: verificar as permissões e direcionar solicitações aos serviços internos correspondentes. Essa função pode ser comparada à sua visita a um dos prédios do condomínio neste exemplo:

![](/wp-content/uploads/2023/07/kong_vertigo_1.jpg)

Agora que já entendemos o que é um API Gateway e qual a sua função dentro do ambiente de uma organização, mas entender melhor sobre o Kong.

### Kong: Um API Gateway de alta performance apoiado por componentes customizáveis

O Kong é um API Gateway muito performático, capaz de atuar como o portão de entrada para um cluster Kubernetes, garantindo segurança e controle de tráfego. Este produto também conta com uma enorme oferta em sua loja virtual, de **componentes customizáveis** que podem auxiliar na resolução de diversos problemas.

A seguir estão alguns exemplos de cenários que demonstram os benefícios que este componentes integrados ao Kong oferecem:

- Evitar uploads excessivos: Impede que alguém faça upload de um arquivo de tamanho expressivo para a sua API, evitando o consumo excessivo de recursos e garantindo que apenas uploads permitidos sejam realizados.

- Prevenir votos fraudulentos: Impede que alguém vote várias vezes a favor de um participante preferido em um programa de TV, garantindo a integridade do processo de votação e evitando manipulações indevidas.

- Proteger contra ataques de bots: Evitar que robôs bombardeiem seu serviço com solicitações até que ele fique inacessível, proporcionando uma camada de segurança que mantém seu serviço funcionando corretamente.

- Controle de acesso: Garantir o acesso aos serviços apenas para aqueles que têm direito, por meio de autenticação e autorização adequadas.

- Coleta de informações: Permitir a coleta de informações de usabilidade dos serviços, fornecendo dados valiosos que podem apoiar a melhoria contínua e o sucesso do seu negócio.

## Kong é destaque no quadrante mágico do Gartner

Em 2022 o Kong foi reconhecido pelo terceiro ano consecutivo, como líder no Quadrante Mágico do Gartner na categoria Full Life Cycle API.

A Kong , empresa responsável pelo produto, capacita mais de 560 empresas inovadoras a criar, projetar, executar e gerenciar APIs e serviços por meio da sua plataforma de gerenciamento de ciclo de vida de API ponta a ponta.

É reconhecida como o gateway de API mais adotado em todo o mundo, com mais de 300 milhões de downloads e um impressionante volume de 350 bilhões de chamadas de API por dia.

Com sua velocidade e eficiência, a Kong se destaca como líder, oferecendo uma solução robusta para atender às necessidades crescentes de conectividade e gestão de APIs das empresas.

Quer saber mais sobre esse tema e compreender como o Kong funciona na prática? Não deixe de conferir a Parte 2 deste artigo no blog da Vertigo e se aprofunde cada vez mais no reino do **Kong**.

## A Vertigo Tecnologia é especialista em Kong

Se a sua empresa está buscando um [API Gateway](https://materiais.vertigo.com.br/ebook-5-perguntas-para-fazer-ao-seu-fornecedor-de-gateway-de-api) poderoso e eficiente, a Vertigo Tecnologia é a escolha certa. Somos especialistas na solução e podemos ajudá-lo a implementar o API Gateway em seu ambiente.

O Kong se destaca por sua alta performance, capacidade de lidar com grande volume de tráfego e recursos como autenticação, autorização, cache e balanceamento de carga. Como parceiros da Kong, podemos oferecer suporte técnico, consultoria e personalização para atender às suas necessidades específicas.

Fale com o nosso [time comercial](/contato/) e tire suas dúvidas, veja como impulsionar seus projetos de API.

–

*Esse artigo é assinado pelo nosso Líder de Prática DevOps, Carlos Aiello*

![](/wp-content/uploads/2023/06/Assinaturas-site_Aielo.png)
