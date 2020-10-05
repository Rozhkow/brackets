module.exports = function check(str, bracketsConfig) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === str[i]) {
        if (result.length!=0 && result[result.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][1] === str[i]) {
          result = result.slice(0, result.length - 1);
        } else {
          result += str[i];
        }
        
      } else if (bracketsConfig[j][1] === str[i] ) {
         if (result[result.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][1] === str[i]) {
           result = result.slice(0, result.length - 1);
         } else if (result[result.length - 1] !== bracketsConfig[j][0]) {
           return false;
         }
      }
    }
  }

  if (result.length!=0) {
    return false;
  }

  return true;
}
