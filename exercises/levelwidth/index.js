// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counts = [0];
  const arr = [root, 'stop']
  while(arr.length > 1) {
    const node = arr.shift();
    if(node === 'stop') {
      arr.push(node);
      counts.push(0);
    } else {
      counts[counts.length - 1] += 1;
      arr.push(...node.children);
    }
  }
  return counts;
}

module.exports = levelWidth;
