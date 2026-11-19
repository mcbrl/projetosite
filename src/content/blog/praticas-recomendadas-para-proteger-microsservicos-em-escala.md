---
title: "Práticas recomendadas para proteger microsserviços em escala"
slug: "praticas-recomendadas-para-proteger-microsservicos-em-escala"
date: "2020-12-14T13:16:24"
modified: "2020-12-14T13:16:24"
status: "publish"
author: "admin"
excerpt: "A cultura DevOps está sendo cada vez mais disseminada entre as empresas, o que as força a planejar níveis mais altos de interatividade, assim como evoluir suas medidas de segurança. Os microsserviços, por exemplo, podem ser implantados em qualquer lugar, independentemente de onde estão hospedados, por isso exigem uma estratégia de segurança eficaz e escalável. […]"
categories: ["microsservicos"]
tags: ["api", "arquitetura-de-microsservicos", "devops", "docker", "kong", "microservices", "microsservicos", "plataformas-digitais"]
featuredImage: "/wp-content/uploads/2020/12/microsservicos-3.png"
wpId: 5386
originalUrl: "https://vertigo.com.br/praticas-recomendadas-para-proteger-microsservicos-em-escala/"
contentSource: "rest"
seo:
  title: "Práticas recomendadas para proteger microsserviços em escala - Vertigo"
  description: "Uma companhia mais sólida e experiente não necessariamente terá vantagens ao lidar com o ecossistema de segurança ou ameaça de microsserviços interligados."
  canonical: "https://vertigo.com.br/praticas-recomendadas-para-proteger-microsservicos-em-escala/"
  ogImage: "/wp-content/uploads/2020/12/microsservicos-3.png"
  robots: "index, follow"
---

A cultura DevOps está sendo cada vez mais disseminada entre as empresas, o que as força a planejar níveis mais altos de interatividade, assim como evoluir suas medidas de segurança. Os microsserviços, por exemplo, podem ser implantados em qualquer lugar, independentemente de onde estão hospedados, por isso exigem uma estratégia de segurança eficaz e escalável.
Fornecer segurança em escala torna-se difícil para organizações que estão migrando seus sistemas legados para microsserviços, afinal estes novos desafios exigem um plano de ação de ponta a ponta. A arquitetura de microsserviços é uma jornada que afetará positivamente sua organização em vários aspectos – cultural, técnica e operacionalmente.
Uma companhia mais sólida e experiente não necessariamente terá vantagens ao lidar com o ecossistema de segurança ou ameaça de microsserviços interligados. 
Pensando nisso, elencamos algumas práticas recomendadas para ajudar qualquer empresa a se familiarizar mais rapidamente com a segurança de microsserviços. Continue lendo nosso artigo e descubra!

## Use API gateway

Várias ameaças mais complexas começam nos níveis de acesso, autenticação ou autorização. Quando uma API para acesso é disponibilizada fora de sua organização é preciso implantar alguma forma de gateway para fins de segurança.
Seja usando uma abordagem *device-based* ou um proxy reverso inteligente, todas as API calls devem ser inspecionadas e autenticadas. Além disso, também devem ser avaliadas de forma adequada para apenas as que atendam aos critérios desejados sejam permitidas. E para garantir a capacidade de auditoria, cada transação deve ser registrada.
Visando garantir a segurança nos projetos com API, utilizamos a ferramenta Kong Gateway, o API gateway de código aberto mais popular do mundo. Construída para ambientes multicloud e nuvens híbridas, é otimizada para microsserviços e arquiteturas distribuídas, possuindo os seguintes benefícios:

- Autenticação;
- Controle de tráfego;
- Analytics;
- Transformação em tempo real;
- Logging;
- Serverless.

O Kong Gateway se diferencia de outras soluções do tipo existentes no mercado por suas funcionalidades de ponta:

