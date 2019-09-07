// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   const splitStr = str.split('');
//   const arr = [];
//   for(let i = 0; i < splitStr.length; i++) {
//     arr.unshift(splitStr[i])
//   }
//   return arr.join('')
// }

// function reverse(str) {
//   const splitStr = str.split('');
//   const arr = [];
//   for(let i = 0; i < splitStr.length; i--) {
//     arr.push(splitStr[i])
//   }
//   return arr.join('')
// }

// function reverse(str) {
//   let reversed = '';

//   for(let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '')
}

reverse('abcd')

module.exports = reverse;
