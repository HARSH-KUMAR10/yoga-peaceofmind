SET sql_safe_updates = FALSE;

USE defaultdb;
DROP DATABASE IF EXISTS yoga CASCADE;
CREATE DATABASE IF NOT EXISTS yoga;

USE yoga;

CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    balance INT8,
    UserName STRING,
    UserPass STRING,
    UserType BOOL
);

CREATE TABLE posts (
    id SERIAL,
    UserName STRING,
    PostHead STRING,
    PostData STRING
)