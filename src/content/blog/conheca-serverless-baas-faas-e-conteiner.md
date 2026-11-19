---
title: "Conheça os modelos de Serverless BaaS, FaaS e Contêiner!"
slug: "conheca-serverless-baas-faas-e-conteiner"
date: "2018-08-15T14:23:37"
modified: "2026-02-02T20:37:35"
status: "publish"
author: "admin"
excerpt: "Com a modernização dos recursos e a popularização de Cloud Computing, as empresas de TI perceberam a importância e as vantagens da adaptação a estes novos modelos de provisionamento, gestão e consumo. Serverless é um dos modelos que estão agradando muito os profissionais de TI. Essas mudanças permitiram que as empresas contassem com recursos computacionais […]"
categories: ["blog", "devops"]
tags: ["docker", "serverless-container", "serverless-conteiner", "serverless-faas"]
featuredImage: "/wp-content/uploads/2026/02/conheca-serverless-baas-faas-e-conteiner.png"
wpId: 2752
originalUrl: "https://vertigo.com.br/conheca-serverless-baas-faas-e-conteiner/"
contentSource: "rest"
seo:
  title: "Conheça aqui os modelos de Serverless BaaS, FaaS e Contêiner!"
  description: "Com a modernização dos recursos e a popularização de Cloud Computing, as empresas de TI perceberam a importância e as vantagens da adaptação a estes novos modelos de provisionamento, gestão e consumo. Serverless é um dos modelos que estão agradando muito os profissionais de TI. Saiba mais sobre o assunto aqui!"
  canonical: "https://vertigo.com.br/conheca-serverless-baas-faas-e-conteiner/"
  ogImage: "/wp-content/uploads/2026/02/conheca-serverless-baas-faas-e-conteiner.png"
  robots: "index, follow"
---

Com a modernização dos recursos e a popularização de Cloud Computing, as empresas de TI perceberam a importância e as vantagens da adaptação a estes novos modelos de provisionamento, gestão e consumo. Serverless é um dos modelos que estão agradando muito os profissionais de TI.

Essas mudanças permitiram que as empresas contassem com recursos computacionais e de armazenamento em nuvem, e não mais apenas em data centers privados. A esta primeira geração de recursos de infraestrutura em nuvem demos o nome de **IaaS** (*Infrastructure as a Service*).

Hoje podemos contar com diversos recursos de mais alto nível para suporte ao desenvolvimento e entrega de aplicações, nos quais podemos até mesmo abstrair o provisionamento e ganho de escala de recursos de infraestrutura. A esta nova geração de recursos demos o nome de *Serverless Computing*. Continue lendo esse artigo para saber sobre Serverless e suas aplicações.

## Conheça a Serverless Computing

*Serverless Computing, ou “computação sem servidor”*é um conceito relativamente novo e ainda desprovido de consenso na indústria.

O Serverless Computing é tanto um modelo de desenvolvimento e entrega de software quanto de provisionamento de recursos computacionais.

É possível perceber claramente pelo menos três tipos dominantes de computação *serverless*:

- BaaS (*Backend as a Service*),
- FaaS (*Function as a Service*),
- Serverless Containers.

## Serverless “BaaS”

Um software pode ser desenvolvido atualmente contando com uma infinidade de recursos disponíveis em nuvem na forma de *serviços*. Isso simplifica muito o trabalho de programação. O consumo destes diversos serviços pode ser “costurado” dentro de um software com poucas linhas de código e configuração. Isso torna trivial a construção de soluções seguras com pouquíssima complexidade.

Exemplos de recursos “BaaS” (*Backend as a Service*):

- Bancos de dados (Amazon RDS)
- API Gateways (Mulesoft)
- Autenticação (Google OAuth)
- Blockchain (Ethereum)

Neste modelo, o provisionamento e a gestão destes serviços são totalmente automáticos e invisíveis para o desenvolvedor que os utiliza em suas aplicações.

## Serverless “FaaS”

O modelo FaaS (*Function as a Service*) consiste em uma forma simplificada de desenvolvimento de código e empacotamento/entrega extremamente trivial para o desenvolvedor. A forma com que os recursos computacionais serão provisionados para executar este código, quando requisitado, é totalmente abstrata para o desenvolvedor.

No FaaS (*Function as a Service* significa “Função como um serviço”) o trabalho fica todo por conta dos provedores da nuvem que instanciam recursos onde e quando são necessários, liberando-os quando não for mais necessário. Os servidores que executam o código desenvolvido são *efêmeros* (descartáveis) e a tecnologia utilizada para seu empacotamento, distribuição e provisionamento é tipicamente proprietária.

