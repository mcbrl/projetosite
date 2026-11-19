---
title: "Você precisa adotar Docker agora mesmo, mesmo se a sua TI for uma Velhinha de Taubaté"
slug: "por-que-voce-precisa-adotar-docker-agora-mesmo"
date: "2015-12-15T07:17:34"
modified: "2026-02-02T20:42:36"
status: "publish"
author: "admin"
excerpt: "A Velhinha de Taubaté é um clássico personagem do Veríssimo, criada ao final da ditadura militar (durante o governo Figueiredo). Embora antiga, a Velhinha é atemporal – era a última pessoa no Brasil que ainda acreditava no governo, e, portanto, era constantemente monitorada pelo Planalto. Em suas saudosas crônicas, nossos políticos respiravam aliviados quando a […]"
categories: ["mundo-das-apis"]
tags: ["container", "docker", "docker-container"]
featuredImage: "/wp-content/uploads/2026/02/por-que-voce-precisa-adotar-docker-agora-mesmo.png"
wpId: 1580
originalUrl: "https://vertigo.com.br/por-que-voce-precisa-adotar-docker-agora-mesmo/"
contentSource: "rest"
seo:
  title: "Você precisa adotar Docker agora mesmo! Saiba aqui os motivos"
  description: "Docker é uma tecnologia incrível! Em nosso artigo você vai ver as vantagens dessa ferramenta que amplifica a capacidade de entrega de software de diversas empresas ao redor do planeta. Confira aqui!"
  canonical: "https://vertigo.com.br/por-que-voce-precisa-adotar-docker-agora-mesmo/"
  ogImage: "/wp-content/uploads/2026/02/por-que-voce-precisa-adotar-docker-agora-mesmo.png"
  robots: "index, follow"
---

A Velhinha de Taubaté é um clássico personagem do Veríssimo, criada ao final da ditadura militar (durante o governo Figueiredo). Embora antiga, a Velhinha é atemporal – era a última pessoa no Brasil que ainda acreditava no governo, e, portanto, era constantemente monitorada pelo Planalto. Em suas saudosas crônicas, nossos políticos respiravam aliviados quando a Velhinha acreditava dos desmentidos veiculados após os escândalos e trapalhadas ainda hoje tão característicos de nossos representantes. Se perdessem a Velhinha, tudo estaria acabado; enquanto ela ainda acreditasse, ainda haveria esperança. Deste mesmo modo, vamos te convencer que você precisa adotar o Docker agora.
Impossível não lembrar da Velhinha quando lemos um típico relatório de auditoria de TI, mesmo hoje já adentrando 2016. A impressão que tenho é que auditores de TI se restringiram à literatura de certificação ITIL, PMP, Cobit e outras porcarias semelhantes, e jamais acompanharam nada do que tem acontecido nos últimos 10 anos. Quando colocado acima da principal obrigação da TI – que é pura e simples entrega de valor – todo este cabedal messiânico de “melhores práticas” e “ferramentas para excelência” tem a mesma importância que as Obras Completas de Autoajuda do Lair Ribeiro: Nenhuma.

*Inscreva-se no nosso blog para ser notificado quando publicarmos conteúdos como este!*

## **“Isso é um problema de gestão”**

É típica entre auditores e consultores a crença que: para um barco seguir um rumo melhor, temos que trocar remadores por corneteiros. Para eles tudo é “um problema de gestão”. Tecnologias têm contribuição apenas marginal para processos de entrega e processos são melhorados tornando-se mais burocráticos e morosos. O sonho dourado de todo auditor é tornar a TI tão eficiente quanto uma repartição pública de Sucupira.
Gostamos de pensar na TI corporativa como o motor de inovação institucional. Mas, na maioria das vezes, a TI passa parte do seu tempo gerenciando caos e parte tentando piorar a própria vida. Perdemos uma década escrevendo casos de uso como oferendas ao RUP. Até que processos ágeis puseram fim a esta insanidade. Enquanto isso as equipes de infraestrutura construíram seus castelos (apoiadas pelos manuais de “melhores práticas”). E agora entregar um *release* é como acertar um tiro em uma mosca dentro de uma sala escura.

