var merge = function (nums1, m, nums2, n) {
  let sortedArray = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < m && j < n) {
    if (nums1[i] === 0) {
      i++;
      return;
    } else if (nums1[j] === 0) {
      j++;
      return;
    } else if (nums1[i] < nums2[j]) {
      sortedArray[k] = nums1[i];
      i++;
    } else {
      sortedArray[k] = nums2[j];
      j++;
    }
  }
  return sortedArray;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //[1]
console.log(merge([0], 1, [1], 1)); //[1]
