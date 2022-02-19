DB 스키마

데이터 저장할 공간을 만들어두는 행위?

SOURCE 경로복사

DB의 데이터타입

int : 숫자


varchar : 글자가 유동적으로 들어가는 내용이다.

(이름 적을 때?? 글자 길이를 예측할 수 없을 때)


char : 고정적으로 들어가는 내용이다.

(성별 적을 때?? 글자 길이를 고정할 수 있을 때)


text : 글자를 많이 넣을 수 있다!

timestamp : 날짜를 넣고 싶을 때 (timestamp말고도 더 있지만 이걸로 쓰도록 하자)


* 데이터 타입에 맞게 값을 넣어보자


* not null : 빈값 허용안함


* primary key : 중복값을 넣지않게 해줌

* auto_increment : 값을 넣지 않아도 알아서 넣어줌 
( 유의! auto_increment는 한 레코드의 고유한 키 값을을 넣어주는거지, 순서를 넣기위한 기능은 아니라는 것을 알아야한다! )


* select문

: select문 == table

* 필드 값을 합치고 싶을 때

select sum(필드명) from 테이블;

* 필드 값을 합치고 필드명을 바꾸고 싶을때

select sum(필드명) as (바꿀이름) from 테이블;


sum,group by : 통계함수


테이블 만들어보기

게시판


