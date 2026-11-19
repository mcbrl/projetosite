---
title: "Resumo da DockerCon 2017 – Visão de um Consulting Partner brasileiro"
slug: "resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro"
date: "2017-11-06T17:47:28"
modified: "2026-02-02T20:42:47"
status: "publish"
author: "admin"
excerpt: "Estamos de volta à Vertigo Tecnologia após uma semana em Copenhagen (Dinamarca), onde aconteceu a edição européia da DockerCon. Duas mochilas lotadas de brindes e adesivos fizeram a alegria de nossas equipes. Pessoalmente eu tinha algum receio que a DockerCon EU não trouxesse muitas novidades, mas como a Vertigo não compareceu à DockerCon americana (em Austin) fomos […]"
categories: ["devops"]
tags: ["docker"]
featuredImage: "/wp-content/uploads/2026/02/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro.jpg"
wpId: 1674
originalUrl: "https://vertigo.com.br/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro/"
contentSource: "rest"
seo:
  title: "Resumo da DockerCon 2017 - Visão de um Consulting Partner brasileiro - Vertigo"
  description: "Estamos de volta à Vertigo Tecnologia após uma semana em Copenhagen (Dinamarca), onde aconteceu a edição européia da DockerCon. Duas mochilas lotadas de brindes e adesivos fizeram a alegria de nossas equipes. Pessoalmente eu tinha algum receio que a DockerCon EU não trouxesse muitas novidades, mas como a Vertigo não compareceu à DockerCon americana (em Austin) fomos [&hellip;]"
  canonical: "https://vertigo.com.br/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro/"
  ogImage: "/wp-content/uploads/2026/02/resumo-da-dockercon-2017-visao-de-um-consulting-partner-brasileiro.jpg"
  robots: "index, follow"
---

Estamos de volta à [Vertigo Tecnologia](/) após uma semana em Copenhagen (Dinamarca), onde aconteceu a edição européia da DockerCon. Duas mochilas lotadas de brindes e adesivos fizeram a alegria de nossas equipes.
Pessoalmente eu tinha algum receio que a DockerCon EU não trouxesse muitas novidades, mas como a Vertigo não compareceu à DockerCon americana (em Austin) fomos lá conferir de perto.
Compartilho aqui nossos achados.

## O Evento

A DockerCon ocorreu em dois dias de palestras simultâneas cobrindo diversas áreas de conhecimento. O conteúdo era tão rico que minha companhia, a Vertigo Tecnologia, enviou duas pessoas – e mesmo assim a escolha era sempre difícil.
Tão interessantes quanto as palestras nos dois dias principais do evento foram os *summits* (eventos exclusivos que ocorreram antes e depois da DockerCon) – *Organizer Summit* (para os organizadores de *meetups* no mundo), *Enterprise Summit*(para os interessados em implantar Docker EE com a estratégia MTA, da qual falaremos ainda) e *Moby Summit*(para os interessados no ecossistema de projetos open-source que compõem ou giram em torno do Docker).
Além das palestras e dos summits tivemos também *Hallway Tracks* – reuniões agendadas 1-a-1 ou em grupos para debater temos sugeridos pelos próprios participantes. Foi em um Hallway Track que consegui conversar pessoalmente com o diretor da MetLife, Jeff Murr, sobre sua ambiciosa iniciativa de modernização de aplicações Java/JEE tradicionais, sobre a qual falarei mais adiante.
![](/wp-content/uploads/2017/11/docker_2-768x577-1.jpg)

## Uma DockerCon “Enterprise”…

Mais e mais corporações estão percebendo que a containerização é crucial para qualquer estratégia de modernização da TI, portanto os casos de sucesso começam a se multiplicar mundo afora. Ao contrário de outras DockerCons em que se falava muito de estratégias de *early adopters*, em ambas as DockerCons de 2017 (Austin e Copenhagen) tivemos várias palestras de empresas que implantaram **Docker EE** com sucesso em cenários bem distintos. Para citar alguns nomes de corporações palestrantes: MetLife, Société Générale, GlaxoSmithKline e Intesa Sanpaolo.
Podemos classificar estes cenários “enterprise” em alguns grupos:

