let i = 11;
i = i++ + ++i;

// let a = i++;
// let b = ++a;
console.log(i);
// console.log(a + b);

let a = true;

a++;

console.log(a); //2

let x = 10;
// let y = ++ (x++); // this will become ++10 since we cannot use unary operations on constant it will throw error

// console.log(y); //

console.log(Math.round(10.5)); //11
console.log(Math.ceil(10.1)); //11
console.log(Math.floor(10.8)); //10
console.log(Math.trunc(18.98)); //18
console.log(Math.pow(2, 5)); // 2 rise to 5
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10)); //to get a number between 1 to 10

//calculate area and perimeter of recatngle

let width = 10;

let length = 100;

area = length * width;
perimeter = 2 * (length + width);

console.log("aread and perimeter is", area, perimeter);

//generate otp

let otp;

otp = Math.floor(Math.random() * 10000); // 5 digit

console.log("otpo is", otp);

//area of traingle by herons formula

let [c, d, f] = [50, 60, 70];

let trainglePerimeter;

if (c + d > f && c + f > d && d + f > c) {
  let trainglePerimeter = (c + d + f) / 2;

  console.log("trainglePerimeter is", trainglePerimeter);
  let traingleArea = Math.sqrt(
    trainglePerimeter *
      (trainglePerimeter - c) *
      (trainglePerimeter - d) *
      (trainglePerimeter - f),
  ).toFixed(2);
  console.log("traingleArea is:", traingleArea);
} else {
  console.log("Error: These sides do not form a valid triangle.");
}

//circumference of a circle

let radius = 36;
const pi = Math.PI;

circumference = (2 * pi * radius).toFixed(2);

console.log("circumference is", circumference);
