---
title: "O que é Faas (function-as-a-service)?"
slug: "o-que-e-faas-function-as-a-service-3"
date: "2018-05-27T09:37:15"
modified: "2026-02-02T20:41:51"
status: "publish"
author: "admin"
excerpt: "Function as a Service (FaaS) é um serviço de computação em nuvem que busca abstrair a questão de servidor e máquinas onde rodam os seus programas. Em detalhes, ela deriva da filosofia Servless, que delega ao provedor de computação em nuvem (Cloud Provider) provisionar uma plataforma que permita ao cliente: desenvolver, rodar e gerenciar aplicações. […]"
categories: ["blog"]
tags: ["faas"]
featuredImage: "/wp-content/uploads/2026/02/o-que-e-faas-function-as-a-service-3.png"
wpId: 3103
originalUrl: "https://vertigo.com.br/o-que-e-faas-function-as-a-service-3/"
contentSource: "live-html"
seo:
  title: "O que é Faas (function-as-a-service)? - Vertigo"
  description: "Function as a Service (FaaS) é um serviço de computação em nuvem que busca abstrair a questão de servidor e máquinas onde rodam os seus programas."
  canonical: "https://vertigo.com.br/o-que-e-faas-function-as-a-service-3/"
  ogImage: "/wp-content/uploads/2026/02/o-que-e-faas-function-as-a-service-3.png"
  robots: "index, follow"
---

###### Blog

# O que é Faas (function-as-a-service)?

- 27 de maio de 2018

Function as a Service (FaaS) é um serviço de computação em nuvem que busca abstrair a questão de servidor e máquinas onde rodam os seus programas.
Em detalhes, ela deriva da filosofia [Servless](/conheca-serverless-baas-faas-e-conteiner/), que delega ao provedor de computação em nuvem (Cloud Provider) provisionar uma plataforma que permita ao cliente: desenvolver, rodar e gerenciar aplicações.
Nestes moldes, reduz-se a complexidade de uma pessoa ter que montar e manter a infraestrutura, atual padrão de todo mercado corporativo. Montando uma aplicação com este padrão, implementamos a teoria Servless e criamos uma arquitetura nativa de microsserviços.

# **Provedores de Function-as-a-Service**

A FaaS é muito recente. Primeiramente fora disponibilizado pela Hook.io em 2014 e seguido por grandes players: Amazon AWS Lambda, Google Cloud Functions, MS Azure Functions, IBM / Apache OpenWhisk e recentemente até Oracle Cloud Fn.
Usando FaaS, seu código é executado em resposta a eventos definidos por você. Porém, os recursos computacionais você não administra ou controla. Deve-se focar na construção de aplicações que respondam mais rápido as mudanças e as novas informações.
Um evento que inicia a execução citada acima seria a de parâmetros escolhidos pelo desenvolvedor, como por exemplo: uma chamada de URL, um timer, um upload de imagem, um dispositivo conectado.

## **Benefícios**

Outro ponto interessante é o modelo de cobrança baseado em tempo de execução, diferente dos custos de manter máquinas virtuais com clusters e hosts de container. Você tem a cobrança ligada ao que executou, seja algumas vezes por dia ou milhares de vezes por segundo.
De forma bem simplificada, FaaS é um jeito de executar uma regra de negócio, a partir de algum outro evento que a dispare.
Um exemplo em Amazon Lambda para quem curte código é o famoso “Hello, world!”:
==================================================================
exports.handler = function (event, context) {
    context.succeed(‘hello world’);
};
==================================================================
Ao chamar a URL associada a essa function, ela retorna uma página escrita “Hello, world!”, algo que, para quem bota a mão na massa, realmente não há um código menor que esse.
Desenvolvedores “raiz” não se preocupam com servidores. Portanto, por ser algo que ajuda a abstrair o servidor, essa tecnologia ganha força. Mas isto é diferente do DevOps, que sabe e se preocupa com a trajetória do ambiente de Produção.    

### **Pontos relevantes a considerar:**

1- Muita inovação surge nesta área e as coisas estão sempre mudando e evoluindo.
2- Lembre-se: nem todo App vai encaixar bem no modelo FaaS.
3- Se você tem foco na arquitetura de microsserviços, então o FaaS nasceu para você.

## **Caso de Uso**

O CASO DE USO: O Netflix, maior serviço de streaming de filmes, documentários e séries do mundo, presente em mais de 130 países, usa FaaS em AWS Lambda para gerenciar toda a sua infraestrutura AWS. Vale ressaltar que a AWS é a maior infraestrutura provida em cloud para empresas.
Pegando carona nesse exemplo, muitas outras empresas estão neste momento estudando e se estruturando para usar esse poder de simplificar código e suportar um alto volume de transações. Seus serviços que normalmente executam centenas de vezes por hora, estariam prontos para suportar uma escalada de milhões de execuções por segundo (famoso caso da Black Friday).
Isso é muito valioso! Ter o poder de isolar lógicas em funções que escalem sem ninguém ter que reescrever código ou montar máquinas. Ou ainda, de forma fácil garantir que nenhuma exceção consiga interromper e parar seus serviços num momento crucial para o negócio.

