CREATE TABLE arts
(
    id     SERIAL PRIMARY KEY,
    name   VARCHAR(100),
    author VARCHAR(100),
    imgSrc VARCHAR(255),
    description VARCHAR(550),
    mp3Src VARCHAR(100)
);

CREATE TABLE leads (
                      id SERIAL PRIMARY KEY,
                      email VARCHAR(255),
                      name VARCHAR(255),
                      surname VARCHAR(255),
                      number VARCHAR(255),
                      art_id INT,
                      FOREIGN KEY (art_id) REFERENCES arts(id) ON DELETE CASCADE
);