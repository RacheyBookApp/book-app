CREATE DOMAIN ulid VARCHAR(26); 

CREATE TABLE users ( 
    id ulid PRIMARY KEY, 
    username VARCHAR NOT NULL UNIQUE
);