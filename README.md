# ReactScaffold
React scaffolding using webpack 

##目录
```
├─.idea
└─src
    ├─component
    ├─config
    ├─static
    │  ├─fonts
    │  ├─images
    │  └─sass
    └─utils
```
##说明
```
安装全局webpack webpack-dev-server
"deploy-dev": "set NODE_ENV=development&&webpack -p --progress --colors",                                           //在根目录生成/build文件夹和编译后的文件
"deploy-dev-server": "set NODE_ENV=development&&webpack-dev-server --progress --colors --port 3000",                //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost:3000
"deploy-server": "set NODE_ENV=production&&webpack-dev-server --progress --colors --port 80"                        //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost
```
