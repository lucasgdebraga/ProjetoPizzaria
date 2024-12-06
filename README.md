Projetods2023

📝 Descrição

Projetods2023 é uma aplicação desenvolvida utilizando Node.js com o framework Express. Ele inclui 
funcionalidades para manipulação de rotas, integração com banco de dados MySQL e renderização 
de templates com Handlebars (HBS). O projeto utiliza nodemon como dependência de 
desenvolvimento para facilitar o processo de atualização durante o desenvolvimento.

🚀 Funcionalidades 

•	Configuração de rotas utilizando Express.

•	Manipulação de requisições e respostas com body-parser.

•	Renderização de páginas dinâmicas com hbs.

•	Override de métodos HTTP com method-override.

•	Conexão ao banco de dados MySQL utilizando a biblioteca mysql2.

🧑‍💻 Pré-requisitos

Certifique-se de que você possui as seguintes ferramentas instaladas no seu sistema:
•	Node.js (versão 16 ou superior recomendada)
•	npm (gerenciador de pacotes do Node.js)

📋Instalação

Siga os passos abaixo para configurar o projeto:

1.	Clone este repositório:
   
git clone <URL_DO_REPOSITORIO>
 
3.  Navegue até o diretório do projeto:
   
cd projetods2023

5.  Instale as dependências:
   
npm install

Uso

Para iniciar o servidor local, utilize o seguinte comando:

npm start  

Este comando executará o projeto utilizando o nodemon, que reinicia o servidor automaticamente sempre que houver alterações nos arquivos.
O servidor estará disponível por padrão em http://localhost:3000.


📂 Estrutura de Diretórios

projetods2023/  
├── package.json          # Informações e dependências do projeto  
├── package-lock.json     # Versões exatas das dependências instaladas  
├── index.js              # Arquivo principal da aplicação  
├── views/                # Templates HBS para renderização de páginas  
├── public/               # Arquivos estáticos (CSS, imagens, etc.)
├── rotes/               # Arquivos onde estão as rotas do projeto  
└── config/               # Configurações do projeto  

🛠️ Tecnologias Utilizadas
 
•	Node.js

•	Express

•	HBS (Handlebars)

•	MySQL2

•	Body-parser

•	React

Autor

•	Leonardo Bravo Estácio

📜 Licença
Este projeto está licenciado sob a licença ISC. Veja o arquivo LICENSE para mais detalhes.

