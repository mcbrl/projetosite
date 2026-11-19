---
title: "Melhorando entregas de aplicações cloud native com Weave Kubernetes Platform"
slug: "melhorando-entregas-de-aplicacoes-cloud-native-com-weave-kubernetes-platform"
date: "2020-12-02T13:44:49"
modified: "2020-12-02T13:44:49"
status: "publish"
author: "admin"
excerpt: "Em cloud native você tem a possibilidade de navegar por uma vasta gama de aplicações. Sendo assim, existem usos específicos e requisitos de negócios que são preciso considerar, como machine learning e processamento de linguagem natural (PNL ou NLP). Configurar e gerenciar essas plataformas personalizadas e garantir que as aplicações e seu complementos funcionem juntos […]"
categories: ["transformacao-cloud-native"]
tags: ["cloud", "cloud-native", "git", "gitops", "kubernetes", "transformacao-cloud-native", "transformacao-digital", "weave-kubernetes", "weaveworks"]
featuredImage: "/wp-content/uploads/2020/12/blog-12.png"
wpId: 5381
originalUrl: "https://vertigo.com.br/melhorando-entregas-de-aplicacoes-cloud-native-com-weave-kubernetes-platform/"
contentSource: "rest"
seo:
  title: "Melhorando entregas de aplicações cloud native com Weave Kubernetes Platform - Vertigo"
  description: "A chave é ter uma plataforma cloud native flexível e replicável que possa ser adotada rapidamente e implementada com as tecnologias corretas"
  canonical: "https://vertigo.com.br/melhorando-entregas-de-aplicacoes-cloud-native-com-weave-kubernetes-platform/"
  ogImage: "/wp-content/uploads/2020/12/blog-12.png"
  robots: "index, follow"
---

Em cloud native você tem a possibilidade de navegar por uma vasta gama de aplicações. Sendo assim, existem usos específicos e requisitos de negócios que são preciso considerar, como machine learning e processamento de linguagem natural (PNL ou NLP).

Configurar e gerenciar essas plataformas personalizadas e garantir que as aplicações e seu complementos funcionem juntos para que possam ser replicados com segurança sem diminuir a velocidade é um desafio enorme para os times de desenvolvimento.

A chave é ter uma plataforma [cloud native](/conheca-os-6-pilares-para-construir-aplicativos-cloud-native/) flexível e replicável que possa ser adotada rapidamente e implementada com as tecnologias corretas para seus workflows, mas operada onde você desejar (on-premise, em nuvens públicas ou em nuvem híbrida).

Resolver estes problemas exige mais do que um instalador de cluster. É preciso não só uma estrutura para gerenciá-los em todo o seu ciclo de vida, mas, preferencialmente, fazer isso com ferramentas familiares que as equipes de desenvolvimento usam diariamente.

Você com certeza já ouviu falar sobre GitOps e como ele pode acelerar o desenvolvimento e entregar valor sem comprometer a segurança e a confiabilidade de seu processo de trabalho. Mas o que você pode ou não saber é que o Kubernetes e seu ecossistema de ferramentas cloud native também são declarativos e podem ser gerenciados no Git. 
Isso significa que o GitOps pode gerenciar com eficácia toda a sua infraestrutura, assim como o ciclo de vida completo do cluster, fornecendo os mesmos benefícios que o Git traz para as implantações de aplicações.

Uma abordagem de ferramentas de operações automatizadas apoiadas por Git reduz a complexidade do gerenciamento de configuração para plataformas Kubernetes.

Com a configuração mantida no Git, a Weave Kubernetes Platform (WKP) permite que os desenvolvedores e operadores realizem facilmente a definição, administração e instalação de plataformas consistentes e replicáveis com todos os seus add-ons e componentes com um simples “clone git”.

Acompanhe o nosso artigo para saber mais sobre como aperfeiçoar as suas entregas de aplicações em nuvem com Weave Kubernetes Platform.

## Os 4 principais benefícios do GitOps da Weave Kubernetes Platform

O gerenciamento e monitoramento de configuração baseado em Git traz para sua organização:

### Ambientes consistentes

Crie, atualize e gerencie clusters de aplicações com todos os add-ons necessários para uma plataforma cloud native ágil.

