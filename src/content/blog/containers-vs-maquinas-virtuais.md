---
title: "Containers vs Máquinas Virtuais"
slug: "containers-vs-maquinas-virtuais"
date: "2019-04-11T17:34:03"
modified: "2019-04-11T17:34:03"
status: "publish"
author: "admin"
excerpt: "É inegável que as aplicações em Cloud são o destino para a maioria dos negócios. Em 2019, quem não está se programando para enfrentar a jornada que a Transformação Digital impele, certamente está fadado ao fracasso em breve! Mas é claro, que você, leitor do nosso blog, está em outro nível de maturidade. E certamente […]"
categories: ["devops"]
tags: ["container", "conteinerizacao-de-aplicacoes", "devops", "docker", "maquinas-virtuais"]
featuredImage: "/wp-content/uploads/2019/04/Container-vs-Maquinas-virtuais.jpg"
wpId: 4316
originalUrl: "https://vertigo.com.br/containers-vs-maquinas-virtuais/"
contentSource: "rest"
seo:
  title: "Por que os containers são a evolução das máquinas virtuais?"
  description: "Neste artigo, vamos analisar duas metodologias - os containers e as máquinas virtuais. Faremos uma análise sobre alguns as aspectos que as diferenciam e com isso, pretendemos ajudar ao leitor a responder a seguinte pergunta: Por que os containers estão substituindo as máquinas virtuais?"
  canonical: "https://vertigo.com.br/containers-vs-maquinas-virtuais/"
  ogImage: "/wp-content/uploads/2019/04/Container-vs-Maquinas-virtuais.jpg"
  robots: "index, follow"
---

É inegável que as aplicações em Cloud são o destino para a maioria dos negócios. Em 2019, quem não está se programando para enfrentar a jornada que a **Transformação Digital** impele, certamente está fadado ao fracasso em breve!
Mas é claro, que você, leitor do nosso [blog](/blog/), está em outro nível de maturidade. E certamente já está aprofundando seus conhecimentos e buscando entender melhor as ferramentas que podem alavancar a implantação de [DevOps](/beneficios-de-ter-uma-esteira-de-entregas-continuas/) na sua empresa.

Neste artigo, vamos analisar duas metodologias – os containers e as máquinas virtuais. Faremos uma análise sobre alguns aspectos que as diferenciam e com isso, pretendemos ajudar ao leitor a responder a seguinte pergunta: **Por que os containers estão substituindo as máquinas virtuais?**
![](/wp-content/uploads/2019/04/imagens-internas2_1.jpg)

## Conteinerizar é a melhor opção?

Os containers e as máquinas virtuais rodam tanto on-premises, quanto em cloud. Em linhas gerais, o que torna o container uma evolução da máquina virtual é o fato do container ser mais compacto e, portanto, mais leve e suportável em qualquer lugar.

Com o Docker Enterprise, por exemplo, é possível executar containers em uma **infraestrutura virtualizada**, enquanto outros executam o mesmo **em hardware puro**.

Abaixo, destacamos as principais diferenças entre container e máquina virtual para apresentar alguns dos motivos pelos quais utilizar containers pode ser mais vantajoso.

## 1. Os containers proporcionam mais agilidade

A máxima: “Na minha máquina está funcionando…”, lhe parece familiar? Com containers os desenvolvedores e operadores escapam definitivamente deste tipo de situação. Afinal, um container pode ser implantado de forma ágil, além de fornecer uma infraestrutura imutável. Ou seja, raramente o que for configurado no container sofrerá alteração, e caso isso ocorra, ele pode ser facilmente reiniciado.  

No que diz respeito ao processo de correção, eles superam o processo tradicional, pois possibilitam que as organizações diminuam o tempo de resposta às falhas. Com isto, eleva consideravelmente a qualidade dos aplicativos, bem como sua manutenção.

## 2. Os containers permitem adoção híbrida e multicloud

