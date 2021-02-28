drop table if exists users;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name  VARCHAR(100) NOT NULL ,
email VARCHAR(100)NOT NULL,
password VARCHAR(200) NOT NULL
);



INSERT INTO users (name, email, password) VALUES('Davi','davi@gmail.com',' $2b$10$dmm9x4XcBFPPqz5WqTGIUeu3DqzHEHRCU/MI01Ru0ihwuAvD99UGa');