### Reduza o custo de operações pós implantação

Minimize a sobrecarga de operações com gerenciamento automatizado do ciclo de vida do cluster: patches de segurança e atualizações de extensão.

### Monitoramento ativo

Valide aplicações e alterações do cluster e obtenha alerta de inconsistências com painéis instantâneos que não requerem configuração e que são exibidos diretamente do Git, após o deployment de um cluster.

### Segurança e conformidade mais fortes

Aumente a segurança e atenda aos requisitos regulatórios com políticas auditáveis ​​e transparentes gerenciadas pelo GitOps para visibilidade em tempo real e controle de acesso em seus clusters e aplicações.

## Principais desafios para equipes que implementam Kubernetes

Antes que seus benefícios sejam percebidos, há desafios na entrega, gerenciamento e desenvolvimento em Kubernetes em diferentes níveis. É preciso garantir uma configuração de cluster consistente em todos os ambientes.
Alcançar a velocidade ideal requer que as equipes de sua organização possam trabalhar juntas e, frequentemente, nos mesmos clusters.
Abaixo está um resumo dos papéis e desafios mais comuns encontrados no cotidiano de quem trabalha com Kubernetes:

### Arquiteto/Operador de Plataforma

**Papel:** Responsável por criar a definição do cluster que vai atender aos requisitos da corporação e dos times.
**Desafio:** definir padrões *production-ready* para clusters, administrar Kubernetes e atualizações de componentes. Precisa de um plano para segurança e regulação de compliance.

### Operador de cluster

**Papel:** Responsável por administrar clusters, usando a definição padrão da plataforma e gerenciando um cluster individual.
**Desafio:** atualizações de cluster e de componentes. Escalar e controlar, ao longo do tempo, escolhas de configuração de customização.

### Desenvolvedor de aplicação

**Papel:** Responsável por criar a aplicação que vai rodar na plataforma de produção. Desenvolvem a aplicação, testam em uma variedade de set-ups e lançam novas versões.
**Desafio:** realizar deploy de novas atualizações e features. Conhecer e administrar a configuração de ambientes idênticos para testar, observar e depurar problemas.

### Engenheiro de Confiabilidade de Sites (SRE)

**Papel:** Responsável pela gestão e automação dos ambientes de tecnologia. Os principais objetivos são criar sistemas de software ultra escaláveis e altamente confiáveis.
**Desafio:** controlar a observabilidade, logging e outros serviços relativos à administração de aplicação uptime.

## Empresa pronta para GitOps com desenvolvimento aprovado

A Weave Kubernetes Platform (WKP) é uma plataforma pronta para produção e para uso, sem nenhum bloqueio. GitOps é a arquitetura subjacente à experiência do desenvolvedor do WKP, o que simplifica a configuração e o gerenciamento das plataformas Kubernetes em sua organização.
As equipes de operações criam plataformas Kubernetes escolhendo em um catálogo atualizado de add-ons e outras ferramentas como monitoramento, pipelines de implantação CI/CD ou casos como aprendizado de máquina.
Depois que as ferramentas são selecionadas e configuradas para trabalharem juntas, ela é verificada no Git como uma definição de modelo que pode ser anexada à uma versão base do Kubernetes upstream puro ou instalada em uma variedade de versões hospedadas do Kubernetes, como EKS, AKS e GKE .
Isso fornece aos desenvolvedores um método *self-service* para ativar corretamente os clusters configurados com base em seus requisitos de caso de uso. Um *stack* estável e totalmente integrado gerenciado a partir do Git evita clusters isolados e outras configurações difíceis de replicar, além de permitir que as equipes forneçam e gerenciem plataformas confiáveis ​​e previsíveis em diferentes ambientes (seja no on-premise, na nuvem ou em multi-cluster em várias nuvens).
Como os modelos de plataforma declarativos são mantidos no Git, todo o ciclo de vida do cluster – incluindo upgrades, patches de segurança, rollbacks e outras tarefas de manutenção – são facilmente gerenciados através de *pull requests*. Mais importante ainda, o WKP fornece políticas e regras baseadas em Git para especificar, auditar e controlar quem pode alterar o que na configuração do cluster.

## Como a Weave Kubernetes Platform funciona?

