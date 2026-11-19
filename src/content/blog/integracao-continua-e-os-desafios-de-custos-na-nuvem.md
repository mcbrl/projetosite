---
title: "Integração contínua e os desafios de custos na nuvem"
slug: "integracao-continua-e-os-desafios-de-custos-na-nuvem"
date: "2020-11-30T13:17:14"
modified: "2020-11-30T13:17:14"
status: "publish"
author: "admin"
excerpt: "Encontrar e analisar os erros de forma mais ágil, melhorar a qualidade do software, diminuir o tempo de validação e lançamento de novas atualizações do sistema são os principais objetivos da integração contínua (CI) em DevOps. Com ela, é possível ter o controle das versões e alterações feitas no código e, dessa forma, é possível […]"
categories: ["devops"]
tags: ["api", "arquitetura-de-microsservicos", "cloud", "cloud-native", "devops", "esteira-de-entregas-continuas", "nuvem"]
featuredImage: "/wp-content/uploads/2020/11/integra-continua-nuvem-blog-V3.png"
wpId: 5371
originalUrl: "https://vertigo.com.br/integracao-continua-e-os-desafios-de-custos-na-nuvem/"
contentSource: "rest"
seo:
  title: "Integração contínua e os desafios de custos na nuvem - Vertigo"
  description: "E para otimizar esses recursos, evitar desperdícios e controlar seus custos na nuvem quando se está trabalhando com integração contínua."
  canonical: "https://vertigo.com.br/integracao-continua-e-os-desafios-de-custos-na-nuvem/"
  ogImage: "/wp-content/uploads/2020/11/integra-continua-nuvem-blog-V3.png"
  robots: "index, follow"
---

Encontrar e analisar os erros de forma mais ágil, melhorar a qualidade do software, diminuir o tempo de validação e lançamento de novas atualizações do sistema são os principais objetivos da integração contínua (CI) em [DevOps](/o-que-e-devops/).
Com ela, é possível ter o controle das versões e alterações feitas no código e, dessa forma, é possível fazer a comparação dos códigos em branches distintos, evitar que desenvolvedores realizem a mesma tarefa, aumentar o controle da produção de cada profissional e, em caso de conflito entre os códigos novos e existentes, a CI facilita a correção de bugs com rapidez e frequência.
Quando se trata de pequenos projetos, os desenvolvedores fazem a transição para CI sem muita dificuldade. No entanto, grandes projetos requerem mais planejamento, investimento e devem ser testados em uma ampla variedade de ambientes.
Os provedores de nuvem facilitam esse processo com [APIs](/como-fazer-api-uma-de-sucesso/) e integrações com ferramentas de provisionamento de infraestruturas existentes. No entanto, essa facilidade tem custo que, às vezes, pode ser bem elevado. Afinal, os provedores de nuvem cobram mais quando se opta por seguir um caminho mais fácil. E é aqui que surge o problema: como ter mais controle sobre esses custos?
Pois bem, é justamente isso que iremos responder neste artigo. Acompanhe!

## Como controlar seus custos na nuvem

Os provedores de cloud oferecem escalabilidade ilimitada e custos de TI mais baixos, cobrando apenas pelos recursos que são utilizados. Mas, a verdade é que os clientes de nuvem são cobrados pelos recursos que encomendam, independentemente de usá-los ou não. Segundo o relatório [How to Identify Solutions for Managing Costs in Public Cloud IaaS](https://www.gartner.com/document/3847666) da Gartner, estima-se que até 70% dos custos em nuvem são desperdiçados.
E para otimizar esses recursos, evitar desperdícios e controlar seus custos na nuvem quando se está trabalhando com integração contínua, algumas medidas devem ser tomadas. Sim, algumas delas requerem um certo trabalho de sua equipe, porém a economia alcançada com o tempo compensa todo o esforço inicial. 
Vejamos a seguir algumas dessas medidas: 

### Limite o tráfego de rede e deixe-o ordenado

Embora muitos provedores de nuvem ignorem o tráfego de entrada, ou seja, de dados baixados da Internet para sua instância, os custos do tráfego de saída aumentam rapidamente. 
Para solucionar isso, a solução é buscar formas de trazer os dados para perto de suas instâncias no provedor de nuvem e, assim, reduzir o tráfego de rede ao mínimo absoluto. 
Vale também usar, sempre que possível, redes privadas entre instâncias e links de rede gratuitos para armazenamento de artefatos de teste.

### Saiba como seu provedor cobra por instâncias

A execução de instâncias custa dinheiro, mas você sabe como o seu provedor cobra por esse tempo? Sabendo disso, mantenha as instâncias rodando somente pelo tempo suficiente para fazer algo útil sem incorrer em custos de infraestrutura ociosa.
Por exemplo, se uma nuvem cobra por segundo, faz sentido interromper as instâncias quando estiverem  ociosas. Já se a cobrança é feita por hora, é indicado mantê-las ociosas até a próxima hora e as utilizar caso algum teste precise ser feito.  

### Certifique-se de que as instâncias estejam prontas para uso

Crie suas próprias imagens de instância para garantir que você tenha tudo de que precisa para executar seu trabalho. Instalar pacotes de sistema após iniciar uma instância causa atrasos e *mirrors* com pacotes quebrados levam a erros de provisionamento.

### Use instâncias de referência para um equilíbrio de desempenho e custo

Instâncias maiores e mais poderosas podem acelerar seus testes, mas têm um custo alto. Por isso, não deixe de comparar diferentes instâncias para encontrar o melhor retorno de desempenho para o seu dinheiro. 
Se uma instância mais rápida custar duas vezes mais que uma mais lenta, mas oferecer apenas 10% de redução no tempo de teste, ignore a atualização.

### Monitore constantemente

Configurações incorretas ou controles de tráfego de rede inadequados causam picos de faturamento e o ideal é que você trabalhe rapidamente para corrigi-los. 
No mais, monitorar a fatura também é interessante porque ela destaca áreas em que é possível otimizar gastos. Equipes bem-sucedidas buscam otimizações que permitam que sua carga de teste cresça a uma taxa mais rápida do que sua fatura.

## Conclusão

Coloque essas estratégias em prática e você verá que podem trazer muitos benefícios. 
Com elas é possível ajustar facilmente o seu desempenho com relação ao preço, as  equipes podem criar previsões de quanto custará o teste ao longo do tempo e as pessoas que pagam a conta saberão para onde realmente está indo todo o dinheiro.  
Manter os custos sob controle e o departamento financeiro satisfeito também é um sinal de sucesso na integração contínua na nuvem.
Gostou deste conteúdo? Quer entender mais sobre DevOps, integração contínua, armazenamento em nuvem e como essas tecnologias podem ajudar no desenvolvimento digital do seu negócio? [Fale com os nossos especialistas](/contato/).

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração

[![](/wp-content/uploads/2021/05/Sem-Titulo-1.png)](/cloud-native-assessment/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
