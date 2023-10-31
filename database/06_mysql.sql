-- 07-sequelize 폴더와 연계

CREATE TABLE `visitor` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `username` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` mediumtext COLLATE utf8mb4_unicode_ci
);

use sesac_test;

select * from visitor;