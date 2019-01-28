# CSS 常见问题

##

- [\<img\>元素底部为何有空白](https://www.zhihu.com/question/21558138/answer/18615056)

  `<img>` 是行内元素，它的 `vertical-align` 值默认为 `baseline`，空白是 `baseline` 和 `bottom` 之间的距离。（`top` 和 `bottom` 之间的距离为 `line-height`，其基于 `font-size`）

  深入理解参考[这篇文章](https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)

- [行内块元素之间的间隙](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)

  空白产生的原因是 HTML 结构中换行导致的
