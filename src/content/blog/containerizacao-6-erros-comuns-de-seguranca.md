---
title: "Containerização: 6 erros comuns de segurança"
slug: "containerizacao-6-erros-comuns-de-seguranca"
date: "2021-09-21T11:32:12"
modified: "2021-09-21T11:32:12"
status: "publish"
author: "admin"
excerpt: "Muitas empresas realizam a containerização das suas aplicações transferindo os dados do projeto para infraestruturas em nuvem. Este processo, depende de containers que empacotam o código para que as aplicações sejam executadas, durante a migração de um ambiente para outro. Estruturas containerizadas, como as soluções Docker, tornam o processo de distribuição de permissões de acesso […]"
categories: ["containers", "devops", "dockeree", "kubernetes"]
tags: ["devops", "docker", "kubernetes", "orquestracao-de-containers"]
featuredImage: "/wp-content/uploads/2021/09/BLOG_ImgDestaque_ContainerizacaoErros_21-09-21.png"
featuredImageAlt: "6 erros na containerização"
wpId: 157299
originalUrl: "https://vertigo.com.br/containerizacao-6-erros-comuns-de-seguranca/"
contentSource: "rest"
seo:
  title: "Containerização: 6 erros comuns de segurança - Vertigo"
  description: "Containerização: veja os 6 erros mais comuns de segurança ao adotar a estratégia. Leia o nosso blog e fique por dentro do melhor conteúdo."
  canonical: "https://vertigo.com.br/containerizacao-6-erros-comuns-de-seguranca/"
  ogImage: "/wp-content/uploads/2021/09/BLOG_ImgDestaque_ContainerizacaoErros_21-09-21.png"
  robots: "index, follow"
---

Muitas empresas realizam a containerização das suas aplicações transferindo os dados do projeto para [infraestruturas em nuvem](/cloud-native-6-principais-erros-ao-migrar-sua-infraestrutura-para-nuvem/). Este processo, depende de containers que empacotam o código para que as aplicações sejam executadas, durante a migração de um ambiente para outro.

Estruturas containerizadas, como as soluções Docker, tornam o processo de distribuição de permissões de acesso e políticas de segurança recomendadas para uma determinada aplicação, o que evita o processo sendo implementado de forma manual e individual pelos usuários.

[Plataformas de containerização](/ferramentas-de-orquestracao-de-containers/) como Docker Swarm e Kubernetes, presentes nas soluções da Vertigo, têm mecanismos de segurança específicos para realizar a implementação de containers. O que proporciona um ambiente mais fácil de ser configurado, agradável e seguro para desenvolvimento e containerização de projetos.

Sem dúvidas, aplicar uma estratégia para gerenciamento de containers, é uma das melhores práticas DevOps que as empresas alinhadas com a transformação digital podem adotar, mas isso não significa que a containerização seja um processo infalível, pois está suscetível a falhas de segurança.

Nesse artigo, vamos mostrar os 6 erros mais comuns que alguns gestores de TI comentem no momento de aplicar uma estratégia conteinerizada. Saiba como evitar falhas e levar o máximo de segurança para o seu ambiente de desenvolvimento.

**Leia também**

- [A importância do gerenciamento de containers](/containerizacao-a-importancia-do-gerenciamento-de-containers/)
- [Kubernetes: 6 principais componentes da sua arquitetura](/kubernetes-6-principais-componentes-da-sua-arquitetura/)

## 1 – Focar apenas no container e esquecer do ambiente de execução

No momento da implementação da estratégia de containerização, é muito comum destinar o foco apenas para o container, mas isso representa uma falha grave de segurança.

Muitos desenvolvedores acabam deixando de lado o ambiente de execução, o que representa uma abertura para a falha de segurança em seu host, por exemplo. Cada máquina que recebe o mecanismo de container integrado, deve ter suas configurações de segurança atualizadas, protegendo assim o ambiente de possíveis vulnerabilidades.

O ponto inicial para proteger seu ambiente containerizado, tem start no sistema operacional e na rede host.

## 2 – Não limitar privilégios de acesso

Plataformas de orquestração, são capazes de implementar políticas de segurança bastante eficientes, desde que configuradas de forma correta.

Um erro comum que muitos gestores cometem, é não aplicarem uma política de permissões restritas, possibilitando o acesso de pessoas desnecessárias a recursos que não deveriam ter alcance.

Não restringir os privilégios desnecessários aos containers no ambiente host, pode comprometer não apenas o container, mas também a máquina host. Da mesma forma que focar em segurança apenas dentro de um container, não irá protegê-lo de vulnerabilidades no host, implementar a segurança apenas no host, não irá protegê-lo da exploração em um container com privilégios indevidos.

