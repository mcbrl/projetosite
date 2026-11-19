---
title: "Descubra como melhorar a qualidade de seu deploy com GitOps"
slug: "descubra-como-melhorar-qualidade-de-seu-deploy-com-gitops"
date: "2021-04-26T11:54:36"
modified: "2021-04-26T11:54:36"
status: "publish"
author: "admin"
excerpt: "Um bom deploy é mandatório para o sucesso de uma equipe de desenvolvimento. Como profissional de TI, você deve estar acostumado a construir recursos para facilitar a vida de seus clientes. Porém, essas melhorias não agregam valor ao negócio até que estejam disponíveis para o usuário. Com a introdução do DevOps, os desenvolvedores assumiram ainda […]"
categories: ["transformacao-cloud-native"]
tags: ["adotar-devops", "cloud-native", "deploy", "gitops", "kubernetes"]
featuredImage: "/wp-content/uploads/2021/04/deploy-com-gitops-1200x675-1.jpg"
wpId: 5517
originalUrl: "https://vertigo.com.br/descubra-como-melhorar-qualidade-de-seu-deploy-com-gitops/"
contentSource: "rest"
seo:
  title: "Descubra como melhorar a qualidade de seu deploy com GitOps - Vertigo"
  description: "Para que a sua TI tenha sucesso, equipes de desenvolvimento precisa realizar um bom deploy. Sabendo dessa importância, aprenda como melhorar a sua qualidade"
  canonical: "https://vertigo.com.br/descubra-como-melhorar-qualidade-de-seu-deploy-com-gitops/"
  ogImage: "/wp-content/uploads/2021/04/deploy-com-gitops-1200x675-1.jpg"
  robots: "index, follow"
---

**Um bom deploy é mandatório para o sucesso de uma equipe de desenvolvimento.** Como profissional de TI, você deve estar acostumado a construir recursos para facilitar a vida de seus clientes. Porém, essas melhorias não agregam valor ao negócio até que estejam disponíveis para o usuário.
Com a introdução do [DevOps](/beneficios-da-adocao-da-cultura-devops-em-tempos-de-crise/), os desenvolvedores assumiram ainda mais o compromisso pela automação do código, tornando-os responsáveis ​​pela segurança.
Sabendo dessa importância, como classificar o nível de maturidade do seu deploy e melhorar a sua qualidade? Continue lendo o nosso artigo e descubra!

## Como o deploy é efetuado normalmente?

O desenvolvedor constrói um código e então “copia/cola” no servidor de produção. Esse processo pode ser bem rápido e é uma ótima maneira para provar um conceito. Entretanto, a longo prazo, ele não consegue ser repetido, muito menos com a mínima garantia de qualidade.
Além disso, é razoavelmente arriscado porque os testes após o deploy não são executados e o seu processo é realizado manualmente. Ou seja, se a aplicação quebrar, só resta torcer para ela ser restaurada ao ambiente de produção.

## Com que frequência deve-se realizar o deploy?

Depois que o deploy é realizado, muitas mudanças acontecem simultaneamente, aumentando exponencialmente seu risco. Quando algo dá errado, como descobrir qual recurso causou o problema? Às vezes, não é uma única questão, mas sim uma combinação de várias alterações que não foram testadas juntas.
Automações que afetam várias aplicações e data centers são difíceis de reverter. Imagine interromper a produção sem um rollback fácil, por exemplo. Muitas vezes **realizar pequenos deploys divide o risco, tornando o processo muito mais controlável**.
Outra questão é quando a equipe de desenvolvimento tem que mudar de contexto. Após a conclusão de uma  feature, problemas podem ser encontrados, o que afeta o trabalho. Se o desenvolvimento foi realizado há um mês, por exemplo, com certeza haverá dificuldade para o profissional se recordar do propósito executado.

## Busque manter zero downtime

Ao implantar esse conceito na sua empresa, você mostra ao seu usuário final que se importa com sua experiência. É possível conseguir esse feito de duas maneiras:

### Blue/Green deploy

Você terá seu ambiente de produção com duas instâncias de aplicação:

1. Ao vivo, com usuários acessando;
2. Cópia, usada para testes.

Após implantar a nova versão, é possível aquecer a aplicação para evitar o downtime e executar testes para validar se ela está íntegra. Esse é um excelente recurso para que você não precise desintegrar toda a aplicação somente por conta de um deploy incorreto.

### Canary/Rolling deploy

Pode ser útil quando você tem várias máquinas, pois consegue realizar o deploy de forma incremental e contínua. Ao realizá-lo em apenas um subconjunto de tráfego por vez, a sua aplicação não fica offline e os riscos são minimizados.

## Implantação contínua

- **Entrega contínua** é a capacidade de acessar qualquer versão da aplicação a qualquer momento.
- **Implantação contínua** realiza automaticamente o deploy de todas as alterações de código.

Neste ponto você já tem um projeto maduro com uma alta cobertura de código e acredita que seus conjuntos de testes irão identificar os problemas durante o [release](/as-principais-etapas-para-automatizar-gerenciamento-de-releases-de-software/) de pipeline. Cada mudança de código ocorre sem a necessidade de validação.
Uma pequena mudança leva menos de 30 minutos, talvez menos de 10 para ir à produção. Isso é ótimo! Apenas se certifique de acompanhar a qualidade e, com isso, você terá clientes apaixonados.

