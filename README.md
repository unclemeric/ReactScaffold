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
"deploy-dev": "set NODE_ENV=development&&webpack --progress --colors",                                           //在根目录生成/build文件夹和编译后的文件
"deploy-dev-server": "set NODE_ENV=development&&webpack --config webpack.config.js --progress --colors&&nodemon app.js",                //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost:3000
"deploy-server": "set NODE_ENV=production&&webpack --config webpack.config.js --progress --colors&&nodemon app.js"                        //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost
相关配置请看config文件
```
##webpack.config.js说明
```
webpack.config.js根据启动时候设置的NODE_ENV生成相应环境的文件：development为开发环境文件，生成的文件未压缩，方便查看；production为生产环境，生成的文件为压缩过后的文件，文件较小。
```
##关于eslint的使用
```
作用：为避免低级 Bug、产出风格统一的代码，会预先制定编码规范。使用 Lint 工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。

ps：由于第一次使用，还有很多规则没有写到，没写到的可以自己在.eslintrc配置文件增加。eslint会使在编写代码的时候会遇到很多问题...头疼，但是使用这个能是代码更规范！
```
##LINUX环境注意
```
set NODE_ENV = production是window的写法  在linux环境下面需写成export NODE = production
例如在Linux环境下用pm2启动export NODE = production && pm2 start app.js
```