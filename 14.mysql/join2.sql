-- https://ju-hy.tistory.com/102
drop table instructor;
create table instructor (
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salary int
);

drop table teaches;
create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);


insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

/*
SQL에서 기본적으로 JOIN 키워드를 사용하거나 콤마(,)를 통해 연결하면 Inner Join 연산을 수행한다.
이 때, 조건이 설정되지 않은 Inner Join은 Cross Join과 같은 연산을 수행한다.
*/
SELECT * FROM instructor JOIN teaches;
SELECT * FROM instructor, teaches;

/*
이 때, Inner Join 뒤에 ON 키워드를 통해 일치하는 속성을 기준으로 결합할 수도 있으며, 이를 Equi Join이라고 한다.
*/
SELECT * FROM instructor I JOIN teaches T ON I.id=T.id;

/*
Outer Join은 공통된 부분만 결합하는 Inner Join과 다르게 공통되지 않은 row도 유지한다.
이 때, 왼쪽 테이블의 row를 유지하면 Left Outer Join,
오른쪽 테이블의 row를 유지하면 Right Outer Join,
양쪽 테이블의 row를 모두 유지하면 Full Outer Join이다.
*/
delete from teaches where id <= 2;

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');
insert into teaches values (6, '알고리즘', '가을', '2023');

select * from instructor;
select * from teaches;

-- left outer join
SELECT * FROM instructor I LEFT OUTER JOIN teaches T ON I.id=T.id;

-- right outer join
SELECT * FROM instructor I RIGHT OUTER JOIN teaches T ON I.id=T.id;

-- full outer join 
-- 참고) mysql 에서는 full outer join 을 지원하지 않음
-- left join과 right join을 union(합쳐서) 하여 full outer join 사용 가능
-- SELECT * FROM instructor I FULL OUTER JOIN teaches T ON I.id=T.id; -- error code 1064: syntax error
SELECT * FROM instructor I LEFT OUTER JOIN teaches T ON I.id=T.id
UNION
SELECT * FROM instructor I RIGHT OUTER JOIN teaches T ON I.id=T.id;

-- natural join
-- 같은 값을 갖는 항목끼리 결합. 같은 값 없다면 해당 항목 제외
SELECT * FROM instructor NATURAL JOIN teaches;