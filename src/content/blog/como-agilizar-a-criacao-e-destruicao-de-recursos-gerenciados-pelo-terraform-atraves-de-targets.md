---
title: "Como agilizar a criação e destruição de recursos gerenciados pelo Terraform através de targets"
slug: "como-agilizar-a-criacao-e-destruicao-de-recursos-gerenciados-pelo-terraform-atraves-de-targets"
date: "2023-05-22T16:14:43"
modified: "2023-05-22T16:14:43"
status: "publish"
author: "admin"
excerpt: "Hoje em dia os ambientes de infraestrutura são vivos, pois existe a constante necessidade de mudanças dentro de infraestrutura dentro deles, seja por mudanças de escopo, adição ou remoção de recursos, por experimentação, ou até mesmo para a manutenção,  seja eles em clouds públicas ou em clouds privadas. Essas pequenas necessidades de mudanças ou correções […]"
categories: ["hashicorp"]
tags: ["hashicorp"]
featuredImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE-3.png"
wpId: 162077
originalUrl: "https://vertigo.com.br/como-agilizar-a-criacao-e-destruicao-de-recursos-gerenciados-pelo-terraform-atraves-de-targets/"
contentSource: "rest"
seo:
  title: "Como agilizar a criação e destruição de recursos gerenciados pelo Terraform através de targets - Vertigo"
  description: "Hoje em dia os ambientes de infraestrutura são vivos, pois existe a constante necessidade de mudanças dentro de infraestrutura dentro deles, seja por mudanças de escopo, adição ou remoção de recursos, por experimentação, ou até mesmo para a manutenção,  seja eles em clouds públicas ou em clouds privadas. Essas pequenas necessidades de mudanças ou correções [&hellip;]"
  canonical: "https://vertigo.com.br/como-agilizar-a-criacao-e-destruicao-de-recursos-gerenciados-pelo-terraform-atraves-de-targets/"
  ogImage: "/wp-content/uploads/2023/05/BLOG_IMAGEM_DESTAQUE-3.png"
  robots: "index, follow"
---

Hoje em dia os ambientes de infraestrutura são vivos, pois existe a constante necessidade de mudanças dentro de infraestrutura dentro deles, seja por mudanças de escopo, adição ou remoção de recursos, por experimentação, ou até mesmo para a manutenção,  seja eles em clouds públicas ou em clouds privadas.

Essas pequenas necessidades de mudanças ou correções constantes em ambientes já estabelecidos, consolidados e gerenciados pelo [**Terraform**](/parcerias/hashicorp/), muitas vezes quando não trabalhadas da melhor forma, podem causar dor de cabeça aos administradores de tais ambientes.

## **Terraform com AWS**

Vamos pensar no seguinte cenário: Temos um grande ambiente gerenciado pelo **Terraform na** [**AWS**](/parcerias/aws/), com mais de **200 recursos** gerenciados pela Terraform, EBS, EC2, Lambda, Loadbalancer e etc.

Com isso, temos um **EBS de 5TB** no qual foi solicitado o delete deste recurso que não será mais utilizado, bem como para evitar custos desncessaŕios. Por isso, vamos citar algumas práticas de remoção de recursos que podem nos causar problema e que normalmente são utilizadas:

**1 – Deletar o EBS solicitado diretamente na console:** Sabemos que o [Terraform](/terraform-tenha-sua-infraestrutura-cloud-automatizada-em-forma-de-codigo/) trabalha com desire state, ou seja, toda vez que executarmos um Terraform apply ele vai manter o estado da infraestrutura de acordo com o código escrito, deletar recursos gerenciados pelo Terraform diretamente na console do cloud provider causa inconsistência entre o mundo real e o estado do Terraform.

**O que quer dizer isso?** Quando executarmos um Terraform apply novamente, o EBS será recriado (caso o código Terraform dele ainda exista).

**2 – Deletar o código Terraform referente ao EBS e rodar o Terraform apply:** Existem dois problemas nessa prática.**O primeiro** é o tempo de execução dessa automação, pois ao executar um **Terraform apply** você está seguindo o fluxo típico e aplicando todo a plano do Terraform de uma só vez, buscando alterações em todo o código Terraform com mais de 200 recursos e o tempo de execução será bem grande.

