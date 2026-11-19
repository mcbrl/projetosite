---
title: "Microsserviços: 10 novos desafios em relação à segurança"
slug: "microsservicos-10-novos-desafios-em-relacao-a-seguranca"
date: "2020-07-10T10:15:44"
modified: "2020-07-10T10:15:44"
status: "publish"
author: "admin"
excerpt: "Para as equipes de DevOps que atuam com arquitetura de microsserviços, os desafios sempre se reinventam, e elas precisam estar preparadas. Para garantir que a arquitetura de microsserviços funcione bem para o negócio em relação às versões de ameaças já comuns, e até mesmo as em evolução de nova geração, perspectivas precisam ser renovadas e, […]"
categories: ["devops", "devsecops", "microsservicos"]
tags: ["devops", "devsecops", "microservices"]
featuredImage: "/wp-content/uploads/2020/07/blog-4.png"
wpId: 5010
originalUrl: "https://vertigo.com.br/microsservicos-10-novos-desafios-em-relacao-a-seguranca/"
contentSource: "rest"
seo:
  title: "Microsserviços: 10 novos desafios em relação à segurança - Vertigo"
  description: "Para as equipes de DevOps que atuam com arquitetura de microsserviços, os desafios sempre se reinventam, e elas precisam estar preparadas. Para garantir que a arquitetura de microsserviços funcione bem para o negócio em relação às versões de ameaças já comuns, e até mesmo as em evolução de nova geração, perspectivas precisam ser renovadas e, [&hellip;]"
  canonical: "https://vertigo.com.br/microsservicos-10-novos-desafios-em-relacao-a-seguranca/"
  ogImage: "/wp-content/uploads/2020/07/blog-4.png"
  robots: "index, follow"
---

Para as equipes de **DevOps** que atuam com [**arquitetura de microsserviços**](/as-vantagens-da-arquitetura-de-microsservicos/), os desafios sempre se reinventam, e elas precisam estar preparadas. Para garantir que a arquitetura de microsserviços funcione bem para o negócio em relação às versões de ameaças já comuns, e até mesmo as em evolução de nova geração, perspectivas precisam ser renovadas e, ao mesmo tempo, intuitivas.

Ao lidar com microsserviços, estamos falando de **códigos**. Mais linhas de códigos significam maior vulnerabilidade. Essa abordagem envolve muito mais complexidade quando se trata de segurança, e é aí que entra o **DevSecOps**.

**O papel do** [**DevSecOps**](/devsecops-e-seus-principais-indicadores-de-desempenho/) **é proporcionar a segurança da informação integrada em todos os níveis da aplicação**, automatizando o trabalho de segurança para que o fluxo não fique lento, selecionando as ferramentas certas e construindo uma nova vertente sobre a cultura DevOps dentro da empresa.

A abordagem de microsserviços poderia ser descrita simplesmente como um estilo arquitetônico, mas a complexidade é a sua marca distintiva. Vamos apresentar dez  desafios que os microsserviços podem apresentar para a segurança da informação:

## 1. Quanto mais complexa a aplicação, maior a expansão da superfície de ataque

**Microsserviços se comunicam entre si via APIs** independente da linguagem de programação, e, quanto maior a comunicação e a quantidade de aplicações interativas, mais chances de ataques, por isso, é importante manter a equipe de DevSecOps sempre um passo à frente para avaliar se algum microsserviço apresenta falhas em relação à segurança ou não.

Quando um microsserviço apresenta um problema e necessita de tempo para ser operado novamente, não é fácil ver como estão contribuindo para ameaças à segurança e ao sistema como um todo, por isso, o time de DevSecOps precisa estar alinhado e pronto para solucionar os problemas.

## 2. Modificação de aplicações monolíticas para microsserviços

A transição de aplicações monolíticas para ambientes que trabalham com a arquitetura de microsserviços está se tornando cada vez mais comum nos ambientes organizacionais. A necessidade de ciclos de vida variáveis ​​para APIs está no cerne dessas mudanças em muitas empresas.
Como se torna muito mais difícil manter uma configuração de microsserviços do que uma monolítica, cada uma delas pode evoluir para uma ampla variedade de estruturas e linguagens de codificação. As complexidades influenciarão as decisões estratégicas sempre que sistemas monolíticos forem modificados. Cada linguagem adicional usada para criar novos microsserviços gera um impacto na segurança, garantindo estabilidade com a configuração existente.

## 3. O *log* tradicional torna-se ineficaz

Como os microsserviços são independentes, haverá mais *logs*, e o desafio desta questão é que esses *logs* podem camuflar problemas à medida que surgem. 
Com os microsserviços funcionando em inúmeros *hosts*, é necessário enviar *logs* por todos eles para uma localização única, externa e centralizada. Para que a segurança dos microsserviços seja eficaz, o *log* do usuário precisa correlacionar eventos em várias plataformas diferentes, o que exige um ponto de vista mais alto para observação, independente de qualquer API ou aplicação.

## 4. Novas complicações de monitoramento

O monitoramento apresenta um novo problema com a arquitetura de microsserviços. À medida que novos serviços são adicionados ao sistema, manter e configurar o monitoramento para todos eles se torna novo desafio. 
A automação será necessária apenas para oferecer suporte ao monitoramento de todas essas alterações em escala dos serviços afetados, e o balanceamento de carga faz parte da conscientização de segurança de que este monitoramento deve ser responsável.