- **Developer Onboarding**: ao containerizar todo o ferramental do desenvolvedor é reduzido sensivelmente o custo (e tempo) de onboarding de desenvolvedores em um projeto, além de potencialmente trazer para a estação o mesmo mecanismo de build que será usado nos pipelines de entrega;
- **CI/CD tooling**: containers não apenas simplificam a montagem de um ambiente de CI/CD (integração e entrega contínuos), mas também permitem que os agentes destes ambientes (ex: Jenkins slaves e Gitlab runners) sejam “burros” e também deleguem seu trabalho para containers;
- **Orquestração de containers**: com os containers em produção passando de dezenas para centenas (ou mesmo milhares) é impossível seguir adiante sem ferramental que traga sanidade para a gestão do ambiente. Este ecossistema está longe de ser consolidado, e quem pensa que se trata apenas de kubernetes ou swarm está muito distraído (mais sobre isto depois);
- **Modernizar Aplicações Tradicionais**: enquanto a maioria dos vendors se preocupa em atender o cenário “greenfield” de entrega de micro-serviços e containers, a Docker dá atenção especial à transição de aplicações tradicionais (mesmo em plataforma Windows);
- **Otimização de Servidores**: corporações com data centers privados ou que alugam infra-estrutura em provedores como a Equinix têm especial interesse em otimizar o uso de servidores (virtuais ou não). Orquestradores de containers (kubernetes ou swarm, open-source ou Docker EE) permitem uma maior densidade de processos por máquina e/ou VM.

## …Mas Ainda Open-Source

Embora a DockerCon cada vez mais receba “engravatados”, seu publico mais jovem ainda mantém pleno interesse pelas novidades da Docker e do Projeto Moby (guarda-chuva de diversos componentes que compõem – e extrapolam – o Docker CE e o Docker EE).
Várias “estrelas” do universo Docker estiveram presentes apresentando seus projetos open-source de sucesso:

- **Play-With-Docker**: o PWD é um fantástico ambiente web disponível publicamente para uso do Docker que dispensa a instalação local de qualquer ferramenta, uma vez que sua interface é 100% no browser. No PWD é possível rodar ambientes “mini-VMs” com um console linux com um docker engine disponível em segundos, sendo possível combinar diversos destes ambientes em um único swarm. O PWD mudou da AWS para a Azure, mas sua URL continua a mesma: [http://play-with-docker.com](http://play-with-docker.com/). A novidade é que agora também é possível iniciar VMs Windows Server (!!!), usando outra URL de acesso: [https://microsoft.play-with-docker.com](https://microsoft.play-with-docker.com/). Neste ambiente é possível criar swarms híbridos (Linux e Windows). O PWD é criação de @marcosnils e @xetorthio.
- **Open-FaaS**: criado por @alexellisuk, o projeto Open FaaS (Functions as a Service) permite criar serverless functions amparadas por imagens Docker em um workflow simplificado. O projeto pode ser visto em <https://github.com/openfaas/faas>. Desde sua exibição em Austin este projeto vem ganhando mais momento – vale a pena acompanhar.

## O Circo (Expo Hall)

Eu sempre espero do Hall de Exposições a oportunidade de conhecer mais dos produtos que compõem o imenso ecossistema de soluções para containers, tanto como possível cliente quanto como potencial parceiro/revenda/representante no Brasil. Contudo o Hall funciona mais como uma central de distribuição de brindes e sorteio de brinquedos e drones. A Red Hat era a fábrica de chapéus vermelhos, a jFrog era a cafeteria, a Sysdig distribuiu Legos e Drones, o resto eram camisarias. As discussões que conseguimos ter com vendors sobre seus produtos foram muito rasas e apressadas – sem mencionar que não havia ali nenhuma novidade.
Em toda DockerCon é assim: quem sabe o que está fazendo não está no Hall de Exposições – está lá fora palestrando.

![](/wp-content/uploads/2017/11/docker_3-768x577-1.jpg)

## As Novidades

Os duas grandes novidades anunciadas na aberturas de cada dia foram:

- **Integração com Kubernetes**: o Docker EE terá integração nativa com o Kubernetes, permitindo que esta opção de orquestração também possa contar com os demais benefícios do Docker EE (o que inclui a segurança em toda a cadeia de entrega e a facilidade de instalação);
- **IBM como parceira global de MTA**: a IBM figura agora ao lado de outros parceiros globais para o programa MTA (Modernize Traditional Applications).

Ambas as notícias são importantes. Vamos por partes:

### Docker EE + Kubernetes = Love Story

Nascido antes da Docker lançar seu orquestrador, o Kubernetes foi criado originalmente pela Google para resolver o problema de entrega, escala e gestão de containers em múltiplos hosts. O Swarm Mode nativo do Docker (e núcleo do Docker EE) veio depois que o Kubernetes já havia se estabelecido, mas sua chegada não foi sem ruído.
É inquestionável, porém, que a implantação de um cluster de produção com swarm mode é muito mais simples que a implantação do mesmo cluster com Kubernetes. Há considerável funcionalidade absorvida em um *swarm manager node* (particularmente no Docker EE) cuja configuração é penosa no Kubernetes. Mais ainda, a Docker preserva a experiência do desenvolvedor mantendo a utilidade na produção das sintaxes de linha de comando e de descritores como o docker-compose – no Kubernetes é necessário assimilar toda uma sintaxe redundante, por exemplo, para pods.
Pessoalmente eu *sempre*recomendo a clientes corporativos que comecem pelo swarm mode – a curva de aprendizado é absurdamente menor. *Quando se trata de adotar tecnologia disruptiva como containers é imprescindível reduzir riscos e pontos de atrito*. É preciso obter as primeiras vitórias o mais cedo possível – em minha opinião começar com Kubernetes é uma péssima escolha.
O proximo release do Docker EE irá acabar com a “tortura” desta escolha e será capaz de lidar com ambas as tecnologias de orquestração. Nas demonstrações vimos deployments funcionando contra nós que eram listados como membros de cluster de ambas as APIs (“docker node ls” e “kubectl get nodes”).
Este ambiente com Swarm e Kubernetes também estará disponível para desenvolvedores que utilizem o Docker for Mac ou o Docker for Windows.

### IBM + Docker = MTA

O programa MTA (Modernize Traditional Applications) enumera alguns parceiros globais capazes de executar uma metodologia para modernização de aplicações pré-existentes em clientes dispostos a validar os ganhos da containerização em aplicações reais. A IBM é mais um deles, ofertando a estratégia MTA para migrar workloads para sua própria nuvem pública.
A abordagem do MTA é a mesma que a Vertigo aplica em seus clientes – ela se baseia no fato que uma típica TI corporativa gasta a maior parte de seus esforços com manutenção (e não desenvolvimento) de aplicações. Muito deste custo é inerente ao uso de tecnologias agora obsoletas que provocam atrito entre desenvolvimento e entrega (como servidores JEE tradicionais), ou decorre da ausência de esteiras de testes e entrega automáticos.
Com uma prova de conceito de MTA é possível migrar uma aplicação tradicional para um modelo de entrega em containers contra um ambiente Docker EE de forma segura e não intrusiva, trazendo sanidade ao fluxo de trabalho e permitindo que recursos sejam direcionados no futuro para evoluir a aplicação.

## Os Capitães Docker

Os Docker Captains são um grupo de especialistas em Docker com notória dedicação à comunidade de desenvolvedores e que receberam este título da própria Docker. Com larga experiência em campo e opinião independente de vendors, qualquer oportunidade de conversa com um Docker Captain é sempre rica em informações e experiências.
Alguns Captains estiveram disponíveis para conversas diretas no Hallway Track. Tive o prazer de conversar diretamente com @chanwit, @jeffmur, @spiddy e @bretfisher – em todos os casos esta interação foi mais proveitosa que as palestras que perdi no mesmo horário.

![](/wp-content/uploads/2017/11/docker_4-768x577-1.jpg)

## Casos de Sucesso

A DockerCon é conhecida pela fantástica troca de experiências entre participantes, mas suas últimas edições têm sido enriquecidas pela presença de “campeões corporativos” – lideranças que conseguiram emplacar com sucesso sua proposta de inovação em TIs conservadoras.
O case da MetLife foi o meu preferido, uma vez que se igualava em muitos aspectos com um desafio semelhante que enfrentei em 2015 no Banco Central do Brasil: a migração de aplicações JEE de um ambiente WebSphere “clássico” para containers Docker executando o Liberty profile (runtime JEE leve compatível com o WebSphere tradicional). Curioso observar como grandes corporações repetem os mesmos desafios tanto lá quanto cá – e os requisitos para o sucesso de uma empreitada como esta são essencialmente os mesmos. Mas isto fica para outro artigo…

## Docker Certified Associate

Uma nova certificação para profissionais Docker foi lançada na DockerCon EU, estando disponível para os participantes do evento antes do resto do mundo.
É claro que eu não perderia esta chance!
Não foi moleza (a prova exige conhecimento de mecanismos internos do Docker, do Swarm Mode e dos componentes do Docker EE, mas a Docker disponibilizou um guia de estudo que foi suficiente.

![](/wp-content/uploads/2017/11/docker_6-768x593-1.jpg)

Novas certificações mais exigentes serão lançadas no futuro, mas esta certamente é um bom começo para quem quer se destacar no mercado.
