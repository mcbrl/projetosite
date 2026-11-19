---
title: "Tutorial Docker EE – Aprenda o passo a passo para começar a testar hoje mesmo"
slug: "tutorial-docker-ee"
date: "2018-09-19T13:46:01"
modified: "2026-02-02T20:43:41"
status: "publish"
author: "admin"
excerpt: "Você tem interesse em utilizar o Docker EE mas não sabe por onde começar? Este artigo foi escrito para você! Aqui você encontra o passo a passo para explorar essa ferramenta incrível, usada pelas empresas mais inovadoras do mundo. Siga com a gente nesta jornada e aprenda como começar com o Docker hoje mesmo. Primeiro, […]"
categories: ["blog", "devops"]
tags: ["conteineres-docker", "devops", "docker"]
featuredImage: "/wp-content/uploads/2026/02/tutorial-docker-ee.png"
wpId: 2932
originalUrl: "https://vertigo.com.br/tutorial-docker-ee/"
contentSource: "rest"
seo:
  title: "Tutorial Docker EE – Aprenda o passo a passo para começar a testar hoje mesmo - Vertigo"
  description: "Você tem interesse em utilizar o Docker EE mas não sabe por onde começar? Este artigo foi escrito para você! Aqui você encontra o passo-a-passo para explorar essa ferramenta incrível, usada pelas empresas mais inovadoras do mundo. Siga com a gente nesta jornada e aprenda como começar com o Docker hoje mesmo."
  canonical: "https://vertigo.com.br/tutorial-docker-ee/"
  ogImage: "/wp-content/uploads/2026/02/tutorial-docker-ee.png"
  robots: "index, follow"
---

Você tem interesse em utilizar o Docker EE mas não sabe por onde começar? Este artigo foi escrito para você! Aqui você encontra o passo a passo para explorar essa ferramenta incrível, usada pelas empresas mais inovadoras do mundo.

##### Siga com a gente nesta jornada e aprenda como começar com o Docker hoje mesmo.

Primeiro, é importante lembrar que o Docker possui duas versões: a Community e a Enterprise.

As versões são diferentes entre si, e são adequadas para determinadas finalidades. Então, qual a diferença entre o Docker Community e o Docker Enterprise? O primeiro pode ser utilizado para sistemas, aplicações e ambientes mais simples. O segundo possui uma interface e capacidade para atender às necessidades mais robustas do mundo corporativo.

Neste material, nós vamos falar de **Docker Enterprise Edition**, fornecendo algumas bases para você começar a se familiarizar com essa incrível ferramenta.  

Para seguirmos adiante, vamos relembrar alguns conceitos juntos!  

## **O que é Docker?**

Docker é uma tecnologia que, finalmente, permitiu um isolamento de processos de programas e hoje modernamente chamamos de “Apps”. Docker executa e gerencia aplicações dentro de invólucros chamados containers. Vai muito além do paradigma da Virtualização de Máquinas. [Aqui](/o-que-e-conteinerizacao-de-aplicacao/)  ou [aqui](/docker-kubernetes-mesos/) e mais [aqui](/o-que-e-docker/) você pode ver outros posts nossos que explicam em alto nível como funciona o Docker para alavancar todo o ciclo Desenvolvimento-Teste-Produção de sistemas.

Projetos dos sistemas, agora conteinerizados, executam seu código com todos os requisitos (bibliotecas, engines ou literalmente o que ele precisar) para rodar, montados num “empacotamento” chamado de Imagem. Essa Imagem gerada, portando fica sendo a mesma usada em todos os níveis: do desenvolvimento até a produção. Isto acaba com os diversos problemas que “surgem inesperadamente” na hora de fazer a publicação em ambientes de Homologação e Produção.

A moderna abordagem do DevOps se torna ainda mais eficaz com o conceito de container, pois otimiza o processo como um todo, visando reduzir o tempo de build e de entrega, identificando os bugs, provisionando a escalabilidade e a alta-disponibilidade.

## **O que é Docker EE?**

Docker Enterprise Edition é exclusivamente voltado ao mercado corporativo de soluções com uma assinatura que fornece: serviço de suporte, imagens certificadas, monitoramento, management center, multi-cloud, execução de aplicações críticas em escala e releases trimestrais.

O Docker EE é uma plataforma de Containers-as-a-Service (CaaS) que habilita uma cadeia de fornecimento de software segura, com alta disponibilidade através de diferentes infraestruturas; sejam elas locais ou em nuvem.

