---
title: "Automatizando Kubernetes com GitOps"
slug: "automatizando-kubernetes-com-gitops"
date: "2021-01-13T13:14:11"
modified: "2021-01-13T13:14:11"
status: "publish"
author: "admin"
excerpt: "Empresas que querem se tornar mais rápidas, que precisam realizar deploys frequentes com mais segurança e com menos sobrecarga, o GitOps é um método rápido e seguro para o time de desenvolvedores manter e atualizar aplicações complexas em execução no Kubernetes.   Como o Kubernetes e muitas outras tecnologias cloud native são quase inteiramente declarativas, as […]"
categories: ["transformacao-cloud-native"]
tags: ["cloud", "cloud-native", "devops", "gitops", "kubernetes", "observabilidade", "weave-kubernetes"]
featuredImage: "/wp-content/uploads/2021/01/blog2.png"
wpId: 5422
originalUrl: "https://vertigo.com.br/automatizando-kubernetes-com-gitops/"
contentSource: "rest"
seo:
  title: "Automatizando Kubernetes com GitOps - Vertigo"
  description: "O GitOps separa o CI do CD e esse é um dos motivos pelos quais é um método mais seguro de implantação de aplicações no Kubernetes"
  canonical: "https://vertigo.com.br/automatizando-kubernetes-com-gitops/"
  ogImage: "/wp-content/uploads/2021/01/blog2.png"
  robots: "index, follow"
---

Empresas que querem se tornar mais rápidas, que precisam realizar *deploys* frequentes com mais segurança e com menos sobrecarga, o GitOps é um método rápido e seguro para o time de desenvolvedores manter e atualizar aplicações complexas em execução no Kubernetes.  
Como o Kubernetes e muitas outras tecnologias *cloud native* são quase inteiramente declarativas, as definições de infraestrutura podem ser mantidas com o código da aplicação no Git. Manter todo o seu sistema em Git significa que sua equipe de desenvolvimento usa workflows bastante familiares baseados em Git e *Pull Requests* para aplicar tanto as alterações da aplicação quanto infraestrutura ao Kubernetes.  
Com todo o estado do cluster mantido sob controle de código-fonte, as ferramentas de Diff e os agentes de sincronização podem comparar o que está em produção com o que está no repositório de fonte e quando uma divergência é detectada entre os dois, um alerta pode ser enviado, criando um método eficiente de loop de feedback e controle para gerenciar seu cluster. 

## Modelo operacional para construir aplicações cloud native

Em sua essência, GitOps é: 

1. Um modelo operacional para Kubernetes e outras tecnologias *cloud native*, que fornece um conjunto de melhores práticas que unificam a implantação, gerenciamento e monitoramento de clusters e aplicações em contêineres.
2. Um caminho conhecido para uma melhor experiência do desenvolvedor ao gerenciar aplicações na qual pipelines CI/CD e workflows Git são utilizados, tanto na operação, quanto no desenvolvimento.

## Automação de Kubernetes com liberdade de escolha

GitOps dá a você a liberdade de escolher as melhores ferramentas para diferentes partes dos pipelines CI/CD. É possível selecionar ferramentas do ecossistema de código aberto (open source) ou fechado e, dependendo de suas necessidades, até combiná-las. 
Quaisquer que sejam as ferramentas escolhidas para seus pipelines de implantação e entrega, a aplicação das melhores práticas do GitOps deve ser um componente integral em seu processo de entrega contínua. Isso tornará a construção e adoção de uma cultura de entrega contínua em sua organização muito mais fácil.  

## Principais benefícios do GitOps

Aplicar as melhores práticas do GitOps geram resultados de longo prazo e fornecem: 

### Garantia de maior segurança

A precisão e a segurança do Git, apoiadas pela forte criptografia usada para rastrear e gerenciar as alterações, bem como a capacidade de identificar estas alterações para provar a autoria e origem, são as chaves para uma definição correta e segura do estado desejado de um cluster.
Se ocorrer uma violação de segurança, uma única fonte de verdade – *single source of truth (SSOT)* – imutável e auditável pode ser usada para recriar um novo sistema independente daquele comprometido, reduzindo o downtime e permitindo uma resposta muito melhor a incidentes. 
Além disso, a responsabilidade dividida entre o empacotamento do software e a sua liberação para um ambiente de produção incorpora o princípio de segurança do menor privilégio, que reduz o impacto de um potencial comprometimento e fornece uma menor superfície de ataque.

### Mais velocidade e produtividade

