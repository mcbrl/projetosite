---
title: "Ferramentas de orquestração de containers: como escolher?"
slug: "ferramentas-de-orquestracao-de-containers"
date: "2019-01-30T10:37:48"
modified: "2019-01-30T10:37:48"
status: "publish"
author: "admin"
excerpt: "Você está procurando tretas sobre ferramentas de orquestração de containers? Neste artigo, faremos um comparativo entre as características das três ferramentas de orquestração de containers mais populares: Docker, Kubernetes e Openshift. Para isto, iremos abordar tanto o “lado luminoso” quanto o “lado sombrio” dessas tecnologias que estão competindo centímetro a centímetro para se destacar no […]"
categories: ["blog", "devops", "dockeree"]
tags: ["docker", "docker-ee", "docker-swarm", "ferramentas-de-orquestracao-de-containers", "kubernetes"]
featuredImage: "/wp-content/uploads/2019/01/orquestracao_de_containers.png"
wpId: 3800
originalUrl: "https://vertigo.com.br/ferramentas-de-orquestracao-de-containers/"
contentSource: "rest"
seo:
  title: "Você sabe o que são ferramentas de orquestração de containers?"
  description: "Quer saber como escolher uma ferramenta de orquestração de containers? Neste artigo, faremos um comparativo entre as características das três ferramentas de orquestração de containers mais populares: Docker, Kubernetes e Openshift."
  canonical: "https://vertigo.com.br/ferramentas-de-orquestracao-de-containers/"
  ogImage: "/wp-content/uploads/2019/01/orquestracao_de_containers.png"
  robots: "index, follow"
---

## Você está procurando tretas sobre ferramentas de orquestração de containers?

Neste artigo, faremos um comparativo entre as características das três ferramentas de orquestração de containers mais populares: **Docker, Kubernetes e Openshift**.

Para isto, iremos abordar tanto o “lado luminoso” quanto o “lado sombrio” dessas tecnologias que estão competindo centímetro a centímetro para se destacar no mercado corporativo.

Portanto, se você está pensando em adquirir uma ferramenta de orquestração de containers, recomendamos que leia este artigo até o final. Ao longo do conteúdo vamos abordar tudo o que você precisa saber para escolher a ferramenta de orquestração ideal para o seu negócio.

## O que são ferramentas de orquestração de containers?

As ferramentas de orquestração de containers são aplicações em nuvem que permitem fazer o gerenciamento de múltiplos contêineres.

Seus principais objetivos são:

- Cuidar do ciclo de vida dos containers de forma autônoma, subindo e distribuindo, conforme nossas especificações ou demandas;
- Gerenciar volumes e rede, que podem ser locais ou no cloud provider de sua preferência.

A popularidade deste tipo de solução cresceu nos últimos anos, acompanhando o crescimento da prática de conteinerização de aplicações, microsserviços e adoção de [DevOps](/devops).

Ainda tem dúvidas sobre o [que é DevOps](/o-que-e-devops)? Confira o nosso artigo e saiba mais.

No fim de 2017, uma pesquisa da Cloud Native Computing Foundation, buscou saber quais ferramentas de orquestração de containers eram mais utilizadas pelas empresas. Embora o [Kubernetes](/docker-kubernetes-mesos-orquestracao-de-containers) lidere o ranking de utilização, a pesquisa revelou que as empresas costumam fazer uso de mais de uma solução, conforme evidenciado pelo gráfico abaixo:

![](/wp-content/uploads/2019/01/grafico-ferramentas-de-orquestracao-768x512-1.png)

## A importância de escolher uma boa ferramenta de orquestração de container

A adoção de containers [Docker](/docker) em diversas companhias fez com que o nível de requisitos de segurança e robustez tecnológica aumentasse consideravelmente. O Docker provou-se perfeito para criar ambientes de sistemas que atendam a diferentes estágios de desenvolvimento (testes, homologação e produção). Apesar de toda essa infraestrutura, restava a dúvida: será que o Docker conseguiria administrar o ambiente de **produção**?

Imagine a seguinte situação:

Você está em um avião em movimento e ele apresenta uma pane. É impossível parar o avião para consertá-lo, então é preciso resolver o problema com o avião em movimento, caso contrário, todos estarão perdidos.

Desesperador, não é mesmo?!

Esta metáfora representa a complexidade do ambiente de produção e o papel dos orquestradores de containers que, neste contexto, são responsáveis por preparar o ambiente de produção para “manter o avião voando em perfeitas condições”.

Os containers são passíveis de travas, lentidão, ter dificuldade para lidar com upgrades, sofrer instabilidades nos servidores reais e/ou serem insuficientes para uma demanda maior de serviços.

