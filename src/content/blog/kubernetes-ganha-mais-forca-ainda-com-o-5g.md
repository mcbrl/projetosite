---
title: "Kubernetes ganha mais força ainda com a chegada do 5G"
slug: "kubernetes-ganha-mais-forca-ainda-com-o-5g"
date: "2021-09-08T14:44:17"
modified: "2021-09-08T14:44:17"
status: "publish"
author: "admin"
excerpt: "No momento em que as empresas estão buscando uma infraestrutura de dados cada vez mais estratégica e trabalhando com aplicativos em ambientes distribuídos, o Kubernetes vem ganhando força e destaque entre as lideranças de TI. O orquestrador de  containers realiza o escalonamento e gerenciamento de aplicações, na medida que a demanda por soluções orquestradas ganha […]"
categories: ["kubernetes"]
tags: ["gitops", "kubernetes"]
featuredImage: "/wp-content/uploads/2021/09/BLOG_ImgDestaque_Kubernetes5G_08-09-21.png"
featuredImageAlt: "Kubernetes e o 5G"
wpId: 157223
originalUrl: "https://vertigo.com.br/kubernetes-ganha-mais-forca-ainda-com-o-5g/"
contentSource: "rest"
seo:
  title: "Kubernetes ganha mais força ainda com a chegada do 5G -"
  description: "Veja como o Kubernetes e o 5G se complementam. Grandes empresas de Telecomunicações já adotaram. Confira o blog!"
  canonical: "https://vertigo.com.br/kubernetes-ganha-mais-forca-ainda-com-o-5g/"
  ogImage: "/wp-content/uploads/2021/09/BLOG_ImgDestaque_Kubernetes5G_08-09-21.png"
  robots: "index, follow"
---

No momento em que as empresas estão buscando uma infraestrutura de dados cada vez mais estratégica e trabalhando com aplicativos em ambientes distribuídos, o [Kubernetes vem ganhando força](/kubernetes-por-que-se-tornou-tao-popular/) e destaque entre as lideranças de TI. O orquestrador de  containers realiza o escalonamento e gerenciamento de aplicações, na medida que a demanda por soluções orquestradas ganha força no mercado global.

Com a propagação da tecnologia 5G, o Kubernetes torna-se a solução natural para lidar com a conteinerização das funções centrais da rede, assim como para transferir dados de diversas aplicações e serviços para determinado local.

Nesse artigo você verá como o sistema de orquestração open source é perfeito para realizar o gerenciamento stateless, que o 5G exige.

**Leia também**

- [Kubernetes – Por que se tornou tão popular?](/kubernetes-por-que-se-tornou-tao-popular/)
- [Como GitOps oferece alta velocidade para Kubernetes](/como-gitops-oferece-alta-velocidade-para-kubernetes/)

## Entenda a complexidade do 5G

O 5G, também conhecido como quinta geração da telefonia móvel, é a mais recente tecnologia de transferência de dados em redes para dispositivos móveis. Ela é a sucessora da já conhecida rede 4G e seus antecessores.

Para demonstrar a evolução de forma clara, quando a navegação em dispositivos móveis ainda engatinhava, a tecnologia 1G tinha velocidade máxima de 2 Kbit /s, já o 4G tão comum nas principais operadoras, proporciona o tráfego de 1 Gbit /s. Quando realizamos o salto para o 5G, a velocidade de transferência de dados vai até 10 Gbit /s.

A necessidade da utilização do Kubernetes começa a se desenhar quando vemos que a latência presente no 4G é de 60-98 milissegundos, enquanto no 5G ela será reduzida para menos de 1 milissegundo. Vamos entender em detalhes.

Levaram alguns anos para que as empresas de telefonia realizassem a transição de implantações de rede física de grande porte para funções virtuais de rede (em Inglês, VNFs – Virtualized Network Functions). Essa flexibilidade operacional aumentou consideravelmente a velocidade de implantação e gerenciamento para os já conhecidos ambientes 4G.

Contudo, a rede 5G tem uma magnitude ainda maior, com a necessidade de mais torres e maiores níveis de flexibilidade para fornecer provisionamento e gerenciamento de rede dinâmicos.

Então, qual a melhor forma de gerenciar essa tecnologia para beneficiar aplicações com altas velocidades e baixa latência?

## Orquestrador Kubernetes e o 5G se complementam