- Desempenho: obtemos o melhor desempenho do setor e garantimos uma comunicação contínua em todos os nossos serviços, independentemente de onde sejam executados.
- Projetado para a nuvem: maximizamos a eficiência dos recursos e minimizamos footprint. Dimensionamos os stacks linearmente para processar trilhões de chamadas de API com zero redução em desempenho ou estabilidade.
- Flexibilidade e extensibilidade: executamos o Kong Gateway em qualquer ambiente, plataforma ou padrão de implementação – de *bare metal* a nuvem, de contêineres a Kubernetes. Estenda a solução para caber em qualquer possibilidade de uso com plugins personalizados.

## Verificação e proteção dos contêineres e microsserviços

A primeira regra para proteger microsserviços é examiná-los. O monitoramento de ponta a ponta é fundamental, mas o contêiner também é um local propenso para ataque e intrusão.
Além de realizar varreduras periódicas de vulnerabilidade e segurança, os profissionais devem ter sempre em mente que a própria imagem do contêiner subjacente pode ser corrompida após ser infiltrada.
Para combater isso, a assinatura da imagem do contêiner deve sempre ser verificada ou, pelo menos, fechada até que a verificação possa ocorrer. O uso de assinaturas não verificadas para tráfego dentro de contêineres deve ser evitado a todo custo, pois pode levar a acessos inadequados ou violações. Automatizar o teste regular de contêineres durante a produção ou processos de CI torna-se essencial ao executar microsserviços em escala.
O gerenciamento de orquestração também pode ajudar a mitigar os riscos, produzindo abstrações que especificam o número de contêineres necessários para executar uma determinada imagem e os recursos para hospedá-los.
Nos projetos aqui na Vertigo, geralmente usamos o [gerenciador de orquestração Docker](/tutorial-docker-ee/), que fornece uma camada importante de segurança no modelo multicamadas. Esta tecnologia possibilita uma série de ganhos a um baixíssimo custo, em comparação com as maneiras tradicionais de fazer TI:

- Redução do tempo de entrega: a forma de entrega de uma aplicação fica reduzida a um denominador comum (o contêiner), não importando a tecnologia, framework ou linguagem em que é escrita. O uso de imagens torna a reprodução do ambiente original definido pelo desenvolvedor ([infraestrutura como código](/infraestrutura-como-codigo-vantagem-competitiva-no-varejo/)) trivial. Dessa maneira, não é necessário demandar tempo da área de infraestrutura para instalação e configuração de aplicações.
- Redução do uso de recursos: não apenas o provisionamento de servidores é trivial, como também qualquer provedor de nuvem pública será capaz de rodar as aplicações. O baixo custo do isolamento de uma aplicação em contêiner garante a otimização do uso de recursos de hardware disponíveis. Utiliza-se apenas o necessário para a aplicação. Isso vale tanto para *bare metal*, quanto para nuvem.
- Escalabilidade: sistemas em nuvem ajudam muito as empresas e usuários comuns ao baratear provisionamento e gestão. No caso das companhias, elas conseguem potencializar a escalabilidade dos seus sistemas, contando com a elasticidade disponível.

A orquestração de contêineres permite maior controle de escalabilidade e de recursos alocados, além de deploys mais rápidos e seguros, como mostra o nosso Gerente de TI, Rubens Freitas:

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/OjCmuzw_h5Y" width="560"></iframe>

## Priorize vulnerabilidades com defense-in-depth

O conceito original de *defense-in-depth* foi criado pela Agência de Segurança Nacional dos Estados Unidos (NSA) com relação à segurança da informação e medidas de proteção.
Este modelo de defesa depende de várias camadas de controles de segurança colocados em pontos-chave em todo o sistema. Isso ajuda a evitar que um ataque unificado penetre e se prolifere facilmente.
*Defense-in-depth* consegue expôr vulnerabilidade mesmo que esteja enterrada sob camadas de proteção. Medidas de redundância como essa podem evitar pânico no futuro, forçando uma ação mais rápida para resolver problemas. Essa vigilância preventiva é um gerenciamento de risco obrigatório para muitas organizações com dados confidenciais ou rígidas políticas anti-risco.
Essa abordagem é geralmente aceita na comunidade de microsserviços, já que é ágil, multicamadas, fornecendo a melhor opção de segurança devido à natureza altamente distribuída do ambiente. A natureza evolutiva das ameaças enfatiza ainda mais a necessidade desta abordagem. 
Mesmo sem essa tecnologia, é possível vigiar um sistema ao longo do tempo, aprender sobre seu funcionamento e, então, planejar uma linha de ataque sequenciada.
Frequentemente, equipes de segurança que defendem o ambiente doméstico de “ameaças maiores” podem ficar insensíveis às ameaças mais comuns. Esse condicionamento pode criar problemas significativos, já que muitas ameaças sofisticadas costumam adentrar o sistema em estágios, patrulhando furtivamente e preparando o caminho através de ameaças modestas de baixo nível.
Um sistema multicamadas tem a vantagem de incorporar mais camadas de segurança, sem adicionar sobrecarga excessiva de processamento e com flexibilidade suficiente para reagir aos novos padrões de ataque. O *machine learning* também pode ajudar equipes sobrecarregadas a lidar melhor com o volume e a sofisticação de invasores coordenados que se escondem além da barreira de segurança.