Empresas, como a Google, Red Hat e Docker perceberam que precisavam resolver, de forma rápida e segura, estes problemas. Por isto, cada uma tratou de criar suas soluções para oferecer aos clientes ferramentas de orquestração de containers. A consequência disto é que diversas soluções estão competindo para se destacar no mercado.

Neste conteúdo, iremos focar nas tecnologias mais importantes: Kubernetes, OpenShift e Docker EE e Swarm.

[Leia também: DevOps – Os Benefícios de uma esteira de entregas contínuas](/beneficios-de-ter-uma-esteira-de-entregas-continuas)

Inscreva-se no nosso blog para ser informado quando publicarmos mais conteúdos como este.

## Ferramenta de orquestração Kubernetes

Esta ferramenta de orquestração de containers é a mais utilizada pelas empresas, por ter sido um dos primeiros orquestradores e também ser uma opção open source.

Foi desenvolvida pela Google para ser utilizada em seus projetos internos. Em 2015, foi entregue ao Cloud Native Computing Foundation e até hoje é mantida pela comunidade do Kubernetes.

![](/wp-content/uploads/2019/01/kubernetes-tela-container.jpg)

## O lado “luminoso” do Kubernetes

É possível eliminar o lock-in através de modularização Kubernetes, permitindo que os containers rodem sem restrições de servidor. Isto é tangível através da combinação de módulos SERVICES e POD.

Os serviços do Kubernetes suportam descoberta, escalabilidade e balanceamento. Ou seja, todos os requisitos que corporações de grande porte demandam.

Com o Kubernetes, é possível construir o ponto de partida de aplicações nativas na nuvem ou adaptar suas aplicações locais, tornando-as mais preparadas para a nuvem. Com isto, pode-se rodar as aplicações locais em qualquer lugar, independente do cloud provider.

O Kubernetes oferece todo o suporte que o DevOps necessita para criar um modelo eficiente de desenvolvimento e operação de aplicações.

## O lado “sombrio” do Kubernetes

O Kubernetes é uma tecnologia de configurações complexas, o que demanda uma curva maior de aprendizado por parte dos usuários da ferramenta.

Além disso, existe certa dificuldade em montar um ambiente local de Kubernetes, por não ser uma tecnologia user friendly.

A documentação da ferramenta é confusa, o que deixa margem para uma utilização muito aquém do seu (real) potencial. Os usuários muitas vezes encontram dificuldade em obter as informações necessárias, seja para seu aprendizado ou dúvidas de projeto.

Esta documentação é gerenciada por pela própria comunidade de usuários, de modo que o Kubernetes não oferece um suporte especializado. Este ponto oferece certo risco a projetos que não são sustentados por uma equipe realmente especializada.

Outro quesito importante que deve ser levado em consideração é que com o Kubernetes é necessário gerar muitos artefatos para obter o mesmo resultado que o Docker Swarm, por exemplo.

![](/wp-content/uploads/2019/01/ferramentas-de-orquestracao-de-containers-configuracoes-simples-x-complexas.png)

## Ferramenta de orquestração Openshift

O Openshift  é uma ferramenta de orquestração de containers criada pela RedHat. A sua construção se baseia no empacotamento de containers Docker, com gerenciador de clusters baseado em Kubernetes. Além disso, reúne outros conceitos de gerenciamento do ciclo de vida das aplicações.

## O lado “luminoso” da Openshift

**Os containers podem  rodar como usuários não root.** Ou seja, não acessam recursos dos servidores, não rodam de forma privilegiada e nem podem tornar-se root. Isto mantém a estabilidade do sistema, bem como a segurança das informações.

**Os storages seguem regras do SELinux.** O Security-Enhanced Linux é uma camada de segurança do Kernel Linux e tem por objetivo evitar acessos não autorizados.

**Bloqueio de acesso por projeto.** Isto garante que os containers só possam visualizar containers que componham um mesmo projeto. Desta forma, além de delimitar os responsáveis por cada função, é possível preservar o acesso à informações sigilosas.

**Menos tempo para solucionar dúvidas**. Por disponibilizar um suporte especializado, os administradores desta ferramenta, gastam menos tempo para sanar dúvidas. Isto torna os processos mais fluidos, diferente do que acontece com o Kubernetes, por exemplo.

Por fim, outro quesito importante a ser destacado é que a ferramenta OpenShift é habilitada a fazer **integrações com as demais ferramentas da Red Hat**.

## O lado “sombrio” da Openshift

**Promove o lock-in.** Ou seja, quando o usuário adquire o Openshift, ele fica limitado apenas às funcionalidades ofertadas pela RedHat.

O servidor suporta apenas clusters Kubernetes e não faz orquestração com clusters de outros fornecedores, como: Amazon, Azure e Docker.

O Openshift, embora seja um serviço pago que fornece suporte, por herdar a tecnologia do Kubernetes, **também possui o mesmo grau de complexidade em suas configurações.**