## **Orquestração: A solução para novos problemas**

Embora seja possível um container resolver todo o sistema de forma eficaz, no mundo real, as soluções serão executadas em diversos containers que trabalham em conjunto, de forma integrada. Nós chamamos isso de Orquestração.

A operação de containers começou de forma manual, porém torna-se inviável quando falamos sobre administrar dezenas (ou até mesmo milhares de containers). Esse é um dos primeiros problemas que lidamos no processo de conteinerização.

Nesse ambiente de vários containers, como fazer para gerenciar diversos volumes (nfs, storage locais, storage em nuvem), redes (firewall, rede interna, internet, zonas de rede) e níveis de segurança entre os containers?

Em um primeiro nível, o Docker Swarm traz ferramentas que auxiliam nessa etapa, porém não atende a demanda do mundo corporativo com a mesma eficácia e velocidade que o Docker EE.

Uma solução só está preparada para a escalabilidade e a alta disponibilidade quando pode ser executada em qualquer provedor de cloud e região do mundo, de forma eficaz. Ainda que o Docker suporte essa operação em diversas nuvens, esse processo manual não ocorre de forma objetiva, pois essa maneira de executar o processo é passiva de erros.

O ganho de escala cria problemas no provisionamento de PODS (Kubernetes), na administração dos recursos do Cluster e ainda, na garantia de alta disponibilidade do Cluster.  

Outro problema recorrente é referente a administração de diversos perfis de acesso dos containers, ocasionando quebra de segurança e instabilidade no sistema.

Há uma outra problemática recorrente que é a garantia de imagens certificadas em todos os orquestradores.

## **Como o Docker EE resolve?**

O Docker EE contém o DOCKER UNIVERSAL CONTROL PLANE (UCP), que é uma solução de gerenciamento de cluster de nível corporativo, que pode ser instalado em ambiente local ou em nuvem. Essa funcionalidade permite gerenciar inúmeros clusters e aplicativos através de uma interface simples.

O acesso aos diversos volumes, sejam eles armazenados em nuvens ou locais, é fácil e seguro. Nas configurações de rede, além de load-balance, oferece também isolamento de redes entre containers.

A plataforma Docker EE através de comunicação segura (TLS) com os Clusters fornece uma multi-arquitetura de orquestração para kubernetes e swarm, docker garante a moderna e segura cadeia de deploy software usando: imagens assinadas, espelhamento entre registros e  análise das imagens. Utilizando a ferramenta de gerenciamento UCP, o Docker EE soluciona diversos problemas, tais como: escalabilidade e alta disponibilidade.

## **Docker EE telas – Datena: “Eu quero imagens!”**

Devidamente contextualizados, abaixo mostro algumas imagens que você pode conhecer e se familiarizar melhor com o Docker EE.

Apresentando o UCP – Universal Control Plane:

Visão do Dashboard: Aqui fica fácil gerenciar milhares de máquinas, clusters, containers, entre outros.

![](/wp-content/uploads/2018/09/1.png)

Segurança Controle de Análise de Imagens: Docker EE analisa as imagens nos repositórios para verificar se elas estão livres de vulnerabilidades conhecidas ou perigosamente expostas.

![](/wp-content/uploads/2018/09/2.png)

Controle dos Volumes: Conecte seus containers a volumes onde quiser: locais, em rede ou na nuvem.

![](/wp-content/uploads/2018/09/3.png)

![](/wp-content/uploads/2018/09/4.png)

Controle das Redes: Administre, de forma transparente, a maneira como os seus containers se comunicam entre si e com o mundo.

![](/wp-content/uploads/2018/09/5.png)

Controle de Regras / Usuários: Defina os acessos da sua equipe, seja ela composta pelos DevOps millenials ou Lenhadores da Infra.

![](/wp-content/uploads/2018/09/6.png)

Registro de Imagens: Monte sua Biblioteca de imagens e tenha fácil acesso para uso.

![](/wp-content/uploads/2018/09/7-1024x515-1.png)

![](/wp-content/uploads/2018/09/9-1024x577-2.png)

Mas, calma aí! Agora você já viu de tudo e pode até puxar uma conversa sobre Docker EE, mas não acabamos aqui.

Agora é hora de criar sua conta e botar a mão na massa!

Vamos ensinar você a criar uma conta na Docker para utilizar a versão Enterprise Edition por 30 dias GRÁTIS. Acompanhe o passo a passo, que possui muitas etapas, mas vale a pena.

