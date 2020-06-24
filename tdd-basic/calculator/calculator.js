function add (x = 0, y = 0) {
	return parseInt(x) + parseInt(y)
}

function subtract (x, y) {
  return parseInt(x) - parseInt(y)
}

function sum (...args) {
  const [data] = args
  return data.reduce((acc, curr) => acc + curr, 0)
}

function multiply (...args) {
  const [data] = args
  return data.reduce((acc, curr) => acc * curr, 1)
}

function power(base, exponent) {
	return Math.pow(base, exponent)
}

function factorial(value) {
  let result = 1
  for(let i = value; i > 0; i--) {
    result *= i
  }
  return parseInt(result)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}