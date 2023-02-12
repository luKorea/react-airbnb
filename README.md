# 项目基本介绍

## 1. 项目中使用的第三方库
### 1.1 npm i @craco/craco@alpha -D
```javascript
// create-react-app config 将craco.config.js合并到webpack中
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },

```
### 1.2  npm i craco-less@2.1.0-alpha.0 -D
```javascript
// craco-less@2.1.0-alpha.0 针对craco 7版本, 升级对应版本查看craco-less issues
const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
  ],
};
```
### 1.3 npm i normalize.css 样式重置
### 1.4 npm i styled-compoents css-in-js
### 1.5 npm i axios 网络请求
### 1.6 npm i classnames
### 1.7 第三方样式库
```
 "@emotion/react": "^11.10.5",
 "@emotion/styled": "^11.10.5",
 "@mui/material": "^5.11.6",
 "@mui/styled-engine-sc": "^5.11.0",
```

## 2. react全家桶
### 2.1 react-router-dom 路由
### 2.2 npm i @reduxjs/toolkit react-redux redux状态管理


## 项目部署
npm install gh-pages --save-dev
```text
1.配置homepage：
修改你的github仓库地址
“homepage”: “https://songbl.github.io/React-app”, 配置的访问路径
2.配置发布选项
“predeploy”: “npm run build”,
“deploy”: “gh-pages -d build”
predeploy:是将你的项目预编译成静态文件放在build文件夹
deploy:是使用gh-pages 部署你的build文件夹下的内容
文件夹名称自己指定
####5.安装 gh-pages
npm install gh-pages --save-dev
####6.部署项目到github page上
npm run deploy
```

## 文件目录结构
```text

├── README.md
├── craco.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
└── src
    ├── App.jsx
    ├── assets
    │   ├── css
    │   │   ├── index.less
    │   │   ├── reset.css
    │   │   ├── reset.less
    │   │   ├── variables.css
    │   │   └── variables.less
    │   └── img
    ├── base-ui
    ├── components
    ├── hooks
    ├── index.jsx
    ├── router
    │   └── index.js
    ├── services
    │   ├── index.js
    │   ├── modules
    │   └── request
    │       ├── config.js
    │       └── index.js
    ├── store
    │   ├── index.js
    │   └── modules
    │       ├── detail.js
    │       ├── entire.js
    │       ├── home.js
    │       └── login.js
    ├── utils
    └── views
        ├── detail-page
        │   └── index.jsx
        ├── entire-page
        │   └── index.jsx
        ├── home-page
        │   ├── index.jsx
        │   └── style
        │       └── index.jsx
        └── login-page
            └── index.jsx
```