<https://store.docker.com/editions/enterprise/docker-ee-trial>

**Clique “Start 1 Month Trial”**

![](/wp-content/uploads/2018/09/9-1024x577-1.png)

**Clique em “Create Account” para criar seu cadastro.**

![](/wp-content/uploads/2018/09/10-1024x578-1.png)

Escolha um login, e-mail e password.

![](/wp-content/uploads/2018/09/11-1024x577-1.png)

**Preencha e clique “Start your evaluation!”**

![](/wp-content/uploads/2018/09/12-1024x577-1.png)

**Chegou na tela da licença de uso do Docker EE temos três caminhos: fazer em Linux na mão, usar um template pronto MS Azure ou Amazon Web Services.**

![](/wp-content/uploads/2018/09/13-1024x580-1.png)

**Vamos de Azure por oferecer R$670 em créditos para o primeiro cadastro. Abra o link que está em “these instructions”.**

![](/wp-content/uploads/2018/09/14-1024x577-1.png)

**Clique no botão “EE Basic”**

![](/wp-content/uploads/2018/09/15-1024x579-1.png)

Use sua conta Azure e entre. Caso você ainda não tenha conta na Azure, acesse o link <https://azure.microsoft.com/pt-br/free/>)

![](/wp-content/uploads/2018/09/16-1024x579-1.png)

Pronto agora sim com sua conta criada avançamos para “GET IT NOW” que abre uma janela flutuante pedindo alguns dados para construir as máquinas necessárias ao ambiente.

![](/wp-content/uploads/2018/09/17-1024x579-1.png)

Clique em “Continue” e verá o Azure completando o processo.

![](/wp-content/uploads/2018/09/18-1024x579-1.png)

Mais uma confirmação, clique em “Criar”, quase lá não desista 😉 .

![](/wp-content/uploads/2018/09/19-1024x581-1.png)

**Iniciar gratuitamente.**

![](/wp-content/uploads/2018/09/20-1024x579-1.png)

Aqui nesta tela invente um nome, copie e cole o App ID que aparece no seu perfil Azure, e a “SSH Public Key” da sua máquina pessoal garantindo que só você consiga entrar no ambiente shell.

![](/wp-content/uploads/2018/09/21-1024x581-1.png)

Tela anterior já preenchida.

![](/wp-content/uploads/2018/09/22-1024x580-1.png)

Concluindo e executando a validação final.

![](/wp-content/uploads/2018/09/23-1024x573-1.png)

Pronto aqui temos a lista de recursos (máquinas, redes, volumes do Azure).

![](/wp-content/uploads/2018/09/24-1024x579-1.png)

Nas notificações você verá “Implantação em andamento…”

![](/wp-content/uploads/2018/09/25-1024x576-1.png)

Pronto a lista de recursos está aumentando conforme as máquinas do template Docker EE.

![](/wp-content/uploads/2018/09/26-1024x580-1.png)

Pronto quando subir você tem um endereço de entrada:

![](/wp-content/uploads/2018/09/27-1024x576-1.png)

Faça o upload da licença que geramos quando pedimos 1 Month Trial:

![](/wp-content/uploads/2018/09/28-1024x575-1.png)

## **Bem-vindo ao Docker EE!**

![](/wp-content/uploads/2018/09/30-1024x580-1.png)

### **Conclusão**

Esperamos que com o nosso conteúdo você comece a dar seus primeiros passos no Docker EE. Aproveite este material para testar essa plataforma que é utilizada por empresas de destaque ao redor do mundo.

Quando você começar a mexer, dúvidas vão aparecer. Isso é mais do que normal!

[Em caso de dúvidas, agende um papo com um especialista da Vertigo.](https://materiais.vertigo.com.br/docker)

**Confira também:**

[![](/wp-content/uploads/2018/11/Integracao-Docker-com-Java-CTA-1.png)](https://materiais.vertigo.com.br/paper-integracao-docker-java?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

**Até a próxima!**

---

## SOBRE O AUTOR

Rubens Freitas (Rubão) é gerente de infraestrutura da Vertigo Tecnologia. Apaixonado por Docker e café, gosta de assistir séries e colecionar coisas estranhas. Formado em ciência da computação pela UFF, já programou em Java, iOS e é consultor especialista em integração de sistemas. Diz que gosta de correr e surfar. Mas esta parte carece de confirmação. 😉
