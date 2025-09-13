//inciando projeto novo com node, express, mysql e body-parser
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost
    user: 'root',
    password: '',
    database: 'aula'
});
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }       
    console.log('Conectado ao banco de dados MySQL.');