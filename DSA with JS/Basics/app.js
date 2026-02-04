console.log(a);
var a = 12;

// console.log(b);

let b = 12;
let c = "13";

//addition
console.log(a + b);
console.log(typeof (a + b));

//concatination
console.log(c + b);
console.log(typeof (c + b));

console.log("sum of a + b is =" + a + b);
console.log("sum of a + b is =" + (a + b));

//type coercion

console.log("1" + 1);
console.log("1" - 1);
console.log("1" * 1);
console.log("1" / 1);

//accept and print the answer
let age = prompt("whats your age");
console.log(age);

let age2 = Number(prompt("whats your age")); //typeCasting or typeConversion
console.log(age2);

console.log(Number("ali")); //NaN

console.log(Math.floor(5 / 2)); //2
console.log(5 / 2); //2.5
console.log(5 % 2); // 1

//relational operators

// <, >, <= ,>= ,=, == , != (not equal) , !== ( strict not equal), === (strict equal)

// logical operators

// && ,||

// unary operators

// ++, --

console.log(a++);
console.log(a);

console.log(++a);

console.log(a);
