---
title: "Flux, o operador GitOps para Kubernetes"
slug: "flux-o-operador-gitops-para-kubernetes"
date: "2021-10-14T14:45:15"
modified: "2026-02-02T20:39:27"
status: "publish"
author: "admin"
excerpt: "Você já ouviu falar do operador de GitOps para Kubernetes, o Flux? As equipes de desenvolvimento que optarem pelo Kubernetes, podem utilizar o Flux como o operador GitOps. Essa é uma das formas mais eficientes para aplicar as práticas de implantação contínua de maneira segura. O Flux suporta implantações de aplicações baseadas em pull e […]"
categories: ["kubernetes"]
tags: ["gitops", "kubernetes"]
featuredImage: "/wp-content/uploads/2026/02/flux-o-operador-gitops-para-kubernetes.png"
wpId: 157423
originalUrl: "https://vertigo.com.br/flux-o-operador-gitops-para-kubernetes/"
contentSource: "rest"
seo:
  title: "Flux, o operador GitOps para Kubernetes - Vertigo"
  description: "Conheça o Flux, o operador GitOps para Kubernetes. Saiba como configurar e utilizar. Acesse o nosso blog e leia mais."
  canonical: "https://vertigo.com.br/flux-o-operador-gitops-para-kubernetes/"
  ogImage: "/wp-content/uploads/2026/02/flux-o-operador-gitops-para-kubernetes.png"
  robots: "index, follow"
---

Você já ouviu falar do operador de GitOps para Kubernetes, o Flux? As equipes de desenvolvimento que optarem pelo Kubernetes, podem utilizar o Flux como o operador GitOps. Essa é uma das formas mais eficientes para aplicar as práticas de implantação contínua de maneira segura.

O Flux suporta implantações de aplicações baseadas em pull e elimina a necessidade das equipes de TI gerenciarem um processo separado para implantação no cluster. Embora essa técnica emergente para gerenciar e implantar aplicações exija disciplina, ela é construída sobre bases de software sólidas de integração contínua.

Nesse artigo, mostraremos o valor dessa abordagem e explicaremos como começar. Além de explicarmos a relação do Flux com o Kubernetes, e como ele se relaciona com o GitOps, também vamos entender como o GitOps se relaciona com um ambiente Kubernetes. Boa leitura!

**Leia mais**

- [Descubra como melhorar a qualidade de seu deploy com GitOps](/descubra-como-melhorar-qualidade-de-seu-deploy-com-gitops/)
- [Automatizando Kubernetes com GitOps](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops)

## Visão geral: o que é GitOps?

Criado pela Weaveworks, [o GitOps](/gitops-da-automacao-a-integracao-continua/) é um gerenciador de configuração aplicada a um contexto específico e restrito, considerando que a única fonte de verdade é um repositório Git.

O GitOps gerencia automaticamente o provisionamento e a implantação de infraestrutura através de pull requests do Git. Dentro do repositório Git, estão contidas as informações de estado do sistema, evidenciando o registro de mudanças para que ele fique visível e seja possível realizar a auditoria.

Ele é usado principalmente na comunidade Kubernetes, mas há esforços de outras comunidades para trazer esses conceitos para outros ambientes.

## O que é Flux?

Indo direto ao ponto, o Flux é o operador GitOps para Kubernetes.

Originalmente desenvolvida pela [Weaveworks](/parcerias/weaveworks/), o Flux é uma ferramenta open source e que posteriormente foi absorvida pela Cloud Native Computing Foundation.

A sua execução é realizada no cluster que gerencia e a sua função é observar repositórios remotos que descrevem o estado do cluster, dessa forma, é feita a reconciliação das mudanças para a conversão de estado do cluster atual para o desejado.

O Flux sincroniza os repositórios Kubernetes com os de controle de versão, realizando uma pesquisa constante. Em vez de aplicar as mudanças através de um operador ou sistema de CI, ele realiza essas alterações de forma independente.

Sendo assim, o Flux é executado dentro do cluster Kubernetes que ele próprio gerencia, dando liberdade para os operadores do cluster realizarem outras tarefas.

## Componentes do Flux

Veja alguns dos componentes mais importantes do operador GitOps para Kubernetes:

- **Fontes (Sources)** – Você tem a sua disposição algumas fontes para realizar a configuração do Flux. Os repositórios Git para o cluster Kubernetes, assim como as aplicações implantadas no Kubernetes, são exemplos de fontes.

Veja alguns sites que servem de fonte para a configuração do seu Flux.

