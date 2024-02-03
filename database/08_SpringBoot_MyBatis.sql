-- sesac DB ( Spring Boot MyBatis 수업 )
CREATE DATABASE sesac
DEFAULT CHARACTER SET UTF8MB4 DEFAULT COLLATE UTF8MB4_UNICODE_CI;
use sesac;
create table user(
	id int not null auto_increment primary key,
    name varchar(20) not null,
    nickname varchar(20) not null
    );

select * from user;

-- table DROP
DROP TABLE user;

-- n번 id 삭제
DELETE FROM user WHERE id = 2; 