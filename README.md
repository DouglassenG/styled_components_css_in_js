# 💅 Styled Components - Arquitetura CSS-in-JS

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![Styled Components](https://img.shields.io/badge/Style-Styled_Components-DB7093?logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/Code-JavaScript-F7DF1E?logo=javascript&logoColor=black)

> Uma abordagem moderna para estilização em React, onde o CSS é tratado como um cidadão de primeira classe, garantindo escopo, dinamicidade e manutenção simplificada.

## 🎯 Motivação e Propósito

Em aplicações React escaláveis, o uso de arquivos CSS tradicionais pode levar a problemas de "vazamento" de estilos (conflitos de nomes de classes globais) e dificuldade em manter a consistência visual.

O propósito deste projeto é implementar a biblioteca **Styled Components** para resolver esses problemas. O repositório demonstra como criar componentes que carregam seus próprios estilos, eliminando a necessidade de arquivos `.css` separados e permitindo que a aparência dos elementos mude dinamicamente baseada nas propriedades (`props`) passadas para eles.

## 🖼️ Demonstração Visual

*(Se o projeto estiver hospedado na Vercel, Netlify ou GitHub Pages, insira o link aqui. Ex: [Ver Projeto Online](URL))*

## 🛠️ Tecnologias Utilizadas

A stack tecnológica foca na integração perfeita entre lógica e estilo:

* **[ReactJS](https://react.dev/):** Biblioteca para construção da UI baseada em componentes.
* **[Styled Components](https://styled-components.com/):** Biblioteca que permite escrever CSS real dentro do JavaScript (Template Literals).
    * **`styled` API:** Para criação de elementos estilizados (`styled.div`, `styled.button`).
    * **`createGlobalStyle`:** Para reset CSS e configurações de fonte globais.
    * **Props Interpolation:** Para lógica condicional dentro do CSS.
* **[Vite](https://vitejs.dev/):** Ferramenta de build para ambiente de desenvolvimento ágil.

## ✨ Funcionalidades

O projeto explora os seguintes recursos da biblioteca:

1.  **Componentes Estilizados:** Criação de elementos semânticos (Botões, Containers, Títulos) com estilos acoplados.
2.  **Estilização Dinâmica:** Alteração de cores e dimensões baseadas em props (ex: um `<Botao primary>` tem cor diferente de um botão comum).
3.  **Estilos Globais:** Configuração de reset e tipografia base que se aplicam a toda a aplicação sem poluir os componentes individuais.
4.  **Pseudo-elementos e Seletores:** Uso de `&:hover`, `&::before` diretamente na definição do componente.

## 📂 Estrutura de Arquivos

A organização reflete a filosofia de componentização, onde estilos e lógica coexistem:

```text
styled_components_css_in_js/
├── src/
│   ├── components/      # Componentes de UI (Botão, Input, Título)
│   │   ├── Botao/       # Pasta do componente
│   │   │   └── styles.js # Definição dos estilos do botão
│   │   └── Title/       # Exemplo de componente de texto
│   ├── containers/      # Componentes de Layout/Seções da página
│   ├── styles/          # Configurações globais
│   │   └── global.js    # createGlobalStyle (Reset CSS)
│   ├── App.jsx          # Componente Raiz
│   └── main.jsx         # Ponto de entrada
├── public/              # Assets estáticos
├── package.json         # Dependências (styled-components)
└── README.md            # Documentação
