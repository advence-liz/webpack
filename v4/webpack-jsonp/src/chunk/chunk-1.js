import(
  /* webpackChunkName: "chunk-2" */

  './chunk-2'
).then((c) => {
  c.default()
})

export default () => {
  console.log('chunk 1')
}
