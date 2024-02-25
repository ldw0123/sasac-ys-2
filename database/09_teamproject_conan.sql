-- 3차 팀 프로젝트 / 2조 / 내이름은 코난, 탐정2조
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
	currentLocation DOUBLE NOT NULL,
	weather VARCHAR(50) NOT NULL,
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
	state ENUM('notStart', 'done') NOT NULL DEFAULT 'notStart',
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

INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (1, 'asd123', 'qwer1234', 'salt1', 'keiua123@gmail.com', '피카츄');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (2, 'asd1234', 'qwer1234', 'salt2', 'lasdf426@naver.com', '치코리타');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (3, 'asd12345', 'qwer1234', 'salt3', 'user3@email.com', '은하철도의밤');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (4, 'qwe123', 'qwer1234', 'salt4', 'wekic8356@email.com', '똥멍청이');
INSERT INTO user (id, userid, password, salt, email, nickname) VALUES (5, 'qwe1234', 'qwer1234', 'salt5', 'ukeci3542@email.com', '달디단밤양갱');
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, currentLocation, weather, isPublic) VALUES (1, '기분 좋은 날', '오늘은 날씨가 좋아서 기분이 좋았다.', 'happy', NOW(), '서울', 20, true);
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, currentLocation, weather, isPublic) VALUES (2, '그럭저럭', '오늘은 그저 그랬다.', 'soso', NOW(), '부산', 22, false);
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, currentLocation, weather, isPublic) VALUES (3, '슬픈 날', '오늘은 매우 슬픈 일이 있었다.', 'sad', NOW(), '대구', 18, false);
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, currentLocation, weather, isPublic) VALUES (4, '화가 나는 날', '오늘은 화가 나는 일이 있었다.', 'annoying', NOW(), '인천', 19, true);
INSERT INTO diary (id, diaryTitle, diaryContent, mood, createdAt, currentLocation, weather, isPublic) VALUES (5, '좋은 날', '오늘은 정말로 좋은 날이었다.', 'great', NOW(), '광주', 21, false);

SELECT * FROM user;
SELECT * FROM diary;
DROP TABLE diary;

DELETE FROM user WHERE id =1;
