// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for(let row = 0; row < n; row++) {
//     let str = '';
//     for(let col = 0; col < 2 * n - 1; col++) {
//       if(midpoint - row <= col && midpoint + row >= col) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//   }
// }

function pyramid(n, row = 0, str = '') {
  const midpoint = Math.floor((2 * n - 1) / 2);
  if(n === row) {
    return;
  }

  if(str.length === 2 * n - 1) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  if(midpoint - row <= str.length && midpoint + row >= str.length) {
    str += '#'
  } else {
    str += ' ';
  }

  return pyramid(n, row, str);
}

module.exports = pyramid;
