var compose = function (functions) {
  return function (x) {
    functions.map(function (f) {
      console.log(f);

      x = f(x);
    });
    return x;
  };
};

const arrayfunction = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

console.log(compose(arrayfunction)(4));