Logo, assim como o Kubernetes, também necessita gerar muitos artefatos para obter o mesmo resultado que o Docker Swarm apresenta.

![](/wp-content/uploads/2019/01/tela-openshift-container.png)

## Ferramenta de orquestração Docker (EE e Swarm)

A Docker entrou no mercado de ferramentas de orquestração de containers de olho em dois nichos diferentes. Por isso, ela oferece atualmente duas soluções distintas: o Docker Swarm e o Docker EE.

O Docker Swarm, por ser uma ferramenta open source, compete em “pé de igualdade” com o Kubernetes e o OpenShift, possuindo algumas limitações semelhantes. Porém contém configurações mais amigáveis, o que torna a curva de aprendizado menor.

Já o [Docker Enterprise Edition](/tutorial-docker-ee) é uma camada muito mais completa que as outras soluções existentes. É voltado ao mercado corporativo de soluções e oferece uma assinatura que disponibiliza as seguintes funções:

- Serviço de suporte
- Imagens certificadas
- Monitoramento
- Management center
- Multi-cloud, execução de aplicações críticas em escala
- Releases trimestrais

O Docker EE é uma plataforma de Containers-as-a-Service (CaaS) que habilita uma cadeia de fornecimento de software segura, com alta disponibilidade, através de diferentes infraestruturas: sejam elas locais ou em nuvem.

![](/wp-content/uploads/2019/01/estrutura-Docker-EE.png)

## O lado luminoso da Docker EE

**Com o serviço para desenvolvedores**, é possível controlar as versões de containers e colaboração entre os desenvolvedores.

**Com o serviço de registros**, pode-se entregar imagens que estão devidamente testadas, certificadas e autorizadas. O serviço de registros tem conectores de integrações chamados web-hook, que facilitam a montagem do CI-CD (Integração Contínua e Publicação Contínua).

![](/wp-content/uploads/2019/01/docker-registro-de-imagem.png)

**Com o serviço de políticas e governanças** é possível controlar os acessos dos usuários, predefinindo quais os containers eles terão acesso.

**Com o gerenciamento do ciclo de vida de aplicativos** é possível orquestrar os serviços em execução e gerenciar sua publicação e suas atualizações até o momento de seu encerramento.

**Com o suporte e a extensibilidade** é possível integrar e estender o Docker Enterprise às suas ferramentas e processos existentes com guias de solução e arquiteturas de referência para que seja possível garantir Service Level Agreement (SLA) do nosso time corporativo.

Dentre as inúmeras vantagens do Docker EE está o **Universal Control Plane (UCP)**.

O **UCP** oferece um ambiente gráfico que torna muito fácil criar e administrar redes e volumes em múltiplos projetos.

O Docker UCP tem mecanismos próprios de autenticação que integram com serviços de controle de usuários (Lightweight Directory Access Protocol – LDAP) , além de permitir definir controles de acesso por perfil.

Em 2018, o Docker EE, tornou possível a integração entre Docker Swarm e Kubernetes. Isto evita o lock-in e garante ao Docker EE uma vantagem competitiva em relação aos concorrentes.

![](/wp-content/uploads/2019/01/tela-docker-ee-container.png)

## O lado sombrio da Docker EE

O Docker EE exige um investimento inicial para a compra da subscrição. Num primeiro momento, isso pode parecer um ponto negativo. Contudo, a Docker é considerada uma solução *self funding*, ou seja, a economia gerada por ela, paga o próprio investimento.

### Conclusão

A grande demanda de automação da infraestrutura e gerenciamento de cluster explicam a crescente adoção de Docker. A possibilidade de oferecer uma gerência de clusters Kubernetes e padronizar a construção de containers vão ao encontro do surgimento do DevOps.

A Docker tem uma visão focada em containers, por isto, ela está em constante processo de evolução de suas ferramentas de orquestração, com objetivo de melhorar suas features continuamente.

A Red Hat viveu do suporte ao sistema operacional e agora briga por uma fatia da nuvem e da orquestração de containers. Daí concluímos que as novidades (leia-se de segurança e inovação) surgirão na Docker e mais tarde serão replicadas nas implantações baseadas em Kubernetes (Openshift).

## Como saber mais sobre os benefícios e funcionalidades da Docker EE?

Para conhecer melhor o Docker, nada melhor do que ver a ferramenta em produção e conversar com especialistas que possam apresentá-la e tirar as dúvidas em tempo real. Nós, da Vertigo,  somos Consulting Partner da Docker e por isso possuímos os profissionais mais qualificados do mercado, que podem ajudá-lo a dimensionar a sua demanda e entender se o Docker se aplica ao seu negócio.

Para solicitar uma demonstração da ferramenta, preencha o formulário abaixo e fale com um especialista da Vertigo.
