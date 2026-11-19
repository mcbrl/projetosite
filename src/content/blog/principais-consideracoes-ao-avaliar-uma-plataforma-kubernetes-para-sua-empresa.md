---
title: "Principais considerações ao avaliar uma plataforma Kubernetes para sua empresa"
slug: "principais-consideracoes-ao-avaliar-uma-plataforma-kubernetes-para-sua-empresa"
date: "2021-03-24T11:24:23"
modified: "2021-03-24T11:24:23"
status: "publish"
author: "admin"
excerpt: "O Kubernetes está revolucionando a forma como as organizações executam aplicações. Esse sistema de orquestração de contêineres traz velocidade, flexibilidade e confiabilidade para as equipes de desenvolvimento e operações. Pensando nisso, como selecionar as tecnologias certas para a sua empresa e quais recursos são realmente importantes para o negócio? Ao longo dos nossos anos de […]"
categories: ["transformacao-cloud-native"]
tags: ["gitops", "kubernetes", "openshift", "transformacao-cloud-native", "transformacao-digital", "weave-kubernetes", "weaveworks", "wpk"]
featuredImage: "/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-24-at-10.56.20.jpeg"
wpId: 5499
originalUrl: "https://vertigo.com.br/principais-consideracoes-ao-avaliar-uma-plataforma-kubernetes-para-sua-empresa/"
contentSource: "rest"
seo:
  title: "Principais considerações ao avaliar uma plataforma Kubernetes para sua empresa - Vertigo"
  description: "Ao longo dos nossos anos de mercado, trabalhamos com diversos clientes, em vários setores, para implementar suas plataformas Kubernetes."
  canonical: "https://vertigo.com.br/principais-consideracoes-ao-avaliar-uma-plataforma-kubernetes-para-sua-empresa/"
  ogImage: "/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-24-at-10.56.20.jpeg"
  robots: "index, follow"
---

O Kubernetes está revolucionando a forma como as organizações executam aplicações. Esse sistema de orquestração de contêineres traz velocidade, flexibilidade e confiabilidade para as equipes de desenvolvimento e operações. Pensando nisso, como selecionar as tecnologias certas para a sua empresa e quais recursos são realmente importantes para o negócio?
Ao longo dos nossos anos de mercado, trabalhamos com diversos clientes, em vários setores, para implementar suas plataformas [Kubernetes](/como-kubernetes-pode-reduzir-complexidade-da-nuvem/). Usando nossas experiências, identificamos alguns dos principais recursos que você precisa considerar ao utilizá-lo.  
Continue lendo nosso artigo para conhecer estas considerações e ficar a par da comparação sobre como esses recursos são refletidos nas plataformas Rancher, Red Hat OpenShift e Weave Kubernetes Platform. Boa leitura!

## A diferença do GitOps

Uma plataforma de sucesso precisa ser flexível, reproduzível e adotada rapidamente por toda sua equipe. Além disso, deve ter as tecnologias corretas para executar sua workload, seja on premise ou em nuvem pública. 
Resolver esses requisitos vai além de um instalador de cluster. Requer uma plataforma de aplicação completa. As equipes precisam de uma estrutura de gerenciamento que utilize ferramentas conhecidas, como o Git.
Um stack estável, totalmente integrado, modelado e gerenciado com [GitOps](/automatizando-kubernetes-com-gitops/) evita clusters únicos e outras configurações que sejam difíceis de replicar. As equipes podem fornecer plataformas previsíveis em diferentes ambientes, assim como também podem ser escalados para agrupar muitas aplicações.
Os modelos de configuração mantidos no Git facilitam o gerenciamento de todo o ciclo de vida do cluster e a manutenção por pull request. As necessidades regulatórias e de conformidade são facilmente atendidas por meio de regras e políticas baseadas em Git que controlam quem pode realizar alterações na configuração.

## Provedores de Kubernetes

Selecionamos essas plataformas devido à sua maturidade no mercado e semelhanças em como suas soluções são arquitetadas e entregues. 

### Rancher

O **Rancher** se descreve como uma plataforma completa de gerenciamento de contêineres que fornece acesso fácil ao Kubernetes. É considerado um software de código aberto puro e inclui uma interface de usuário madura, bem como RBAC com uma seleção completa de componentes adicionais.
É focado no mercado intermediário, portanto, a facilidade de uso é uma de suas características mais importantes. Embora sua interface gráfica de usuário ajude a colocar as equipes em ação de forma rápida, sua arquitetura subjacente não se adapta muito bem a uma grande organização.
Também carece de alguns recursos corporativos, como auditoria integrada para conformidade e outros requisitos regulatórios. Embora indique ser solução de API, sua arquitetura não é baseada em construções declarativas e não pode ser gerenciada com GitOps para uma configuração consistente.

### Red Hat OpenShift

