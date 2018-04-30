var repeatString = function(string, number) {
  let i = 1;
  let result = "";
  while(i <= number){
    result += string;
    i++;
  }
  if(number < 0){
    return "ERROR";
  }
  if(number === 0){
    return "";
  }
  return result;
}

module.exports = repeatString