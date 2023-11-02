-- 07-sequelize-upgrade-example과 연결

use sesac;
show tables;

-- 테이블 구조 확인
desc player;
desc profile;
desc team;
desc game;
desc team_game;

-- 테이블 조회
select * from player;
select * from profile;
select * from team;
select * from game;
select * from team_game;

-- Players table 에 on delete cascade 확인 완료 (Profile table 연쇄 적용)
delete from player where plyaer_id = 1;

-- 테이블 삭제 
-- 테이블간 관계가 있으므로 삭제시 순서 주의
drop table profile;
drop table player;
drop table team_game;
drop table team;
drop table game;
