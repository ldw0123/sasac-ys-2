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

-- MySQL 사용자 추가하기
create user 'user'@'%' identified by '12345678';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
grant all privileges on *.* to 'user'@'%' with grant option;
-- 현재 사용 중인 MySQL 캐시를 지우고 새로운 설정 적용
flush privileges;

-- MySQL 비밀번호를 변경하고 싶다면?
alter user 'user'@'%' identified with mysql_native_password by '12345678';

select host, user from mysql.user;

show databases;