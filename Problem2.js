// 2번 문제.

// 코드를 실행할 필요는 없습니다. 출력할 때에는 return 혹은 alert를 사용해주세요!

let lionMoney = {
  상혁: 20000,
  유선: 8300,
  주용: 2800,
  맑음: 50000,
};

let sum = 0;

for (let key in lionMoney) {
  sum += lionMoney[key];
}

if (typeof window !== "undefined") {
  alert(sum); // "" 글자 , 그냥은 변수/ 변수값 출력
}
