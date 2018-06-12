(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("即使不适用 Hbuilder 打包成 APP,本脚手架同样可以作为多页面网页生成的参考项目.")]),a("h3",{attrs:{id:"app-演示下载地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-演示下载地址","aria-hidden":"true"}},[t._v("#")]),a("a",{attrs:{href:"https://fir.im/p52j",target:"_blank",rel:"noopener noreferrer"}},[t._v("APP 演示下载地址"),a("OutboundLink")],1)]),t._m(2),t._m(3),a("p",[t._v("这些特性其实不是什么新鲜特性,只是单独在 Hbuilder 无法使用.")]),t._m(4),a("p",[t._v("直接下载项目然后根据需求定制打包,最后通过 Hbuilder 云打包即可生成 APP.")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),a("p",[t._v("在 Hbuilder 中调试会有诸多问题,比如:")]),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"使用手册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用手册","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用手册")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("MogoH5+")]),this._v(" 是一个 vue 多页面"),s("strong",[this._v("脚手架工具")]),this._v(",结合 H5+可以快速开发安卓与苹果 APP.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("支持 Npm 生态")])]),s("li",[s("code",[this._v("支持 vue 语法,以及 vue 生态,比如 vux,mint,vant")])]),s("li",[s("code",[this._v("支持 ES6/ES7 语法")])]),s("li",[s("code",[this._v("使用 VConsole 调试")])]),s("li",[s("code",[this._v("VSCode 友好")])]),s("li",[s("code",[this._v("局域网便捷调试,不插数据线也可以调试")])]),s("li",[s("code",[this._v("兼容部分 mui 语法")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速上手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("本文自带一个案例是使用 VantUI 开发的几个界面,如果你喜欢其他 UI 同样可以替换成其他的 UI.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 1.安装模块\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i  // or yarn\n// 2.调试\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" start   // 将manifest.json 的"),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("`")]),t._v("页面入口"),a("span",{attrs:{class:"token variable"}},[t._v("`")])]),t._v(" 修改成 http://your_ip:8082/\n// 3.打包\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("主要怎么使用 MogoH5+做正式的开发,在开发过程中一定要遵守"),s("strong",[this._v("目录规则")]),this._v(",否则会有意想不到的错误.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├── docs  // 文档\n├── index.html // 入口模板\n├── jsconfig.json //js配置\n├── manifest.json //hbuilder 入口文件\n├── src  \n│   ├── components  //组件文件夹\n│   │   └── List.vue  //组件\n│   ├── index.js  //主页入口文件\n│   ├── index.vue // 主页vue文件\n│   ├── page  // 页面\n│   └── utils // 工具\n├── unpackage // hbuilder 构建目录\n│   └── res\n└── webpack.config.js  //webpack配置目录\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"新建页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建页面","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建页面")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("假如我们要新建一个名称为"),a("code",[t._v("list")]),t._v("的页面作为商品列表,我们就要在"),a("code",[t._v("./src/page/goods")]),t._v("下新建"),a("code",[t._v("list.js")]),t._v("和"),a("code",[t._v("list.vue")]),t._v("两个文件."),a("code",[t._v("list.js")]),t._v("作为多页面的入口,"),a("code",[t._v("list.vue")]),t._v(",脚手架自带了几个页面可供参考.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("路由")]),s("p",[this._v("遵循相对路径原则,如果在"),s("code",[this._v("src")]),this._v("访问这个页面则就是"),s("code",[this._v("./goods/list.html")]),this._v("\n!!! 后缀一定是"),s("code",[this._v(".html")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"新建组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("组件放入"),s("code",[this._v("./src/components")]),this._v("目录下,如果组件较多,可自行建立目录.比如 demo 中使用的 Logo 组件可以作为参考.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"新建工具库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建工具库","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建工具库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("工具库"),s("code",[this._v("./src/utils")]),this._v("主要放一些公用函数,比如请求,打开 webview,支付,分享等执行函数.\ndemo 中封装了部分来自 mui 的函数比如"),s("code",[this._v("自定义事件")]),this._v(","),s("code",[this._v("webview")]),this._v(".这些函数可以作为参考.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[a("code",[t._v("common.js")]),t._v(" 是每个页面都需要加载的一个 js,里面加载了"),a("code",[t._v("fastclick")]),t._v("和"),a("code",[t._v("vconsole")]),t._v(".如果全局需要加统计,全局执行的函数,可以放在这个文件里面.")]),a("p",[a("code",[t._v("./src/utils")]),t._v(" 做了 "),a("code",[t._v("alias")]),t._v("别名,可以 直接这样加载 "),a("code",[t._v('import common from "Utils/common"')]),t._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"发送请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 发送请求")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"请求库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求库","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("demo 的请求使用的是 "),s("code",[this._v("axios")]),this._v(",同样你喜欢什么库都可以自己去封装.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("常见的请求库有"),a("code",[t._v("fetch")]),t._v(","),a("code",[t._v("request")]),t._v(","),a("code",[t._v("SuperAgent")]),t._v(","),a("code",[t._v("jquery-ajax")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域","aria-hidden":"true"}},[this._v("#")]),this._v(" 跨域")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于"),s("code",[this._v("npm start")]),this._v("后,调试网页是挂在局域网上,并且作为 Hbuilder 的"),s("code",[this._v("页面入口")]),this._v(",因此,在请求时会出现"),s("code",[this._v("跨域")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("./build.js")]),this._v("中使用本地代理,将下面的"),s("code",[this._v("https://api.douban.com")]),this._v("修改成自己使用的业务域名即可.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("proxy"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"/api"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"DOUBANAPI"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 自己取名")]),t._v("\n      target"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://api.douban.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      pathRewrite"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"^/api"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      changeOrigin"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      secure"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{attrs:{class:"token string"}},[t._v('"/baidu_api"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"BAIDUAPI"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 自己取名")]),t._v("\n      target"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"https://api.baidu.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      pathRewrite"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"^/api"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      changeOrigin"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      secure"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果有更多业务域名可以继续在"),s("code",[this._v("proxy")]),this._v("添加.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),a("p",[t._v("只有开发的时候才会有跨域问题,打包后的文件网址会被替换成被代理的网址,因此发送请求一定要加上名称"),a("code",[t._v("DOUBANAPI")])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("DOUBANAPI")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/bookList"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("不能直接打印"),a("code",[t._v("数组")]),t._v(","),a("code",[t._v("对象")]),t._v(",需要转成字符串.")]),a("li",[t._v("即使使用"),a("code",[t._v("webview调试")]),t._v(",仍然不能打印出数组,在 mac 上使用也非常不方便.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("VConsole")]),this._v(",调试的问题基本就脱离 Hbuilder 了,使用"),s("code",[this._v("VConsole")]),this._v("主要优点如下")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("可以打印数组,对象")]),s("li",[this._v("可以查看请求,cookie,Localstorage")]),s("li",[this._v("在"),s("code",[this._v("System")]),this._v("栏目中可以看到页面加载速度")]),s("li",[this._v("可以查看元素")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("基本上就是一个简化的"),s("code",[this._v("开发者工具栏")]),this._v(",对于调试来说非常简便了.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("运行命令后会有一个"),s("code",[this._v("dist")]),this._v("目录,里面的经过压缩的静态文件.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"hbuilder-发行打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hbuilder-发行打包","aria-hidden":"true"}},[this._v("#")]),this._v(" Hbuilder 发行打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在使用 Hbuilder 制作安装包前,请将"),s("code",[this._v("入口文件")]),this._v("修改成"),s("code",[this._v("dist/index.html")]),this._v(".\n然后可以安心的打包了.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"兼容-mui-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容-mui-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 兼容 mui.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于兼容 mui 部分函数的问题,已经在移植部分函数到"),s("code",[this._v("Utils")]),this._v("中,在未来的更新中会慢慢移植.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见问题")])}],!1,null,null,null);s.default=n.exports}}]);