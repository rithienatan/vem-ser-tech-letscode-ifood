/*----- MIN and MAX -----*/
SELECT MIN(valor_unitario)
FROM tb_entrada_produto;

SELECT MAX(valor_unitario)
FROM tb_entrada_produto;

/*----- Count -----*/
SELECT COUNT(*)
FROM tb_saida_produto;

/*----- Sum -----*/
SELECT qtde, SUM(valor_unitario)
FROM tb_saida_produto
GROUP BY 1;

/*----- AVG -----*/
SELECT valor_unitario, AVG(qtde)
FROM tb_entrada_produto
GROUP BY 1;

/*----- Having -----*/
SELECT valor_unitario, COUNT(*)
FROM tb_estoque
GROUP BY 1
HAVING COUNT(*) > 2;