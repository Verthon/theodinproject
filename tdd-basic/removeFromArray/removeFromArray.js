const removeFromArray = function(...args) {
  isFirstArgArray = typeof args[0] === 'object' && args[0].length > 0
  const listOfArgs = args
  const givenArray = listOfArgs.shift()
  if(isFirstArgArray) {
    return givenArray.filter(item => !listOfArgs.includes(item))
  }
}

module.exports = removeFromArray