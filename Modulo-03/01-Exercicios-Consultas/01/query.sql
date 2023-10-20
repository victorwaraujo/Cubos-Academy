--(1)
SELECT compositor, id FROM musicas;
--(2)
SELECT composicao, tempo FROM musicas where tempo >60*4;
--(3)
SELECT compositor, composicao, id FROM musicas 
where id between 47 AND 123;
--(4)
SELECT * FROM musicas where compositor IS  NOT Null
AND tempo <60*5 AND compositor <> 'Bach';
--(5)
SELECT composicao, tempo FROM musicas where 
compositor = 'Mozart' OR compositor = 'Bach';
--(6)
SELECT * FROM musicas ORDER BY id desc;
--(7)
SELECT * FROM musicas ORDER BY tempo desc;
--(8)
SELECT * FROM musicas ORDER BY tempo asc limit 5;
--(9)
SELECT * FROM musicas ORDER BY tempo desc limit 10;
--(10)
SELECT * FROM musicas ORDER BY tempo asc limit 10 offset 5;
--(11)
SELECT * FROM musicas limit 10 offset 30;
--(12)
SELECT * FROM musicas limit 12 offset 60;
--(13)
SELECT distinct compositor FROM musicas 
where compositor IS NOT NULL;
--(14)
SELECT distinct compositor, composicao FROM musicas;
--(15)
SELECT * FROM musicas WHERE compositor LIKE 'Bra%';
--(16)
SELECT * FROM musicas WHERE ritmo LIKE '% troppo';
--(17)
SELECT * FROM musicas WHERE composicao
ILIKE '%quartet%';
--(18)
SELECT * FROM musicas WHERE NOT composicao 
ILIKE '%quintet%';
