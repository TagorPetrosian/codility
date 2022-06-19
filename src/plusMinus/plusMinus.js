function plusMinus(arr) {
  const dict = arr.reduce(
    function (dict, curr) {
      let count;
      if (curr > 0) {
        count = dict.get('positives');
        dict.set('positives', ++count);
      } else if (curr < 0) {
        count = dict.get('negatives');
        dict.set('negatives', ++count);
      } else {
        count = dict.get('zeros');
        dict.set('zeros', ++count);
      }
      return dict;
    },
    new Map([
      ['positives', 0],
      ['negatives', 0],
      ['zeros', 0],
    ])
  );

  const positives = dict.get('positives');
  const negatives = dict.get('negatives');
  const zeros = dict.get('zeros');
  const size = zeros + negatives + positives;
  console.log(positives / size);
  console.log(negatives / size);
  console.log(zeros / size);
}

console.log('plusminus', plusMinus([1, 2, 3, 0, -1, -2, -3, 0]));