**OpenShift** é uma plataforma integrada de contêiner voltada para usuários de grandes empresas que desejam uma solução única. Produto de um grande provedor corporativo, o OpenShift visa fornecer todos os elementos que as empresas precisam.
Os controles de segurança são extensos, o sistema inteiro funciona em torno de uma estrutura de operação que torna as implantações no cluster um assunto praticamente sem intervenção.
Como uma plataforma integrada, OpenShift é uma solução inerentemente complexa, pode se tornar complicada de instalar e as integrações limitam as opções disponíveis.
Essa falta de flexibilidade significa que os usuários do OpenShift não podem aproveitar facilmente as vantagens de outras abordagens e as atualizações são complicadas. Como solução empresarial, também pode ser cara.

### Weave Kubernetes Platform (WKP)

A WKP é uma plataforma Kubernetes production ready que constrói aplicação completa e fornece fluxos de trabalho de gerenciamento GitOps para uma abordagem moderna de operações.
GitOps forma a arquitetura subjacente e a experiência do desenvolvedor do WKP, simplificando a configuração e o gerenciamento do Kubernetes. WKP é uma solução de API pura que usa o padrão aberto Cluster API. Isso garante que funcionará em vários ambientes de nuvem e on premise.
O GitOps garante que a plataforma inteira, com todos os seus add-ons, sejam mantidos no Git com controle total de versão – capitalizando todos os benefícios que isso fornece, desde segurança e auditabilidade até recuperação embutida de desastres e MTTR (Tempo Médio de Recuperação) reduzido.

## Quais são as principais considerações ao avaliar uma plataforma Kubernetes para sua empresa?

### Provisionamento de infraestrutura

Pronto para uso, o Kubernetes não oferece uma maneira simples de implantar clusters altamente disponíveis, cabendo à sua equipe forjar uma abordagem DIY ou usar uma solução mais fechada e caixa preta.
Para usuários corporativos, a sugestão é utilizar a criação de máquinas, VMs e outras infraestruturas sob GitOps. Isso simplifica o processo de instalação e permite o gerenciamento automatizado do ciclo de vida, mantendo todas as configurações controladas centralmente.

### Instalação de cluster on premise e em cloud

Suas aplicações precisam ser executadas na nuvem e on premise, o que significa que sua plataforma Kubernetes precisa estar disponível nestas configurações. Usar o gerenciamento de configuração para definir a plataforma Kubernetes é fundamental para reduzir a sobrecarga operacional e acelerar a entrega de recursos.
Para implantações corporativas, também é importante considerar a alta disponibilidade e a recuperação de downtime que pode ser repetida em vários back-ends.

### Componentes de cluster

A maioria das equipes de desenvolvimento tem um conjunto de ferramentas que deseja usar em suas atividades do dia a dia. Seja de registro ou rastreamento, integração contínua ou dashboards, é importante oferecer opções de ferramentas bem avaliadas que podem ser facilmente integradas a uma plataforma, sem comprometer a segurança ou outros requisitos regulatórios.

### Upgrades e atualizações de plataforma

Novas versões do Kubernetes são lançadas periodicamente e os clientes exigem atualizações contínuas seguras e confiáveis. O Kubernetes e seu ecossistema de projetos oferecem flexibilidade.
O benefício do GitOps é que os usuários podem realizar atualização de maneira simples e, como todos os elementos estão sob gerenciamento de configuração, reverter para a versão válida conhecida anteriormente.

### Modelos composable

Um dos maiores desafios para as empresas que estão fazendo a transição para cloud native é fornecer plataformas e ambientes Kubernetes onde for necessário. Implementar e gerenciar um grande número de aplicações e clusters adiciona complexidade, aumenta a sobrecarga operacional e, também, as chances de erros.
Sendo assim, é importante simplificar a configuração e o gerenciamento das plataformas Kubernetes com uma abordagem baseada em infraestrutura, bem como todas as configurações necessárias para qualquer componente do cluster.
Cada modelo composable permite que uma equipe implante facilmente novos clusters ou aplicações usando configurações padrão predefinidas. E, como o modelo é declarativo e mantido em Git, as equipes são capazes de entregar e gerenciar plataformas confiáveis ​​e previsíveis em diferentes ambientes.

### Segurança e política

As grandes organizações precisam de segurança e políticas eficientes que possam ser facilmente aplicadas, de preferência uma configuração segura, pronta para uso, com cluster de granulação fina e controle de mudança de workload. Funções e permissões de RBAC extensíveis são importantes para que cada usuário tenha recursos e limites claros.
Com abordagem GitOps, configuramos políticas e funções no Git para que possam ser rastreadas. Cada mudança no cluster é verificada no Git, fornecendo e aplicando feedback em tempo real. Como prática recomendada, a política deve ser controlada a partir de um local central com auditoria completa.

### Monitoramento e alerta de cluster

