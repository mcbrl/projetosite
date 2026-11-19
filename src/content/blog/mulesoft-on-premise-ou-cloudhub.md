---
title: "Mulesoft On-Premise ou Cloudhub – Qual o melhor cenário para a sua operação?"
slug: "mulesoft-on-premise-ou-cloudhub"
date: "2018-08-21T14:23:57"
modified: "2026-02-02T20:41:19"
status: "publish"
author: "admin"
excerpt: "O barramento de serviços (ESB) da MuleSoft é oferecido em três formas principais: Mule ESB Enterprise Edition (versão comercial, on-premise), Cloudhub (versão comercial PaaS) e Mule ESB Community Edition (versão open source, on-premise). São três opções super interessantes, possuem diferenças entre si e se adequam melhor em diferentes tipos de ambientes e negócios. Esse é […]"
categories: ["blog", "mundo-das-apis"]
tags: ["api", "cloudhub", "mulesoft", "mulesoft-cloudhub", "mulesoft-on-premise", "mulesoft-runtime", "review-mule-cloudhub", "review-mule-on-premise"]
featuredImage: "/wp-content/uploads/2026/02/mulesoft-on-premise-ou-cloudhub.png"
wpId: 2375
originalUrl: "https://vertigo.com.br/mulesoft-on-premise-ou-cloudhub/"
contentSource: "rest"
seo:
  title: "Mulesoft On-Premise ou Cloudhub - Descubra qual cenário é melhor"
  description: "Você provavelmente já sabe, ou ouviu falar, da qualidade dos produtos da Mulesoft. Mas qual o melhor cenário para as suas necessidades de integração de sistemas? Em nosso conteúdo você vai obter informações que podem ajudar a ver a melhor solução para o seu tipo de negócio. Vem com a gente!"
  canonical: "https://vertigo.com.br/mulesoft-on-premise-ou-cloudhub/"
  ogImage: "/wp-content/uploads/2026/02/mulesoft-on-premise-ou-cloudhub.png"
  robots: "index, follow"
---

O barramento de serviços (ESB) da MuleSoft é oferecido em três formas principais: **Mule ESB Enterprise Edition (versão comercial, on-premise)**, **Cloudhub (versão comercial PaaS)** e **Mule ESB Community Edition (versão open source, on-premise)**. São três opções super interessantes, possuem diferenças entre si e se adequam melhor em diferentes tipos de ambientes e negócios.

[Esse é um artigo sobre APIs, se você não ainda não tem muito conhecimento sobre o assunto](/o-que-e-api-entenda-de-uma-maneira-simples/)

O propósito deste post é fazer uma análise comparativa do Cloudhub e Mule ESB EE On-Premise. Prós e contras existem para ambos os produtos. Enquanto você lê esse artigo, tente pensar em como as funcionalidades de cada versão se comportariam em seu modelo de negócio. Cada um tem características distintas que devem ser consideradas durante o processo de tomada de decisão da sua organização.

Recursos muito interessantes e convenientes precisam de um investimento maior. A opção **Cloudhub** permite no máximo até 10 aplicações por vCore, e cada um tem custo elevado. Porém, alguns dos recursos podem valer a pena pagar (dependendo da sua situação específica).

## Os detalhes da versao Cloudhub

