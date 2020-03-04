CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS usersTable;

CREATE TABLE IF NOT EXISTS usersTable (
    id   uuid      DEFAULT uuid_generate_v4() PRIMARY KEY,
    username  text,
    email text,
    password varchar,
    course text
);
