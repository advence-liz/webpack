console.log(process.env.NODE_ENV)
// require("babel-core/register");
Promise = 'ee'
// String.prototype.includes = null

var str = new String('llle')
str.includes('e')
function timeout (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function asyncPrint (value, ms) {
  await timeout(ms)
  console.log(value)
}

asyncPrint('hello world', 1000)
