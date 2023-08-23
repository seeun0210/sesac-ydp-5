-- 데이터베이스: 데이터의 집합

-- 참고)SQL은 대소문자를 구별하지 않는다!!(create~==CREATE~~)
-- 하지만, 가독성을 위해 키워드는 대문자로 작성(관례)
-- ex) CREATE DATABASE sesac;(CREATE, DATABASE: 키워드) 
-- 세미콜론(;)이 반드시 있어야 한다.
-- ctrl+Enter: 커서가 올려진 문장 실행

-- DBMS: 데이터베이스를 운영/관리하는 프로그램(ex. MySQL)
-- 테이블: 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위
-- SQL: RDBMS에서 사용되는 언어(데이터베이스를 구축, 관리, 활용하기 위한 언어)

-- <DDL(Data Definition Language)>
-- 데이터페이스, 테이블을 정의하는 언어

-- [Database 관련 명령어]
-- 1. Database 생성
create database sesac default character set utf8 collate utf8_general_ci;

-- 2. Database 목록 조회
show databases;

-- 3. Database 사용 선언(잊지 말기~~)
use sesac;

-- 4. Database 삭제
drop database sesac;

-- [Table 관련 명령어]
-- 1.테이블 생성
-- 제약조건("옵션")
-- NOT NULL: NULL 허용 x
-- AUTO_INCREMENT: 자동숫자 증가, 테이블에 데이터추가할때마다 자동으로 숫자 증가
-- PRIMARY KEY: 기본키(중복값 허용X, NULL 허용 X)-->PRIMARY KEY가 있으면 자동으로 NOT NULL==>하나의 테이블 당 하나만 가능
-- DEFAULT 기본값: 특정 속성의 기본값을 설정
-- UNIQUE: 중복을 허용하지 않는다, NULL 허용(PRIMARY KEY와의 차이점)==>하나의 테이블당 여러개 가능!(예를들어서 주민번호는 PK는 될수 없지만 겹치면 안되니까 UNIQUE를 걸 수 있다)
CREATE TABLE product (
id INT PRIMARY KEY NOT NULL auto_increment, 
name VARCHAR(50) NOT NULL,
model_number VARCHAR(50) NOT NULL,
series VARCHAR(30) NOT NULL
);

-- 2. 테이블 목록 확인
-- 현재 사용중인 데이터 베이스의 모든 테이블 조회
SHOW TABLES;

-- 3. 테이블 구조 확인
-- 테이블 column 정보(자료형, NULL 여부, KEY, DEFAULT 등)
DESC product;

-- 4.테이블 삭제
-- drop: 테이블 존재 자체를 없앰(테이블을 잘못 만들었거나 더 이상 필요없는 경우
DROP TABLE product;
-- truncate: 테이블 구조만 남겨놓고 테이블의 모든 행(row)일괄 삭제, 구조만 남기고 그 안에 자료만 없애는 것, 테이블 초기화
truncate table product;

-- 5. 테이블 정의 수정-->alter명령어
-- 이미 테이블을 만들었고, 테이블에 데이터가 추가되었을 때
-- column정보가 바뀌어야 하는 경우 사용

-- 5-1) column추가
ALTER TABLE product ADD new_column date;

-- 5-2) column 수정
ALTER TABLE product modify new_column INT;
ALter table product change new_column new_column2 int;-- 컬럼 명 변경
