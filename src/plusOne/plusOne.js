/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  const reminder = digits.reverse().reduce((reminder, digit, index, array) => {
    const digitPlusReminder = digit + reminder;
    const newReminder = Math.floor(digitPlusReminder / 10);
    const newDigit = digitPlusReminder % 10;
    array[index] = newDigit;
    return newReminder;
  }, 1);

  if (reminder > 0) digits.push(reminder);
  return digits.reverse();
};

// function plusOne(arr) {
//   return (BigInt(arr.join('')) + 1n).toString().split('');
// }
console.log(plusOne([1, 2, 3]));

console.log(plusOne([9, 9, 9]));
/// 999
// 0001
