DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR (150),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);