O interessante do modelo FaaS é que permite modelos de cobrança baseados em consumo de recursos computacionais. Dessa maneira, só há cobrança por uma *function* quando ela for acionada. Sendo assim, como *functions* são inerentemente elásticas, estes recursos serão provisionados em maior escala em momentos de pico de consumo.

## Serverless Contêineres

O Docker é uma plataforma que ajuda na criação e desenvolvimento de ambientes isolados chamados containers. Containers são inerentemente portáveis e potencialmente simples de serem escalados.

Docker permite o empacotamento de um ambiente autocontido para a execução de um software dentro de contêineres, tornando-o portátil e sendo compatível em qualquer provedor de nuvem.

Não são necessárias constantes modificações nos ambientes para que o software funcione de maneira correta. O motivo da popularidade de contêineres é que têm pequena curva de aprendizado inicial e se traduzem em benefícios rápidos. Isso é bom até mesmo para entregas em data centers privados. De fato, a conteinerização tem se mostrado uma estratégia muito eficaz e de baixo custo para a migração de data centers para a nuvem.

Como o Docker tem compatibilidade com servidores Linux e Windows, seus benefícios são palpáveis para virtualmente qualquer linguagem ou plataforma de programação.

Sua inerente portabilidade e previsibilidade de comportamento tornam os containers um aliado fundamental para a implantação de ferramentas, cultura e processos DevOps. De fato, há estratégias de adoção e ferramentas excepcionais que partem do pressuposto que os projetos de software utilizam containers como ferramentas de construção, testes e entrega.

Contêineres também funcionam em ambientes híbridos (nuvens públicas e privadas) e de múltiplas plataformas, havendo a possibilidade concreta de se administrar ambientes que se espalham em múltiplas nuvens (*multi-cloud*).

[Contêineres são inseguros? É lógico que não! Saiba mais em nosso conteúdo!](/verdades-mitos-modernizacao-de-aplicacoes-com-conteiner/)

Diversos provedores de nuvens responderam à grande popularidade de contêineres oferecendo a orquestração de contêineres em diversos modelos de provisionamento e cobrança (os quais poderíamos chamar de **CaaS** – *Containers as a Service*). Atualmente praticamente todos já ofereceram alguma forma proprietária de publicar contêineres (como o Amazon ECS), mas nota-se uma grande consolidação em torno de ofertas de contêineres gerenciados pelo orquestrador mais difundido, o Kubernetes.

Está surgindo uma nova geração de ofertas de clusters Kubernetes gerenciados pelo provedor de nuvem (*managed Kubernetes*). As novidades implementam uma estratégia essencialmente, na qual os servidores são provisionados e descartados em função da demanda. Podemos claramente chamar este modelo de *Serverless**Contêineres*. Exemplos notórios de plataformas de *Serverless Contêineres*são as ofertas **Fargate** e **Fargate** EKS da Amazon.

**Migração para usar novas tecnologias**

Para haver uma conversão da empresa ao uso de tecnologias disruptivas e de alto impacto em produtividade (como as várias abordagens *serverless*) é necessário, por parte das equipes de TI, preparação para as novas mudanças. Isso porque uma TI tradicional costuma ser dimensionada e concebida em função de papéis que serão transformados, tanto pela adoção de modelos de infraestrutura *serverless* como dos modelos de desenvolvimento e entrega conhecidos como DevOps.

[Saiba tudo sobre DevOps aqui! A prática está alavancando a entrega de software de diversas empresas.](/o-que-e-devops/)

O planejamento é importante, devido ao risco de a empresa não estar adaptada tecnologicamente ou capacitada para as novas práticas. Porém, planejar demais sem agir é ruim e estas práticas e modelos são absorvidos “em campo”, sendo a sua adoção um processo de aprendizado constante. Capacitar colaboradores em Serverless e DevOps, sem que estes pratiquem em projetos reais, é perda de tempo e dinheiro.

A boa notícia é que a adoção destas tecnologias e práticas cabe facilmente em um modelo de “self-funding”: as economias e ganhos obtidos a cada passo justificam a continuidade do investimento. Melhor ainda, não há porquê incorrer em grande investimento de largada – apesar de fornecedores de “caixinhas mágicas” dizerem o oposto: Serverless e DevOps encaixam melhor com abordagens de baixo custo e ferramentas que são abertas e livres. Faz mais sentido postergar o licenciamento de produtos e plataformas de maior custo *depois* que se domina a prática de forma agnóstica.

