const sumAll = function (startingNumber, range) {
  const isStartingNumber =
    typeof startingNumber === "number" && startingNumber > 0;
  const isRange = typeof range === "number" && range > 0;
  if (isStartingNumber && isRange) {
    if (startingNumber < range) {
      let result = startingNumber;
      for (let i = range; i > startingNumber; i--) {
        result += i;
      }
      return result;
    }
    let result = range;
    for (let i = startingNumber; i > range; i--) {
      result += i;
    }
    return result;
  }
  return "ERROR";
};

module.exports = sumAll;
