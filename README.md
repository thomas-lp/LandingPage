<p align="center">
    <img src="https://github.com/thomas-lp/LandingPage/blob/ac39ee9f1e826225026b2fd337b0cb996800bd23/src/assets/logo.png" alt="Logo" width="300" height="300">
</p>

<h1 align="center"> Por Toda PArte </h1>
   
## Índice
- [Colaboradores](#colaboradores)
- [Sobre o Projeto ](#sobre-o-projeto)
- [Seções](#seções)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Clone esse repositório](#clone-esse-repositório)
- [Arquitetura](#arquitetura)
- [Como começar no React](#como-começar-no-react)

# Colaboradores

- Larissa Reis Silva - [@Larissa Reis Si](https://github.com/LarissaReisSi)
- Thiago Pereira Freire - [@thiagof201014](https://github.com/thiagof201014)
- Thomas Anderson Lopes - [@thomas-lp](https://github.com/thomas-lp)

# Sobre o Projeto

O projeto trata-se de uma landing page para o grupo de desenhistas do whatsapp Por Toda PArte, existente desde 2018, e que vem crescendo cada vez mais nos últimos anos. Devido a seu tempo de existência, o grupo já criou uma identidade visual própria e muitas coisas ocorrem nele. Sendo assim, a equipe de administradores do grupo têm a vontade de criar um landing page para divulgá-lo e criar uma comunidade para os membros. 

## Seções

### Menu de Navegação

Menu com as seções da landingpage.

### Início

Apresentação do projeto Por Toda PArte.

### Casas

Informações sobre as Casas Artísticas do projeto.

### Eventos

Conteúdos sobre os eventos realizados.

### Instagram

Apresentação de algumas artes.

### Contato

Informações para contato e novidades.

### Rodapé

Direitos reservados.


## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript 
- React
- Vite

## Clone esse repositório
- Acesse a página principal do repositório no GitHub.
- Acesse o botão "Code" no canto direito superior do repositório.
- Copie a URL do Repositório e clone usando usando um Cliente Git
- Certifique-se de ter o Node.js versão LTS no instalado na sua máquina local.
- Verifique a instalação correta digitando "node -v" e "npm -v" para verificar a versão instalada do node, e do node packet maneger.
- Clone o projeto através do github para sua máquina
- No terminal do dentro do seu projeto, instale as dependências usadas no projeto:
- - npm install
- - npm install slick-carousel react-slick react-instagram-embed 
- Execute o projeto no seu navegador:
- - npm run dev 

### Como criar um projeto React do 0
    Instalação:
    - Site Node.js Versão LTS
    - Abrir terminal:
        - node -v
        - npm -v

    Criar Projeto:
    - Criar pasta no disco local
    - Abrir terminal:
        > cd path da pasta
        > npm create vite@latest nomeProjeto -- --template react
        > cd nomeProjeto
        > code .
    - Abrir terminal vs code:
        > npm install
        > npm run dev 
        > Para sair: ctrl+c

## Arquitetura
### Arquitetura de Sistema

Neste projeto, foi utilizada a arquitetura cliente servidor. O cliente, neste contexto, refere-se ao navegador web que está sendo usado para acessar o site. Ele é o responsável por fazer solicitações para obter a página HTML, interpretar o HTML recebido e renderizar a página para o usuário. Além disso, ele processa os recursos adicionais, como folhas de estilo (CSS), scripts (JavaScript) e recursos de mídia, conforme necessário.

O servidor é o computador remoto que armazena e fornece os recursos necessários para a página web. Ele hospeda o arquivo HTML da página, juntamente com quaisquer arquivos de estilo, scripts, imagens ou outros recursos necessários. Quando o navegador do cliente faz uma solicitação, o servidor responde fornecendo os arquivos solicitados, permitindo que o cliente exiba a página da web.

### Arquitetura de Software

Por se tratar de um projeto simples, não foi necessária uma arquitetura de software muito avançada. Em suma, o projeto foi dividido em três diretórios: "assets", "components" e "css". No diretório "assets", se encontram todas as imagens utilizadas no site. Já no diretório "components", se encontram todos os arquivos com extensão .jsx. Por fim, no diretório "css", se encontram todos os arquivos com extensão .css, que são os responsáveis pela parte visual de cada "component" de mesmo nome.

#### Estrutura do Diretório

- LANDINGPAGE
    - node_modules
    - public
    - src
        - assets
            - electrophorusLiberi
            - events
            - instagram
            - lispectorusWatertonni
            - ramphastidaeQinnis
        - components
        - css

## Como começar no React

### O que é React
- Biblioteca javascript criada pelo Facebook para front-end
- Criação de single pages applications 
- React reage automaticamente as mudanças

### Criando um projeto com React
- Vamos criar um projeto no replit! 
- É mais fácil, rápido e ideal para uma aula introdutória

### O que é JSX

- O JSX é como um HTML, porém dentro do código JavaScript
- É a principal maneira de escrever HTML com o React
- Podemos interpolar variáveis, inserindo elas entre { }
- É possível executar funções em JSX
- Inserir valores em atributos de tags também é possível em JSX

### Conceitos Importantes
- Componentes

- Props

- Estado

### Copie o código css e a imagem html abaixo para a aula!
``` css
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.perfil-container {
  text-align: center;
  background-color: #ff9924;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px #858585;
}

.perfil-container img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px 0;
}
```

``` html
<img src="https://as2.ftcdn.net/v2/jpg/04/83/90/95/1000_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"></img >
```