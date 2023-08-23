desc customer;
CREATE TABLE customer(
custid char(10) NOT NULL primary KEY,
custname VARCHAR(10) NOT NULL,
addr CHAR(10) NOT NULL,
phone CHAR(11),
birth date
);
-- 여기에서 sesac이라는 database를 ddl파일에 생성했더라도 ddl폴더에서 create database sesac~하고 use sesac후에 create customer하고 desc customer하면 생성된 table 확인할 수 있음

-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음(RDBMS)
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본 키를 갖는 테이블(여기에서는 customer)
-- 참조 테이블: 외래 키가 있는 테이블(여기에서는 orders)
-- 형식: foreign key (열_이름) references 기준_테이블(열_이름)

-- on update cascade: 기준 테이블의 데이터가 변경되면 참조테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조테이블의 데이터도 삭제
CREATE TABLE orders (
orderid INT PRIMARY KEY AUTO_INCREMENT,
custid CHAR(10) NOT NULL, -- 외래키로 사용하고 싶다
prodname char(6) NOT NULL, 
price INT NOT NULL,
amount SMALLINT NOT NULL,
FOREIGN KEY (custid) REFERENCES customer(custid) ON UPDATE CASCADE ON DELETE CASCADE
-- orders의 custid 키(외래키)가 customer의 custid 키를 바라보도록 한다
);
-- 테이블 삭제 순서!
-- customer 테이블과 orders 테이블이 customercustid, 를 기준으로 "관계"를 맺음
-- customer 테이블에 존재하는 회원만 orders 테이블에 데이터를 추가할 수 있음
-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제 (drop)하면?
-- orders테이블은 어떤 고객의 생일 정보를 알고싶어도 customer테이블 자체가 날라갔기 때문에 알 수 없음.
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블(참조테이블)을 먼저 삭제해야한다

-- 그래서 (1)orders 테이블을 삭제하고 -> (2)customer 테이블을 삭제해야한다.


-- INSERT: 추가
-- INSERT 방법 1)
INSERT INTO customer (custid, custname, addr, phone, birth) VALUES ('lucky', '강해원','미국 뉴욕','01022223333','2022-03-05');
insert into customer (addr, phone, birth, custid, custname) 
	values ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');
    
-- 속성을 지정하지 않는다면, column이 정의된 순서대로 입력
insert into customer values ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 튜플 동시 추가
insert into customer values 
	('asdf', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
	('sdfg', '윤지성', '일본 도쿄', '01033331236', '1995-02-15'),
    ('dfgh', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');

insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');
insert into orders values (NULL, 'kiwi', '프링글스', '3000', 5);
insert into orders values (NULL, 'apple', '프링글스', '3000', 1);
insert into orders values (NULL, 'kiwi', '홈런볼', '2000', 3);



-- UPDATE 수정
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
update customer set addr='대한민국 서울' where custid='happy';

-- DELETE: 삭제
-- cust id가 happy인 사람의 정보를 테이블에서 삭제
delete from customer where custid='happy';

-- 고객 테이블에서 'apple'고객을 삭제했을 때, 주문 테이블에서 'apple' 고객의 주문 정보가 함께 삭제되는지(on delete cascade)
delete from customer where custid='apple';
-- apple 아이디를 갖는 고객을 customer 테이블에서 삭제한 후,
-- apple 주문 정보를 orders 테이블에 추가하려고 할 때 에러 발생 => 왜?!
-- 기준 테이블에 custid = 'apple'인 회원은 존재하지 않음!
-- orders 테이블에서 apple 회원의 데이터는 추가될 수 없음!

-- SELECT: 조회
SELECT * FROM customer;
SELECT * FROM orders;


TRUNCATE TABLE customer;
TRUNCATE TABLE orders;


INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');




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

-- 모든 고객의 아이디를 검색
select custid from customer;

-- 모든 고객의 아이디 생년월일을 검색
select custid, birth from customer;

-- 모든 고객의 생년월일 ,아이디 검색(순서 있음)
select birth, custid from customer;

-- 모든 고객의 아이디, 이름, 주소, 전화번호, 생년월일을 검색
select custid, custname, addr, phone, birth from customer;
-- ==와일드카드(*) 사용
select * from customer;

-- 고객 테이블에 있는 모든 주소 검색
select addr from customer;
-- 주소를 가져오되 중복값을 제외하고 싶다면? DISTINCT
-- DISTINCT: 중복제거
select distinct addr from customer;

