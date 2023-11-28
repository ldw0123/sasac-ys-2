CREATE TABLE customer 
( 
  custid CHAR(10) NOT NULL PRIMARY KEY,
  custname VARCHAR(10) NOT NULL, 
  addr CHAR(10) NOT NULL, 
  phone CHAR(11), 
  birth DATE 
);

CREATE TABLE orders 
(  orderid   INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
   custid    CHAR(10) NOT NULL, 
   prodname  CHAR(6) NOT NULL, 
   price     INT  NOT NULL, 
   amount    SMALLINT  NOT NULL,
   FOREIGN KEY (custid) REFERENCES customer(custid)
);

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

select * from customer;

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

select * from orders;

-- myplace db 생성
CREATE DATABASE myplace
DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

use myplace;

-- table 생성
create table user (
	u_id varchar(20) not null primary key,
    email varchar(30) not null,
    password varchar(255) not null,
    salt varchar(255) not null,
    name varchar(10) not null
);

create table gallery (
	g_id int not null primary key auto_increment,
    g_name varchar(40) not null,
    address varchar(50) not null,
    imgurl varchar(255) not null,
    deadline varchar(40) not null,
    website varchar(100) not null,
    category varchar(10) not null,
    detailaddr varchar(50)
);

create table comment (
	c_id int not null primary key auto_increment,
    g_id int not null,
    u_id varchar(20) not null,
    star int not null,
    review varchar(255) not null,
    foreign key (g_id) references gallery(g_id) on delete cascade,
    foreign key(u_id) references user(u_id) on delete cascade
);

create table heart(
	h_id int not null primary key auto_increment,
    u_id varchar(20) not null,
    g_id int not null,
    foreign key (u_id) references user(u_id) on delete cascade,
    foreign key (g_id) references gallery(g_id) on delete cascade
);

