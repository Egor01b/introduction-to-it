'use strict';
// Extract substring between prefix and suffix

const getValueAfter = (str, prefix) => {
  const prefixStart = str.indexOf(prefix);
  if (prefixStart === -1) return '';
  const resultStart = prefixStart + prefix.length;
  return str.substring(resultStart);
}

const getValueBefore = (str, suffix) => {
  const suffixStart = str.indexOf(suffix);
  if (suffixStart === -1) return '';
  return str.substring(0, suffixStart);
}

const getValueBetween = (str, prefix, suffix) => {
  str = getValueAfter(str, prefix);
  if (!suffix) return str;
  str = getValueBefore(str, suffix);
  return str
}

const result = getValueBetween('Hello <username> and bye!', '<', '>');
console.log(result);

