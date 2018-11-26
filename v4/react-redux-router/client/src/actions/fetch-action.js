/**
 * fetch的action creator
 */

import { fetchWrap } from 'assets/Fetcher'

/**
 * 分配参数
 * @param  {...any} args params
 * @description
 * 1 个参数  url
 * 2 个参数 url params 或者  url callback
 * 3 个参数 url params callback
 * @todo [x] 去掉dispatch精简代码
 */
function shuffleArgs(...args) {
  const len = args.length
  let [url, params = {}, callback = d => d] = args // eslint-disable-line
  if (len === 2 && params.constructor === Function) {
    callback = params
    params = {}
  }
  return { url, params, callback }
}

export default class FetchAction {
  // constructor(dispatch) {
  //    = dispatch
  // }

  // 1 个参数  url
  // 2 个参数 url params 或者  url callback
  // 3 个参数 url params callback
  // 下面的dispatch属于历史问题现在已经不需要了，传不传都ok
  // const { Get, Post } = new FetchAction(dispatch)
  // Get('/ajax/user/getScheduleGrid', { from_date, to_date }, ({ data }) => {
  //   const { grid } = data
  //   setStore({
  //     grid: this.refreshGrid(grid),
  //     from_date,
  //     to_date
  //   })
  // })
  Get(...args) {
    const { url, params, callback } = shuffleArgs(...args)
    return fetchWrap.get(url, params).then(callback)
  }

  Post(...args) {
    const { url, params, callback } = shuffleArgs(...args)
    return fetchWrap.post(url, params).then(callback)
  }

  PostFormData(...args) {
    const { url, params, callback } = shuffleArgs(...args)
    return fetchWrap.postFormData(url, params).then(callback)
  }
}
