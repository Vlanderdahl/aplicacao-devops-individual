# Aplicação DevOps Individual

Este repositório contém uma pequena aplicação web desenvolvida em Node.js com Express.js, criada como parte da avaliação substitutiva da disciplina de Ferramentas de Implantação Contínua – DevOps.

---

## Sobre o Projeto

O objetivo principal deste projeto é praticar os conceitos de Git (branching, commits, merge, pull requests) e familiarizar-se com a criação de uma aplicação Node.js básica.

---

## Como Executar o Projeto Localmente

Siga os passos abaixo para clonar o repositório e rodar a aplicação em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Vlanderdahl/aplicacao-devops-individual.git](https://github.com/Vlanderdahl/aplicacao-devops-individual.git)
    ```
    *(Substitua `Vlanderdahl` pelo seu nome de usuário do GitHub)*

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd aplicacao-devops-individual
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação:**
    ```bash
    node src/app.js
    ```

A aplicação estará rodando em `http://localhost:3000`. Para parar o servidor, pressione `Ctrl + C` no terminal.

---

## Endpoints Disponíveis

A aplicação expõe os seguintes endpoints:

* **`/`**: Retorna a página HTML de boas-vindas (`index.html`).
    * **Exemplo:** Abra seu navegador e acesse `http://localhost:3000/`

* **`/meunome`**: Retorna um JSON contendo o nome completo do autor da aplicação.
    * **Formato:** `{"nome": "Seu Nome Completo"}`
    * **Exemplo:** Abra seu navegador e acesse `http://localhost:3000/meunome`

---

## Estrutura do Projeto

aplicacao-devops-individual/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── src/
├── app.js
└── views/
└── index.html