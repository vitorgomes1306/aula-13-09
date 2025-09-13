-- 1. Criar o banco de dados
CREATE DATABASE escola;

-- 2. Usar o banco de dados 
USE escola;

-- 3. Criar tabela alunos]


CREATE TABLE alunos (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT,
    curso VARCHAR(100)
    );

-- 4. (CREATE) Inserir dados na tabela
INSERT INTO alunos (nome, idade, crusro)
VALUES
('Ariza Clara', 45, 'Medicina'),
('Layla', 25, 'Psicologia'),
('Miguel', 13, 'Engenharia');

-- 5. (READ) Consultar dados
SELECT * FROM alunos;

-- 6 (UPDATE) Atualizar registro
UPDATE alunos SET idade = 21 WHERE id = 1;

-- 7. (DELETE) Excluir um registro
DELETE FROM alunos WHERE id = 3;


