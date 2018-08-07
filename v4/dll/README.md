# dll

- 当使用`dllplugin`的时候在起源中会显得 entry 必须是数组
- 直接观察 webpack 生成的 sourcemap 的 external 和 delegated 直观的辨别配置是否起效

## mapped 模式

- `context`起效定义 DLL 和引用 DLL 的`context`字段需要保持一致(其实我对`context`字段起效是有疑问的,因为为了方便移植考虑 manifest.json 只要构建一个虚假的关系列表就 ok 了 反正 vender 中已经保函了所有文件,但是重目前的结果来看当 mapped 模式的时候应该是通过 webpack 读取文件系统，根据文件的绝对路径判断模块是否在 vendor 中，所以`context`一定要一致)
- `vendor` 中的模块分为俩种一种是`file`(./xx.js)一种是`node_modules`(react) `file`类型直接通过文件间的相对路径引用,`node_modules`类型如普通引入`node_modules`的方式一致，也就是 `context`字段设置一致其它的就跟平时引入文件和 node 模块没什么两样

## scoped 模式

- `context`无效,只要给 scope 一个名字就可以就可以，以名字为前缀引用了显然这种方案更方便移植
- 引用的时候大概这样 `import b from 'abc/dll/b'`
