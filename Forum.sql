-- connect to MySQL
MySQL -u root p

--Drop databese forum
DROP DATABASE IF EXISTS forum;

--create database
CREATE DATABASE forum;

--seect database forum
USE forum;

--create table for users
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

