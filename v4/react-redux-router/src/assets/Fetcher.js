import fetch from 'cross-fetch'

import { message, notification } from 'antd'

class Fetcher {
  /**
   * 配置
   * @param  {Boolean}  *.autoCheck     是否是简单模式，默认是简单模式，
   *                                   简单模式下，自动校验登录态，此
   *                                   外在code不为200时会toast错误
   * @return {Function} *.fetchErrHook fetch错误的时候的回调钩子，如
   *                                   果不挂这个钩子，默认会toast异
   *                                   常文案，并console.error相关信
   *                                   息
   */
  constructor({ autocheck = false, fetchErrHook = null, needLoading = true } = {}) {
    this._autocheck = autocheck
    this._situation = 'fetch'
    this.fetchErrHook = fetchErrHook
    this._needLoading = needLoading
  }

  /**
   * fetch错误回调
   * @param  {Error} err 错误
   */
  static errCb(err) {
    if (this.fetchErrHook) {
      this.fetchErrHook()
      return
    }
    Fetcher.toastErrorInfo()
    console.error(`Fetch Error: ${err.toString()}`)
  }

  /**
   * fetch成功时自动转json
   * @param  {Object}   res 返回体
   * @return {Object}       返回体转json
   */
  static cb(res) {
    return res.json()
  }

  /**
   * params to query
   * @param  {Object} params
   * @return {String}        query
   */
  static toQuery(params = {}) {
    return (
      Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&') || ''
    )
  }

  /**
   * fetch
   * @param  {String}  url      请求url
   * @param  {Object}  baseOpts 根据请求方法得出的基础的选项
   * @param  {Object}  opts     请求的自定义选项
   * @return {Promise}          处理过的fetch结果
   */
  _fetch(url, baseOpts = {}, opts = {}) {
    this._needLoading && message.loading('加载中', 0)

    const headers = {
      'Content-Type': 'application/json'
    }
    const fetchRes = fetch(
      url,
      Object.assign(
        {},
        baseOpts,
        {
          headers,
          credentials: 'same-origin'
        },
        opts
      )
    )
      .then(Fetcher.cb.bind(this), Fetcher.errCb.bind(this))
      .then((res) => {
        message.destroy()
        return res
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ', error.message)
      })

    if (!this._autocheck) return fetchRes

    return fetchRes.then((res = {}) => {
      if (res.code === 200) return res

      if (res.code !== 401) {
        Fetcher.toastErrorInfo(res.message)
        return res
      }
    })
  }

  /**
   * 发送get请求
   * @param  {String}  url    请求url
   * @param  {Object}  params 请求的参数
   * @param  {Object}  opts   请求的自定义选项
   * @return {Promise}        处理过的fetch结果
   */
  ['get'](url, params = {}, opts = {}) {
    const baseOpts = { method: 'GET' }
    const query = Fetcher.toQuery(params)
    const search = query ? `?${query}` : ''
    const requestUrl = `${url}${search}`
    return this._fetch(requestUrl, baseOpts, opts)
  }

  /**
   * 发送post请求
   * @param  {String}  url    请求url
   * @param  {Object}  params 请求的参数
   * @param  {Object}  opts   请求的自定义选项
   * @return {Promise}        处理过的fetch结果
   */
  post(url, params = {}, opts = {}) {
    const baseOpts = {
      method: 'POST',
      body: JSON.stringify(params)
    }

    return this._fetch(url, baseOpts, opts)
  }

  /**
   * 发送formData请求
   * @param  {String}  url    请求url
   * @param  {Object}  formData 请求的表单数据
   * @param  {Object}  opts   请求的自定义选项
   * @return {Promise}        处理过的fetch结果
   */
  postFormData(
    url,
    formData = {},
    opts = {
      headers: {}
    }
  ) {
    const baseOpts = {
      method: 'POST',
      body: formData
    }

    return this._fetch(url, baseOpts, opts)
  }

  /**
   * toast错误信息，并根据situation来判断默认错误文案
   * @param  {String} text      错误信息，非必须
   * @param  {String} situation 情况；当text为空字符串时，可通过situation
   *                            来指定默认错误文案
   */
  static toastErrorInfo(text = '', situation = 'fetch') {
    if (text) {
      notification.error({ message: text })
      return
    }
    const { _situation: key = situation } = this || {}
    const defaultText = {
      fetch: '网络异常，请稍后重试'
    }[key]
    notification.error({ message: defaultText })
  }
}

export default Fetcher
