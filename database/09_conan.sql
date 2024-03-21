-- conan DB ( 3차 팀 프로젝트 DB -내이름은 코난, 탐정2조 )
CREATE DATABASE team2conan
DEFAULT CHARACTER SET UTF8MB4 DEFAULT COLLATE UTF8MB4_UNICODE_CI;
use team2conan;

CREATE TABLE user (
	id INT AUTO_INCREMENT,
	userid VARCHAR(20) NOT NULL,
	password VARCHAR(100) NOT NULL,
	salt VARCHAR(255) NOT NULL,
	email VARCHAR(40) NOT NULL,
	nickname VARCHAR(20) NOT NULL,
	image VARCHAR(500),
	PRIMARY KEY (id)
);

CREATE TABLE diary (
	diaryId INT AUTO_INCREMENT,
	id INT NOT NULL,
	diaryTitle VARCHAR(20) NOT NULL,
	diaryContent TEXT NOT NULL,
	mood ENUM('happy', 'great', 'soso', 'sad', 'annoying') NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	currentLocation VARCHAR(255) NOT NULL,
	weather VARCHAR(255) NOT NULL,
	isPublic BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (diaryId),
	FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE
);

CREATE TABLE toDoList (
	todoId INT AUTO_INCREMENT,
	id INT NOT NULL,
	todoContent VARCHAR(100) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	deadline VARCHAR(50) NULL,
	state ENUM('notstart', 'done') NOT NULL DEFAULT 'notstart',
	PRIMARY KEY (todoId),
	FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE
);

CREATE TABLE reaction (
	reactionId INT AUTO_INCREMENT not null,
	diaryId INT NOT NULL,
	id INT NOT NULL,
	likey BOOLEAN NOT NULL DEFAULT false,
	love BOOLEAN NOT NULL DEFAULT false,
	haha BOOLEAN NOT NULL DEFAULT false,
	wow BOOLEAN NOT NULL DEFAULT false,
	sad BOOLEAN NOT NULL DEFAULT false,
	angry BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (reactionId),
	FOREIGN KEY (diaryId) REFERENCES diary (diaryId) ON DELETE CASCADE,
	FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE
);

INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (1, 'asd123', 1234, 'asdf', 'asd123@naver.com', '외않되??');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (2, 'qw215', 1234, 'asdf', 'asd123@naver.com', '거지같음');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (3, '3dfa1', 1234, 'asdf', 'asd123@naver.com', '너 뭐야');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (4, 'odfa23', 1234, 'asdf', 'asd123@naver.com', '새콤달콤귀신');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (5, 'kdd156', 1234, 'asdf', 'asd123@naver.com', '한잔용보리차');

INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, weather, isPublic, currentLocation) VALUES (6, '그럭저럭', '오늘은 그저 그랬다', 'soso', '2024-02-26 00:00:00',  22, false,  37.413294 );
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, weather, isPublic, currentLocation) VALUES (6, '그럭저럭', '오늘은 그저 그랬다', 'soso', '2024-02-20 00:00:00',  22, false,  37.413294 );
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, weather, isPublic, currentLocation) VALUES (6, '그럭저럭', '오늘은 그저 그랬다', 'soso', '2024-02-22 00:00:00',  22, false,  37.413294 );
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, weather, isPublic, currentLocation) VALUES (6, '슬픈 날', '오늘은 매우 슬픈 일이 있었다', 'sad', NOW(), 18, false, 37.413294);
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, weather, isPublic, currentLocation) VALUES (6, '화가 나는 날', '오늘은 화가 나는 일이 있었다', 'annoying', NOW(), 19, true,37.413294);
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, weather, isPublic, currentLocation) VALUES (6, '좋은 날', '오늘은 정말로 좋은 날이었다', 'great', NOW(), 21, false, 37.413294);

INSERT INTO toDoList (id, todoContent, createdAt, deadline, state)
VALUES
(1, 'Complete assignment', '2024-02-25 11:00:00', '2024-02-27 18:00', 'notStart'),
(1, 'Buy groceries', '2024-02-25 14:30:00', NULL, 'notStart'),
(2, 'Call mom', '2024-02-26 09:00:00', '2024-02-26 18:00', 'done'),
(3, 'Study for exam', '2024-02-26 11:30:00', '2024-02-28 09:00', 'notStart'),
(4, 'Pay bills', '2024-02-26 15:45:00', NULL, 'notStart');

INSERT INTO user (userid, password, salt, email, nickname, image)
VALUES
('user1', 'qwer1234', 'salt1', 'user1@example.com', 'John', 'image1.jpg');

INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, updatedAt, currentLocation, weather, isPublic)
VALUES
(1, 'My Diary', 'Today was great!', 'happy', '2024-02-25 10:30:00', '2024-02-25 10:30:00', '37.1234, -122.5678', 'sunny', true),
(2, 'Dear Diary', 'Feeling tired...', 'soso', '2024-02-25 14:45:00', '2024-02-25 14:45:00', '40.7128, -74.0060', 'cloudy', false),
(3, 'Happiness', 'Amazing day!', 'great', '2024-02-26 09:15:00', '2024-02-26 09:15:00', '51.5074, -0.1278', 'sunny', true),
(4, 'Sadness', 'Feeling down...', 'sad', '2024-02-26 13:20:00', '2024-02-26 13:20:00', '48.8566, 2.3522', 'rainy', false),
(5, 'Excitement', 'Big news today!', 'happy', '2024-02-26 18:05:00', '2024-02-26 18:05:00', '34.0522, -118.2437', 'sunny', true);

select * from user;
select * from diary;
select * from toDoList;
select * from reaction;

alter table diary drop column location; 

delete from user where id='7';
delete from diary where id='6';

drop table user;
drop table diary;
drop table reaction;
drop table todolist;