import m1 from './module/module-1'

m1()

import(
  /* webpackChunkName: "chunk-1" */

  './chunk/chunk-1.js'
).then((c) => {
  c.default()
})
