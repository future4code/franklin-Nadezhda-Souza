# Exercícios de Aprofundamento SQL

## Exercício 1
**a)** ALTER TABLE Actor DROP COLUMN salary;
o comando ALTER TABLE posibilita alterar a tabela e o comando DROP COLUMN é utilizado para apagar a coluna de uma tabela.

**b)** ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
o CHANGE pode ser utilizado para renomear uma coluna e alterar suas definições. Existe um comando semelhante, que é o MODIFY, no entanto o modify apenas altera o nome da coluna, é mais utilizado quando há algum erro de digitação.

**c)** ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
nesse caso o que foi alterado não foi o nome da coluna e sim suas definições. antes aceitava até 6 characteres e agora aceita até 255.

**d)** Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercício 2
**a)** Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`

UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";


**b)** Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name =  "Juliana Paes"
WHERE name = "JULIANA PÃES";

**c)** Escreva uma query que atualize todas as informações do ator com o id `005`
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

**d)** Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

## Exercício 3
**a)** Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

**b)** Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

## Exercício 4
**a)** Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor

**b)** Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor WHERE gender = "female"

**c)** Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female"

**d)** Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor

## Exercício 5
**a)** Releia a última query. Teste-a. Explique o resultado com as suas palavras

**b)** Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor
ORDER BY name DESC;

**c)** Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor
ORDER BY salary;

**d)** Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

**e)** Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## Exercício 6
**a)** Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.
ALTER TABLE Movie ADD playing_limit_date DATE;

**b)** Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.
ALTER TABLE Movie CHANGE rating rating FLOAT;

**c)** Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
UPDATE Movie
SET
	playing_limit_date = "2010-12-31"
WHERE id = "001"

**d)** Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
DELETE FROM Movie WHERE id = "001"

# Link para a cheatsheet:
https://devhints.io/mysql