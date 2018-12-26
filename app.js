const cowsay = require('cowsay');
const PACKAGE_NAME = "RandomPackage"

console.log(cowsay.say({
  text: `Deploy ${PACKAGE_NAME}`,
  e: "oO",
  T: "U "
}));
