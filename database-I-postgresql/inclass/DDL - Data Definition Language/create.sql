CREATE TABLE tb_produtos (
    id SERIAL NOT NULL,
    nome_produto varchar(40),
    valor_produto numeric (16,2),
    data_compra date
);