- [GitRepository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [BitBucket](https://bitbucket.org/)
- [HelmChart](https://helm.sh/docs/topics/charts/)
- [HelmRepositories](https://fluxcd.io/docs/components/source/helmrepositories/)
- **Reconciliação (Reconciliation)** – São as mudanças definidas por fontes, o que garante o alcance de estado desejado pelo cluster. O Flux fará mudanças originadas das fontes até que haja um recurso de personalizado por uma ferramenta (Kustomization), associada que de a instrução de reconciliação com a fonte.
- **Kustomization** – Ferramenta utilizada para realizar manifestos Kubernetes através de um arquivo Kustomization. O Flux também tem recursos personalizados que gerenciam HelmReleases e muito mais opções.

## Como instalar o Flux V2 usando o repositório GitHub

Para seguir com a instalação do operador GitOps para Kubernetes, os operadores de cluster precisam instalar o Flux CLI em sua *development box* ou *jump boxes* para bootstrap para então, inicializar o cluster a ser gerenciado pelo Flux.

[Acesse o passo a passo](https://fluxcd.io/docs/get-started/) para inicializar o Flux em um cluster Kubernetes e implantar uma aplicação de exemplo com GitOps.

Vale mencionar que para realizar a instalação seguindo o tutorial, você precisará:

- Ter um cluster Kubernetes (v1.16 e superior);
- Ter uma conta GitHub e um [token de acesso pessoal](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) (PAT) com acesso para criar repositórios;
- Acessar a [aplicação de demonstração](https://github.com/DexterPOSH/podinfo).

## Automatizando o Kubernetes com GitOps

O GitOps tem a sua base estruturada nas boas práticas do DevOps, tendo o Git a sua fonte para infraestrutura declarativa e aplicações de todo o sistema. Dessa forma, é possível realizar o gerenciamento de configuração do seu projeto através de uma versão no Git e o Kubernetes é uma ferramenta declarativa ideal para essa ação.

Por exemplo, o operador pode ser executado dentro do cluster Kubernetes, realizando as alterações solicitadas e logo depois aplicando para atingir o estado desejado.

Veja como o fluxo de trabalho baseado em pull se desenvolve:

1. A equipe de desenvolvimento envia as alterações necessárias para o repositório da aplicação.
2. Em seguida, as alterações ativam o pipeline de construção, que constrói a aplicação.
3. Após a sincronização, o pipeline de compilação é concluído e publica a imagem de container com uma nova versão da aplicação.
4. Por fim, o repositório de ambiente com configuração do Kubernetes é atualizado para usar a nova versão da imagem do container.

Através do exemplo baseado em push, removemos a etapa em que o pipeline de implantação realiza uma nova configuração.

Parece um simples detalhe, mas a mudança de “push” para “pull” modifica a forma como as equipes de desenvolvimento implantam suas aplicações e executam operações de infraestrutura.

Cada comando que implementa uma mudança, transforma-se em uma solicitação pull no repositório, e o operador GitOps que fica dentro do sistema, é responsável por cuidar dessas tarefas.

A combinação de APIs Kubernetes declarativas junto ao modelo de implantação GitOps, resulta em duas vantagens principais:

- Padrão do operador – Os operadores de cluster ficam integrados e livres para reconciliar o estado do sistema.
- Mais segurança – Pelo fato do operador não ser executado dentro do cluster, as credenciais dos processos de CI ou equipes de infraestrutura não são expostas.

## Implemente o GitOps e acelere os resultados da sua empresa com a Vertigo Tecnologia

Para obter mais eficiência na entrega de resultados, segurança de dados e produtividade da sua equipe, o GitOps é fundamental para implementar estratégias de Kubernetes altamente escaláveis e a Vertigo Tecnologia é o parceiro ideal para isso.

Como parte do nosso portfólio de serviços, utilizamos a Weave Kubernetes Platform (WKP), uma plataforma preparada para a produção com GitOps como arquitetura subjacente. 

Sua empresa poderá simplificar todo o processo de configuração e o gerenciamento de clusters, através de uma única plataforma, reunindo todas as ferramentas, serviços e componentes necessários.

Entre em contato com o nosso time de especialistas, temos um time experiente e preparado para realizar a implementação do [GitOps com Kubernetes](/como-gitops-oferece-alta-velocidade-para-kubernetes/) para alavancar seus projetos.

*Publicação adaptada do site [Search IT Operations](https://searchitoperations.techtarget.com/tutorial/Try-out-this-GitOps-tutorial-with-Flux-and-Kubernetes)*

**Leia também**

- [Aplicando a observabilidade no Kubernetes](/aplicando-a-observabilidade-no-kubernetes/)
- [Kubernetes: 6 principais componentes da sua arquitetura](/kubernetes-6-principais-componentes-da-sua-arquitetura/)
