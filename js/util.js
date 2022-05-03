const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, digit) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min) + min).toFixed(digit);
};

const shuffleArray = (array) => {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRightEnding = (number, one, two, many) =>
{ let rightEnding = '';
  number = number % 100;
  if (number >= 11 && number <= 19) {
    rightEnding = many;
  } else {
    const i = number % 10;
    switch (i)
    {
      case (1): rightEnding = one; break;
      case (2):
      case (3):
      case (4): rightEnding = two; break;
      default: rightEnding =many;
    }
  }
  return rightEnding;
};

export {getRandomInt ,getRandomFloat, shuffleArray, getRightEnding};