O correto, é executar o container de forma que ele não conceda privilégios desnecessários no ambiente host. Os privilégios devem ser concedidos de forma moderada, evitando o provisionamento de containers com permissões abrangentes no ambiente host.

## 3 – Utilizar bibliotecas sem verificar o código

Ao implementar a containerização, muitas empresas e gestores cometem o erro quase inocente, porém grave, de incluir bibliotecas de código confiando que elas são seguras.

Vale destacar que é necessário ter cuidado tanto com bibliotecas do próprio conjunto de desenvolvimento quanto as externas, importadas com a promessa de soluções rápidas mas que podem representar grande perigo. Ao compilar as aplicações e executá-las em container de produção, pode abrir algumas brechas para vulnerabilidade.

Uma boa solução para resolver esse tipo de problema, é limitar as bibliotecas somente para que atendam o necessário a execução do container, verificar o código em busca de eventuais funções maliciosas e aplicar uma forte revisão de segurança caso seja uma biblioteca externa. Ter um processo bem claro para a revisão de containers que representem riscos, para buscar vulnerabilidades e considerar que as possibilidades de falha tenham sido debatidas por uma equipe especializada.

## 4 – Exposição desnecessária de containers

Alguns containers precisam ser executados em rede pública, dessa forma acabam ficando expostos a ataques. Sendo assim, é necessário que no início do seu desenvolvimento, essa variável seja considerada para que medidas preventivas sejam implementadas. É importante pensar em regras de segurança que não sejam abrangentes, pois elas podem expor o container a potenciais ataques, dessa forma, apenas canais absolutamente necessários devem ser abertos para minimizar os riscos.

Um erro muito comum, é deixar as permissões do container por padrão, intactas. Isso representa um grande perigo, pois os containers são criados por meio de uma série de comandos definidos e são executados com permissões de root quando a imagem é criada. Caso um processo dentro do container seja executado com permissões de root e explorado em tempo de execução, os dados serão comprometidos. A melhor forma para resolver essa questão, é executar os comandos através de usuários sem permissões root.

Na rede, a forma como os dados e os processos de um container são expostos precisam ser considerados. Afinal, a segurança do container começa com o sistema operacional tradicional e a segurança da rede.

## 5 – Não considerar o princípio de imagens imutáveis

Soluções de containerização como as da Docker e Kubernetes, respeitam o princípio de imagens imutáveis, ou seja, aquelas que não terão mudanças.

Quando implantamos sistemas e dados através da rede, principalmente internet, é necessário criar um processo que garanta a integridade do container.

Utilizar imagens imutáveis proporcionam diversas vantagens, como por exemplo, a recuperação de dados automática, além de fornecerem integridade.

Quando não se utiliza um container imutável, ele fica exposto a vulnerabilidades que podem alterar o suporte a aplicação, realizar alterações maliciosas e comprometer o projeto.

É muito perigoso expor o container, pois ao não considerar o princípio imutável, algum malware pode ser inserido. Dessa forma, é necessário que o monitoramento da integridade dos containers seja realizado com seriedade para reduzir riscos.

## 6 – Não examinar a imagem de um container

Uma prática comum, mas que representa uma grave falha no processo de containerização de aplicações, é ignorar a imagem em que um container se baseia, integrando diretamente os dados ao projeto.

Antes de implementar um container, é necessário avaliar se a imagem dele é de fonte certificada e de algum fabricante conhecido, ou se contém malwares ou está com vulnerabilidades. O processo deve ser feito por uma equipe de desenvolvedores experientes, pois é um trabalho minucioso mas que pode representar a tranquilidade necessária para a condução do projeto sem dores de cabeça

## Implemente a containerização dos seus projetos com as soluções das Vertigo Tecnologia

A Vertigo é parceira de empresas do setor público e privado, sendo o braço direito de líderes inovadores que buscam implementar a Transformação Digital e se destacar no competitivo mercado de tecnologias.

Através dos nossos parceiros estratégicos [Docker](/parcerias/docker/) e [Weaveworks](/parcerias/weaveworks/), o processo de containerização de aplicações pode ser implementada com máxima eficiência por profissionais capacitados e experientes na [filosofia DevOps](/indice-de-maturidade-devops/).

Entre em contato com nosso time comercial. Teremos o prazer em tornar as suas aplicações mais seguras e fazer a sua empresa se destacar em meio a concorrência.

**Leia mais**

- [Por que é preciso aperfeiçoar a segurança da tecnologia?](/por-que-e-preciso-aperfeicoar-a-seguranca-da-tecnologia/)
- [Kubernetes ganha mais força ainda com a chegada do 5G](/kubernetes-ganha-mais-forca-ainda-com-o-5g/)
