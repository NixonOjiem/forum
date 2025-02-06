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

--create table comments
Drop table if exists comments;
CREATE TABLE comments (
  comment_id INT AUTO_INCREMENT PRIMARY KEY,
  question_id INT,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

--create table questions
Drop Table if exists questions;

CREATE TABLE questions (
question_id INT AUTO_INCREMENT PRIMARY KEY,
Title varchar(100),
question VARCHAR(100),
tag varchar(100)
);

