const findTheOldest = function(people) {
  const currentYear = 2020
  const personsWithYears = people.map(person => {
    if(person.yearOfDeath) {
      return {...person, yearsOld: person.yearOfDeath - person.yearOfBirth }
    }
    return {...person, yearsOld: currentYear - person.yearOfBirth }
  })
  return personsWithYears.reduce((acc, curr) => (acc.yearsOld > curr.yearsOld ? acc : curr))
}

module.exports = findTheOldest