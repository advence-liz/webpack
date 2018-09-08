/**
 * fetch的action creator
 */

import Fetcher from 'assets/Fetcher'

const fetcher = new Fetcher()

function Get(url, params) {
  return () => fetcher.get(`${url}`, params)
}

function Post(url, params) {
  return () => fetcher.post(`${url}`, params)
}

export default class FetchAction {
  constructor(dispatch) {
    this.dispatch = dispatch
  }
  //   俩个参数 url callback
  // 三个参数 url params callback
  // 因为之后使用的时候结构赋值this丢失,所以这里使用了箭头函数
  // const { Get, Post } = new FetchAction(dispatch)
  Get = (url, params, callback) => {
    let query = {}
    if (callback) {
      query = params
    } else {
      callback = params // eslint-disable-line
    }
    this.dispatch(Get(url, query)).then(callback)
  }
  Post = (url, params, callback) => {
    this.dispatch(Post(url, params)).then(callback)
  }
}