Uma vez conteinerizados, os aplicativos podem ser implantados em qualquer infraestrutura. Sejam elas máquinas virtuais, bare-metal ou várias nuvens públicas que executam diferentes hipervisores. Muitas organizações começam com a execução de containers em sua infraestrutura virtualizada e acham mais fácil migrar para a nuvem sem precisar alterar o código.

![](/wp-content/uploads/2019/04/multicloud-768x444-1.jpg)

## 3. Os containers se integram aos sistemas legados

A maioria das organizações empresariais tem um ambiente de virtualização maduro, que inclui ferramentas em torno de backups, monitoramento e automação, além de pessoas e processos que foram construídos em torno dele. Ao executar o Docker Enterprise em infraestrutura virtualizada, as organizações podem integrar facilmente containers aos sistemas legados e obter os benefícios dos benefícios um e dois acima descritos.
![](/wp-content/uploads/2019/04/maquinas-virtuais-768x463-1.jpg)

## 4. Os containers economizam no licenciamento de VM

Os aplicativos em contêiner compartilham o sistema operacional e as bibliotecas de softwares comuns, o que melhora bastante a utilização da CPU em uma VM. Isso significa que uma organização pode reduzir o número total de máquinas virtuais necessárias para operar seu ambiente e aumentar o número de aplicativos que podem ser executados em um servidor. Os usuários do Docker Enterprise geralmente observam uma consolidação de servidor 50% maior após a conteinerização, o que significa menos custos de hardware e economia no licenciamento de VMs e sistemas operacionais.

## Por que usar container no bare-metal?

Assim como as organizações têm motivos para usar diferentes servidores ou sistemas operacionais diferentes, há motivos para que algumas organizações desejem executar containers diretamente no bare-metal. Isso geralmente ocorre devido a problemas de desempenho ou latência ou por motivos de licenciamento e custo.

## Como o Docker aumenta a segurança do container?

Os containers são inerentemente seguros por conta própria. Os containers do Docker criam camadas de isolamento entre aplicativos e entre o aplicativo e o host. Isto protege o host e os containers à medida que reduz a área de superfície do host.

Os containers do Docker em execução no bare-metal têm as mesmas restrições de alto nível aplicadas a eles do que se estivessem sendo executados em máquinas virtuais. Mas os containers do Docker também combinam bem com as tecnologias de virtualização, protegendo a própria máquina virtual e fornecendo uma defesa profunda para o host.

## Conteinerizar é bom, com Docker é sucesso!

Ao escolher o Docker para conteinerizar suas aplicações, a organização tem a liberdade de escolher onde ele será executado: máquina virtual ou hardware básico. O usuário encontrará essa mesma liberdade em todas as outras opções do data center.

É importante frisar que a tecnologia é pensada e desenvolvida para potencializar o seu negócio. Neste sentido, é uma ferramenta flexível, que ajuda a reduzir o caminho entre seus seus objetivos e prioridades e a execução em si.
[idea][Clique aqui e confira neste artigo como montar uma estratégia de container bem sucedida.](/estrategia-de-container/)[/idea]

## Como obter mais informações sobre o Docker?

A Vertigo foi visionária ao se tornar a primeira Consulting Partner da [Docker](/docker/) na América Latina, em 2015.
Para a Vertigo, esta é uma parceria estratégica, pois acreditamos que a adoção de containers é a melhor maneira de acelerar a implantação de [Devops](/o-que-e-devops/).

Fizemos um vídeo resumindo e explicando algumas funções do Docker e como esta aplicação pode impactar os resultados da sua empresa.

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="450" src="https://www.youtube.com/embed/0ZgMjpy_vQQ?feature=oembed" title="O que é Docker - Entenda de maneira simples" width="800"></iframe>

#### Ficou curioso?

Temos um time de especialistas, com a expertise necessária para sanar todas as suas dúvidas em relação as features do Docker.

Preencha nosso formulário abaixo, para agendarmos uma conversa e uma demonstração ao vivo da ferramenta!
