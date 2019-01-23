--Drops the project3 database--
DROP DATABASE IF EXISTS project3_db;

--Creates the project3 database--
CREATE DATABASE project3_db;

--Use the project3 database--
USE project3_db;

--Creating the Registry table--
CREATE TABLE registry (
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id)
);

--Creating the User table--
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_phone INT NOT NULL,
    PRIMARY KEY (id)
);

--Creating the Main Event table--
CREATE TABLE main_event (
    id INT NOT NULL AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    PRIMARY KEY (id)
);

--Creating the Guest table--
CREATE TABLE guest (
    id INT NOT NULL AUTO_INCREMENT,
    guest_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

