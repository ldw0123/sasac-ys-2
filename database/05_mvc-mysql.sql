-- 06-mvc-mysql 폴더와 연계

create database sesac_test
default character set utf8mb4 default collate utf8mb4_unicode_ci;

use sesac_test;

create table visitor (
	id int not null primary key auto_increment,
    username varchar(10) not null,
    comment mediumtext
);

insert into visitor (username, comment) values ('홍길동', '내가 왔다.');
insert into visitor (username, comment) values ('이찬혁', '으라차차');

select * from visitor;

create user 'user'@'%' identified by '12345678';
grant all privileges on *.* to 'user'@'%' with grant option;
flush privileges;

alter user 'user'@'%' identified with mysql_native_password by '12345678';

select host, user from mysql.user;

show databases;