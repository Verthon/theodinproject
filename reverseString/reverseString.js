var reverseString = function(string) {
  const result = string.split('').reverse().join('');
  return result;
}

module.exports = reverseString