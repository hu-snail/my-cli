# my-cli
使用nodejs构建前端脚手架工具
## 安装
```js
# 1.克隆项目
git clone https://github.com/hu-snail/my-cli.git
# 2.进入项目
cd my-cli
# 3.安装依赖
yarn # or npm install
# 4.运行
yarn start
```
## 使用
- 创建react js版本
```shell
yarn start create vite app-test --template react
# or npm
npm run start create vite app-test--template react
```
效果图：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73a75c1c659945478d09261365286392~tplv-k3u1fbpfcp-watermark.image?)

- 创建react ts版本

```shell
yarn start create vite app-test --template react-ts
# or npm
npm run start create vite app-test --template react-ts
```

效果图：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c590e252b0dd4a058a5941bb4ae7ab27~tplv-k3u1fbpfcp-watermark.image?)

- 构建方法输入有误

`vite1`：为错误输入❌  只支持vite方式构建，可根据自己的需求适配多种构建方式

```shell
yarn start create vite1 app-test
# or npm
npm run start create vite1 app-test
```

效果图：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24f3df7ad0db4c96be6f350cc3400d28~tplv-k3u1fbpfcp-watermark.image?)

- 项目名称不合规输入

 `1my-test-project`:为不符合规范名称

```shell
yarn start create vite 1my-test-project --template react
# or npm
npm run start create vite 1my-test-project --template react
```

效果图：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e99c8830e32a411d823af336fa99c9a2~tplv-k3u1fbpfcp-watermark.image)
- 项目名称不输入

```shell
yarn start create vite 
# or npm
npm run start create vite 
```

效果图

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4616d60404f847229a0a603bb71e2ecc~tplv-k3u1fbpfcp-watermark.image?)

项目名称不输入会提供默认值和输入给用户，同时完成项目框架选择、和是否支持ts选择。完整截图如下：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d65ac93bbb9b442eb1c4416cd14f6146~tplv-k3u1fbpfcp-watermark.image?)

- 项目框架方式不输入

```shell
yarn start create vite app-test 
# or npm
npm run start create vite app-test 
```

效果图：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e55551da5f6541e4a3a4da010b1043c0~tplv-k3u1fbpfcp-watermark.image?)

- 不输入项目框架会提供选择，同时选择是否支持ts,完整截图如下：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50a9aed34088467998eb9a5766accd12~tplv-k3u1fbpfcp-watermark.image?)
