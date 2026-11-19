---
title: "ESB: tudo o que você precisa saber para escolher o melhor"
slug: "tudo-sobre-esb"
date: "2019-02-01T15:22:14"
modified: "2019-02-01T15:22:14"
status: "publish"
author: "admin"
excerpt: "Uma das tecnologias mais populares para resolver problemas de integração entre sistemas é o ESB (Enterprise Service Bus). Esta tecnologia atua na camada de orquestração de serviços, em arquiteturas orientadas a SOA (Service Oriented Architecture). Embora a tendência seja que esta tecnologia aos poucos seja substituída pelo modelo de microsserviços, o ESB está longe de […]"
categories: ["blog", "plataformas-de-integracao"]
tags: ["esb", "esb-mulesoft", "integracao-de-sistemas", "mulesoft-anypoint-platform", "soa"]
featuredImage: "/wp-content/uploads/2019/02/ESB-2.png"
wpId: 3815
originalUrl: "https://vertigo.com.br/tudo-sobre-esb/"
contentSource: "rest"
seo:
  title: "Tudo que você precisa saber sobre a melhor ferramenta de ESB"
  description: "Conheça uma das tecnologias mais populares para resolver problemas de integração entre sistemas, o ESB (Enterprise Service Bus), neste artigo completo. Entenda como escolher a melhor ferramenta de ESB. Assista a uma demonstração do Mule ESB."
  canonical: "https://vertigo.com.br/tudo-sobre-esb/"
  ogImage: "/wp-content/uploads/2019/02/ESB-2.png"
  robots: "index, follow"
---

Uma das tecnologias mais populares para resolver problemas de [integração entre sistemas](/integracao-de-sistemas) é o ESB (Enterprise Service Bus). Esta tecnologia atua na camada de orquestração de serviços, em arquiteturas orientadas a SOA (Service Oriented Architecture).

Embora a tendência seja que esta tecnologia aos poucos seja substituída pelo modelo de microsserviços, o ESB está longe de ser um legado. Ao contrário disso, as tecnologias de ESB continuam sendo a solução para os problemas de muitas empresas que precisam integrar seus sistemas internos na camada de barramento.

Por esta razão, escrevemos este artigo para trazer luz ao que é um ESB e como esta tecnologia pode ajudar a resolver os problemas de integração de muitas empresas.

## O que é ESB?

Um **Enterprise Service Bus (ESB)** é fundamentalmente uma arquitetura, com um conjunto de regras e princípios para a integração de inúmeras aplicações em uma infraestrutura semelhante a um barramento.

Existem no mercado inúmeros ESBs que permitem que os desenvolvedores usem esse tipo de arquitetura. Porém, as tecnologias variam tanto em funcionalidades quanto em usabilidade.

A ideia central do ESB consiste em integrar diferentes aplicações, colocando um barramento de comunicação entre elas. Isto permite que as aplicações troquem mensagens entre elas, independente de seus formatos.

Deste modo, os sistemas se comunicam de forma independente entre si, tornando toda arquitetura mais consistente, gerenciável e segura.

O conceito de ESB nasceu da necessidade de obter um modelo de integração que não traga para si os problemas gerados pela integração ponto a ponto; que é o tipo de integração na qual as aplicações se comunicam diretamente umas com as outras.

A integração sem as ferramentas adequadas é complicada. Muitas empresas implementam integração personalizada para resolver o desafio de criar uma conectividade perfeita. Esse método exige que um desenvolvedor crie integrações **ponto a ponto** entre aplicações e serviços. À medida que um negócio cresce e o número de integrações aumenta, a arquitetura ponto a ponto ou “código espaguete” torna-se complexa, frágil e cara de manter.

![](/wp-content/uploads/2019/02/arquitetura-espaguete-768x432-1.png)

## O que faz uma ferramenta de ESB?

Para entender melhor o que faz uma ferramenta ESB, precisamos entender como uma arquitetura de ESB mapeia os cinco princípios primordiais da integração:

