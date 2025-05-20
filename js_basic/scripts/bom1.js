//BOM(browser object model) 내장함수
/* const msg1 = window.alert('잠시 기다려 주세요');
const msg2 = window.alert('잘못 접근하셨습니다');
console.log(msg1); */ //alert는 일회성이라서 개발자도구의 콘솔에서 값이 undefinde로 나온다.
/* const userAge = window.prompt('나이를 입력하세요');
console.log(userAge); */ // prompt는 값을 받아서 전달하기 때문에 개발자도구의 콘솔에서 입력한 값이 보인다.
/* const userPrint = window.confirm('인쇄하시겠습니까')
console.log(userPrint); */
//const userInfo = window.open('https://google.com','_blank');
//const userWrite = window.document.write('hello js');
//window.document.write('안녕하세요 자바스크립트');
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 선언할 필요 없이 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM 내장함수 : prompt(), confirm()
//window.print();
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야 한다.
//==========================================DOM - HTML Node
const pTag = document.getElementsByTagName('p');
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group'); //앞에 이미 클래스 선언이 있기 때문에 .을 안써도됨
const liCls = document.getElementsByClassName('list');
const actCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
const define = document.getElementsByClassName('define');
const title = document.getElementById('title');
const dtTag = document.getElementsByTagName('dt')[1];
const contents = document.getElementsByClassName('contents');
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(actCls);
console.log(wrapId);
console.log(define);
console.log(title);
console.log(dtTag);
console.log(contents);
//==========================================DOM 객체 속성
//객체.style = 'CSS속성:값';
pTag[0].style = 'background-color:yellow';
pTag[1].style = 'background-color:pink';
ulCls[0].style = 'border:1px solid red';
liCls[0].style = 'border-bottom:1px solid blue';
liCls[1].style = 'border-bottom:1px solid lime';
liCls[2].style = 'border-bottom:1px solid aqua';
liCls[3].style = 'border-bottom:1px solid green';
actCls[0].style = 'color:coral';
actCls[1].style = 'color:purple';
wrapId.style = 'padding:30px';
func.style = 'color:red';
define[0].style = 'background-color:red';
title.style = 'background-color:yellow';
dtTag.style = 'background-color:pink';
contents[0].style = 'background-color:blue';
contents[1].style = 'background-color:blue';
// 위와 같이 stlye속성을 이용한 CSS는 일반 CSS선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹브라우저 F12 개발자도구에서만 확인 가능하다.
//CSS 우선순위 : 자바스크립트 style속성 > ID > Class > Tag
console.log('=============================================');
//ES6 querySelector 이용 DOM선택하기
const orderOl = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item');
console.log(orderOl);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
orderLi[0].style = 'font-size:2rem';
orderToday.style = 'font-weight:700';
orderItem.style = 'font-size:2rem';
console.log('=============================================');
const aAll = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const gnbLi = document.querySelectorAll('.gnb > li');
const lnbLi = document.querySelectorAll('.lnb > li');
const gnb = document.querySelector('.gnb');
const lnb = document.querySelector('.lnb');
console.log(aAll);
console.log(nav);
console.log(gnbLi);
console.log(lnbLi);
console.log(gnb);
console.log(lnb);
aAll[0].style = 'color:black';
aAll[1].style = 'color:black';
aAll[2].style = 'color:black';
aAll[3].style = 'color:black';
nav.style = 'background-color:aqua;'
gnbLi[0].style = 'border:1px solid black'
gnbLi[1].style = 'border:1px solid black'
lnbLi[0].style = 'border:2px solid blue';
lnbLi[1].style = 'border:2px solid blue';
gnb.style = 'background-color:pink';
//lnb.style = 'background-color:red';
// 객체.속성 = '값';
// 객체.속성.속성 ='값';
lnb.style.backgroundColor ='red';
lnb.style.padding = '30px';
lnb.style.borderTop ='2px solid lime';
console.log('=============================================');
let a = 10;
let b = "10";
console.log(a, typeof a); //10 number
console.log(b, typeof b); //10 string
//let age =prompt('당신의 나이는?');
//alert(typeof age);
//prompt로 사용자가 입력하는 값은 무조건 문자(string)으로 처리된다.(암시적 형변환)
//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고싶다면 명시적형변환 중 숫자로 변환해주는 Number() 내장함수를 사용한다.
//Number(숫자로 변환하고싶은 데이터 또는 함수)
//const age = prompt('당신의 나이는?');
//const age = Number(prompt('당신의 나이는?'));
//(위) 프로그래밍 동작 순서
//1. prompt('당신의 나이는?') : 사용자가 입력한 값을 문자로 자동변환
//2. Number() : prompt가 문자로 변환한값을 숫자로 명시적변환
//3. age = : 변수age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}살입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age)+1}살입니다.`);
//console.log('=========쇼핑몰 구입 알고리즘');
//상품 1개 가격 기준 15700원
//현재 이벤트중 1+1
//1. 사용자가 구입할 물건 개수 정하기
//2. 개수에 따라 최종 가격 구하기
//결과예) 구입할 물건은 ?개이고 이벤트상품 ?개가 추가됩니다. 총 결제 가격은 ?원입니다.
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요'));
const eventNum = productQa; //이벤트 증정 개수
const total = price * productQa; //최종 결제 가격
console.log(`구입할 물건은 ${productQa}개이고 이벤트상품은 ${eventNum}개가 추가됩니다. 총 결제 금액은 ${total}원입니다.`);
