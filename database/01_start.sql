show databases;

-- 데이터 베이스 생성하는 명령어
CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use sesac_test;

-- 테이블을 조회하는 명령어 (데이터 베이스가 선택이 되어 있어야 함.)
show tables;

-- 테이블을 생성하는 명령어
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 만들어진 테이블에 
-- 1) 컬럼을 추가하는 명령어 
alter table user add gender enum('여자','남자'); 
-- 2) 컬럼을 삭제하는 명령어 
alter table user drop column age;
-- 3) 컬럼을 수정하는 명령어
alter table user modify gender varchar(2) not null;

-- 테이블을 삭제하는 명령어
drop table user;

-- 테이블 구조를 확인하는 명령어
desc user;


