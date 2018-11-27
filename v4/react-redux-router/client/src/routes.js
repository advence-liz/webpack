import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'

const lazyLoad = loader => Loadable({
  loader,
  loading(props) {
    if (props.isLoading) {
      if (props.timedOut) {
        return <div>Loader timed out!</div>
      }
      if (props.pastDelay) {
        return <Spin />
      }
      return null
    }
    if (props.error) {
      return <div>Error! Component failed to load</div>
    }
    return null
  }
})

const Routers = []

Routers.push({ path: '/', component: lazyLoad(() => import('pages/home')) })
Routers.push({ path: '/tree-page', component: lazyLoad(() => import('pages/tree-page')) })
Routers.push({ path: '/appointment', component: lazyLoad(() => import('pages/appointment')) })
Routers.push({ path: '/complaint', component: lazyLoad(() => import('pages/complaint')) })
export default Routers