## **Tara por Controle**

Toda organização tem uma história destas para contar. Algum desenvolvedor, com permissões demais e precaução de menos, deu um DROP TABLE em produção sem querer. Implantam-se processos formais de aprovação para este tipo de operação de forma que isto nunca mais se repita.
Com a especialização das muitas áreas de TI, temos equipes distintas para bancos de dados, rede, (*application servers, storage).* Cada uma com seus processos documentados, suas métricas de sucesso, seus silos operacionais, processos com ITIL, e sua tara por ilusões de controle, têm efeito prático inverso do que pretendem. A divisão forçada de papéis e mecanismos de controle criam um abandono de responsabilidade. Além de prejudicarem a comunicação entre as equipes e garantirem apenas que entregas não tenham qualidade.
A ITIL (*Information Technology Infrastructure Library*) tem boa aderência a processos operacionais associados à infraestrutura e gestão financeira. Nestes nichos, os processos ainda são consistentes. Ainda assim, podemos encontrar boa qualidade. Mas, quando observamos tais processos sob a ótica de entrega de valor, a coisa toda começa a cheirar muito mal. ITIL exala o fedor antigo das profundezas ancestrais do desenvolvimento em cascata (*waterfall model*).
*Empresas digitais* sabem que a capacidade de inovar e de entregar funcionalidades rapidamente é um fator crítico para o sucesso. Nestas organizações, a entrega de valor tem prioridade adequada aos dias de hoje. Em empresas “tradicionais”, a entrega é encarada como um ato de risco. A pobre alma responsável pela tarefa, deve agora abrir requisições formais para uma dezena equipes. Torcendo para serem executadas em tempo hábil e de forma coordenada.
Nada é mais determinante para colocar completamente fora da competição do que a inabilidade de mudar rapidamente. *Se processos vigentes promovem estabilidade em detrimento de entregas jogue-os fora e tente de novo.* Sejam quantas vezes precisar, até aprender a fazer direito

## **Prevenção a Mudanças**

Uma obviedade que salta aos olhos de qualquer um é que *compliance*e governança estão, ou deveriam estar, mais preocupados com a coleta de evidências da condução de processos ágeis, do que com a imposição de processos morosos que pareciam uma boa ideia nos anos 90.
A lógica deturpada (que é a cartilha típica de muitos auditores) é que toda mudança representa risco deve ser analisada. Também precisa ser aprovada e implantada em uma janela de tempo considerada segura. A TI é cortada em silos operacionais (cada um com suas responsabilidades, métricas e SLAs). Processos formais são enfiados goela abaixo em cada uma de suas interfaces e às favas com a cadeia de valor. É um teatro de absurdos sem tamanho, onde todos estão felizes com suas métricas, mas a entrega de projetos – que é a única entrega de valor que realmente conta para a organização – transforma-se em uma alegre caminhada por um campo minado.
Como absolutamente ninguém conhece as reais necessidades do processo de entrega de ponta a ponta, as aprovações são *pro-forma* (mera formalidade inútil), os problemas são muitos e recorrentes (as relações de causa e efeito são ignoradas) e o *troubleshooting* de qualquer coisa só é viável com uma força-tarefa que envolva 4 ou 5 equipes distintas. A vida vira um pesadelo kafkiano.

## **DevOps e ITIL**

Não importa quantas vezes você tente até conseguir: seus processos de entrega apenas terão valor quando suportarem entregas frequentes. A prevenção a mudanças, apenas garante o represamento das mesmas, aumentando o risco de cada entrega. *Como garantir que entregas contínuas tenham qualidade* é onde os esforços devem se concentrar.
[Confira nosso super conteúdo sobre DevOps e entenda essa prática agora mesmo!](/o-que-e-devops/)
Para o desespero de quem vive de consultoria, ITIL falhou miseravelmente em sua missão de trazer eficiência à TI corporativa. O modelo DevOps é uma reação natural a este fracasso. O sucesso da adoção de entrega em nuvem (e seu baixo custo) é devido, em boa parte, porque seus processos ignoraram solenemente o modelo ITIL. E de todas as tecnologias disponíveis para uma TI corporativa iniciar uma transição para o modelo DevOps, de longe, Docker é a mais conveniente, eficiente e barata.

