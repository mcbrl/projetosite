---
title: "Criando sua Rede Ethereum Privada com Docker – Parte 1"
slug: "criando-sua-rede-ethereum-privada-com-docker"
date: "2018-08-20T14:08:37"
modified: "2018-08-20T14:08:37"
status: "publish"
author: "admin"
excerpt: "Este é o primeiro artigo da série “Criando Sua Rede Ethereum Privada com Docker”. Iremos cobrir tópicos como o uso das imagens Docker oficiais (“ethereum/go-ethereum”), o uso local da Wallet (carteira), provisionamento de nós Ethereum em nuvens públicas e o deployment de uma aplicação simples. Essa é a parte introdutória do assunto. O tutorial completo […]"
categories: ["blog", "devops"]
tags: ["docker", "docker-blockchain", "docker-blockchain-ethereum", "docker-ethereum"]
featuredImage: "/wp-content/uploads/2018/08/homestead-ethereum2.png"
wpId: 2810
originalUrl: "https://vertigo.com.br/criando-sua-rede-ethereum-privada-com-docker/"
contentSource: "rest"
seo:
  title: "Crie agora a sua Rede Ethereum Privada com Docker!"
  description: "A Rede Ethereum apresenta níveis extremos de tolerância a falhas, garante disponibilidade (zero 'downtime') e assegura a inviolabilidade, imutabilidade e não-censura dos dados armazenados. Aprenda aqui como criar uma!"
  canonical: "https://vertigo.com.br/criando-sua-rede-ethereum-privada-com-docker/"
  ogImage: "/wp-content/uploads/2018/08/homestead-ethereum2.png"
  robots: "index, follow"
---

*Este é o primeiro artigo da série “Criando Sua Rede Ethereum Privada com Docker”. Iremos cobrir tópicos como o uso das imagens Docker oficiais (“ethereum/go-ethereum”), o uso local da Wallet (carteira), provisionamento de nós Ethereum em nuvens públicas e o deployment de uma aplicação simples.*

