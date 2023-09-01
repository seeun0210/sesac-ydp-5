use sesac;
show tables;

-- 테이블 구조 확인
desc Player;
desc Profile;
desc Team;

-- 테이블 조회
select * from Player;
select * from Profile;
select * from Team;

-- Players table 에 on delete cascade 확인 완료 (Profile table 연쇄 적용)
delete from Player where plyaer_id = 1;

-- 테이블 삭제 
-- 테이블간 관계가 있으므로 삭제시 순서 주의
drop table Profile;
drop table Player;
drop table Team;
