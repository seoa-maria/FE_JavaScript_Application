// 4번 문제.

let user = {
  Name: "지환",
  years: 23,
};

console.log(user.Name);

// 아래에 코드를 작성해주세요 ~

let { Name: name, years: age, isAdmin } = user;

alert(name);
alert(age);
alert(isAdmin ? isAdmin : false);
