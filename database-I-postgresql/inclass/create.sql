/*Estrutura do database bd_papelaria*/

CREATE DATABASE bd_papelaria
    WITH 
    OWNER = letscode
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

/*Estrutura da tabela tb_produto*/

CREATE TABLE tb_produto (
    id SERIAL NOT NULL,
    status CHAR(1) NOT NULL DEFAULT 'A',
    descricao VARCHAR(50) NULL DEFAULT NULL,
    estoque_minimo INT NULL DEFAULT NULL,
    estoque_maximo INT NULL DEFAULT NULL,
    PRIMARY KEY (id)
);

/*Estrutura da tabela tb_entrada_produto*/

CREATE TABLE tb_entrada_produto (
    id SERIAL NOT NULL,
    id_produto INT NULL DEFAULT NULL,
    qtde INT NULL DEFAULT NULL,
    valor_unitario DECIMAL(9,2) NULL DEFAULT '0.00',
    data_entrada DATE NULL DEFAULT NULL,
    PRIMARY KEY (id)
);

/*Estrutura da tabela tb_estoque*/

CREATE TABLE tb_estoque (
    id SERIAL NOT NULL,
    id_produto INT NULL DEFAULT NULL,
    qtde INT NULL DEFAULT NULL,
    valor_unitario DECIMAL(9,2) NULL DEFAULT '0.00',
    PRIMARY KEY (id)
);

/*Estrutura da tabela tb_saida_produto*/

CREATE TABLE tb_saida_produto (
    id SERIAL NOT NULL,
    id_produto INT NULL DEFAULT NULL,
    qtde INT NULL DEFAULT NULL,
    data_saida DATE NULL DEFAULT NULL,
    valor_unitario DECIMAL(9,2) NULL DEFAULT '0.00',
    PRIMARY KEY (id)
);

