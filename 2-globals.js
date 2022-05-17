// Globals: - No Window!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("Hello Node");
}, 1000);
