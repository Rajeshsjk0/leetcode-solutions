var twoSum = function (nums, target) {
  //   let output = [];
  //   nums.forEach((num, index) => {
  //     let diff = target - num;
  //     let diffIndex = nums.indexOf(diff);
  //     if (diffIndex !== -1 && diffIndex !== index) {
  //       output = [diffIndex, index];
  //     }
  //   });
  //   console.log(output);
  //   return output;\

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      console.log([map.get(diff), i]);

      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

twoSum([4, 2, 7, 11], 9);