Um Kubernetes crítico para aplicações operacionais deve ser monitorado ininterruptamente. O benefício de uma plataforma de monitoramento integrada é que ela possui os dashboards e alertas apropriados.
Configurar dashboards e métricas para clusters pode ser complexo e obter uma vantagem inicial com modelos predefinidos gerenciados no Git significa que as equipes não estão trabalhando do zero.
Os dashboards pré-configurados também oferecem uma experiência consistente para o gerenciamento de clusters em toda a empresa.

### Entrada de rede

A integração e a entrada de rede são componentes cruciais da execução do Kubernetes em escala. Uma Rede Definida por Software (em inglês, software defined network, ou somente SDN) é normalmente adicionada ao cluster para infra interna de pods e também para definir políticas.
As infraestruturas corporativas são ambientes complexos, portanto, neste ambiente qualquer Kubernetes deve oferecer suporte a uma variedade de opções para refletir esses requisitos.
SDNs diferentes podem ter recursos variados, como suporte a políticas, por exemplo. O que torna mandatório que um SDN possa ser facilmente trocado quando necessário. O mesmo vale para um endpoint de entrada: precisa ser flexível em termos de ser capaz de se conectar a diferentes APIs gateways e load balancer.

### Gerenciamento multi-cluster GitOps

As empresas precisam implantar muitos clusters em ambientes e, até mesmo, organizações diferentes. O benefício de usar o gerenciamento de configuração completo é a capacidade de tratar os clusters como ferramentas. Isso permite ciclos de construção mais rápidos com mais recursos entregues aos usuários finais. 

### Multi tenancy

Várias equipes operando no mesmo cluster com particionamento e controle de acesso baseado em funções permite compartilhamento de recursos sem ultrapassar os limites de segurança, além de reduzir os custos.
No topo da lista de necessidade de Kubernetes, na maioria das organizações, está a capacidade de gerenciar namespaces e aplicar os controles de segurança apropriados.
Maior controle pode ser obtido por meio do gerenciamento de namespaces e multi tenancy com fluxos de trabalho do GitOps e espaços de trabalho de equipe mantidos no Git.

### Pipelines integrados de implantação GitOps

As plataformas [Kubernetes](/como-kubernetes-pode-reduzir-complexidade-da-nuvem/) que fornecem componentes de entrega contínua aumentam a velocidade e também reduzem as barreiras de entrada. Com a entrega contínua ativa, sua equipe pode implantar mudanças ao longo do dia, em vez de trimestral ou mensalmente.
A entrega contínua com GitOps fornece um mecanismo para reverter as alterações sempre que necessário. As equipes de desenvolvimento podem mexer desde o código-fonte até a produção. Ainda mais importante: com GitOps, eles também conseguem reverter ou desistir das alterações com a mesma facilidade.

### Observabilidade

Para manter a velocidade de implantação, você precisa de ferramentas que possam [fornecer feedback e controle instantâneos](/a-observabilidade-no-processo-de-evolucao-dos-novos-negocios/) para que, quando algo der errado, possa ser revertido facilmente.
Visibilidade no cluster após uma implantação, bem como feedback e capacidade de reversão instantânea e contínua, são cruciais para equipes que desenvolvem aplicações cloud native.

### Implementação progressiva

Quando se trata de experimentação e concessão de recursos aos clientes em tempo hábil, é fundamental que sua plataforma possa oferecer pipelines de entrega progressiva com eficiência.
Para conseguir implementar essas implantações e obter seus benefícios, é necessária uma estrutura que permite medir e reagir aos resultados rapidamente.

### Service-level agreement (SLA)

Um SLA arrojado é mandatório para a maioria das organizações. A TI precisa garantir que a plataforma Kubernetes esteja disponível para desenvolvedores e seus usuários finais, de modo a oferecer suporte aos requisitos de negócios.

## Conclusão

A grande demanda por automação da infraestrutura e gerenciamento de clusters explicam a crescente adoção Weave Kubernetes Platform. A possibilidade de oferecer uma gerência e padronização da [construção de contêineres](/estrategia-de-container/) vão ao encontro do surgimento do DevOps.
A Weaveworks tem uma visão focada em contêineres, por isto ela está em constante processo de evolução de suas ferramentas de orquestração.

## Como saber mais sobre os benefícios e funcionalidades da WKP?

Nós da Vertigo Tecnologia, parceira oficial no Brasil em serviços profissionais da Weaveworks, podemos criar uma arquitetura de referência cloud native que se adapte às suas necessidades de negócios. 
Tem dúvidas sobre o que você precisa para gerenciar seu Kubernetes de forma otimizada e flexível? [Entre em contato conosco](/contato/) para obter uma demonstração da Weave Kubernetes Platform.

## Saiba como realizar deploys frequentes com mais segurança e com menos sobrecarga com GitOps

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