- **Orquestração**: reúne vários componentes na construção de um serviço fundamental. É importante balancear a “granularidade” dos serviços para promover reuso e aumentar a gerência dos recursos.
- **Transformação**: Transformação de dados entre formatos de dados canônicos e formatos de dados específicos, exigidos por cada conector ESB. Um exemplo disso seria a transformação entre CSV, copybook Cobol ou formatos EDI para SOAP / XML ou JSON. Os formatos de dados canônicos podem simplificar bastante os requisitos de transformação associados a uma grande implementação do ESB, em que há muitos consumidores e provedores, cada um com seus próprios formatos e definições de dados.
- **Transporte**: Negociação de protocolo de transporte entre vários formatos (como HTTP, JMS, JDBC). Nota: O [MuleSoft](/mulesoft) trata bancos de dados como outro “serviço”, transformando o JDBC em apenas outro transporte (ou terminal) onde os dados podem ser acessados.
- **Mediação**: Fornecer múltiplas interfaces com o propósito de:
  1. suportar múltiplas versões de um serviço para compatibilidade com versões anteriores ou alternativamente;
  2. permitir múltiplos canais para a mesma implementação de componente subjacente.

No que tange a mediação, esse segundo requisito pode envolver o fornecimento de várias interfaces para o mesmo componente, uma interface legada (arquivo simples) e uma interface compatível com padrões (SOAP / XML).

- **Consistência não funcional**: para uma iniciativa típica de ESB, isso pode incluir consistência em torno da maneira como as políticas de segurança e monitoramento são aplicadas e implementadas. Além disso, as metas de escalabilidade e disponibilidade podem ser alcançadas usando várias instâncias de um ESB para fornecer maior rendimento (escalabilidade) e eliminar pontos únicos de falha (SPOFs), que é o objetivo principal para sistemas altamente disponíveis.

## Por que não é possível falar de ESB sem citar o SOA?

O **SOA (Service Oriented Architecture)**, que em português significa Arquitetura Orientada a Serviços, está intimamente conectado com o surgimento do ESB. Para compreender melhor esta ligação, é necessário entender melhor o SOA e conhecer o que motivou o desenvolvimento da tecnologia ESB.

O desenvolvimento de sistemas em ambientes corporativos ganhou proporções imprevisíveis no curto prazo, como a alta complexidade exigida para cada elemento. Por conta do crescimento desordenado, algumas pequenas lacunas surgiram.

Frequentemente, as aplicações continham funcionalidades duplicadas, com o mesmo código existente em vários programas internos. Por exemplo, se vários programas exigissem informações de verificação de crédito, cada um desses programas duplicaria o código necessário para realizar a verificação de crédito.

Esses blocos de código adicionais resultam em múltiplas ineficiências, e além disso o código é pouco reutilizado, levando a um desperdício de esforços e dinheiro gasto durante o desenvolvimento. À medida que as infraestruturas se tornam mais complexas, torna-se cada vez mais difícil para os desenvolvedores manter e suportar essas aplicações. As empresas perdem agilidade.

A arquitetura orientada a serviços é a evolução natural da arquitetura de sistemas tradicional. Este modelo soluciona as necessidades de desenvolvimento e de adaptação às novas demandas do mercado, que se mostra cada vez mais exigente.

As megatendências de SaaS, mobile e Big Data estão convergindo para criar uma enorme explosão de endpoints e dados. Nesta nova era, as empresas tendem a ser cada vez mais sobrecarregadas pelas demandas de conectividade, ou podem aproveitar a oportunidade e obter **vantagem competitiva** conectando tudo perfeitamente.

As empresas visionárias estão transformando essa fragmentação em força, conectando a atual explosão de aplicativos, dados, parceiros e clientes em uma única entidade de alto desempenho.

Neste sentido, um dos componentes mais importantes do SOA é o **Enterprise Service Bus – ESB**, um barramento de serviços corporativos que disponibiliza com maior facilidade os serviços do sistema para os usuários e aplicações, acelerando processos de integração.

## Por que utilizar um ESB?

