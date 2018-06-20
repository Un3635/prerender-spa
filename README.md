# prerender-spa

> A Vue.js project
> 主要是对一些页面进行预渲染，对seo的一些优化(使用vue-cli搭建)
## prerender-spa-plugin 是如何做到将运行时的 html
打包到文件中的呢？原理很简单，就是在 webpack 构建阶段的最后，在本地启动一个 phantomjs，访问配置了预渲染的路由，再将 phantomjs 中渲染的页面输出到 html 文件中，并建立路由对应的目录。
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
## 预渲染与 ssr 区别
预渲染达到了类似服务端渲染的效果。区别在于预渲染发生在构建时，服务端渲染发生在服务器处理请求时。

## 弊端
- 不能很好地处理用户独特性路由: 比如有个路由是 /my-profile, 预渲染可能不会很好用, 因为这个内容页是根据用户信息变化的，所以页面内容也不是唯一确定的. 你可能会使用类似于这样的路由路径 /users/:username/profile,但是这样也是不合适的.
- 经常变动的文件
- 需要预渲染成千上万的路由文件: 这个可能会导致你编译时间.....额，可能你会编译很长时间
    
#### 注意：预渲染的效果只在生产环境中才能看到，进行预渲染的路由的路由，在生产环境中是可以直接地址栏中访问的

## 使用meta关键代码
```
export default {
  name: 'App',
  metaInfo: {
    title: '首页',
    meta: [{
      name: 'keywords',
      content: '测试app.vue'
    }],
    link: [{
      rel: 'asstes',
      href: 'https://assets-cdn.github.com/'
    }]
  }
};

```
#### 注意：在需要使用meta的组件中写入上面关键代码即可，不用在.html文件中编写代码
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
#### 文章来源 https://juejin.im/post/59d49d976fb9a00a571d651d
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
