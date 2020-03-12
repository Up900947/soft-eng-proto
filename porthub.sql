create database porthub;
\c porthub;

create table users(
user_id varchar(8) primary key,
user_username varchar(15) not null,
user_password varchar(15) not null,
user_course varchar(50) not null,
user_email varchar(50) not null,
);




insert into users (user_id, user_username, user_password, user_course, user_email) values ('1','up900947', 'kruhvuioerhv', 'comp sci', 'up900947@myport.ac.uk');
