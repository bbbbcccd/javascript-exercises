const ftoc = function(fTemp) {
  return cTemp = Math.round((fTemp - 32) * 5 / 9 * 10) / 10;
};

const ctof = function(cTemp) {
  return fTemp = Math.round((cTemp * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
