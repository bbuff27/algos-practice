// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return sanitizeString(stringA) === sanitizeString(stringB)
}

function sanitizeString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}

// function anagrams(stringA, stringB) {
//   const objA = createCharMap(stringA);
//   const objB = createCharMap(stringB);

//   if(Object.keys(objA).length !== Object.keys(objB).length) return false;

//   for(let char in objA) {
//     if(objA[char] !== objB[char]) return false;
//   }
//   return true;
// }

function createCharMap(word) {
  const santized = word.replace(/[^\w]/g, '').toLowerCase();
  const newObj = {};
  for(let char of santized) {
    newObj[char] ? newObj[char] += 1 : newObj[char] = 1
  }
  return newObj;
}

module.exports = anagrams;
