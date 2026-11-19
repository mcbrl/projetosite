---
title: "A importância da segurança de contêineres e microsserviços para seguradoras"
slug: "a-importancia-da-seguranca-de-conteineres-e-microsservicos-para-seguradoras"
date: "2020-11-19T13:33:20"
modified: "2020-11-19T13:33:20"
status: "publish"
author: "admin"
excerpt: "A responsabilidade pela segurança dos sistemas está, cada vez mais, nas mãos dos times de produto e seus engenheiros de DevSecOps, pois possuem uma visão ampla da arquitetura dos sistemas e das esteiras usadas ​​para implantar contêineres e microsserviços. Essa tendência deve ser levada em conta, pois uma boa estratégia DevSecOps torna a entrega, operação […]"
categories: ["microsservicos"]
tags: ["api", "cloud", "devops", "devsecops", "hashicorp", "microsservicos", "seguradoras", "seguros", "vault"]
featuredImage: "/wp-content/uploads/2020/11/seguranca-conteiner-microsservicos.png"
wpId: 5351
originalUrl: "https://vertigo.com.br/a-importancia-da-seguranca-de-conteineres-e-microsservicos-para-seguradoras/"
contentSource: "rest"
seo:
  title: "A importância da segurança de contêineres e microsserviços para seguradoras - Vertigo"
  description: "Uma ótima solução para promover a segurança em seus contêineres e microsserviços é o Vault, ferramenta da Hashicorp utilizada em projetos pela Vertigo."
  canonical: "https://vertigo.com.br/a-importancia-da-seguranca-de-conteineres-e-microsservicos-para-seguradoras/"
  ogImage: "/wp-content/uploads/2020/11/seguranca-conteiner-microsservicos.png"
  robots: "index, follow"
---

A responsabilidade pela segurança dos sistemas está, cada vez mais, nas mãos dos times de produto e seus engenheiros de DevSecOps, pois possuem uma visão ampla da arquitetura dos sistemas e das esteiras usadas ​​para implantar contêineres e microsserviços. Essa tendência deve ser levada em conta, pois uma boa estratégia [DevSecOps](/devsecops-e-seus-principais-indicadores-de-desempenho/) torna a entrega, operação e monitoração de aplicações ordens de magnitude mais seguras e eficazes que em uma gestão de TI tradicional.

Por mais que estas novas tecnologias, processos e cultura tenham nos enriquecido em possibilidades para a inovação e crescimento dos negócios, uma de suas principais virtudes é conciliar velocidade, qualidade e segurança na prática de desenvolvimento de software. Contêineres, por exemplo, reduzem drasticamente a superfície de ataque em relação a VMs, embora também potencialmente tragam alguns novos riscos. Um grande desafio é manter-se à frente em cibersegurança, afinal os ataques virtuais não param.

A investida ransomware “WannaCry” em maio de 2017, por exemplo, afetou mais de 200 mil sistemas em todo o mundo, seguido pelo “Petya” que teve seu epicentro na Ucrânia e causou uma ampla interrupção mundial. Recentemente, os sistemas informatizados do Superior Tribunal de Justiça do Brasil (STJ) foram alvo de ataque hacker, causando desconforto e atraso no julgamento em mais de 12 mil processos.

Globalmente, o cibercrime custa cerca de US$ 400 bilhões por ano. O que significa que os riscos cibernéticos estão entre os principais custos que as empresas devem considerar quando se trata de seu planejamento de resiliência e continuidade.
Como novas ameaças cibernéticas estão surgindo o tempo todo, as empresas precisam compreender que para se protegerem de forma mais eficaz contra estes ataques *não basta monitorar suas aplicações constantemente nem tampouco ater-se a atualizar seus sistemas periodicamente*. **A resiliência de sistemas e a capacidade de reação a ataques de uma organização está intimamente ligada aos modelos de responsabilidade compartilhada, automação de provisionamento e automação de entrega de software que são basilares na prática DevSecOps**.

Mas, e especificamente o setor de seguros? Como as seguradoras estão se saindo na batalha cibernética e quais devem ser suas prioridades de ação? Para descobrir, continue lendo nosso artigo.

## Pressão cada vez maior no setor de seguros

