let liz = 'liz'

delete String.prototype.includes
// delete Object.prototype.assign
// delete Object.assign
console.log(Object.assign)
console.log(liz.includes)
require('babel-polyfill')

console.log(liz.includes('z'))
console.log(liz.includes)
console.log(Object.assign({ v: 1 }, { cc: 2 }))
