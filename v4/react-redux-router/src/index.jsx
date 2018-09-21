import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Icon, Switch as SwitchAntd } from 'antd'
import 'antd/dist/antd.less'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory, createHashHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter
} from 'connected-react-router'
import rootReducer from 'reducers/index'
import Routers from './routes'
const { Header, Content, Footer, Sider } = Layout
const history = createBrowserHistory()
const store = createStore(
  connectRouter(history)(rootReducer),
  compose(composeWithDevTools(applyMiddleware(routerMiddleware(history))))
)

class App extends React.Component {
  state = {
    theme: 'light'
  }
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {/* <Router> */}
          <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0
              }}
            >
              <div style={{ margin: 20, color: 'green' }}>
                <SwitchAntd
                  defaultChecked
                  onChange={isChecked => {
                    isChecked
                      ? this.setState({ theme: 'light' })
                      : this.setState({ theme: 'dark' })
                  }}
                />
                Change Theme
              </div>
              <Menu
                mode="inline"
                theme={this.state.theme}
                defaultSelectedKeys={['link0']}
              >
                {Routers.map((router, index) => {
                  let { path } = router
                  return (
                    <Menu.Item key={`link${index}`}>
                      <Icon type="double-right" />
                      <Link
                        style={{
                          display: 'inline-block',
                          textTransform: 'capitalize'
                        }}
                        to={path}
                      >
                        {path.replace(/\//, '') || <Icon type="home" />}
                      </Link>
                    </Menu.Item>
                  )
                })}
              </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <Switch>
                  {Routers.map((router, index) => {
                    let { path, component } = router
                    return (
                      <Route
                        key={`router${index}`}
                        exact
                        path={path}
                        component={component}
                      />
                    )
                  })}
                </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>footer</Footer>
            </Layout>
          </Layout>
          {/* </Router> */}
        </ConnectedRouter>
      </Provider>
    )
  }
}

render(<App />, document.getElementById('root'))