As seguradoras lidam com grandes riscos de segurança todos os dias. Mas, quando se trata de investimento em cibersegurança, o setor talvez tenha ficado para trás.
Em parte, isso se deve a uma questão de necessidade: os bancos eram os alvos preferidos de ataques cibernéticos e precisavam agir rapidamente para proteger sua reputação, seus clientes e seus resultados financeiros. A guerra cibernética tem sido tradicionalmente muito mais silenciosa no mercado de seguros.
Os sinais mostram que isso está mudando. À medida que o setor financeiro se torna mais seguro, os hackers estão buscando alvos mais vulneráveis, o que coloca as seguradoras na linha de fogo.
As apostas são altas, afinal as seguradoras mantêm enormes quantidades de dados sobre indivíduos. Ao mesmo tempo, os órgãos reguladores começaram a fazer perguntas difíceis aos CEOs das seguradoras sobre sua posição de resiliência cibernética.

## O atual risco cibernético

O número de ataques tem aumentado muito, ao mesmo tempo que as empresas estão desenvolvendo suas tecnologias e o número de dispositivos conectados em rede tem se tornado cada vez maior. Esse cenário cria uma série de vulnerabilidades que podem ser exploradas por criminosos na busca por informações confidenciais, visando obter alguma vantagem financeira das seguradoras.

Um dos pontos responsáveis por esse crescimento é a popularização dos smartphones e a busca por mobilidade em contraste com a falta de preparo de muitos times de TI que não atualizaram suas políticas e práticas de segurança.
Os ataques mais comuns são de disrupção de redes e a interceptação ou acesso a dados sigilosos que são, em seguida, disparados para fora da rede privada.

Já os fornecedores de soluções em nuvem (SaaS) podem ser alvos de ataques distribuídos de *denial-of-service* direcionados para serviços públicos, o que causa danos colaterais e interrupção para outros clientes.
Seja qual for a intenção do invasor, as consequências deste tipo de situação são imediatas e a resposta a eles também deve ser. Quanto mais informada sobre os perigos a equipe de TI estiver, mais fácil será manter um sistema seguro.

## O verdadeiro custo do cibercrime

A extensão desses custos varia consideravelmente e pode ser afetada por uma série de fatores. Isso inclui o tipo de empresa atacada, os dados tratados e as implicações regulatórias e legais de qualquer incidente. O que significa que os ataques cibernéticos com impactos semelhantes podem ter custos muito diferentes.

### Custos imediatos

São os custos amplamente inevitáveis ​​que incluem o impacto imediato nos negócios e na mídia, além do custo de restauração da confidencialidade, integridade e disponibilidade de dados e sistemas. São eles:

- Custos legais e de investigação forense;
- Custos de notificação do cliente;
- Monitoramento de crédito para clientes;
- Custos potenciais de interrupção de negócios;
- Despesas com relações públicas;
- Custos de fraude, extorsão, de danos físicos e de remediação de TI / Negócios.

### Custos slow-burn

Variam de acordo com o tipo e a gravidade do evento e como ele é tratado, mas normalmente incluem o impacto nos negócios de longo prazo e os custos incorridos pelo reembolso das vítimas, bem como a reparação e o pagamento de penalidades pelo não cumprimento das obrigações. São eles:

- Despesas com litígios de terceiros;
- Rotatividade do cliente devido a danos à reputação (*churn*);
- Multas e penalidades regulatórias;
- Impacto no preço das ações, para aquelas listadas em Bolsa de Valores;
- Perda de foco de gestão, de vantagem competitiva e de receita.

## Trabalhando com contêineres e microsserviços

