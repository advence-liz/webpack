import { from } from 'rxjs/observable/from'

/**
 * fetch的action creator
 */

import fetchWrap from 'assets/Fetcher'

function Get(url, params) {
  return () => fetchWrap.get(`${url}`, params)
}

function Post(url, params) {
  return () => fetchWrap.post(`${url}`, params)
}

function PostFormData(url, formData = {}) {
  return () => fetchWrap.postFormData(`${url}`, formData)
}
function noop(d) {
  return d
}
/**
 * 分配参数
 * @param  {...any} args params
 * @description
 * 1 个参数  url
 * 2 个参数 url params 或者  url callback
 * 3 个参数 url params callback
 */
function shuffleArgs(...args) {
  const len = args.length
  let [url, params = {}, callback = noop] = args // eslint-disable-line
  if (len === 2 && params.constructor === Function) {
    callback = params
    params = {}
  }
  return { url, params, callback }
}

export default class FetchAction {
  constructor(dispatch) {
    this.dispatch = dispatch
  }

  // 1 个参数  url
  // 2 个参数 url params 或者  url callback
  // 3 个参数 url params callback
  // 因为之后使用的时候结构赋值this丢失,所以这里使用了箭头函数
  // const { Get, Post } = new FetchAction(dispatch)
  // Get('/ajax/user/getScheduleGrid', { from_date, to_date }, ({ data }) => {
  //   const { grid } = data
  //   setStore({
  //     grid: this.refreshGrid(grid),
  //     from_date,
  //     to_date
  //   })
  // })
  Get = (...args) => {
    const { url, params, callback } = shuffleArgs(...args)
    return this.dispatch(Get(url, params)).then(callback)
  }

  Post = (...args) => {
    const { url, params, callback } = shuffleArgs(...args)
    return this.dispatch(Post(url, params)).then(callback)
  }

  PostFormData = (...args) => {
    const { url, params, callback } = shuffleArgs(...args)
    return this.dispatch(PostFormData(url, params)).then(callback)
  }
}
