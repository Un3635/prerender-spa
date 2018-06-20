# prerender-spa

> A Vue.js project
> 主要是对一些页面进行预渲染，对seo的一些优化(使用vue-cli搭建)
## 关键代码
- build/webpack.prod.conf.js

```
 const PrerenderSpaPlugin = require('prerender-spa-plugin')
 
 new PrerenderSpaPlugin(
      // npm run build的输出目录
      path.join(__dirname, '../dist'),
      // 需要进行预渲染的页面
      ['/', '/i'], { // 写入你想预渲染的路由
          captureAfterTime: 5000,
          maxAttempts: 10,
      }
    )
```
## 注意：预渲染的效果只在生产环境中才能看到，进行预渲染的路由的路由，在==生产环境==中是可以直接地址栏中访问的

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