A automação de deployment contínuo integrado com loop de feedback e controle acelera o tempo médio de deployment. As definições declarativas mantidas no git permitem que os desenvolvedores usem workflows mais familiares, reduzindo o tempo utilizado para subir um novo ambiente de desenvolvimento ou de teste para implantar novos recursos em um cluster.
As equipes podem entregar mais alterações por dia e isso se traduz em tempo de resposta mais rápido para novos recursos e funcionalidades para o cliente. 

### Redução do tempo médio de recuperação

A quantidade de tempo de recuperação após o colapso de um cluster também é reduzida com as melhores práticas de GitOps. Com a capacidade integrada do git para *revert/rollback and fork*, você ganha rollbacks estáveis ​​e reproduzíveis. Uma vez que todo o seu sistema está descrito no git, há somente uma fonte de verdade para se recuperar após uma falha de cluster, reduzindo o tempo médio para recuperação (MTTR) de horas para minutos. 

### Estabilidade e confiabilidade aprimoradas

Como o GitOps fornece um único modelo operacional para criar infraestrutura e aplicações, você tem workflows consistentes, de ponta a ponta, em toda a organização. Não só a integração contínua e os pipelines de deployment contínuo são orientados por *pull requests*, mas também as tarefas operacionais são totalmente reproduzíveis por meio do git. 

### Compliance e auditoria mais fáceis

