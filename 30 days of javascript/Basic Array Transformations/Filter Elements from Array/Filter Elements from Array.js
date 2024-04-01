/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

if (arr.length < 0 || arr.length > 1000) {
  throw new Error("Array length must be between 0 and 1000");
}

var filter = function (arr, fn) {
  let filteredArr = [];
  arr.map((arrItem, i) => {
    if (arr[i] < -109 || arr[i] > 109) {
      throw new Error("Array elements must be between -109 and 109");
    }
    if (fn(arrItem, i)) {
      filteredArr.push(arr[i]);
    }
  });

  return filteredArr;
};
