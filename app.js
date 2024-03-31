let myName="Gvantsa";
let myHobby="History";
let yearOfBirth="1999";
let currentYear="2024";


console.log(myName);
console.log(myHobby);
console.log(yearOfBirth);
console.log(currentYear);

let sub=currentYear-yearOfBirth;
console.log(sub);

let text="My name is " + myName + ", I am " + sub + " years old and my hobby is " + myHobby;
console.log(text);

let text2=`My name is ${myName} , I am ${sub} years old and my hobby is ${myHobby}`;
console.log(text2);