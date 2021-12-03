"use strict";

const ages = [10, 12, 15, 15, 17, 18, 18, 19, 20];

ages.pop();
ages.push(12, 15, 17, 18, 19);
ages.shift();
ages.unshift(12, 15, 17, 18, 19);

const first = ages[0];
const last = ages[ages.length - 1];

console.log({ first, last });