## Simplifique o monitoramento, a segurança e a linha de base com uma ferramenta central

Para garantir a segurança e a integridade do microsserviço e da API, é preciso incorporar um firewall distribuído com controle granular. Conforme os microsserviços proliferam, a capacidade de focar um evento e associá-lo a outros atores conhecidos torna-se essencial e requer uma ferramenta de monitoramento centralizado que ajude a conectar esses pontos.
As atualizações automáticas representam outra forma de monitoramento centralizado para proteger o ambiente DevOps, a produção e quaisquer operações em andamento. Com atualizações automatizadas como parte deste método, há menos rachaduras e ataques.
Um método de monitoramento centralizado também pode ajudar a evitar a necessidade de escrever código criptográfico, o que pode, para algumas equipes de desenvolvimento, se tornar difícil de operar
O gerenciamento das facetas de segurança se torna complicado e além do alcance de equipes menores e inexperientes com implantação de microsserviços em escala. Com base nessa curva de adaptação, os profissionais podem se perder facilmente no gerenciamento desta complexidade e, desavisadamente, atrapalhar outros departamentos de TI que tentam criar equipes e gerenciar a transição de um modelo monolítico para microsserviços.

## Garanta a conformidade de segurança da plataforma operacional host

Uma vez que sua implantação de microsserviços pode ser on-premise ou na nuvem, é crucial conhecer os protocolos de segurança e o histórico de seu host. Se estiver operando com uma configuração de hospedagem PaaS, você deve verificar se a plataforma toma todas as precauções devidas para garantir que outros usuários, aplicações invasoras ou a falta de diligência comprometam a segurança da plataforma.
Isso pode ser complicado, pois, muitas organizações são tradicionalmente acostumadas a permitirem que os usuários testem sua própria segurança, mas não a segurança geral da plataforma.
Se você não planeja hospedar suas próprias aplicações, certifique-se de verificar se o host de nuvem proposto é adequado para a lista de verificação de benchmark abrangente. Selecionar o host de sistema operacional correto representa uma decisão importante para garantir a segurança do DevOps e a integridade da produção.

## Conclusão

Examinar cada um dos tópicos acima e explorar suas implicações individualizadas para suas próprias necessidades de DevOps pode render algumas revelações surpreendentes e inspirar mudanças muito necessárias na percepção da cultura da sua TI corporativa.
É crucial envolver todas as partes interessadas para entender como suas necessidades individuais e coletivas podem ser, simultaneamente, melhor atendidas pelas ferramentas de monitoramento centralizado corretas.
Todas as soluções apresentadas neste artigo são disponibilizadas e implementadas em nossos projetos digitais. Organizações como B2W, Ipiranga, Grupo Petrópolis, Grupo Tigre, Sharecare, Icatu Seguros, Ministério Público do Rio de Janeiro e Rede Nacional de Pesquisa modernizaram suas estratégias de integração de sistemas conosco.
Seja também um case de sucesso! Se você não tomar uma ação agora, sua empresa ficará fora da jornada de Transformação Digital. [Entre em contato com nossos especialistas](/contato/).

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração

[![Cloud Native Assessment](/wp-content/uploads/2020/12/cloud-native-quadrado.png)](/cloud-native-assessment/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
