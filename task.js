function minus(a, b) {
  return a - b
} 

function multiply(...args) {
  return args.reduce((acc, next) => acc * next);
}
