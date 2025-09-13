// Projeto CRUD com Node.js, Express e MySQL
//===============================================

//chamando as dependencias 
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const peth = require('path');

//inciciando o express
const app = express();

// definindo a porta
const port = 1313;

//rota inicial GET

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// // Configuração do banco de dados MySQL
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'aula'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err);
//         return;
//     }
//     console.log('Conectado ao banco de dados MySQL.');
// });
// // Rota para exibir o formulário
// app.get('/', (req, res) => {
//     res.render('form');
// });

// // Rota para processar o formulário
// app.post('/submit', (req, res) => {
//     const { name, email } = req.body;
//     const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
//     db.query(sql, [name, email], (err, result) => {
//         if (err) {
//             console.error('Erro ao inserir dados:', err);
//             res.status(500).send('Erro ao inserir dados');
//             return;
//         }
//         console.log('Dados inseridos com sucesso:', result);
//         res.redirect('/');
//     });
// });

app.listen(port, () => {
     console.log(`Servidor rodando em http://localhost:${port}`);
});