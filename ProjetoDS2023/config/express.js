const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const methodOverride = require("method-override");
const webRoutes = require("../routes/web");
const app = express();

// Define as rotas para os arquivos da pasta public
app.use(express.static('./public'));
// Render de views
app.set("view engine", "hbs");
// Criando uma variável "escondida" dentro do objeto app
app.set('port', process.env.PORT || config.get("server.port"));
// Defino que estamos utilizando o middleware bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Condfigura o method-override no node.js
app.use(methodOverride("_method"));
// Demino aque irá utilizar o arquivo routes/web.js p/ configurar as rotas
app.use(webRoutes);

// Criamos um novo pacote NPM
module.exports = app;
