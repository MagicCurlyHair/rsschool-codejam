function make(...nums) {
  const arr = [];
  arr.push(...nums);
  return function makeClosure(...args) {
    if (typeof args[0] === 'function') {
      const func = args[0];
      return arr.reduce((acc, num) => func(acc, num));
    }
    arr.push(...args);
    return makeClosure;
  };
}

module.exports = make;
