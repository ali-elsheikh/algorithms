/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
  while (max >= min) {
    guess = Math.round((min + max) / 2);
    if (targetValue == array[guess]) return guess;
    else if (targetValue > array[guess]) min = guess + 1;
    else max = guess - 1;
  }
  return -1;
};