No geral, o **Cloudhub**, assim como muitas tecnologias semelhantes *cloud-based*, evoluiu bastante nos últimos anos, oferecendo aos clientes quase todos os recursos como se as soluções fossem implementadas em seu data center. Entre os recursos mais úteis implementados no Cloudhub estão: oferta de VPC, regras de firewall personalizadas, implementação de servidor proxy e balanceamento de carga pronto para uso (para obter mais detalhes, consulte estes documentos do [Mulesoft Runtime Manager](https://docs.mulesoft.com/runtime-manager/virtual-private-cloud)).

As únicas desvantagens técnicas reais são o fato de você não ser capaz de acessar *filesystems* locais, transferir arquivos entre aplicações, além de algumas restrições ao usar armazenamentos de objetos (*in-memory database*). Existem soluções de nuvem alternativas, como o uso de *Amazon* S3 e outras tecnologias de nuvem para atenuar o impacto. Dito isso, os clientes geralmente não precisam de muitos extras quando enfrentam uma determinada limitação do Cloudhub.

## As características da  On-Premise

Quanto à versão **On-Premise do Mule Runtime**, há algumas coisas a serem consideradas. Na minha opinião, o mais oneroso é o tempo e o conhecimento necessários para instalar, manter e atualizar corretamente o Mule Runtime, além da versão do Java SDK / OpenJDK, do sistema operacional e de todos os outros componentes que sua *stack* de aplicativos precisará.

Este requisito pode não parecer um grande fardo para os técnicos. Para um CIO é um potencial ponto de falha, que deve ser evitado, especialmente se isso significar custos.

Além desses custos temos: os load balancers, os firewalls e outros componentes de rede. Eles podem ser necessários para tornar sua aplicação compatível com seus padrões organizacionais e departamentais. Quando uma instalação on-premise ocorre em um data center, é preciso garantir que ela seja feita de forma correta. Ela precisa ser mantida de forma apropriada durante todo o ciclo de vida de um ESB.

Ter todos os elementos necessários instalados e implementados corretamente é muito mais fácil de falar do que fazer, por vários motivos. Mas isso é um assunto para uma discussão posterior. O ponto aqui é que a instalação correta e as melhores práticas vão envolver muito mais do que apenas alguns cliques e descompactação de arquivos.

## Dá para ter o melhor dos dois mundos?

Com o surgimento de serviços como Amazon EC2, Windows Azure e outros, há “opções híbridas” que algumas organizações conseguiram utilizar com sucesso. Em cenários específicos, existe a opção de instalar um *Mule Runtime* com uma licença *on-premise* em um servidor Linux baseado em nuvem, como os oferecidos pela *AWS*. Com essa “solução híbrida”, você evita algumas das limitações do *Cloudhub* e das instalações *on-premise*, mas não de todas elas.

Com a solução híbrida, você elimina a restrição de apenas poder implantar até 10 aplicações por vCore. Além disso, a instalação manual de um Mule Runtime local em um servidor hospedado na nuvem pode evitar várias das desvantagens mencionadas acima, como necessidade de balanceamento de carga, firewall, servidores proxy, gateways de API e todas as outras desvantagens de um servidor de hospedagem físico (serviços como a Amazon oferecem estas soluções prontas a preços muito acessíveis).

Uma solução híbrida ainda requer recursos qualificados para instalar o Mule Runtime, Java e todos os outros componentes que sua solução específica precisaria. Mas, na minha opinião, essa não é uma solução ruim se for necessário seguir nesse caminho. Portanto, a utilização de uma arquitetura híbrida deve ser avaliada de forma muito criteriosa e com parcimônia.

## Mitos e Armadilhas:

### “Cloudhub não oferece os recursos de segurança necessários que nossos executivos e gerentes de alto nível gostariam”

Falso. Hoje, com segurança cibernética e proteção de dados sendo uma grande preocupação para a maioria das empresas, o Cloudhub possui recursos que permitem que seus clientes implementem Virtual Private Cloud, camadas de API Proxy, SSL, protocolos de segurança de API usando LDAP, OAUTH2, regras de firewall personalizadas para IP estático e muitos outros componentes e recursos que podem manter seu *stack* de aplicações e seus dados devidamente seguros.

Além disso, o Cloudhub é amplamente utilizado e com êxito nos setores bancário, financeiro e de saúde, onde dados confidenciais são transitados de um lado para o outro por inúmeras transações.

### “Podemos obter todos os componentes necessários on-premise, facilmente instalados pela nossa equipe”

É mais fácil falar do que fazer. Embora muitas equipes de TI não encontre dificuldade na instalação do ESB, os testes exigem determinados níveis de conhecimento que não são tão comuns. Um engenheiro de DevOps de Mule deve estar realmente familiarizado com as complexidades do servidor Mule, Linux, portas HTTP, rede, firewall, propriedades de inicialização e, às vezes, muitas outras tecnologias como Maven e Artifactory para instalar, manter, monitorar e atualizar um ambiente.

### “Um ESB corporativo pode ser implementado de forma barata”

Independentemente de qual tecnologia ESB você decida usar, e se você decide sobre uma tecnologia baseada em nuvem ou uma solução on-premise, uma implementação de ESB requer mão-de-obra qualificada, recursos e devida experiência para ser implementada com sucesso. Portanto, nunca é barato.

### “Minha equipe de rede será capaz de implementar rapidamente e sem custos para uma solução on-premise”

Essa é provavelmente uma das armadilhas mais comuns. Problemas de rede como aberturas de portas, regras de firewall e testes de balanceamento de carga são difíceis de resolver. Na maioria das vezes, é preciso um recurso Mule muito proficiente e bem informado, em extrema comunicação e coordenação com um recurso de rede. Isso ajuda a detectar e resolver problemas de rede de forma ágil. Recursos errados tentando resolver problemas dessa natureza podem, na verdade, arruinar sua implementação inteira.

### “Com o Cloudhub, podemos garantir que nossa plataforma estará ativa em 100% do tempo e será 100% confiável”

Nada na vida é 100% garantido, nem o Cloudhub. Embora seja uma plataforma muito confiável e que raramente falha, a verdade é que isso já aconteceu no passado e, sem dúvida, acontecerá novamente no futuro. A MuleSoft possui monitoramento e alertas proativos, bem como análises após incidentes, que alertam seus clientes. No entanto, como qualquer outra empresa gerenciada por seres humanos, os sistemas não são 100% perfeitos e as coisas podem dar errado.

### “Alterações em aplicações e implantações são muito mais fáceis no Cloudhub em comparação com o On-Premise”

Boas práticas recomendadas e uma política de gerenciamento de release devem ser implementadas em sua equipe, independentemente de qual implementação você escolher. Práticas de DevOps são muito bem-vindas nesse momento 

> [Não sabe o que é DevOps? Confira nosso super conteúdo sobre o assunto clicando aqui](/o-que-e-devops/)

O Cloudhub facilita alguns aspectos do processo de implantação, no entanto, práticas ruins e implantações malfeitas podem causar muitas dores de cabeça.

### “A arquitetura no Cloudhub é muito mais simples do que On-Premise”

Falso. As vantagens arquiteturais do Cloudhub baseiam-se principalmente nos aspectos automáticos de manutenção e escalabilidade de sua *stack* de aplicação. Isso permite que seus arquitetos direcionem suas energias para a arquitetura da aplicação em vez de focar na arquitetura de infraestrutura da sua organização.

## Conclusão

Estamos chegando ao final do conteúdo. Esperamos que tenha ajudado em seu processo de aprendizado, e talvez, de tomada de decisão quando a algum procedimento que você esteja planejando tomar em sua empresa. Esse review foi traduzido do site da consultoria MS³.

O texto foi interessante para você? Se você gostou desse conteúdo sobre **Mulesoft**, vai adorar também nosso material que fala sobre **5 melhores padrões de integração Salesforce**. Para ter acesso basta clicar na imagem abaixo.

[![](/wp-content/uploads/2018/08/PAPER-BLOG-300x169-1.png)](http://materiais.vertigo.com.br/paper-mulesoft-os-5-melhores-padroes-de-integracao-com-salesforce?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)

Nós da Vertigo Tecnologia somos especialistas em Mulesoft. Empresas como a Ipiranga Petróleo, a ABInbev e a B2W já constataram conosco o poder das integrações feitas pela Mulesoft. Você tem problemas com integrações de sistemas ou gostaria potencializar seu negócio possibilitando a comunicação entre ambientes diferentes? Agende um contato conosco clicando no ícone abaixo. Nossos especialistas com total certeza terão um solução para sua dor.

[![](/wp-content/uploads/2018/08/CONTATO-HIPERLINK-300x50-1.png)](/contato/)

Até mais!
