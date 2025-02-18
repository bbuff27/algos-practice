// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunked = [];
//   for(let num of array) {
//     const last = chunked[chunked.length - 1];
//     if(!last || last.length === size) {
//       chunked.push([num])
//     } else {
//       last.push(num);
//     }
//   }
//   return chunked;
// }

// function chunk(array, size) {
//   return array.reduce((finalArr, num, i) => {
//     const last = finalArr[finalArr.length - 1];
//     if(!last || last.length === size) {
//       finalArr.push([num]);
//     } else {
//       last.push(num);
//     }
//     return finalArr;
//   }, [])
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while(index < array.length) {
    const sliceIndex = index + size
    const sliced = array.slice(index, sliceIndex)
    chunked.push(sliced)
    index += size;
  }
  return chunked;
}

module.exports = chunk;
