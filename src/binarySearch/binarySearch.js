// iterative solution
function binarySearchIterative(sortedArray, seekElement) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    // const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (sortedArray[middleIndex] == seekElement) {
      return middleIndex;
    } else if (sortedArray[middleIndex] < seekElement) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

// recursive solution
function binarySearchRecursive(sortedArray, seekElement, left = 0, right = sortedArray.length - 1) {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (sortedArray[mid] == seekElement) {
      return mid;
    } else if (sortedArray[mid] < seekElement) {
      return binarySearchRecursive(sortedArray, seekElement, mid + 1, right);
    } else {
      return binarySearchRecursive(sortedArray, seekElement, left, mid - 1);
    }
  }
}

console.log('res', binarySearchRecursive([1, 5, 10, 12, 14, 17, 22, 100], 17));
console.log('res', binarySearchIterative([1, 5, 10, 12, 14, 17, 22, 100], 17));