## **Eis que temos o Docker**

Poucas vezes temos o privilégio de testemunhar rupturas tão rápidas e positivas quanto a adoção em larga escala de *contêineres*. A simplicidade do uso e riqueza de cenários em que *contêineres* simplificam a vida de todos, representam um momento único.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://www.youtube.com/embed/Q5POuMHxW-0" width="560"></iframe>

Antes do **Docker** vivíamos um mundo de duas TIs: O mundo das **startups**, tipicamente de entrega contínua em plataformas de nuvem, com processos ágeis. E o mundo da **TI corporativa,**o pesadelo kafkiano que já discutimos, caro e lento.
Não é que as corporações ignorassem a existência de ofertas em nuvem: mover e-mail, CRM e ERP para a nuvem são escolhas óbvias demais. Quando falamos, porém, em entrega de software (o que sempre existe, nem que seja para integrar as *suites* na nuvem) é que percebemos estes dois mundos opostos. *E você sempre precisa entregar software*. Não importa o quanto custou sua solução integrada de logística, CRM ou XPTO, se entregar a interface para o usuário final ou descuidar das integrações que precisam ser construídas estará em maus lençóis. E não é que não houvessem plataformas para construção de nuvens privadas. No entanto, estas representavam uma ruptura súbita, sem a possibilidade de adoção gradual e com uma curva de aprendizado proibitiva.

## **Containers**

*Contêineres* permitem que o mesmo modelo de entrega que temos na nuvem seja replicado no meio corporativo com muita facilidade. A curva de aprendizado e o custo de adoção de *contêineres* são mínimos. Além de abundarem opções para uma transição gradual na TI corporativa. O flerte com *contêineres* traz de imediato grandes possibilidades sem que uma infraestrutura de nuvem ou PaaS precise ser montada *upfront*.
O momento em que você percebe que finalmente é possível conceber uma entrega que possa contar com uma infraestrutura imutável – é um momento “*take the red pill*“.
Riscos? Ao adotar *contêineres você* irá, já no dia “zero”, eliminar riscos consideráveis – verdadeiros bodes na sala – com os quais a TI corporativa se acostumou a fazer vista grossa.
Investimento? Amigos, já estamos no século XXI. Investimentos sucedem a percepção de valor – você terá *containers* em produção bem antes de decidir investir em ferramentas que lhe permitam ganho de escala e melhor gestão.

## **Qualquer caminho é caminho**

É importante frisar bem: com “costuras” bem simples de produtos *open source* é possível para qualquer organização adotar processos de entrega no modelo de uma nuvem privada sem gastar um centavo sequer com licenciamento.
Para o mundo JEE, *containers* representam uma rota de fuga segura do modelo de entregas monolíticas em *application servers* “gordos” para, por exemplo, entregas de serviços implementados via *Spring Boot*.

> ***“Não existe uma única maneira “mais correta” de se adotar contêineres. Estas novas criaturas são tão úteis e flexíveis que você se surpreenderá utilizando-os em cenários completamente distintos.”***
>
> ### **Próximos artigos**

Nos próximos artigos iremos discutir estratégias de adoção de *contêineres* em ambientes corporativos.  Quer saber uma forma de não perder nada do que falamos sobre Docker? Personalize seu conteúdo. Nós prometemos levar até a sua caixa de mensagens apenas assuntos do seu interesse. Se deseja isso, basta clicar na imagem abaixo.
[![](/wp-content/uploads/2015/12/CTAs-CONTEUDO-PERSONALIZADO-300x180-1.png)](https://materiais.vertigo.com.br/personalizando-o-meu-conteudo?_fs=87bb9e17-c4e8-4975-b9a7-feb2e4aad195)
Até mais!
