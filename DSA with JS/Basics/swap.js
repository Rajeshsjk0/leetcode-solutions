//swap two varibles via 3 methods

let a = 20;
let b = 30;
let c;

console.log("before", a, b, c);

// c = a;
// a = b;
// b = c;

// console.log("after", a, b, c);

// c = a + b;
// a = c - a;
// b = c - b;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("after", a, b, c);

[a, b] = [b, a];

console.log("after", a, b, c);