-- 팝업 스토어(이미지url 포함)
INSERT INTO gallery(g_name, address, imgurl,deadline, website, category, detailaddr) VALUES('Nintendo POP-UP STORE in SEOUL', '서울특별시 용산구 한강대로23길 55','https://images.ctfassets.net/sjvy5j5nlcjk/4pMJPvRYVb6b5mMz22arwI/85aa42eb1dcc8298edf54e767934fc17/MicrosoftTeams-image.png?w=1400&fm=webp' ,'2023.10.20~2023.11.26','http://www.nintendo.co.kr/news/article/4LtIAiy5M5EjuMNepzJFzS', 'popupstore','서울특별시 용산구 한강대로23길 55 아이파크몰 리빙파크');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('아닐로 x B the B ‘서울에서 쉬다’ in DDP', '서울 중구 을지로 281','https://anillo.co.kr/anillo/event/20230925_btheb/btheb_promotion_01.jpg' ,'2023.10.13~2023.12.12','https://anillo.co.kr/article/event/8/6502/categoryno/1/', 'popupstore','서울 중구 을지로 281 DDP 지하 2층 DDP마켓');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('이니스프리 성수', '서울 성동구 성수이로7가길 11','https://images.innisfree.co.kr/upload/mainMng/BM11_711_left_pc.jpg?T20231110190820' ,'2023.10.25~2023.12.20','[www.innisfree.com](http://www.innisfree.com/)', 'popupstore','서울 성동구 성수이로7가길 11 이니스프리 디아일');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('SISAO', '서울 성동구 연무장길 17','https://file.cafe24cos.com/banner-admin-live/upload/cosally22/24722bde-0a4e-4a49-84bd-9fdd86ea5e15.jpeg' ,'2023.10.07~2023.11.30','https://www.sisao.kr/', 'popupstore','서울 성동구 연무장길 17 1층');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('푸바오 팝업스토어 ‘마이 스위트홈’', '서울 영등포구 여의대로 108','http://bio.linkcdn.cc/upload/2023112006/1700462269721.jpeg' ,'2023.11.09~2023.11.22','https://m.booking.naver.com/booking/12/bizes/1012670', 'popupstore','서울 영등포구 여의대로 108 더현대서울 B2F');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('망그러진곰 감자농장 팝업스토어', '서울 마포구 양화로 162','https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20231110092335_adbb90c6520243aa8538acf5703f512f.jpg' ,'2023.11.03~2023.12.14','https://store.kakaofriends.com/home', 'popupstore','서울 마포구 양화로 162 좋은사람들빌딩 카카오프렌즈 홍대플래그십 스토어');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('북촌 조향사의 집', '서울시 종로구 북촌로 43','https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230921_81%2F1695270150843fYDd1_JPEG%2F%25B8%25DE%25C0%25CE%25C6%25F7%25BD%25BA%25C5%25CD_1x1.jpg', '2023.10.12~2023.11.30','', 'popupstore','서울시 종로구 북촌로 43, 북촌 조향사의 집 B1층');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('쿵야 레스토랑즈', '잠실 롯데월드몰 1층 아트리움', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDlfMTY5%2FMDAxNjk0MTkxMTY3NjA1.vSTZnjiB6PI1yk_rn6zNtUb8G8Ex4yvPrqkHnnGrxukg.BO5wrKAK6GFO6O89LkHf8hRdRnC0xwZxwI-x7Mnb-P4g.JPEG.m2owmeow%2FIMG_4260.jpg&type=sc960_832', '2023.11.17~2023.11.26', 'http://koongya.co.kr/', 'popupstore','');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('여기어때 여행책방', '강남역 교보문고 팝업스토어', '[https://post-phinf.pstatic.net/MjAyMzEwMThfMjkx/MDAxNjk3NjA0Mzk5OTA3.aDXUyFeaBoZtF2s9dGsWMWWrznrz-U_5VQE-N9BzXUIg.wGLmWtDsZk2ueNBeOHZHvGPmmX-xAM4WxrHO4YZdCuEg.JPEG/_Z2A8311.jpg?type=w1200','2023.09.25~2023.11.26','','popupstore','서울특별시](https://post-phinf.pstatic.net/MjAyMzEwMThfMjkx/MDAxNjk3NjA0Mzk5OTA3.aDXUyFeaBoZtF2s9dGsWMWWrznrz-U_5VQE-N9BzXUIg.wGLmWtDsZk2ueNBeOHZHvGPmmX-xAM4WxrHO4YZdCuEg.JPEG/_Z2A8311.jpg?type=w1200%27,%272023.09.25~2023.11.26%27,%27%27,%27popupstore%27,%27%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C) 서초구 강남대로465 교보타워 B1층 A구역');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('선양소주 팝업스토어', '서울특별시 성동구 성수이로 18길18','https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231107_49%2F16993230481607rAsM_JPEG%2F%25BC%25B1%25BE%25E7_%25C6%25F7%25BD%25BA%25C5%25CD_230223_%25C1%25A6%25C0%25DB_%25BA%25ED%25B7%25E7-01_1.jpg&type=sc960_832', '2023.11.17~2023.12.09', '', 'popupstore','' );
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('어그X무신사', '서울특별시 성동구 연무장5길 20', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTVfMTg3%2FMDAxNzAwMDE3ODM5NTgz.t5AIX11pbGcZ4ESF8eWeI-j-qqCoYS9WsMGmWu_EmLAg.wsPLowASDWa6Ux7kuqP8RGKmWswuh6OT1eDHKTf2--kg.PNG.dittofinance77%2Fimage.png&type=sc960_832', '2023.11.23~2023.11.26', '', 'popupstore', '서울특별시 성동구 연무장5길 20 1F SCENE');
-- exhibition(imgurl 포함)

INSERT INTO gallery(g_name, address, imgurl, deadline, website, category, detailaddr) VALUES('The Colossal Beauty', '서울특별시 영등포구 국제금융로 10', 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20231110_3%2F16995821922045f11J_JPEG%2F360_32345257_main_thumb_url_1699582192163.jpg', '2023.12.01~2024.01.28', 'https://mpx.co.kr/', 'exhibition','서울특별시 영등포구 국제금융로 10 IFC몰 지하 L3 MPX갤러리');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('View in A View', '서울 용산구 임정로 35 ','https://lh3.googleusercontent.com/jvlXw6qMThp5oyxr5aa_Wbe9ePGoP6eHUI_hGetTeZtuXNiB-QMeWl5qUAjBiHjzGZB5XdSZS6XcS_23bap9-zsaQc6hiKb_hv4wYea7qmKKfkAiz92qU3Y', '2023.11.02~2023.11.28','[www.gallerythec.com/](http://www.gallerythec.com/)', 'exhibition','서울 용산구 임정로 35 2층 갤러리더');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('신비아파트 미디어 어드벤처 : 봉인된 퇴마서', '서울 영등포구 영중로 15','https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTRfNyAg%2FMDAxNjY4NDIyMDY2Njcx.lQfBSw6YYH14oTCTmbmzyg3qnGwgmQBnhla3Ihdso-cg.Ac_n_vL02EaatrBTIX8glBJX2mL70GJ7KSEZZhJgqawg.JPEG.qorghk78%2FIMG_3799.JPG&type=sc960_832' ,'2023.11.01~2024.02.12','[blog.naver.com/dive_in_kr](http://blog.naver.com/dive_in_kr)', 'exhibition','서울 영등포구 영중로 15 타임스퀘어 지하 1층');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('Art For Green 공간에서 공감으로 Part.2','서울 서초구 효령로72길 60','https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231102_99%2F1698904289452UDRUO_JPEG%2FIMG_3580.jpeg',  '2023.11.07~2023.12.05','', 'exhibition','서울 서초구 효령로72길 60 한전아트센터 1층');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('문규화:월동준비', '서울 종로구 자하문로7길 68-4','https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20231031_283%2F1698734255901fTjuP_JPEG%2F360_main_thumb_url_1698734255879.jpg', '2023.11.03~2023.11.30','https://www.drawingroom.kr/', 'exhibition','서울 종로구 자하문로7길 68-4 2층 드로잉룸');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('Reflection', '서울특별시 종로구 평창10길 7-12','https://static.wixstatic.com/media/0de2d4_e26d53c585cb47579cc9b2d5e0b51cfb~mv2.jpg/v1/fill/w_1803,h_663,al_c,q_85,enc_auto/0de2d4_e26d53c585cb47579cc9b2d5e0b51cfb~mv2.jpg' , '2023.11.09~2023.12.09','https://www.joongjunggallery.com/', 'exhibition','서울특별시 종로구 평창10길 7-12 중정갤러리');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('심성규 초대전 : 100년의 약속-연인', '서울 종로구 인사동길 35-4','https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220413_156%2F1649840302580so5vB_JPEG%2FKakaoTalk_20220413_175056249.jpg' ,'2023.11.22 ~ 2023.11.27','https://maruartcenter.co.kr/default/', 'exhibition','서울 종로구 인사동길 35-4 본관 3층 마루아트센터 그랜드관');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('The Colossal Beauty', '서울특별시 영등포구 국제금융로 10', '2023.12.01~2024.01.28','https://mpx.co.kr/', 'exhibition','서울특별시 영등포구 국제금융로 10 IFC몰 지하 L3 MPX갤러리','https://postfiles.pstatic.net/MjAyMzExMTVfMjQz/MDAxNzAwMDUxMTQwODU5.C1Y7KZLYcD9fZhlAZKEF0NHVsduzsPF-hz1DRo2HUrUg.Fy_jLhkoAgdAZfs28HULiOdcq1f4p647oKDm2Sr1bpQg.JPEG.ohseongae/1700051140584.jpg?type=w966');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('SILVERLINING:SUNG NAK JIN/희희낙락', '서울 용산구 이태원동 74-26', 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20231121_9%2F1700535066786E2MeH_JPEG%2F360_main_thumb_url_1700535066768.jpg', '2023.11.21~2023.12.07', '', 'exhibition', '서울특별시 용산구 이태원동 74-26 1층');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('분리된 합체(영등포)', '영등포 술술센터  술술갤러리', 'https://www.ydpcf.or.kr/data/post/202311/1700186255_577.jpg', '2023.11.18~2023.11.29', 'https://www.ydpcf.or.kr/postview.do?bid=1&pid=1599', 'exhibition', '서울 영등포구 도림로 133길 15');
INSERT INTO gallery(g_name, address,imgurl, deadline, website, category, detailaddr) VALUES('권기수 개인전《너나나나나나너나》', '서울시 종로구 팔판길42', 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20231117_257%2F17002083604801tevI_PNG%2F360_main_thumb_url_1700208360429.png', '2023.11.17~2023.12.14', '', 'exhibition', '서울시 종로구 팔판길42. 1층' );
-- museum(imgurl)
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('물고기가 첨벙! 어문魚文 분청사기', '서울 용산구 서빙고로 137', '2023.09.23~2024.04.25','https://www.museum.go.kr/site/main/home', 'museum','서울 용산구 서빙고로 137 국립중앙박물관','https://www.baronews-k.com/news/photo/202310/1354_5092_1223.png');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('6.25전쟁 전사자 유해발굴 유품 특별전 ‘다시 부르는, 이름’', '서울 용산구 이태원로 29', '2023.10.19~2024.04.28','https://www.warmemo.or.kr:8443/', 'museum','서울 용산구 이태원로 29 전쟁기념관 3','https://img.asiatoday.co.kr/file/2023y/10m/18d/20231018010009339_350.jpg');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('물과 환경 전시관', '서울 성동구 왕십리로 27', '2023.11.01~2023.12.31','https://arisu.seoul.go.kr/arisumuseum/intrcn/sub1.jsp', 'museum','서울 성동구 왕십리로 27 수도박물관','https://arisu.seoul.go.kr/arisumuseum/dspy/photo/36.jpg');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('만천곤충박물관', '서울 영등포구 영등포로 180', '2023.11.01~2023.12.31','https://www.dryinsect.co.kr/', 'museum','서울 영등포구 영등포로 180 2층','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcfIGKfgnTgd9FB5DcO2IOzlIUkNCs7FBUg&usqp=CAU');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('활옷 만개滿開, 조선왕실 여성 혼례복', '서울 종로구 효자로 12', '2023.09.15~2023.12.13','https://www.gogung.go.kr/gogung/main/main.do', 'museum','서울 종로구 효자로 12 국립고궁박물관','https://cdn.imweb.me/thumbnail/20230919/20cbbac999ab4.jpg');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('서울의 멋', '서울 종로구 새문안로 55', '2023.10.17~2024.02.18','https://museum.seoul.go.kr/www/NR_index.do?sso=ok', 'museum','서울 종로구 새문안로 55 서울역사박물관','https://img.newspim.com/news/2023/10/16/2310161032421030.jpg');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('사색사유', '서울 종로구 율곡로3길 4', '2023.10.20~2023.12.10','[http://craftmuseum.seoul.go.kr](http://craftmuseum.seoul.go.kr/)', 'museum','서울 종로구 율곡로3길 4 서울공예박물관','https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMDFfMTY5%2FMDAxNjk4ODI5NzA3ODY3.RuaLo88yn49sqRuFQkgaD3Pv1L4MvQfGDKIxb3TTLwMg.JXhZUaySrPNBNjRCkjU4KSBI2AKQEDsRJPhrbyGJzRAg.PNG.gareboon%2Fimage.png&type=sc960_832');

-- artgallery(imgurl)
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('나를 생각하는', '서울특별시 중구 동호로 353', '2023.11.08~2023.12.02','', 'artgallery','서울특별시 중구 동호로 353 4층 에브리아트','https://postfiles.pstatic.net/MjAyMzEwMjVfMjAx/MDAxNjk4MjA0MTk1MTI2.S4flBOTQKPp33nJK50P_Wmko02HWVG4pEfP88DAwI5sg.tESecnZbUHTVVyuz-yZVAHi3b_Fp0AR87n-t-8VNMZMg.PNG.everyart1111/SE-37786f43-2ad1-4581-9ac1-75264bb0d4ed.png?type=w773');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('80 도시현실', '서울 중구 덕수궁길 61', '2023.05.25~2025.05.26','https://sema.seoul.go.kr/', 'artgallery','서울 중구 덕수궁길 61 서울시립미술관','https://news.seoul.go.kr/culture/files/2023/05/64acd8966f30e5.27235388-1085x1536.jpg');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('권진규의 영원한 집', '서울 관악구 남부순환로 2076', '2023.11.01~2023.12.31','https://sema.seoul.go.kr/', 'artgallery','서울 관악구 남부순환로 2076 서울시립미술관','https://phinf.pstatic.net/image.nmv/blog_2023_05_31_2927/86bbfb43-ff56-11ed-bb6e-505dac8c35ff_03.jpg?type=w2');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('에르베 튈레展 색색깔깔 뮤지엄', '서울 서초구 남부순환로 2406', '2023.11.03~2024.03.03','[http://www.sac.or.kr](http://www.sac.or.kr/)', 'artgallery','서울 서초구 남부순환로 2406 한가람미술관 제3전시실, 제4전시실','http://tkfile.yes24.com/upload2/PerfBlog/202309/20230914/20230914-47173.jpg');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('프로젝트 해시태그 2023', '서울 종로구 삼청로 30', '2023.11.03~2024.04.07','https://www.mmca.go.kr/', 'artgallery','서울 종로구 삼청로 30 국립현대미술관','https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F421%2F2023%2F11%2F02%2F0007149384_001_20231102105203994.jpg&type=a340');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('MSCHF: NOTHING IS SACRED', '서울 종로구 자하문로4길 21', '2023.11.10~2024.03.31','https://daelimmuseum.org/', 'artgallery','서울 종로구 자하문로4길 21 대림미술관','https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMzFfMTM4%2FMDAxNjk4NzE5Mzc1NjM3.CJFG5vEqlkdKWzUe6h2VsGxrO9XYiSPg3MMe-WPA-VYg.1sYL5mjVppbWozuVDw_tZFPTwBGws23RQfvEnJOQ1Nkg.JPEG.himediacokr%2F231031.jpg&type=a340');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('THIEVES OF A PIECE OF NIGHT', '서울 마포구 독막로29길 48', '2023.11.03~2023.12.03','','artgallery','서울특별시 마포구 독막로29길 48 광성빌딩2층', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTNfODEg%2FMDAxNjk5ODIxMjQ3ODIz.aeWKBvc3ortP0sRJ6cfdqryfSYvExvPiF8_tuNYT_zgg.eJBCKr0q8X5pcVD8AJCiSPIbCJasSXc1WbrlciKU5Pog.JPEG.04shake%2FIMG_5052.jpg&type=sc960_832' );
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('소설가 구보씨의 일일-구보의 구보', '서울 강남구 영동대로 138길 23', '2023.10.13~2024.01.28', '', 'artgallery', '서울 강남구 영동대로 138길 23 1층', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2023%2F10%2F15%2FNISI20231015_0001386260_web_20231015142420_20231015145704788.jpg&type=sc960_832');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('몽돌, 숲 그래고 제주', '서울 강남구 논료로 132길6', '2023.11.01~2023.11.28', '', 'artgallery', '서울 강남구 논현로 132길 6 미래빌딩 1F', 'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20231025_48%2F1698217363148ywK6r_JPEG%2F360_main_thumb_url_1698217363113.jpg');
INSERT INTO gallery(g_name, address, deadline, website, category, detailaddr, imgurl) VALUES('KNOT KNOT LAND', '서울 송파구 올림픽로 300', '2023.10.13~2023.12.10', 'https://www.lotteshopping.com/gallery/exhibitionDetail?gallyNo=GAN00000000000001576', 'artgallery', '서울 송파구 올림픽로300 롯데백화점 잠실 에비뉴엘 6층', 'https://search.pstatic.net/sunny?src=https%3A%2F%2Fminfo.lotteshopping.com%2Fcontent%2Fgallery%2F202310%2FGAN00000000000001576%2F20231012162040886_4.png&type=fff208_208');