## Como melhorar meu deploy?

### Logs e métricas

Você precisa de log básico em qualquer dos níveis. De preferência, em uma ferramenta para centralizá-los entre as aplicações.
Melhor ainda se tiver um sistema de rastreamento disseminado, onde é possível ver todas as etapas de uma solicitação do usuário na aplicação downstream.

### Alerta

Em uma arquitetura monolítica, você só precisa verificar o funcionamento de um serviço. Com [microsserviços](/as-vantagens-da-arquitetura-de-microsservicos/), são dezenas, chegando até a centenas. Sendo assim, você precisa da [observabilidade](/por-que-a-observabilidade-e-o-futuro-do-monitoramento-de-sistemas/) para visualização e alerta sobre a integridade da aplicação.

### Testes automatizados

Para começar a implantar com frequência, são necessários testes curtos. Afinal, não seria prático ter um processo de teste manual que levasse semanas.
Os testes precisam ser automatizados, executados rapidamente e devem fornecer uma infraestrutura segura para mudanças.

## Por que GitOps é a melhor solução para seu deploy?

**A capacidade do GitOps de tratar tudo como código mantém todos os recursos no controle de versão.** As alterações podem ser efetuadas e revisadas para, em seguida, serem alimentadas através do pipeline automatizado que verifica, implanta e monitora a mudança.
Qualquer divergência com relação ao estado desejado da aplicação – o surgimento de um bug ou uma vulnerabilidade, por exemplo – será detectada muito antes de se tornar um custo significativo para os negócios.
Gerenciando suas aplicações através de loops de controle com GitOps, você ganha uma série de benefícios que atendem facilmente às métricas alcançadas por equipes de alta performance.
O que resulta em um aumento na lucratividade dos negócios e na participação no mercado.

## Mais segurança

Usar Git para gerenciar arquivos YAML torna mais simples a verificação dos requisitos de segurança. Com as políticas declaradas em um arquivo de configuração, você sabe quem tem acesso ao quê e pode verificar essa informação com facilidade no código.
As garantias de correção e segurança do Git, apoiadas por criptografia usada para rastrear e gerenciar mudanças, bem como sua autoria, são fundamentais para uma definição correta e segura do cluster.
Se ocorrer uma violação, a fonte pode ser usada para recriar uma nova aplicação independente daquela comprometida. O que reduz o downtime e permite uma resposta muito melhor a incidentes, além de uma recuperação mais eficaz para atender à conformidade.
Ao separar a responsabilidade entre integração e teste de software para, em seguida, liberá-lo para um ambiente de produção, o impacto do comprometimento é reduzido, fornecendo uma menor superfície de ataque.

## Velocidade e produtividade

A automação de implantação contínua com feedback integrado e loop de controle acelera o tempo médio de deploy ao oferecer suporte mais frequente ao release.
As definições declarativas mantidas no Git permitem que os desenvolvedores usem workflows familiares, reduzindo o tempo necessário para ativar novos ambientes de construção ou testes.
Suas equipes podem enviar mais alterações por dia, o que se traduz em um tempo de resposta mais rápido para novos recursos e funcionalidades disponíveis para o cliente.

## Tempo médio de recuperação reduzido

O tempo para recuperação de um colapso do cluster também é reduzido com as práticas recomendadas do GitOps. A capacidade integrada do Git permite reversões estáveis ​​e reproduzíveis.
Como todo o seu sistema é descrito no Git, você tem uma única fonte para recuperar após uma falha de cluster, reduzindo o MTTR de horas ou dias para minutos.

## Estabilidade e confiabilidade aprimoradas

O GitOps fornece um único modelo operacional para criar infraestrutura e aplicações, assim você possui workflows consistentes – de ponta a ponta – em toda a sua organização.
Sua integração e pipelines de implantação contínuos são orientados por pull requests e suas tarefas são totalmente reproduzíveis através do Git.

## Conformidade e auditoria

Ao incorporar o Git como parte de sua estratégia de gestão de cluster, você obtém automaticamente uma trilha de auditoria para todas as mudanças que podem ser usadas com objetivo de atender à conformidade e garantir a estabilidade.

## Conclusão

Tornar seu deploy menor, mais frequente e mais rápido reduz o risco e, simultaneamente, permite que as equipes de desenvolvimento realizem entregas mais eficientes.
A automação também o torna mais seguro, permitindo que você realize auditoria para que saiba quem realizou qual mudança e quando.
Nós podemos te ajudar a realizar deploys com mais segurança e menos sobrecarga com GitOps! [Entre em contato conosco](/contato/) para obter uma demonstração.

##

## Saiba como realizar deploys frequentes com mais segurança e com menos sobrecarga com GitOps

[![](/wp-content/uploads/2021/01/Kubernetes-com-GitOps.png)](https://materiais.vertigo.com.br/automatizando-kubernetes-gitops)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
