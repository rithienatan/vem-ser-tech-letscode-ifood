SELECT * FROM tb_cidades;

SELECT * FROM tb_cidades
LIMIT 2;

SELECT uf, nome FROM tb_cidades;

SELECT uf AS UnidadeFederativa, nome AS NomeCidade
FROM tb_cidades;

SELECT nome
FROM tb_cidades
ORDER BY nome DESC;

SELECT DISTINCT uf
FROM tb_estados;

SELECT * FROM tb_cidades
WHERE nome = 'Sao Paulo';

SELECT * FROM tb_cidades
WHERE nome LIKE 'S%';

SELECT *
FROM tb_cidades
WHERE nome = 'Sao Paulo' AND 
uf = 'SP';