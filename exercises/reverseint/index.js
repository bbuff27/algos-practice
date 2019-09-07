// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse();
//   if(Math.sign(n) === -1) {
//     const removeDash = reversed.pop();
//     reversed.unshift(removeDash);
//     const backToString = reversed.join('');
//     return parseInt(backToString)
//   }
//   const backToString = reversed.join('');
//   return parseInt(backToString)
// }

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
