// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charObj = {};
  for(let char of str) {
    charObj[char] = charObj[char] + 1 || 1
  }
  return Object.keys(charObj).reduce((a, b) => charObj[a] > charObj[b] ? a : b);
}

maxChar('abcdefghijklmnaaaaa')

module.exports = maxChar;
