import './style.scss'
import preval from 'preval.macro'

import fileList from /* preval(3) */ './get-last-modified-date.js'

// const fileLastModifiedDate = preval.require('./get-last-modified-date.js')

// const fileLastModifiedDate = preval`
// const fs = require('fs')
// module.exports = fs.readFileSync(require.resolve('./get-last-modified-date.js'), 'utf8')
// `

const one = preval`module.exports = 2 + 2 - 1 - 1`
console.log(process.env.NODE_ENV)
console.log(one, fileList)
console.log(module.i, 1)
