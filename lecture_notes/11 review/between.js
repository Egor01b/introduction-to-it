'use strict';
// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  let index = str.indexOf(prefix);
  if (index === -1) return '';

  const resultStart = index + prefix.length;
  str = str.substring(resultStart);
  if (suffix) {
    index = str.indexOf(suffix);
    if (index === -1) return '';
    str = str.substring(0, index);
  }
  return str;
};

const result = getValueBetween('Hello <username> and bye!', '<', '>');
console.log(result);
