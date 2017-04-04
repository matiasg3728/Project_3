CREATE DATABASE forem;

\c forem;

CREATE TABLE users (User_ID SERIAL PRIMARY KEY, username varchar(255), password_digest varchar(255));

CREATE TABLE projects (User_ID INT references users(User_ID), name varchar(255), Project_ID SERIAL PRIMARY KEY);

CREATE TABLE copies (Project_ID INT references projects(Project_ID), copy_ID SERIAL PRIMARY KEY, document text);
