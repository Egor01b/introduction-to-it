'use strict';
// Extract substring between prefix and suffix

const getValueBetween = (str, p, s) => {
  let i = str.indexOf(p);
  if (i === -1) return '';
  else {
    const k = i + p.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, i);
      }
    }
  }
  return str;
};

const result = getValueBetween('Hello <username> and bye!', '<', '>');
console.log(result);
