var isPalindrome = function (x: number) {
  if (x < 0) {
    return false;
  } else {
    const str = x.toString();
    const reversedString = str.split("").reverse().join("");
    return str === reversedString;
  }
};

console.log(isPalindrome(121));

console.log(isPalindrome(-121));
