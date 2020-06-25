
const ftoc = function(temp) {
  const result = ((temp - 32) * 0.5555).toFixed(1)
  return Number(result)
}

const ctof = function(temp) {
  const result = (temp * 1.8 + 32).toFixed(1)
  return Number(result)
}

module.exports = {
  ftoc,
  ctof
}
