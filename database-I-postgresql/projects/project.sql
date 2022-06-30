-- Create table cliente
CREATE TABLE Cliente(
    id int generated always as identity,
    nome varchar(30) NOT NULL,
    cpf varchar(14) NOT NULL,
    data_nascimento date NOT NULL,
    email varchar(25) NOT NULL,
    senha varchar NOT NULL, 

    PRIMARY KEY(id)
);

-- Create table banco
CREATE TABLE Banco(
    id int generated always as identity,
    nome varchar(20) NOT NULL,
    cnpj varchar(18) NOT NULL,
    num_banco varchar(4) NOT NULL,

    PRIMARY KEY(id, num_banco)
);

-- Create table agencia
CREATE TABLE Agencia(
    id int generated always as identity,
    num_agencia varchar(4) NOT NULL,
    banco_id int NOT NULL,
    num_banco_agencia varchar(4) NOT NULL,

    PRIMARY KEY(id),

    CONSTRAINT FK_id_num_Banco_Agencia FOREIGN KEY(banco_id, num_banco_agencia) REFERENCES Banco(id, num_banco)
);

-- Create table CarteiraCliente
CREATE TABLE CarteiraCliente(
    id int generated always as identity,
    num_conta varchar(9) NOT NULL,
    saldo decimal(10, 2) NOT NULL DEFAULT 0.00,
    id_cliente int NOT NULL,
	id_agencia int NOT NULL,

    PRIMARY KEY(id, num_conta),

    CONSTRAINT FK_Carteira_Cliente FOREIGN KEY(id_cliente) REFERENCES Cliente(id),
    CONSTRAINT FK_Carteira_Banco_Agencia FOREIGN KEY(id_agencia) REFERENCES Agencia(id)
);

-- Create table Transações
/*
CREATE TABLE Transacoes(
    id int generated always as identity,

);
*/

-- insert clientes
INSERT INTO 
    Cliente(nome, cpf, data_nascimento, email, senha)
VALUES
    ('Fallen', '000.000.000-00', '1995-12-25', 'imperialfallen@email.com', 'ImperialFallen'),
    ('Fer', '111.111.111-11', '1995-12-24', 'imperialfer@email.com', 'ImperialFer'),
    ('Boltz', '222.222.222-22', '1995-12-23', 'imperialboltz@email.com', 'ImperialBoltz'),
    ('Vini', '333.333.333-33', '1995-12-22', 'imperialvini@email.com', 'ImperialVini'),
    ('Fnx', '444.444.444-44', '1995-12-21', 'imperialfnx@email.com', 'ImperialFnx');

-- insert bancos
INSERT INTO 
    Banco(nome, cnpj, num_banco)
VALUES
    ('Santander', '77.777.777/0007-70', '0987'),
    ('Nu Bank', '11.111.111/0001-10', '0321');

-- insert agencias
INSERT INTO
    Agencia(num_agencia, banco_id, num_banco_agencia)
VALUES
    (
        '1000',
        (select id from Banco where nome = 'Nu Bank'),
        (select num_banco from Banco where nome = 'Nu Bank')
    ),
    (
        '1001',
        (select id from Banco where nome = 'Nu Bank'),
        (select num_banco from Banco where nome = 'Nu Bank')
    ),
    (
        '7000',
        (select id from Banco where nome = 'Santander'),
        (select num_banco from Banco where nome = 'Santander')
    );

-- insert carteiras
INSERT INTO
    CarteiraCliente(num_conta, saldo, id_cliente, id_agencia)
VALUES
    (
        '1000000-1',
        3000.00,
        (select id from Cliente where nome = 'Fallen'),
        (select id from Agencia where num_agencia = '1000')
    ),
    (
        '1000001-1',
        4000.00,
        (select id from Cliente where nome = 'Fer'),
        (select id from Agencia where num_agencia = '1001')
    ),
    (
        '1000002-1',
        10000.00,
        (select id from Cliente where nome = 'Boltz'),
        (select id from Agencia where num_agencia = '1001')
    ),
    (
        '7000000-7',
        8000.00,
        (select id from Cliente where nome = 'Vini'),
        (select id from Agencia where num_agencia = '7000')
    ),
    (
        '7000001-7',
        6000.00,
        (select id from Cliente where nome = 'Fnx'),
        (select id from Agencia where num_agencia = '7000')
    );

-- insert transacoes

-- questao I
CREATE OR REPLACE VIEW SaldoTotal AS 
    SELECT sum(saldo) FROM CarteiraCliente;
-- questao II
-- questao III
-- questao IV