Com a capacidade do git de gerenciar seu cluster Kubernetes, você obtém, automaticamente, uma trilha de auditoria conveniente para todas as alterações de cluster fora do Kubernetes, que podem ser usadas para atender a conformidade com SOC 2 e garantir estabilidade.  
Como as alterações são rastreadas e registradas de maneira segura, a conformidade e a auditoria tornam-se triviais. O uso de ferramentas de software como [Kubediff](https://github.com/weaveworks/kubediff), Terradiff e Ansiblediff também permite comparar uma definição confiável do estado do cluster com o mesmo em execução real, garantindo que as alterações rastreadas e auditáveis ​​correspondam à realidade. 

## O que você precisa para ter GitOps?

Para aqueles que desejam implementar workflows GitOps em seus pipelines CI/CD, os pontos a seguir não podem faltar:

### 1. Um sistema inteiro descrito declarativamente

Kubernetes é uma das muitas ferramentas *cloud native* modernas que são declarativas e que podem ser tratadas como código. Declarativo significa que a configuração é garantida por um conjunto de fatos em vez de por conjunto de instruções.
Com as declarações da sua aplicação versionadas em git, você possui uma única fonte de verdade. Suas aplicações podem então ser facilmente implantadas e revertidas para o Kubernetes. E ainda mais importante e crítico para a história do GitOps é que, quando ocorre um desastre, seu cluster também pode ser reproduzido de forma previsível, confiável e rápida.

### 2. O estado desejado do sistema canonicamente versionado em git

Com a declaração de seu sistema armazenada em um sistema de controle de versão e servindo como sua fonte de verdade canônica, você tem um lugar central de onde tudo é derivado e conduzido. Isso torna trivial rollbacks e você pode usar um “*git revert*” para voltar ao estado anterior. Com as excelentes garantias de segurança do git, os sinais de chave SSH se comprometem a aplicá-las sob a autoria e procedência do código. 

### 3. A capacidade de aplicar automaticamente as alterações aprovadas

Uma vez que se tenha o estado declarado mantido no git, a próxima etapa é conseguir aplicar automaticamente qualquer alteração de estado ao seu sistema. O que é significativo sobre isso é que você não precisa de credenciais específicas de cluster para fazer uma mudança em seu sistema. Com o GitOps, existe um ambiente segregado no qual a definição de estado se mantém fora. Isso permite que sua equipe separe o que eles realmente fazem de como irão fazer. 

### 4. Agentes de software para garantir a correção

Com o estado de todo o seu sistema mantido sob controle de versão, agora você pode empregar agentes de software para informá-lo sempre que a realidade não corresponder às suas expectativas.
O uso de ferramentas diff e sync também garante que todo o seu sistema seja realmente self-healing, não só quando os nós ou pods falham – eles são gerenciados pelo Kubernetes – mas em um sentido mais amplo, como no caso de erros humanos. Nesse caso, os agentes de software atuam como loop de feedback e de controle para suas operações.
**![](/wp-content/uploads/2021/01/Prancheta-1@3x-768x543-1.png)**

## Como Kubernetes lida com atualizações de configuração

A maneira como o Kubernetes lida com implantações se adapta muito bem aos workflows GitOps. Por exemplo, quando um grupo de atualizações de configuração é feito por um operador humano, o orquestrador Kubernetes continuará aplicando essas alterações até que o estado do cluster seja convergido para a configuração atualizada feita por um humano. O mesmo se aplica a qualquer recurso do Kubernetes.
As implantações do Kubernetes possuem as seguintes propriedades que o tornam perfeito para workflows de implantação no estilo GitOps:  

- **Automação:** o Kubernetes fornece um mecanismo integrado para automatizar as implantações. Um cluster Kubernetes aplica um conjunto de alterações na ordem correta e em tempo hábil;
- **Convergência:** o Kubernetes continuará tentando realizar a atualização até que tenha sucesso;
- **Idempotência:** instâncias de convergência múltiplas e simultâneas terão o mesmo resultado;
- **Determinismo:** Supondo que o cluster tenha os recursos adequados disponíveis, o estado do cluster atualizado dependerá apenas do estado desejado.

As implantações do Kubernetes também podem ser estendidas e automatizadas usando [Kubernetes Custom Resource Definitions (CRDs)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) com o *operator pattern*. Esses agentes podem então ser usados ​​para detectar e aplicar automaticamente as alterações de configuração de fora do sistema quando você precisar deles, essencialmente criando loops de feedback e  controle. 

## Ferramental do desenvolvedor que impulsiona Ops e Engenharia

Introduzir GitOps em sua organização significa:  

- Qualquer desenvolvedor que usa git pode começar a implantar novos recursos no Kubernetes;
- Os mesmos workflows são mantidos entre o desenvolvimento e as operações;
- Todas as mudanças podem ser disparadas, armazenadas, validadas e auditadas no git;
- Mudanças de operações podem ser feitas por *pull requests* incluindo rollbacks;
- Mudanças de operações podem ser observadas e monitoradas.

Ter tudo em um só lugar significa que sua equipe de operações pode usar o mesmo workflow para fazer mudanças na infraestrutura criando *issues* e revisando *pull requests*. GitOps permite reverter qualquer mudança feita em seu cluster. Além disso, a capacidade de observabilidade integrada permite que suas equipes tenham mais autonomia ao realizar mais alterações e experimentar sem se preocupar em quebrar o build. 

## Como é um típico pipeline CI/CD?

A maioria das organizações que iniciam  sua jornada para a entrega contínua, começam automatizando um pipeline de CI/CD. Com esse pipeline recém-criado, a equipe de desenvolvimento ficará entusiasmada e começará a escrever e enviar códigos freneticamente para o git.  
No exemplo a seguir, digamos que haja um único repositório de microsserviço que monta o seu código com seus arquivos de deployment YAML. Apenas relembrando, os arquivos YAML são os que definem ou declaram como o microsserviço é executado no cluster. Quando o desenvolvedor empurra o código para o git, uma ferramenta de integração contínua inicia testes unitários que eventualmente criam uma imagem de contêiner Docker que é enviada para *container registry*.  

![](/wp-content/uploads/2021/01/Prancheta-2@3x-768x543-1.png)

Com esse típico pipeline CI/CD baseado em push, as imagens Docker contêiner são implantadas no cluster real usando algum script bash personalizado ou através de outro método que se comunica diretamente com a API do Kubernetes.  

## Segurança e o típico pipeline CI/CD

Um pipeline CI/CD típico possui alguns problemas de segurança. Com essa abordagem, seu ferramental de CI envia e implanta imagens no cluster.
Para que o sistema de CI aplique as mudanças a um cluster, você precisa compartilhar suas credenciais de API com as ferramentas de CI e isso significa que ela se torna um alvo muito desejado. Se alguém invadi-la, certamente terá controle total sobre o cluster de produção, mesmo se ele for altamente seguro.

## O que acontece quando seu cluster cai

E o que acontece quando você precisa recriar seu cluster, no caso de um colapso total? Como você restaura o estado anterior da sua aplicação? Você teria que executar todos os seus jobs CI para reconstruir tudo e então reaplicar todos os *workloads* ao novo cluster. O pipeline de CI típico não tem seu estado facilmente registrado como quando você usa o GitOps.  
Vamos ver como você pode melhorar um típico pipeline de CI/CD com GitOps. 

## O pipeline de implantação GitOps

O GitOps implementa um Kubernetes controller que lê e sincroniza implantações para seu cluster Kubernetes. O controller usa o *operator pattern*. Isso é significativo em dois níveis: 

- **É mais seguro.**
- **Ele automatiza tarefas complexas sujeitas a erros, como ter que atualizar manualmente os manifestos YAML.**

Com o *operator pattern*, um agente atua em nome do cluster. Ele observa eventos relacionados a alterações de recursos personalizados e, em seguida, aplica essas alterações com base em uma política de implantação. O agente é responsável por sincronizar o que está no git com o que está sendo executado no cluster, fornecendo uma maneira simples para sua equipe obter uma implantação contínua.
**![](/wp-content/uploads/2021/01/Prancheta-4@3x-768x543-1.png)**

## GitOps é uma maneira mais segura de implantar mudanças

A imagem é extraída utilizando acesso *read only* ao repositório. A ferramenta de CI não recebe privilégios do cluster, portanto não introduz riscos de segurança significativos para o pipeline.  

### Separação de privilégios do GitOps

O GitOps separa o CI do CD e esse é um dos motivos pelos quais é um método mais seguro de implantação de aplicações no Kubernetes. A tabela abaixo mostra como GitOps separa privilégios de leitura / escrita entre o cluster, seu CI e ferramentas de CD e o repositório de contêiner, fornecendo à sua equipe um método seguro de criação de atualizações. 

|  |  |
| --- | --- |
| **FERRAMENTAS CI**  Testa, monta, escaneia, publica | **FERRAMENTA DE CD**  Reconciliação entre git e o cluster |
| Roda fora do cluster de produção | Roda dentro do cluster de produção |
| Acesso de leitura ao repositório de código | Acesso de leitura/escrita ao repositório de configuração |
| Acesso de leitura/escrita ao Repositório de Contêiner | Acesso de leitura ao repositório de imagens |
| Acesso de leitura/escrita ao ambiente de integração contínua | Acesso de leitura/escrita ao cluster de produção |

*Tabela 1: Separação de privilégios do GitOps*

## Observabilidade como um catalisador de implantação

Alguns dos componentes essenciais do GitOps são o feedback e o controle. Mas o que isso significa exatamente? De modo a obter controle para que os desenvolvedores possam trabalhar de maneira mais rápida, é preciso capacidade de observabilidade embutida em seus workflows de implantação.
A capacidade de observabilidade integrada permite que os técnicos tomem decisões em tempo real baseadas em dados. Por exemplo, quando uma implantação está sendo executada, uma última verificação de integridade pode ser feita em seu cluster em execução antes de confirmar a atualização ou talvez uma atualização não tenha saído como planejado e pode ser facilmente revertida para um bom estado. 
Com um loop de controle de feedback, você pode responder facilmente às seguintes perguntas:

- Como posso saber se minha implantação será bem sucedida?
- Como posso saber se o sistema ativo convergiu para o estado desejado?
- Posso ser notificado quando houver alguma diferença entre eles?
- Posso disparar uma convergência entre o cluster e o controle de código fonte?

Enquanto git é a fonte da verdade para o estado desejado do sistema, a Observabilidade fornece um *benchmark* para o estado real de produção do sistema em execução. GitOps aproveita ambos para gerenciar aplicações. 
Com GitOps, divergência e convergência são alcançadas com um conjunto de ferramentas “diff” e “sync” (kubediff, terradiff e ansiblediff) que comparam o estado pretendido com o estado real. As ferramentas *Diff* também são usadas para alertar os desenvolvedores quando o deployment não está sincronizado. 
Um ciclo de feedback com diffs e observabilidade integrada é parecido como a seguir, no qual a observabilidade fornece insights para desenvolvedores e operadores tomarem decisões importantes sobre implantações e o sistema:
**![](/wp-content/uploads/2021/01/Prancheta-5@3x-768x543-1.png)**
Como serviços ou atualizações prestes a serem lançados podem ser observados em tempo real dentro do cluster em execução, é possível implantar com maior confiança e entregar recursos de melhor qualidade. 
Observabilidade é o principal motivador do ciclo de entrega contínua para Kubernetes, pois descreve o estado de execução real do sistema em qualquer momento. O sistema em funcionamento é observado para compreendê-lo e controlá-lo.  
Depois que novos recursos e correções são mesclados ao git, o pipeline de implantação é acionado e, quando a imagem está pronta para ser lançada, ela pode ser observada em tempo real no cluster em execução. Neste ponto, o desenvolvedor pode retornar para o início do pipeline com base neste feedback ou implantar e liberar a imagem para o cluster de produção. 

## GitOps Workflow

O mecanismo central do GitOps está em seu conjunto de ferramentas CI/CD, com a peça crítica sendo a implantação contínua (CD) que oferece suporte à sincronização do git-cluster. Ele é projetado especificamente para sistemas controlados por versão e *stacks* de aplicações declarativas.
Cada desenvolvedor em sua equipe está familiarizado com o git e pode fazer *pull requests*. Agora também podem usar o git para acelerar e simplificar as implantações de aplicações no Kubernetes.  
Aqui está um workflow típico de desenvolvedor para criar ou atualizar um novo recurso:

1. Uma *pull request* para um novo recurso é enviada ao GitHub para revisão;
2. O código é revisado e aprovado por um colega de time. Após isso, esse código é mesclado no git;
3. O *git merge* aciona o pipeline de construção e CI, executa uma série de testes e, em seguida, cria nova imagem e a armazena em um registro;
4. O ‘*Deployment Automator*‘ monitora o *image registry*, percebe uma nova imagem, recupera essa nova imagem e atualiza seu YAML no repositório de configuração;
5. O *‘Deployment Synchronizer*‘ detecta que o cluster está desatualizado, extrai os manifestos alterados do repositório de configuração e implanta o novo recurso em produção.

![](/wp-content/uploads/2021/01/Prancheta-6@3x-768x543-1.png)

## Construa uma plataforma cloud native com GitOps e Weave Kubernetes Plataform

A Weave Kubernetes Plataform reduz a complexidade através de gerenciamento de configuração, automação e ferramental de operações. Com o gerenciamento de configuração GitOps, as equipes podem definir uma instalação padrão do Kubernetes e automatizar a implantação de novos nós seguindo um modelo predefinido. Ele também simplifica a instalação de cluster adicionais, uma vez que o Kubernetes já está pré-configurado e todas as aplicações executadas em cima dele também são predefinidas.

![](/wp-content/uploads/2021/01/Prancheta-7@3x-1024x724-1.png)

## Automação de gerenciamento de configuração GitOps

Com GitOps no centro do seu modelo operacional, as equipes podem instalar e gerenciar Kubernetes prontos para produção seja on-premise, em uma nuvem pública como AWS e até mesmo em nós OpenStack pré-criados. O GitOps pode ser usado para disparar um patch de cluster ou um *minor version upgrade,* ou adicionar e remover nós de cluster, sem ter que reconstruí-lo do zero.  
Com toda a configuração do cluster armazenada no Git e gerenciada por meio do GitOps, você pode reproduzir um cluster inteiro de maneira repetível e previsível. Isso traz vantagens quando você está construindo ambientes de teste e pipelines, ou produzindo clusters para diferentes equipes com a mesma configuração base, ou melhorando sua capacidade de recuperação de desastres.

### Principais recursos/capacidades

- Versão confiável e estável do Kubernetes;
- Instalador unificado baseado em cluster-API para Kubernetes;
- Add-ons críticos de cluster para todas as principais versões de plataformas de nuvem e  on-premise;
- Gerenciamento de ciclo de vida de nós e cluster baseado em workflows GitOps;
- Componentes de observabilidade de cluster inclusos: 
  - Configuração flexível de Monitoramento e Logging;
  - Prometheus, a melhor escolha para monitoramento de Kubernetes.

###

### Add-ons disponíveis:

- Protocolo de autenticação de rede (Kerberos);
- Reinicializações de nó automáticas seguras (Kured);
- Implantação contínua e auditável (Weave Flux);
- Diff alertando sobre o estado de execução e desejado (Kubediff);
- Integração pronta para outras ferramentas de métricas, logging e outras opções de ferramentas.

## Conclusão

A equipe da Vertigo Tecnologia, parceira oficial no Brasil em serviços profissionais da Weaveworks, pode ajudá-lo a navegar pelo vasto cenário de tecnologias cloud native, tanto Open Source quanto pago.
Juntos, podemos criar uma arquitetura de referência cloud native que se adapte às suas necessidades de negócios. Você pode se beneficiar de um modelo de projeto já validado ou pode projetar, revisar e selecionar opções de tecnologia com nossa ajuda.  
Tem dúvidas sobre o que você precisa para criar uma plataforma cloud native? [Entre em contato](/contato/) conosco para obter uma demonstração da Weave Kubernetes Plataform.

## Saiba como realizar deploys frequentes com mais segurança e com menos sobrecarga com GitOps

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops?_ga=2.241349446.537196717.1624752474-164335762.1618327266)

### Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