*Essa é a parte introdutória do assunto. O [tutorial completo você pode obter clicando aqui](https://materiais.vertigo.com.br/rede-privada-ethereum-docker). Mas, caso você queira ter apenas um panorama sobre a importância do assunto, fique à vontade para ler nosso conteúdo escrito pelo nosso CTIO – André Fernandes, que é uma super autoridade no assunto! Vamos nessa?*

*Lembrando que este é um conteúdo avançado. Se você ainda não sabe muito sobre o assunto, recomendamos que você leia os artigos abaixo!*

[Saiba aqui o que é Docker!](/o-que-e-docker/)

[Descubra o que é Blockchain – O futuro é agora!](/o-que-e-blockchain-e-como-isso-ajuda-geracao-negocios/)

## **Introdução**

Ambas estas tecnologias – blockchain e Docker – têm estado em foco intenso nos últimos anos.

Docker já está bem além do “hype” e se tornou o padrão *de facto* para containers, assim como o uso de containers é quase onipresente no fluxo de trabalho e esteiras de entrega de desenvolvimento atualmente (exceto para quem se escondeu em uma caverna).

Blockchain, por outro lado, ainda não se popularizou como solução em diversos setores para os quais teve suas maravilhas prometidas. Além de criptomoedas (como Bitcoin), a tecnologia blockchain tem aplicabilidade genérica em vários cenários (títulos de propriedade – digital ou não, votações, gestão de identidade e privacidade, entre tantos outros). Do ponto de vista de um empreendedor, uma rede blockchain moderna pode ser vista como uma plataforma sobre a qual todo um novo conjunto de produtos pode ser construído.

Aviso: estes artigos assumem alguma familiaridade com conceitos básicos de tecnologia blockchain, não se demorando em explicá-los em nenhum momento.

[Conteineres Docker são inseguros? Óbvio que não! Saiba mais aqui!](/verdades-mitos-modernizacao-de-aplicacoes-com-conteiner/)

## **Sobre Ethereum**

A Rede Ethereum foi concebida para entregar o conceito de plataforma, extrapolando o conceito de moeda e transações do Bitcoin. Conforme a própria documentação da Ethereum:

> *Ethereum é um blockchain aberto que permite a qualquer um construir e usar aplicações descentralizadas sobre esta tecnologia.*

Então, vista como uma plataforma para aplicações descentralizadas, a Rede Ethereum apresenta “…níveis extremos de tolerância a falhas, garante disponibilidade (zero ‘downtime’) e assegura a inviolabilidade, imutabilidade e não-censura dos dados armazenados.”

## **Mas é “a rede” ou “uma rede”?**

Esta pergunta significa: Existe uma única rede Ethereum (“a” rede) ou uma infinidade de redes? Bem, as duas coisas estão corretas.

Existe, sim, “a” Rede Ethereum, pública e descentralizada, não controlada por ninguém em particular. Esta rede Ethereum principal (também conhecida como “mainnet”) é aquela de que falamos normalmente quando dizemos “Rede Ethereum”.

Existem também a rede “irmã” da *mainnet* chamada *testnet*, onde testes podem ser conduzidos sem comprometer recursos reais. Existe também um *fork* da rede Ethereum conhecido como *Ethereum Classic*, mas isto é [outra história](https://www.coindesk.com/ethereum-classic-explained-blockchain/).

Enquanto em uma plataforma de nuvem tradicional, na qual você é “dono” dos nós (controla e confia) onde suas aplicações executam, em um blockchain público tem-se o oposto: ele é inteiramente constituído por participantes nos quais você não confia, mas que constroem um consenso de uma maneira confiável (eis o “milagre” do blockchain). O significado de um blockchain ser público é este: qualquer um pode ler, transacionar e participar da busca pelo consenso (basta, por exemplo, usar uma [Wallet](http://ethdocs.org/en/latest/account-management.html#using-mist-ethereum-wallet)) – na descentralização é que reside o seu valor.

Isto é um pouco duro de entender no começo: ninguém controla todos os nós da rede, mas ao mesmo tempo os desenvolvedores precisam evoluir o software e seu protocolo – ou seja, o software é atualizado de tempos em tempos porque todos concordam em fazê-lo. Entende-se assim os conceitos de “soft fork” e “hard fork”, mas todo o propósito é sempre preservar o valor intrínseco da descentralização enquanto se evolui o software executado em todos os nós.

### Qualquer um pode criar?

Sendo Ethereum um software aberto (open-source) não há nada que impeça qualquer um de criar uma nova rede pública – apenas não faz sentido fazê-lo. Do ponto de vista técnico cada rede blockchain diverge essencialmente de outra pelo seu “bloco gênese” (ainda que com o mesmos algoritmos e protocolos) – mas o valor de uma rede está em seu uso disseminado (i.e. descentralização).

Redes blockchain privadas, por outro lado, podem ser instanciadas com qualquer propósito que venha à mente (há uma grande quantidade de cenários plausíveis). Repetindo, basta definir um “bloco gênese”, disparar seus nós e colocá-los para trabalhar.

É fácil encontrar na internet [discussões acaloradas](https://blog.ethereum.org/2015/08/07/on-public-and-private-blockchains) sobre fazer sentido ou não o uso de redes blockchain privadas como soluções de negócio (por que usar uma solução descentralizada e ineficiente se você *confia* nos participantes), mas do ponto de vista dos desenvolvedores de soluções é bastante desejável ser capaz de criar e destruir por completo seus cenários – várias vezes por dia. *É para este caso que esta série de artigos foi escrita.*

## **Docker Docker Docker**

Sim, sou um fanboy. Como não ser?

**Adquirindo nosso material completo**, você vai aprender a levantar uma rede Ethereum privada – localmente ou em nuvem – usando containers. Embora existam várias ofertas dos vendors de nuvens públicas para provisionamento de blockchains privados (como o [Azure’s Blockchain as a Service](https://azure.microsoft.com/pt-br/solutions/blockchain/)), o caminho via containers é bem mais sensato do ponto de vista do desenvolvedor. No tempo em que um conjunto de VMs neste modele é provisionado (mesmo com automação) é possível criar e recriar um *swarm* de containers repetidas vezes.

Você já sabe as vantagens e agora é hora de botar a mão na massa. **Baixe nosso material completo clicando na imagem abaixo** e turbine seus conhecimentos!

[![](/wp-content/uploads/2018/08/CRIANDO-SUA-REDE-ETHEREUM-PRIVADA-COM-DOCKER.png)](https://materiais.vertigo.com.br/rede-privada-ethereum-docker?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

Até mais!
