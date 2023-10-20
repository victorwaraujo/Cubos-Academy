--01
SELECT count(medicamento) FROM farmacia;
--02
SELECT min(idade) FROM usuarios;
--03
SELECT max(idade) FROM usuarios;
--04
SELECT avg(idade) FROM usuarios WHERE idade>=18;
--05
SELECT SUM(estoque) FROM farmacia WHERE categoria = 'blue' OR categoria  = 'black';
--06 
SELECT categoria, SUM(estoque) FROM farmacia WHERE categoria IS NOT null GROUP BY categoria;
--07
SELECT SUM(estoque) FROM farmacia WHERE categoria IS NULL ;
--08
SELECT count(medicamento) FROM farmacia WHERE categoria IS NULL;
--09
SELECT medicamento ||' ('||categoria||')'FROM farmacia WHERE categoria IS NOT NULL;
--10
SELECT id || ' - ' || medicamento ||' ('||
COALESCE(categoria, 'sem categoria')||')'FROM farmacia;
--11

--12
SELECT nome, idade, age(cast(cadastro as timestamp)) AS tempo FROM usuarios where idade <18;
--13
SELECT nome, idade, email, age(cast(cadastro as date))
AS tempo FROM usuarios where idade >=60;
--14
SELECT categoria, count(estoque)  as quantidade_de_produto 
from farmacia WHERE categoria IS NOT null GROUP BY categoria;
--15
SELECT idade, count(idade) as registros from usuarios WHERE idade >=18 GROUP BY idade;
--16
SELECT categoria, SUM(estoque)  from farmacia GROUP by categoria limit 3; 