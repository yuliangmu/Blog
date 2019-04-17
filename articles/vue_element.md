# Element

## Layout 布局

这个有做兼容性处理，比直接使用 flex 布局要好（flex 有的它都有）

相关链接：

[响应式栅格布局](https://www.jianshu.com/p/28ac9a07749e?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)

## Button 按钮

Button 按钮可以和 Icon 图标一起使用

## Form 表单

表单验证国际化 `message:this.$t('你的message key')` 这样子必须要刷新页面才能生效

```js
{ required: true, message: this.$t('你的message key'), trigger: 'blur' }
```

解决方法是使用自定义校验规则：

```js
const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error(this.$t('login.title')))
  } else {
    callback()
  }
}
```

[message 国际化](https://github.com/PanJiaChen/vue-element-admin/issues/676)
