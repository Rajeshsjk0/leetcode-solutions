var reduce = function (nums, fn, init) {
  let result = init;

  nums.map((num) => {
    result = fn(result, num);
  });

  return result;
};

console.log(
  reduce(
    [1, 2, 3],
    function (accum, curr) {
      return accum + curr;
    },
    100
  )
);