Aumentar a competitividade da empresa e a produtividade dos times de TI costuma ser uma das consequências diretas da adoção de uma solução ESB.

O ESB evita o retrabalho de desenvolvedores, diminui a incidência de indisponibilidades dos sistemas, diminui o tempo de troubleshooting, além de reduzir o tempo para entrega de novas aplicações. O ESB ajuda a monitorar, manter e garantir a disponibilidade das aplicações.

Com todos estes benefícios, muitos líderes de TI conseguem justificar o ESB não como custo, mas como investimento, uma vez que é possível calcular o **ROI positivo da ferramenta**.

![](/wp-content/uploads/2019/02/ESB.png)

## Conhecendo melhor o Mule ESB

Dentre as opções de soluções de ESB disponíveis no mercado, o Mule ESB é considerada uma das tecnologias mais completas segundo o Gartner. O MuleSoft resolve problemas de integração de sistemas tanto internos, quanto em nuvem.

Abaixo, listamos alguns pontos do Mule ESB, que acreditamos ser importante destacar.

**Especificações técnicas**

O Mule ESB é um barramento de serviço corporativo baseado em Java. É de código aberto e, como a maioria dos ESBs, permite a integração de sistemas via JMS, Serviços da Web, HTTP, JDBC e muito mais.

Segue abaixo, uma lista de features que costuma chamar muita atenção de quem está procurando uma solução de ESB eficiente.

- **AMQP (Advanced Message Queuing Protocol)**: o suporte é baseado no RabbitMQ Java Client.
- **Roteadores**: o MuleSoft usa roteadores para dividir, combinar, reordenar, avaliar e transmitir mensagens.
- **Conectores Anypoint**: conectores pré-construídos de protocolo, banco de dados, transporte e banco de dados. Você também pode construir o seu próprio, se necessário.
- **Mule Runtime Engine**: o coração da plataforma MuleSoft Anypoint. Implantável na nuvem ou no local.
- **Mule Runtime Manager**: Permite a implementação, monitoramento e solução de problemas de instâncias do Mule.

## Por que escolher MuleSoft?

A maioria das organizações deseja aumentar a agilidade, reduzindo o tempo de lançamento de novas iniciativas. Os ESBs promovem este objetivo implementando um sistema simples, bem definido e “conectável” que se adapta muito bem. Ou seja, uma arquitetura ESB é exatamente isso: uma arquitetura e não simplesmente um produto que você pode comprar na prateleira. Ele engloba infraestrutura e o design das aplicações.

## **MuleSoft na prática:**

Na tela abaixo, mostramos o Anypoint Studio, onde desenvolve-se as integrações que rodam no ESB.

![](/wp-content/uploads/2019/02/esb-anypoint.png)

Com o ESB da MuleSoft é possível gerar um fluxo, para criação de uma conta de usuário, por exemplo.

![](/wp-content/uploads/2019/02/ESB-accounts-for-user.png)

Aqui temos um trecho de uma integração que descobre o preço dos produtos através do item ID.

![](/wp-content/uploads/2019/02/ESB-find-price.png)

Nesta outra tela, apresentamos um trecho de integração que retorna pacotes de envio de um pedido.

![](/wp-content/uploads/2019/02/ESB-load-Package-for-orders.png)

Para ilustrar melhor, fizemos um vídeo com um exemplo de fluxo de integração feita no Anypoint Studio.

##

## Como obter informações personalizadas sobre o ESB MuleSoft aplicado ao seu negócio?

Para saber mais sobre o Mule ESB , nada melhor do que ver a ferramenta em produção e conversar com especialistas que possam apresentá-la e tirar as dúvidas em tempo real. Nós, da [Vertigo](/), somos a empresa com mais cases de sucesso da MuleSoft no Brasil, com profissionais qualificados, que podem ajudá-lo a dimensionar a sua demanda e entender se o MuleSoft se aplica ao seu negócio.

Para solicitar uma demonstração completa da ferramenta, preencha o formulário abaixo e fale com um especialista da Vertigo Tecnologia.
