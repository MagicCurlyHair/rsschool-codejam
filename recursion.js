function recursion(tree) {
  const arr = [];
  let level = 0;
  (function walkTheTree(node) {
    if (node.left) {
      level += 1;
      walkTheTree(node.left);
      level -= 1;
    }
    if (node.right) {
      level += 1;
      walkTheTree(node.right);
      level -= 1;
    }
    if (!arr[level]) {
      arr[level] = [];
    }
    arr[level].push(node.value);
  }(tree));
  return arr;
}

module.exports = recursion;
