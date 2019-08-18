# ts
  
## typescript代码自动生成定义文件

如果书写第三方库，自动生成定义文件而不用自己书写还是一个很美妙的事情的，具体实现方式：

- 配置`tsconfig.json`文件`declaration:true`，`declaration`跟 `allowjs`不能同时存在也就代表不能混写。
- `package.json` `type`字段配置为对应生成的index.d.ts

## 配置transpileOnly：true的影响

- 只要ts有错就会挂就算没有引用,但是如果 webpack 运行起来之后再修改那些没引入的文件 怎么修改都没有影响
- jsx 必须在后缀为.tsx 中才有效，.ts 也不行
- tsconfig.json 配置宽松些不然 webpack 直接挂了,在 tslint 中进行严格的检查，
