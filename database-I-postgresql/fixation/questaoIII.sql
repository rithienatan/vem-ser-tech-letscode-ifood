-- Create table marca
CREATE TABLE Marca(
    Id int generated always as identity,
    nome varchar(50) NOT NULL,
    PRIMARY KEY(Id)
);

-- Create table produto
CREATE TABLE Produto(
    Id INT generated always as identity,
    nome varchar(100) NOT NULL,
    Valor decimal(10, 2) NOT NULL,
    MarcaId int NOT NULL,
    PRIMARY KEY(Id),
    CONSTRAINT FK_Produto_Marca FOREIGN KEY(MarcaId) REFERENCES Marca(Id)
);

-- Create table Cliente
CREATE TABLE Cliente(
    Id int generated always as identity,
    nome varchar(100) NOT NULL,
    PRIMARY KEY(Id)
);

-- Create table MotivoDevolucao
CREATE TABLE MotivoDevolucao(
    Id int generated always as identity,
    nome varchar(100) NOT NULL,
    PRIMARY KEY(Id)
);

-- Create table Compra
CREATE TABLE Compra(
    Id int generated always as identity,
    ClienteId int NOT NULL,
    MotivoDevolucaoId int,
    PRIMARY KEY(Id),
    CONSTRAINT FK_Compra_Cliente FOREIGN KEY(ClienteId) REFERENCES Cliente(Id),
    CONSTRAINT FK_Compra_MotivoDevolucao FOREIGN KEY (MotivoDevolucaoId) REFERENCES MotivoDevolucao(Id)
);

-- Create table ItensCompra
CREATE TABLE ItensCompra(
    CompraId int NOT NULL,
    ProdutoId int NOT NULL,

    Qtd decimal(10, 2) NOT NULL,
    PRIMARY KEY(CompraId, ProdutoId),
    CONSTRAINT FK_ItensCompra_Compra FOREIGN KEY(CompraId) REFERENCES Compra(Id),
    CONSTRAINT FK_ItensCompra_Produto FOREIGN KEY(ProdutoId) REFERENCES Produto(Id)
);

-- Create table NFE
CREATE TABLE NFE(
    Id int generated always as identity,
    PRIMARY KEY(Id)
);

-- Create table ItensNFE
CREATE TABLE ItensNFE(
    NFEId int NOT NULL,
    CompraId int NOT NULL,
    ProdutoId int NOT NULL,
    PRIMARY KEY(NFEId, CompraId, ProdutoId),
    CONSTRAINT FK_ItensNFE_NFE FOREIGN KEY(NFEId) REFERENCES NFE(Id),
    CONSTRAINT FK_ItensNFE_ItensCompra FOREIGN KEY(CompraId, ProdutoId) REFERENCES ItensCompra(CompraId, ProdutoId)
);

-- Inserts 
INSERT INTO 
    Marca(nome)
VALUES
    ('Nike'), 
    ('Adidas'), 
    ('Puma'),
    ('Vans');

INSERT INTO 
    Produto(nome, valor, MarcaId)
VALUES 
    ('Puma Suede', 400, (select Id from Marca where Nome = 'Puma')),
    ('Adidas Breaknet', 300, (select Id from Marca where Nome = 'Adidas')),
    ('Adidas Grant Court', 279, (select Id from Marca where Nome = 'Adidas')),
    ('Nike AirForce One', 800, (select Id from Marca where Nome = 'Nike')),
    ('Vans Old School', 300, (select Id from Marca where Nome = 'Vans')),
    ('Vans Ultrarange', 500, (select Id from Marca where Nome = 'Vans'));

INSERT INTO
    Cliente(nome)
VALUES 
    ('Astralis'),
    ('Navi'),
    ('Imperial'),
    ('Liquid'),
    ('Bergantin');

-- Selects 
SELECT * FROM Cliente ORDER BY nome;

SELECT * FROM Produto WHERE nome like '%Vans%';

SELECT MarcaId, count(*) from Produto group by MarcaId;

SELECT MarcaId, count(*) from Produto group by MarcaId having count(*) > 1;

SELECT MarcaId, count(*) from Produto
WHERE Valor > (select avg(Valor) from Produto)
group by MarcaId;

SELECT p.* from Produto p
WHERE p.Valor = (select max(Valor) from Produto WHERE MarcaId = p.MarcaId);