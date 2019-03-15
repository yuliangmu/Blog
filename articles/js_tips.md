### [向回调方法传递参数](http://www.jstips.co/zh_cn/javascript/passing-arguments-to-callback-functions/)

使用闭包来传递其它参数，使用 element 时遇到。[`el-select`](http://element-cn.eleme.io/#/zh-CN/component/select)

需求：点击 `<el-select>` 会触发 `visible-change` 事件，下拉框出现时需要**带参数**请求数据。因为事件有回调参数，所以该怎样传参进去呢？？？

```html
<el-select @visible-change="(bool) => dropDown(bool, scope.row)"></el-select>
```
