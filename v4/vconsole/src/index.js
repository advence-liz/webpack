// import VConsole from 'vconsole'
// window.vConsole = new VConsole()
import doc from './docCookies'

// const isDebug = doc.getItem('_isDebug')
// console.log(process.env.NODE_ENV)
// console.log('isDebug', isDebug)
// console.log(module.i)
if (isDebug) {
  import('vconsole').then(m => {
    const { default: VConsole } = m
    var v = new VConsole()
    console.log(1111111111)
  })
}
