const coupleDate = document.querySelector('#coupledate');
const coupleDateBtn = document.querySelector('#coupledate_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(coupleDate, coupleDateBtn, resultDate, resultTime)

coupleDateBtn.addEventListener('click',coupleFunc)
function coupleFunc(){
    //오늘 날짜와 사귀기시작한날
    const couple = new Date(coupleDate.value);
    const today = new Date();
    console.log(couple, today);
    //오늘 날짜 - 사귀기시작한날 = 사귄날짜
    const coupleToday = today.getTime() - couple.getTime();
    console.log(coupleToday);
    //사귄날짜를 시간, 일로 변환
    const dateFlow = Math.floor(coupleToday / (1000*60*60*24));
    const timeFlow = Math.floor(coupleToday / (1000*60*60));
    //원하는 위치에 출력
    resultDate.textContent = `♥${dateFlow} `;
    resultTime.textContent = `♥${timeFlow} `;
}