# vue-boilerplate

## 开发库
```bash
# dependencies
npm i -S axios element-ui mockjs normalize.css nprogress vuex js-cookie
# devDependencies eslint sass sprint雪碧图 elementUI按需加载
npm i -D eslint-plugin-html node-sass sass-loader svg-sprite-loader babel-plugin-component
```

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 路由懒加载
使用babel 的 plugins babel-plugin-dynamic-import-node。它只做一件事就是将所有的import()转化为require()，这样就可以用这个插件将所有异步组件都用同步的方式引入，并结合 BABEL_ENV 这个bebel环境变量，让它只作用于开发环境下，在开发环境中将所有import()转化为require()，这种方案解决了之前重复打包的问题，同时对代码的侵入性也很小，你平时写路由的时候只需要按照官方文档路由懒加载的方式就可以了，其它的都交给bable来处理，当你不想用这个方案的时候，也只要将它从babel 的 plugins中移除就可以了。

具体代码： 首先在package.json中增加BABEL_ENV
```json
"dev": "cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
```
接着在.babelrc只能加入babel-plugin-dynamic-import-node这个plugins，并让它只有在development模式中才生效。
```json
{
  "env": {
    "development":{
      "plugins": ["dynamic-import-node"]
    }
  }
}
```
之后就大功告成了，路由只要像平时一样写就可以了。
```js
{ path: '/login', component: () => import('@/views/login/index')}
```

> webpack4已经出了，大幅提高了打包和编译速度，之后可能完全不需要搞这么复杂了。再多的页面热更新都能很快，完全就不需要前面提到的解决方案了。