### Automatização da configuração do cluster a partir de templates

No cerne da configuração de um cluster centralizado e reproduzível estão os modelos WKP. É possível criar um modelo com stack de add-ons para os tipos de clusters necessários em sua organização.
Por exemplo, você pode ter uma configuração de stack de cluster específica para aprendizado de máquina ou um back-end específico para diferentes provedores de nuvem.

### Controle completo a partir do Git

Armazene o cluster no Git e disponibilize-o como um modelo configurado para diferentes equipes em sua organização. Anexe e gerencie uma instalação do Kubernetes com seus add-ons e controle tudo a partir do Git. 
Gerencie facilmente todo o ciclo de vida do seu cluster, incluindo patches de segurança e upgrades com GitOps.

### Desenvolvimento self-service

Com as políticas e configuração de cluster em um só lugar, desenvolvedores e equipes da plataforma podem simplesmente realizar “git fork” e “git clone” dos clusters de gerenciamento para criar clusters consistentes e repetíveis em escala para ambientes em nuvem e local.

## Passo a passo para implementação

### 1- Defina um template

Uma das ideias básicas por trás do WKP é a capacidade de manter a configuração de um stack de aplicações , add-ons e componentes integradas no Git. Ao realizar a configuração apenas uma vez, os clusters podem ser facilmente reproduzidos em ambientes e nuvens. O WKP se refere a esses stacks pré-configurados como um template.
Depois que um template é configurado e verificado no Git, as equipes podem acessá-lo e anexá-lo a um cluster durante sua criação para plataforma Kubernetes totalmente configurada e pronta para uso.
O uso destes templates evita ter que lidar com clusters “difíceis” sempre que uma aplicação ou configuração específica for necessária. Em vez disso, as equipes podem criar clusters com padrões bem definidos, economizando tempo e evitando a complexidade do gerenciamento de configuração do Kubernetes.

### 2- Crie um cluster

A guia “Cluster” oferece uma visão panorâmica de todos os clusters ou até mesmo frotas (fleets) criadas com WKP em toda a sua organização. Uma frota (fleet) é um grupo de clusters com um conjunto comum de propriedades, como clusters de entrega de aplicativos ou clusters de banco de dados. Cada um desses clusters do Kubernetes compartilha requisitos semelhantes de segurança, auditoria e conformidade e pode e geralmente deve ser tratado da mesma maneira.
Também é possível criar um cluster a partir dessa visualização e anexar o template que deseja adicionar para criar uma plataforma especializada. Há a possibilidade de juntar template para criar diferentes back-ends para configuração multicloud. Então, escolha onde deseja iniciar o cluster (nuvem pública ou on-premise) e selecione a versão do Kubernetes que deseja.
Com um cluster configurado, é simples escalar direto do console de gerenciamento WKP e, em seguida, controlar a versão da mudança no Git, fornecendo uma trilha de auditoria completa.

![](/wp-content/uploads/2020/12/Capturar.png)

### 3- Gerencie e monitore o cluster

Com o cluster criado e iniciado, ao clicar em sua definição você acessa seu painel. Lá são exibidos os componentes adicionados com uma análise instantânea sobre sua saúde. Também é fornecida uma maneira fácil de detalhar configuração individual para visualizar o histórico do que foi alterado no cluster no Git.
Com controle e gerenciamento apoiados pelo Git, os clusters são totalmente compatíveis com registros auditáveis. Os desenvolvedores não precisam aprender um novo workflow para cada criação de novos clusters em ambientes diferentes. Um único fluxo padrão para desenvolvimento de aplicações e operações de cluster pode ser aplicado, simplificando o gerenciamento do Kubernetes.

![](/wp-content/uploads/2020/12/Weaveworks-cluster-gitops-1.png)

## Conclusão

Otimize a entrega e a segurança do cluster enquanto performa as melhores práticas comprovadas de desenvolvimento e gerenciamento de políticas com workflow  GitOps.
Aproveite o gerenciamento flexível e repetível de cluster Kubernetes l em toda a infraestrutura – na nuvem e on premise. Obtenha as recompensas do aumento da velocidade e da redução da complexidade operacional com o apoio de [nossos especialistas.](/contato/)

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/cloud-native-assessment/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
