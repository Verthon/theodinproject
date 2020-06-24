const snakeCase = (text) => {
  const characterCheck = (letter) => letter !== '.' &&  letter !== '?' && letter !== ',' && letter !== '-'
  const preparedString = text.toLowerCase().split('').filter(letter => characterCheck(letter)).join('')
  return preparedString.split(' ').join('_')
}

module.exports = snakeCase