Há evidências de que muitas das violações de dados em grandes empresas resultam de mal entendidos que são inerentes a uma gestão de TI tradicional: os silos operacionais e SLAs que desconsideram a cadeia de valor resultam em abordagens notoriamente disfuncionais (e, infelizmente, praticamente onipresentes) para segurança de sistemas e seus dados. Não raro provisionamento e configuração de recursos são feitos por processos extremamente morosos, manuais e totalmente dissociados da realidade de quem os utilizará, assim como também é comum segurança ser tratada mais como questão de perímetro que uma questão pertinente às próprias aplicações. Em organizações [*cloud native*](/transforme-sua-ti-corporativa-em-uma-facilitadora-de-inovacao-com-cloud-native/) (onde a prática [DevOps](/o-que-e-devops/) está disseminada) as políticas de configuração de segurança de serviços e sistemas são materializadas em artefatos e ferramentas utilizados nas automações. A cultura [DevOps](/o-que-e-devops/) permite modelos de melhoria contínua que não apenas promovem configurações mais seguras como também garantem que os ambientes de execução dos microsserviços possam ser corriqueiramente descartados e implantados novamente em um tempo curto.
A evolução de aplicações monolíticas para [microsserviços](/como-garantir-que-os-seus-microsservicos-estao-funcionando-corretamente/) significa que há muito mais pequenas peças individuais de software em execução no ambiente. E essa é a essência do problema de segurança: por ter todos esses novos componentes, cada um deles pode disponibilizar uma superfície de ataque dentro de sua arquitetura. Ou seja, há uma necessidade constante de validar que eles não estejam comprometidos e que não há microsserviços desconhecidos e hostis em seu ambiente.
Uma solução é construir uma plataforma que crie uma identidade para cada microsserviço conforme ele passa pelo pipeline CI/CD. Isso garante que saia com uma identidade criptograficamente incorporada e ligada à sua memória. Então, quando há o *deploy* do microsserviço, ela é usada para criar segurança automática em torno dele.
Quando há delegação do gerenciamento de identidade e autenticação para uma plataforma é muito mais fácil controlar, entender, construir, proteger, configurar, monitorar e confiar em seus microsserviços. A confiança na plataforma de microsserviços é um aspecto fundamental de DevSecOps, não mais mera questão de perímetro.
Isso ajuda a proteger os microsserviços contra falhas e explorações, para garantir que se comuniquem apenas com outros microsserviços aprovados e identificados. A prática funciona como uma camada de segurança automática que é adicionada sem interferências por meio das melhores práticas DevSecOps diretamente do CI/CD.

## Como lidar com os riscos cibernéticos?

###

### Propriedade e domínio

A segurança cibernética é um problema de negócios, não só de TI. Algumas das seguradoras mais bem-sucedidas elevaram seu *Chief Security Officer* para se reportar diretamente ao *Chief Operating Officer*, criando assim uma linha de visão clara entre o negócio e o risco.

### Aprimoramento de capacidades

É provável que sejam necessários novos e aprimorados recursos de segurança cibernética, mas as seguradoras também vão precisar avaliar seus atuais “bolsões” de excelência e garantir que essas melhores práticas sejam compartilhadas por toda a empresa. O patrocínio da alta gestão para esta mudança é fundamental: uma gestão de TI tradicional, que ignora os avanços recentes e é alheia às práticas DevSecOps, é um adversário a ser vencido.  
As seguradoras líderes de mercado estão começando esse processo garantindo que seus recursos existentes sejam utilizados de maneira adequada.

### Conscientização

A conscientização melhorada da equipe a partir dos profissionais *C-Level* é fundamental. As seguradoras precisam se concentrar em melhorar a compreensão do seu ecossistema de parceiros/terceiros – agentes não afiliados, prestadores de serviços terceirizados e outros não funcionários com acesso a dados – para gerenciar seus riscos de maneira consistente.

### Organização

Os CEOs precisarão trabalhar com seus líderes de negócios para entender o equilíbrio certo entre serviços centralizados e descentralizados em busca de atender da forma mais adequada aos riscos cibernéticos.

### Prevenção

A ativação bem-sucedida de um programa de resposta e recuperação rápidas exige prática, comprometimento e claras linhas de responsabilidade. De exercícios *red teaming,* que simulam a maneira como os invasores se comportam, até o treinamento aprimorado de funcionários e exercícios mais frequentes, os líderes de seguradoras precisam considerar cuidadosamente como garantir que sua organização permaneça preparada.
Apenas uma organização cloud native, porém, com maturidade em DevSecOps e times autônomos, é capaz de catalisar e concretizar todo este preparo: **observabilidade** e **automação** tornam métricas de detecção e resolução de vulnerabilidades cada vez melhores.   

## Gerenciando segredos e proteção de dados confidenciais com Hashicorp Vault

