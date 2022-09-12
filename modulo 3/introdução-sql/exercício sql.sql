CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

-- comando SHOW vs SHOW TABLE

-- mostra todos os databases, nesse caso mostrou franklin-nadezhda-souza
SHOW DATABASES;

-- mostra todas as tabelas criadas, nesse caso mostrou Actor
SHOW TABLES;

-- descreve o que há na tabela
DESCRIBE Actor;

-- inserindo valores na tabela
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male"),
('002', 'Glória Pires', 1200000, '1983-08-23', 'female' );

DELETE FROM Actor WHERE id = '001';

-- ao tentar inserir novamente o tony ramos tem-se o erro: Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'
-- isso ocorre pois o id é uma chave primaria

-- Response: Error Code: 1136. Column count doesn't match value count at row 1
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- existem mais colunas informadas no value do que declaradas no 'insert into' logo é necessário declarar as informações ou removelas:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- response: Error Code: 1364. Field 'name' doesn't have a default value
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- isso ocorre pois o name foi definido como NOT NULL mas não foi informado ao tentar inserir na tabela
INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male",
  'Caio Castro'
);

-- Response: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- O erro ocorreu pois a data não estava no formato 'YYYY-MM-DD', faltaram as aspas
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  '1979-03-26', 
  "female"
);

-- a) *Escreva uma query que retorne todas as informações das atrizes*
SELECT * from Actor WHERE gender = "female";

-- b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
SELECT salary from Actor WHERE name = 'Tony Ramos';

-- c) *Escreva uma query que retorne todas as informações que tenham o `gender` 
-- com o valor `"invalid"`. Explique o resultado.*
SELECT * from Actor WHERE gender = "invalid";
-- não foi retornado nenhum valor, pois não existem atores com nomes invalidos

-- d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o 
-- salário com o valor máximo de R$500.000*
SELECT id, name, salary from Actor WHERE salary < 500000;

-- e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. 
SELECT id, nome from Actor WHERE id = "002";
-- Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) 
-- response: Error Code: 1054. Unknown column 'nome' in 'field list'
-- Tradução: Código de erro: 1054. Coluna desconhecida 'nome' 

-- e explique porque esse erro aconteceu.
-- Esse erro aconteceu pois na verdade o nome da coluna é 'name', a coluna 'nome' é inexistente

--  Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, tittle, synopsis, release_Date, rating)
VALUES(
	'001',
	'Se Eu Fosse Você', 
	'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos', 
	'2006-01-06',
	7,
 ),
 VALUES(
	'002',
	'Doce de mãe', 
	'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela', 
	'2012-12-27',
	10,
 ),
 VALUES(
	'003',
	'Dona Flor e Seus Dois Maridos', 
	'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.', 
	'2017-11-02',
	8
 ),
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

SELECT id, title, rating FROM Movie WHERE id = "004";

SELECT * FROM Movie WHERE name = "Deus é Brasileiro";

SELECT id, title, synopsis FROM Movie WHERE rating > 7;

SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";

SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
      
SELECT * FROM MOVIE
WHERE release_date < CURDATE() AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%");