## 5. A segurança do aplicativo ainda é um fator importante

Os aplicativos são, de uma maneira ou de outra, o básico das equipes de microsserviços. **A segurança da API simplesmente não desaparece com a segurança dos microsserviços**. Com cada novo serviço adicional, surge o mesmo antigo desafio de manutenção, configuração e monitoramento da API. Se o monitoramento de aplicativos não for de ponta a ponta, torna-se muito cansativo isolar ou resolver problemas. Sem a automação, é menos provável que as equipes possam monitorar mudanças e ameaças em escala em todos os serviços expostos.

## 6. Mais pedidos

O método de usar cabeçalhos de solicitação para permitir que serviços comuniquem dados é comum. Isso pode simplificar o número de solicitações feitas, porém, quando um grande número de serviços estiver utilizando esse método, a coordenação da equipe precisará aumentar e se tornar eficiente, e ela mesma também deverá ser simplificada. 
Além disso, com um número maior de solicitações, os desenvolvedores deverão ser capazes de compreender o tempo necessário para processá-las. É provável que a serialização e desserialização de solicitações de serviços se desenvolvam e tornem-se difíceis de trabalhar, sem ferramentas e métodos adequados, apenas para acompanhar as solicitações e vinculá-las a um aparato de segurança autônomo, capaz de funcionar em escala.

## 7. Tolerância a falhas

A tolerância a falhas no modelo da arquitetura de microsserviços se torna mais complexa do que em um sistema monolítico legado. A equipe de DevOps deve ser capaz de lidar com essas falhas e com outros problemas que ocorram por motivos desconhecidos nas aplicações.
Quando elas se acumulam, isso pode afetar os demais serviços, criando outras falhas no *cluster*. Os microsserviços exigem um novo foco na interdependência e um novo modelo de segurança para garantir a estabilidade entre as aplicações.

## 8. Armazenamento em Cache

Embora o armazenamento em cache ajude a reduzir a grande frequência de solicitações feitas, isso é uma “faca de dois gumes”. Com o recurso aprimorado que o cache traz para o ambiente de DevOps, essas solicitações aumentam inevitavelmente para lidar com um número crescente de serviços. 
O excesso de armazenamento em cache de reserva pode aumentar a complexidade e a enorme necessidade de comunicação das equipes. Automatizar, ordenar e otimizar essa comunicação se torna um novo requisito que talvez não existisse antes, com sistemas monolíticos. 

## 9. Esforços de segurança colaborativos com o DevOps

À medida que a responsabilidade pela integridade dos microsserviços se espalha entre as equipes, o DevSecOps entra em ação. Pensar com um “cérebro de segurança” se torna um empreendimento coletivo e não hierárquico. 
A colaboração e os pontos de contato regulares em todos os níveis tornam-se uma necessidade e devem ser trabalhados na cultura de dados/desenvolvimento. Um bom design de segurança é uma questão de colaboração, necessidades e desejos conflitantes em relação à linha de base de ameaças conhecidas e emergentes ao microsserviço e às estruturas virtualizadas que eles combinam para criar.

## 10. Projeto de segurança prospectivo

Por todos os motivos vistos acima, chegamos à prioridade do design de segurança prospectivo. Longe de indicar uma abordagem única de uma equipe de autoridade de segurança em silos, chegamos a um ponto na cultura DevOps em que todos os fatores possíveis contribuem para considerações que formam a base de uma política de segurança estável e um processo de formação de protocolo. Sem saber como todos serão impactados pelas mudanças nas preocupações da equipe no dia a dia e pelas práticas de segurança, é quase impossível criar um bom design de segurança. 
O *scrum* ágil pode se tornar a substituição do silo de autoridade no modelo de microsserviços, mas como as equipes podem dedicar mais tempo a eles em questões de segurança, sem prejudicar as suas tarefas diárias? Devido às muitas maneiras pelas quais a complexidade está mudando a cena do DevOps e fazendo com que os sistemas repensem o seu *modus operandi*, a autonomia precisará substituir o fator humano, não apenas pela integridade do serviço, mas por todo o campo de preocupações com segurança. 

## Conclusão

As equipes de DevOps e DevSecOps devem considerar todos os dez fatores acima para prosperar e se transformar em um “casamento auto-suficiente” e totalmente adequado entre ferramentas e cultura de segurança. 
Esse sistema holístico precisa ser capaz de agir de forma autônoma em ameaças conhecidas, de uma contribuição contínua aprendida por máquina para a linha de base de ameaças conhecidas para todas essas APIs, serviços e contêineres únicos, além de alguma capacidade de prever onde as ameaças podem aparecer nesse ambiente específico, em vez de apenas confiar na linha de base e, assim, criar um falso “ambiente normal” que não corresponde ao real.
Para entender melhor como a arquitetura de microsserviços pode ajudar no desenvolvimento digital do seu negócio, [fale com os nossos especialistas](/contato/).

### Avalie o nível de adoção e maturidade DevOps na sua empresa e entenda os pontos fortes, fracos, lacunas e oportunidades de aprimoramento.

[![](/wp-content/uploads/2020/08/Indice-de-Maturidade-DevOps.png)](/indice-de-maturidade-devops/)

### Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso.
