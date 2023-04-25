/*Estrutura da tabela tb_cidades*/

CREATE TABLE tb_cidades (
    id SERIAL NOT NULL,
    estado int NOT NULL default '00',
    uf varchar(4) NOT NULL default '',
    nome varchar(50) NOT NULL default '',
    UNIQUE (id)
);

/*Estrutura da tabela tb_estados*/

CREATE TABLE tb_estados (
    id SERIAL NOT NULL,
    uf varchar(10) NOT NULL default '',
    nome varchar(20) NOT NULL default '',
    PRIMARY KEY  (id)
);