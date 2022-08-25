INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

ALTER TABLE Movie DROP COLUMN rating;

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;