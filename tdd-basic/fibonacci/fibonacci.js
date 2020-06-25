const fibonacci = function(n) {
  const range = parseInt(n)
  return range < 1 ? 'OOPS'
       : range <= 2 ? 1
       : fibonacci(range - 1) + fibonacci(range - 2);
}

module.exports = fibonacci