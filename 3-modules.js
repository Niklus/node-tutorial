// CommonJS, every file is a module by default
// Modules - Encapsulated Code

const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alt-flavour");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

console.log(data);

require("./7-mind-grenade");
