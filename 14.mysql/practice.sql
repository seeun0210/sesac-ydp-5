CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT "x"
);
DESC member;
ALTER TABLE member moDIFY interest VARCHAR(100);
ALTER TABLE member DROP age; 
Alter TABLE MEMBER modify ID VARCHAR(10);

CREATE TABLE user(
id VARCHAR(10) NOT NULL PRIMARY KEY,
pw VARCHAR(20) NOT NULL,
name VARCHAR(5) NOT NULL,
gender ENUM('F','M','') DEFAULT '',
birthday DATE NOT NULL,
age INT NOT NULL DEFAULT 0);
DESC user;
INSERT into user values
('hong1234','8o4bkg','홍길동','M','1990-01-31',33),
('sexysung','87awjkdf','성춘향','F','1992-03-31',31),
('power70','qxur8sda','변사또','M','1970-05-02',53),
('hanjo','jk48fn4','한조','M','1984-10-18',39),
('widowmaker','8ewifh3','위도우','F','1976-06-27',47),
('dvadva','k3f3ah','송하나','F','2001-06-03',22),
('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);
SELECT * FROM user;
-- 1.모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user ORDER BY birthday asc;
-- 2.회원 목록 중 gender 컬럼의 값이 'M'인 회원목록을 가져오는데, 이때 name의 컬럼값을 기준으로 내림차순 정렬하여 가져오시오.
SELECT * FROM user WHERE gender='M' ORDER BY name desc; 
-- 3.1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
SELECT id,name FROM user WHERE birthday between '1990-01-01' and '1999-12-31';
-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user WHERE birthday like '_____06___' order by birthday desc;
-- 5. gender 컬럼의 값이 'M' 이고, 1970년대에 태어난 회원의 목록을 가져오시오.
SELECT * FROM user WHERE gender='M' AND birthday between '1970-01-01' and '1979-12-31';
-- 6. 모든 회원 목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
SELECT * FROM user ORDER BY AGE desc limit 3;
-- 7. 모든 회원 목록 중 나이가 25이상 30 이하인 회원의 목록을 출력하시오
SELECT * FROM user WHERE age>=25 and age<=50;
-- 8. id 컬럼의 값이 hong1234인 레코드의 pw 컬럼의 값을 12345678로 변경하시오  
UPDATE user SET pw='12345678' WHERE id='hong1234';
SELECT * FROM user WHERE id='hong1234';
-- 9. id 컬럼의 값이 'jungkrat'인 레코드를 삭제하시오.
DELETE FROM user WHERE id='jungkrat';
SELECT * FROM user;