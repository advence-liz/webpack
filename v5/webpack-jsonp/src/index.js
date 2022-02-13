import m1 from './module/module-1'
import m2 from './module/module-2'
import(
  /* webpackChunkName: "chunk-1" */

  './chunk/chunk-1.js'
).then((c) => {
  c.default()
})

import(
  /* webpackChunkName: "chunk-2" */

  './chunk/chunk-2.js'
).then((c) => {
  c.default()
})
m1()
m2()