Para utilizar a tecnologia 5G adequadamente, as empresas precisam modernizar seus principais recursos em termos de mobilidade, baixa latência e volumes de dados em grande escala. A arquitetura, as operações e o dimensionamento da rede 5G são bastante diferentes das gerações de redes móveis anteriores.

**As tecnologias necessárias para o 5G incluem:**

- Orquestração e gerenciamento para automatizar o cumprimento e garantia de serviços;
- Redes de rádio de baixa latência eficientes;
- Funções virtuais de rede  – redes baseadas em computação em nuvem, compartilhando recursos dinamicamente e independentemente da localização geográfica;
- Políticas de segurança e autenticação;
- Computação de borda para aproximar os serviços da borda da rede.

O 5G carrega consigo a possibilidade de soluções através da Computação na Borda, ou também conhecida como Edge Computing, que dedica a capacidade de processamento e armazenamento para um ambiente mais próximo das aplicações e fontes locais de origem dos dados, como dispositivos. Dessa forma temos uma baixa latência, processamento de informações em tempo-real, escalabilidade e também redução dos custos.

Para realizar essas ações, a rede 5G e a aplicação precisam estar em ambiente de execução diferente das funções de rede virtual (VNFs) das gerações anteriores, que são executadas em nuvens baseadas em máquina virtual (VM).

Dessa forma, podemos dizer que aplicações nativas da nuvem são executadas em tecnologia de container, controlada por um orquestrador!

## Empresas de telefonia estão optando pelo Kubernetes, entenda o motivo

O Kubernetes está ganhando cada vez mais força como solução para orquestração de containers. A Nokia, por exemplo, adotou o Kubernetes já em 2018 e atribui a ele boa parte do sucesso de sua investida no 5G.

O [Kubernetes é um sistema para orquestração](/gitops-da-automacao-a-integracao-continua/) de gerenciamento de container, encarregado de administrar a infraestrutura conteinerizada que será necessária para oferecer suporte a redes 5G e serviços relacionados.

Ao permitir a separação da infraestrutura e camadas da aplicação, o Kubernetes oferece suporte a um sistema com menos dependências, que pode sustentar facilmente a implementação de recursos em camadas da aplicação.

## Weaveworks oferece adoção do GitOps de forma simples

Com apoio de grandes empresas de telecomunicações como a Deutsche Telekom, Ericsson, Orange e gigantes como a Amazon, a Weaveworks, parceira estratégia da Vertigo, oferece o GitOps com suporte comercial chamado Weave GitOps, uma plataforma modular para aplicações que utilizam Kubernetes.

Ele fica disponível para todos, através de instalações locais e arquitetura híbrida, tornando o processo de adoção do GitOps simples e direto.

A solução da [Weaveworks](https://www.weave.works/solutions/telco/) proporciona opções de suporte e gerenciamento Kubernetes multi-cloud, além de recursos GitOps para entrega ágil e progressiva, gerenciamento de complementos, política e frotas.

Através do GitOps, os pipelines de implantação que gerenciam aplicações são automatizados, além dos complementos necessários para executar como uma ‘pilha’ em a frota de clusters Kubernetes.

Assim, as empresas de telefonia estão optando pelo Kubernetes e os seus recursos, flexíveis, escalonáveis ​​e automatizados inerentes à sua arquitetura.

**Leia mais**

- [Cloud Native – 6 principais erros ao migrar sua infraestrutura para nuvem](/cloud-native-6-principais-erros-ao-migrar-sua-infraestrutura-para-nuvem/)
- [DevSecOps: a chave de proteção contra ataques ransomware](/devsecops-protecao-contra-ransomware/)

## Sua empresa já utiliza Kubernetes?

Alinhar a sua empresa às boas práticas de mercado e utilizar orquestração de containers é uma parte relevante no processo de transformação digital do seu negócio.

A utilização de Kubernetes está diretamente ligada à [cultura DevOps](/indice-de-maturidade-devops/), um caminho que está cada vez mais pavimentado dentro do mercado global.

A Vertigo é parceira estratégica da [Weaveworks](/parcerias/weaveworks/), uma empresa especializada no processo de orquestração de aplicações, operando e gerenciando [Kubernetes com GitOps](/como-gitops-oferece-alta-velocidade-para-kubernetes/).

Quer se preparar para o futuro? Ele já começou, então entre em contato com o nosso time de especialistas!
