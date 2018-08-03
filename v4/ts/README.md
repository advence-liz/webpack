# ts

- 只要ts有错就会挂就算没有引用,但是如果webpack 运行起来之后再修改那些没引入的文件 怎么修改都没有影响
- jsx 必须在后缀为.tsx 中才有效，.ts 也不行
- tsconfig.json 配置宽松些不然webpack 直接挂了,在tslint中进行严格的检查，