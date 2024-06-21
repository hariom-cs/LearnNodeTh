const validator = require('validator');
const valid=validator.isEmail('hariomcs@gmail.com');
console.log(valid);
const isvalid =  validator.isDecimal('0x10.9');
console.log(isvalid);