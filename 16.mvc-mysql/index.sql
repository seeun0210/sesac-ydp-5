Create table visitor(
id int NOT NULL primary key auto_increment,
name VARCHAR(10) NOT NULL ,
comment mediumtext );
desc visitor;
INSERT INTO visitor values(1,'홍길동','내가 왔다');
INSERT INTO visitor values(NULL, '이찬혁','으라차차');
INSERT INTO visitor values(NULL, '이수현','안뇽');
Select * from visitor;


-- database 인코딩 다시 정의해서 생성
show databases;
drop database sesac;
create database sesac;
-- 이모지, 특수문자를 사용 할 수 있는 인코딩
create database sesac character set utf8mb4 collate utfmb4_unicode_ci;
use sesac;

-- user라는 새로운 계정(mysql 접속 가능한 계정) 생성
CREATE USER 'user'@'%' identified with mysql_native_password by '1234'; 
-- 이전 버전에서는 identified by 로도 비번설정이 가능했으나 mysql 8.0ver로 넘어오면서 비번 설정방식이 mysql_native_password로 바뀜alter

-- user 계정에 대해서 모든 권한 부여(DCL 중에서 grant)
grant all privileges on *.* to 'user'@'%' with grant option;
-- mysql캐시 새로고침
flush privileges;