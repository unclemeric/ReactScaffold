# ReactScaffold
React scaffolding using webpack  
如果觉得这个不够好的，可以点击[这里](http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html)看看阮一峰的react系列，相信你能学到更多
##目录
```
src
    │  entry.js
    │  index.html
    │
    ├─component
    │  └─Button
    │          Button.js
    │
    ├─config
    │      index.js
    │
    ├─static
    │  ├─css
    │  │      amazeui.min.css
    │  │
    │  └─images
    │          20161023223233.png
    │
    └─utils
            autoChange.js
    │  .eslintignore
    │  .eslintrc
    │  .gitignore
    │  app.js
    │  config.js
    │  favicon.ico
    │  package.json
    │  README.md
    └─  webpack.config.js
```
##project说明
```
安装全局webpack webpack-dev-server
"deploy-dev": "webpack --progress --colors",                                           //在根目录生成/build文件夹和编译后的文件
"deploy-dev-server": "webpack-dev-server --config webpack.config.dev.js --progress --colors",                //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost:3000 有热加载功能 适用于开发
"deploy-server": "webpack --config webpack.config.js --progress --colors&&nodemon app.js"                        //执行deploy-server,等待编译完之后 在浏览器访问:http://localhost
相关配置请看config文件
```
##webpack配置文件说明
```
webpack.config.js：用于生产环境编译文件。
webpack.config.dev.js：用于开发阶段编译文件。修改react文件之后会自动编译  不需要手动编译
```
##关于eslint的使用
```
作用：为避免低级 Bug、产出风格统一的代码，会预先制定编码规范。使用 Lint 工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。

ps：由于第一次使用，还有很多规则没有写到，没写到的可以自己在.eslintrc配置文件增加。eslint会使在编写代码的时候会遇到很多问题...头疼，但是使用这个能是代码更规范！
不需要的可以在webpack配置文件里面去掉下面两个配置：
preLoaders: [
  {
    // Eslint loader
    test: /\.js?$/,
    loader: 'eslint-loader',
    include: [path.resolve(__dirname, 'src')],
    exclude: [/node_modules/,path.resolve(__dirname, 'src/utils')],
  },
],
eslint: {
  configFile: '.eslintrc',
},
```