**O segundo** e mais importante é se você se descuidar, pode acabar fazendo alterações em recursos onde **não deveria mexer**. Isso significa que, ao final, você está procurando por mudanças em todo o código Terraform, ou seja, nos 200 recursos. **Em um simples descuido de um código equivocado você pode alterar ou remover algum recurso.**

Os targets do Terraform são utilizados justamente para nos auxiliar a dar alvos nos comandos de Destroy, Plan e Apply do Terraform. Com isso, é possível trabalhar a deleção, plano e criação de  recursos de forma específica, com a certeza de alterar apenas o recurso alvo, dando agilidade ao processo de gerenciamento da infraestrutura gerenciada pelo Terraform. Desta forma, não sendo necessário varrer todo o código Terraform para qualquer manutenção e sim apenas lendo os blocos de códigos dos recursos alvos.

Também evitamos o risco desnecessário de atualizar recursos indevidos ou até mesmo deletar recursos por descuido em uma alteração de código equivocada.

## **Trabalhando com targets no Terraform**

Para trabalhar com targets é simples, basta adicionarmos a flag -target + o nome do recurso aos comandos apply, plan e destroy do terraform, conforme exemplos abaixo:

```
terraform plan -target aws_ebs_volume.example

terraform apply -target aws_ebs_volume.example

terraform destroy -target aws_ebs_volume.example
```

Vamos agora para um exemplo prático, a partir de uma automação Terraform, na qual temos 3 EBS e queremos criar o EBS example2 e destruir o EBS example3, sem fazer nenhuma alteração ou leitura no EBS exemplo:

![](/wp-content/uploads/2023/05/1_targets.png)

Neste caso podemos realizar até três passos: um plan com alvo para o EBS example2, um apply para criar o EBS example2 e, por último, um destroy para deletar o EBS example3.

**1 – Primeiro passo vamos executar um plan com target para o example2:**

![](/wp-content/uploads/2023/05/2_targets.png)

**Conforme podemos ver, diferentemente de um fluxo típico onde você executa  o plano de uma vez só, executamos o plan somente no alvo especificado, isso funcionará também da mesma maneira no comando apply e destroy.**

**2 – Segundo passo é executar o apply com o target para o example2:**

![](/wp-content/uploads/2023/05/3_targets.png)

**Conforme podemos ver, foi criado apenas o recurso alvo.**

**3 – Terceiro  passo é executar o destroy com o target para o example3:**

![](/wp-content/uploads/2023/05/4_targets.png)

**Conforme podemos verificar, foi destruído somente o recurso example3 que era o alvo especificado.**

**Conclusão**

O Terraform permite que você utilize targets para aplicar ou destruir apenas parte de um plano, e assim agilizar e ajudar no processo de resolução de problemas. O direcionamento de recursos individuais pode ser útil para solucionar erros, mas ele não segue o fluxo típico, deve ser utilizado somente quando necessário.

Para mais informações podemos acesse o [tutorial da HashiCorp](https://developer.hashicorp.com/terraform/tutorials/state/resource-targeting) e o repositório [GitHub da Vertigo Tecnologia](https://github.com/Vertigo-Learn/terraform-ebs-example).

## **Utilize Terraform com a Vertigo Tecnologia**

A Vertigo Tecnologia tem parcerias de sucesso com as melhores provedoras de soluções inovadoras do mercado, sendo assim o braço direito de grandes empresas do setor público e privado.

O [Terraform da HashiCorp](/parcerias/hashicorp/) está presente em nosso portfólio de soluções inteligentes, sendo ideal para empresas que precisam automatizar seus processos e sua infraestrutura.

Quer gerar redução de custos e ter uma tecnologia de ponta para proteger sua empresa? A Vertigo tem as melhores soluções e atua há mais de 20 anos no mercado, com a expertise necessária para entregar os melhores resultados.

Se interessou pelo Terraform? Vale com o nosso time comercial, teremos prazer em te ajudar.

–

*Quem assina este artigo é o nosso Analista DevOps Sênior, Roger Pablo.*

![](/wp-content/uploads/2023/05/Assinaturas-site_Roger.png)