Faz muito sentido, porém, a contratação de consultorias que possam entregar valor, acelerar aprendizado, implantar ferramentas abertas e encurtar o caminho de adoção.

*Inscreva-se no nosso blog para ser notificado quando publicarmos conteúdos como este!*

## **Vantagens fornecidas com o uso de Serverless Computing**

A **redução de custo operacional** e menor complexidade de gerenciamento são bem evidentes, não sendo preciso pagar por recursos além daqueles realmente utilizados. Esta realidade se sustenta tanto em comparação com data centers privados quanto com o modelo de Cloud Computing mais tradicional (IaaS).

Outra vantagem está na **redução do custo de escala.** O ganho de escala automático (*auto-scaling*) dispensa intervenção manual para atender a picos de demanda.

O seu uso também torna a entrega de software mais simples, pois é necessário menos conhecimento para uma entrega (principalmente no modelo FaaS). Isto se traduz em **redução do custo de desenvolvimento**.

A adoção do modelo Serverless permite aproveitar melhor os profissionais de TI, livrando-os de tarefas pouco produtivas e diminuindo a superfície de problemas possíveis. Habilidades típicas de infraestrutura continuam sendo necessárias aos projetos (como monitoração, segurança, resolução de problemas), mas os silos operacionais da TI tradicional precisam ser reinventados.

## **Vantagens de Serverless Containers (Docker/Kubernetes)**

O modelo de desenvolvimento e entrega com containers é extremamente popular e bem-sucedido, já gozando de grande maturidade e uso prático em toda a cadeia de produção de software. Isso ocorre desde o provisionamento de ferramentas na estação de desenvolvimento até a entrega de software em clusters de produção.

Containers são inerentemente portáveis – a escolha por este modelo de entrega se traduz na ausência de lock-in com provedores de nuvem. O modelo FaaS, por sua vez, implica em compromisso com ferramental proprietário.

Note que, na prática, debaixo das cobertas, todas as implementações de FaaS são baseadas em containers. O grau de lock-in com um fornecedor ocorre em função da dependência das ferramentas no fluxo de trabalho e de demais recursos do provedor que estejam sendo utilizados (lembrem-se do BaaS).

As abordagens serverless baseadas em contêineres contam com suficiente simplicidade e maior maturidade para o combate do dia a dia, principalmente quando as coisas não se comportarem como esperado. O problema é que abundam pessoas que afirmarão o contrário.

Esta é uma arena bastante acalorada no momento, ainda assim, fica evidente que se trata da luta entre os provedores de nuvem para promover o máximo de compromisso dos clientes com suas plataformas. As escolhas de cada projeto devem pesar a produtividade, o custo e a estratégia para o futuro.

## **Concluindo**

Um sistema mais complexo pode ser composto por uma mistura de recursos BaaS, FaaS e Serverless Containers. Isso significa que a questão de lock-in é bastante sutil e sua pertinência haverá de ser bastante contextual. Por exemplo: A dependência do Amazon RDS para bancos MySQL é pouco pertinente (qualquer provedor oferece serviço compatível), mas depender do Google Cloud Machine Learning Engine (Tensorflow) gera compromisso maior.

Não há que se falar, portanto, em abordagem serverless melhor ou pior. A questão de lock-in pode ser completamente irrelevante em alguns casos ou mortalmente crucial em outros.

Um valor mais intangível que costuma ser ignorado pela TI tradicional é o “time-to-market” (tempo para lançar um produto) e a experimentação contínua (como a facilidade para experimentar novas tecnologias). A facilidade de incorporar componentes na forma de contêineres auxiliares ou serviços BaaS do provedor de nuvem é essencial para criar soluções que, de outra forma, seriam inviáveis. Nem tudo se resolve com novas linhas de código!

Chegamos ao final do nosso conteúdo. Esperamos que você tenha aprendido os conceitos apresentados. No entanto, o aprendizado não precisar parar por aqui, por isso, disponibilizamos um super material para aumentar seu conhecimento sobre Docker, uma das ferramentas mais importantes da atualidade. Confira números e um super case que mostra o que essa tecnologia pode fazer por você e sua empresa. Basta clicar na imagem abaixo.

[![](/wp-content/uploads/2018/08/MATERIAIS-Reduza-custos-de-TI-e-acelere-a-modernizacao-de-suas-aplicacoes-com-Docker.png)](https://materiais.vertigo.com.br/reduzir-custos-ti-docker-ee?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

Esperamos te ver em breve. Até logo!
