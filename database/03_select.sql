select * from customer;
-- custid 가 bunny인 회원
select * from customer where custid = 'bunny';
-- custid 가 bunny가 아닌 회원
select * from customer where custid != 'bunny';
select * from customer where not custid = 'bunny';
-- 2000-01-01 이후에 태어난 회원 조회
select * from customer where birth >= '2000-01-01';
-- 2000-01-01 ~ 2005-01-01 사이에 태어난 회원 조회
select * from customer where birth between '2000-01-01' and '2005-01-01';
-- addr 가 대한민국 서울, 미국 로스앤젤레스 둘 중 하나라면 조회
select * from customer where addr in ('대한민국 서울', '미국 로스앤젤레스');
-- addr가 대한민국을 포함한 회원 조회 (like 이용)
select * from customer where addr like '%대한민국%';
select * from customer where custname like '__수';
select * from customer where custname like '%해_';
-- is null 사용 예시 
select * from customer where custname is null;
-- AND, OR, NOT -- 
select * from customer where addr like '%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' OR birth <= '2000-05-05';

-- customer를 custname을 기준으로 내림차순 정렬하여 조회
select * from customer order by custname desc;

-- addr에 대한민국 포함하고 있는 회원 조회. custname 기준으로 내림차순 정렬 하여 조회
select * from customer where addr like '%대한민국%' order by custname desc;

-- addr에 대한민국 포함하고 있는 회원 조회. custname 기준으로 내림차순 정렬 하여 두명만 조회
select * from customer where addr like '%대한민국%' order by custname desc limit 2;