## **Melhores Práticas de Faas:**

1- Reutilize conexões (HTTP, banco de dados, etc) que forem estabelecidas em chamadas anteriores da função.
2- Use variáveis de ambiente para passar parâmetros para a função. Por exemplo, para configurar um acesso ao storage.
3- Tenha controle das bibliotecas da sua função, evite que mudanças e updates mudem algum comportamento.
4- Reduza a complexidade das dependências, prefira frameworks simples e de rápido carregamento.
5- Evite código recursivo (a função chamando a si própria), por causa do risco de um descontrole nas chamadas das funções.

## **Alguns pontos críticos da FaaS:**

Ressaltamos abaixo, os pontos críticos do uso da FaaS, para que fique claro se a sua utilização é estratégica para o negócio, ainda que, com alguns entraves:
1- Ficar preso a um único fornecedor de cloud, pois as empresas que citamos fornecem como bem entendem a implementação do FaaS e a mudança de cloud pode ser complicada.
2- “Cold Start” fenômeno em que uma função demora a começar a responder. Ocorre em duas situações. Quando você acaba de publicar ou atualizar uma função, porque a nuvem está subindo o ambiente de execução. No segundo caso, sua função não teve chamadas por muito tempo e acabou tendo o ambiente de execução encerrado pelo fornecedor de cloud.
3- Você paga por chamada o lado bom do preço baixo em Produção, pode vir a ser um preço alto durante Desenvolvimento, Testes e Homologação, porque você está pagando cada chamada do mesmo jeito.
4- Cada fornecedor escolhe como os logs serão coletados ou exibidos e pode ter um custo escondido por usar serviços de monitoria.
O FaaS mostra-se promissor, pois diversifica as opções com o intuito de melhorar o desenvolvimento de aplicações.
Num próximo artigo, destrinchamos uma outra visão do modelo FaaS atrelado ao Docker.
Acompanhe nosso blog e fique por dentro das novidades.

Compartilhe:

#### Não perca os materiais, estudos de caso e inovações mais recentes da Vertigo.

#### Últimos artigos

[![](/wp-content/uploads/2026/09/IA-Conversacional-em-Seguradoras-Chatbot-vs-Agente.jpg)](/ia-conversacional-em-seguradoras-chatbot-vs-agente-autonomo/)

[IA conversacional em seguradoras: como sair do chatbot reativo para o agente com contexto](/ia-conversacional-em-seguradoras-chatbot-vs-agente-autonomo/)

28 de setembro de 2026

[![Transparência salarial](/wp-content/uploads/2026/09/equidade-salarial-vertigo-2026.jpeg)](/relatorio-transparencia-igualdade-salarial-2-semestre-2026/)

[Vertigo divulga Relatório de Transparência e Igualdade Salarial entre Homens e Mulheres – 2º Semestre 2026](/relatorio-transparencia-igualdade-salarial-2-semestre-2026/)

22 de setembro de 2026

[![Agentes de IA para seguradoras](/wp-content/uploads/2026/09/Open-Insurance-e-Agentes-de-IA.jpeg)](/open-insurance-agentes-de-ia-dados-regulatorios/)

[Open Insurance e Agentes de IA: Como Acelerar Decisões com Dados Regulatórios Integrados](/open-insurance-agentes-de-ia-dados-regulatorios/)

10 de setembro de 2026

[![Team Topologies na prática: o operating model que sustenta a adoção de IA](/wp-content/uploads/2026/08/Team-Topologies-na-pratica.jpg)](/team-topologies-na-pratica-o-operating-model-que-sustenta-a-adocao-de-ia/)

[Team Topologies na prática: o operating model que sustenta a adoção de IA](/team-topologies-na-pratica-o-operating-model-que-sustenta-a-adocao-de-ia/)

25 de agosto de 2026

[![Tem Topologies escalar IA](/wp-content/uploads/2026/08/Tem-Topologies-escalar-IA.png)](/team-topologies-o-pre-requisito-esquecido-para-escalar-ia/)

[Team Topologies: o pré-requisito esquecido para escalar IA](/team-topologies-o-pre-requisito-esquecido-para-escalar-ia/)

12 de agosto de 2026

[![Vertigo celebra 27 anos](/wp-content/uploads/2026/07/vertigo-27-anos.png)](/vertigo-completa-27-anos-e-coloca-ia-em-producao-com-governanca/)

[Vertigo completa 27 anos e coloca IA em produção com governança](/vertigo-completa-27-anos-e-coloca-ia-em-producao-com-governanca/)

23 de julho de 2026

#### Fale Conosco:
