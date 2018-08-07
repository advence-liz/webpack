import React from 'react'
import ReactDOM from 'react-dom'
import b from 'abc/dll/b'
console.log(b)
// console.log(require('abc/dll/c'))
// console.log(require('beta/c'))
console.log(require('../dll/alpha'))
ReactDOM.render(<h1>Hello, wodrld!</h1>, document.getElementById('root'))
