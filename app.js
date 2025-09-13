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
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

//configurando mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});

// conectar ao banco de dados
connection.connect((err) => {
    if (err) throw err
    console.error('Conectado ao banco de dados MySQL!');

});

//configurar o EJS
app.set ('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


//rota inicial
app.get('/', (req, res) => {
    //busca oa alunos no banco de dados
    const query = 'SELECT * FROM alunos';
    connection.query(query, (err, rows) => {
        if (err) throw err;
        res.render('index', { alunos: rows });
    });
});

//rota para adicionar aluno
app.post('/add', (req, res) => {
    const { nome, idade, curso } = req.body;
    const query = 'INSERT INTO alunos (nome, idade, curso) VALUES (?, ?, ?)';
    connection.query(query, [nome, idade, curso], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
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