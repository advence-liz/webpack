# react-redux-router

- [history](https://github.com/ReactTraining/history)

```js
// history 类型要跟router类型对应上
const history = createHashHistory()
  <Provider store={store}>
        <ConnectedRouter history={history}>
          <HashRouter>
```