// let liz = 'liz'

// delete String.prototype.includes
// // delete Object.prototype.assign
// // delete Object.assign
// console.log(Object.assign)
// console.log(liz.includes)
require('babel-polyfill')

// console.log(liz.includes('z'))
// console.log(liz.includes)
// console.log(Object.assign({ v: 1 }, { cc: 2 }))
import './map.delete'
import 'core-js/modules/es6.map'

console.log('引入了 polyfill Map又有了', Map)
