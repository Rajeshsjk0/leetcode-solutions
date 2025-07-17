var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    const str = x.toString();
    for (let index = 0; index < str.length / 2; index++) {
      if (str[index] !== str[str.length - index - 1]) {
        return false;
      }
    }
    return true;
    // const reversedString = str.split("").reverse().join("");
    // return str === reversedString;
  }
};

console.log(isPalindrome(121));

console.log(isPalindrome(-121));
