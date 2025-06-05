const compareStringSigns = (string1, string2) => {
  let result = '';

  for (let i = 0; i < string1.length; i++) {
    for (let j = i; j < string2.length; j++) {
      if (string1[i] === '+' && string2[j] === '+') {
        result += '+';
        break;
      } else if (string1[i] === '+' && string2[j] === '-') {
        result += '0';
        break;
      } else if (string1[i] === '-' && string2[j] === '+') {
        result += '0';
        break;
      } else if (string1[i] === '-' && string2[j] === '-') {
        result += '-';
        break;
      }
    }
  }

  return result;
};

console.log(compareStringSigns('-++-', '-+-+'));
