CREATE TABLE Alunos(
	nome varchar(40),
	cpf varchar(40),
	email varchar(40)
);

INSERT INTO Alunos VALUES(NULL, NULL, NULL);
INSERT INTO Alunos VALUES(NULL, NULL, NULL);
INSERT INTO Alunos VALUES('Aline', '999.999.999-99', 'aline@email.com.br');
INSERT INTO Alunos VALUES('Nilce', '777.777.777-77', 'nilse@email.com.br');

ALTER TABLE Alunos 
	ALTER COLUMN nome TYPE varchar(60),
	ALTER COLUMN nome SET NOT NULL,
	ALTER COLUMN cpf TYPE varchar(60),
	ALTER COLUMN cpf SET NOT NULL,
	ALTER COLUMN email TYPE varchar(60),
	ALTER COLUMN email SET NOT NULL;

INSERT INTO Alunos VALUES(NULL, NULL, NULL);
INSERT INTO Alunos VALUES('Jota', '111.111.111-11', 'jota@email.com.br');

SELECT * FROM Alunos;