Uma ótima solução para promover a segurança em seus contêineres e microsserviços é o Vault, ferramenta da Hashicorp utilizada em projetos pela Vertigo. Com ela é possível proteger, armazenar e controlar rigidamente o acesso a tokens, senhas, certificados e chaves de criptografia para proteger segredos e outros dados confidenciais usando uma User Interface (UI), Interface de Linha de Comandos (CLI) ou API HTTP.
Afinal, o uso do gerenciamento de segredos e proteção de dados em infraestrutura dinâmica promove necessidade de maior cobertura de segurança.

### Veja como são essas diferenças estruturais:

**Infraestrutura estática da abordagem tradicional**
Abordagem tradicional de data centers com redes inerentes de alta confiança com claros perímetros de rede:

- Redes de alta confiança;
- Perímetro de rede claro;
- Segurança aplicada por endereço IP.

**Infraestrutura dinâmica com Hashicorp Vault**
Várias nuvens e data centers privados sem um perímetro de rede claro:

- Redes de baixa confiança em nuvens públicas;
- Perímetro de rede desconhecido nas nuvens;
- Segurança aplicada pela identidade.

## Como o Hashicorp  Vault funciona?

Há controle rígido do acesso a segredos e chaves de criptografia por meio da autenticação em fontes confiáveis de identidade. A solução também permite a autorização granular de quais usuários e aplicações possuem permissão para acessar segredos e chaves.
**Gestão de segredos:** armazena, acessa e distribui segredos dinâmicos, como tokens, senhas, certificados e chaves de criptografia, de maneira centralizada.
**Proteção de dados:** mantêm seguros os dados das aplicações com gerenciamento centralizado de chaves e [APIs.](/como-fazer-api-uma-de-sucesso/)

[![](/wp-content/uploads/2020/11/1534364757-vault-black-back.png)](https://www.datocms-assets.com/2885/1543956852-vault-v1-0-ui-opt.mp4)

## Princípios do Hashicorp Vault

**Orientado por API:** habilita a automação e o uso de CI/CD enquanto prepara a sua política para codificar, proteger e controlar o acesso a segredos.
**Seguro com qualquer identidade:** possibilita o uso de qualquer provedor de identidade confiável. A identidade é independente de escala, ao contrário dos endereços IP, que exigem regras de firewall complexas e atualizações frequentes.
**Estender e integrar:** solicita segredos para qualquer sistema por meio de um fluxo de trabalho consistente, auditado e seguro. Com o uso desta solução pela Vertigo, é possível oferecer suporte a nuvens públicas, data centers privados e uma ampla variedade de sistemas de endpoint, incluindo bancos de dados, plataformas cloud native, filas de mensagens, SSH e muito mais.

## Considerações finais

É necessária verificação de segurança constante com objetivo de descoberta automática e mapeamento da aplicação para ajustar os pontos seguros e assim seja possível proteção contra ataques futuros. Dessa maneira, quando as tentativas de invasão são detectadas, elas podem ser vistas internamente.
Além disso, se os microsserviços forem protegidos pelas ferramentas de gerenciamento de configuração da aplicação, quando ocorrerem mudanças e exceções à política de configuração elas serão enviadas para avaliação e tratamento.
Quando essas alterações são descobertas, as ferramentas examinam ainda mais o registro do contêiner para comparação da imagem de configuração do último estado e registro das alterações que podem ser compartilhadas entre todas as diferentes equipes de Desenvolvimento e Operações para correção.
Para acelerar a entrega de novas tecnologias, aumentar os níveis de segurança ponta a ponta e reduzir o custo da operação de TI, escolha a plataforma ideal para a implantação de DevOps. 
Conte com expertise da Vertigo para ajudá-lo a adotar uma esteira de conteinerização segura. [Fale com nossos especialistas](/contato/).

## Descubra o quanto sua empresa é Cloud Native com este questionário e receba um relatório com propostas de aceleração

[![](/wp-content/uploads/2021/03/cloud-native-quadrado.png)](/cloud-native-assessment/)

## Preencha o formulário para conversar com os nossos especialistas e saber como esses métodos podem ajudar a sua empresa chegar ao sucesso**.**
