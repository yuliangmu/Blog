# The Lengths of CSS [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

The `<length>` [CSS data type](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types) represents a distance value. Lengths can be used in numerous CSS properties, such as `width`, `height`, `margin`, `padding`, `border-width`, `font-size`, and `text-shadow`.

> Note: Although `<percentage>` values are also CSS dimensions, and are usable in some of the same properties that accept `<length>` values, they are not themselves `<length>` values.

## Units

### Relative length units

Relative lengths represent a measurement in terms of some other distance. Depending on the unit, this can be the size of a specific character, the line height, or the size of the viewport.

**Font-relative lengths**

Font-relative lengths define the `<length>` value in terms of the size of a particular character or font attribute in the font currently in effect in an element or its parent.

● `em`

Represents the calculated font-size of the element. If used on the font-size property itself, it represents the inherited font-size of the element.

● `rem`

Represents the font-size of the root element (typically `<html>`). When used within the root element `font-size`, it represents its initial value (a common browser default is `16px`, but user-defined preferences may modify this).

**Viewport-percentage lengths**

Viewport-percentage lengths define the `<length>` value relative to the size of the viewport, i.e., the visible portion of the document.

> Note: If the `<html>` and `<body>` elements are set as `overflow:auto`, space taken by scrollbars is not subtracted from the viewport, whereas it will be subtracted if set as `overflow:scroll`.

● `vw`

Equal to 1% of the width of the viewport's initial containing block.

● `vh`

Equal to 1% of the height of the viewport's initial containing block.

● `vmax`

Equal to the larger of vw and vh.

● `vmin`

Equal to the smaller of vw and vh.

### Abosolute length units

Absolute length units represent a physical measurement when the physical properties of the output medium are known, such as for print layout. This is done by anchoring one of the units to a physical unit, and then defining the others relative to it. **The anchor is done differently for low-resolution devices**, such as screens, versus high-resolution devices, such as printers.

> Note: Many users increase their user agent's default font size to make text more legible. Absolute lengths can cause accessibility problems, since they are fixed and do not scale according to user settings. For this reason, prefer relative lengths (such as `em` or `rem`) when setting `font-size`.

● `px`

One pixel. For screen displays, it traditionally represents one device pixel (dot). However, for printers and **high-resolution screens, one CSS pixel implies multiple device pixels**. `1px` = 1/96th of `1in`.

● `cm`

One centimeter. `1cm` = `96px/2.54`.

● `mm`

One millimeter. `1mm` = `1/10th of 1cm`.

● `in`

One inch. `1in` = `2.54cm` = `96px`.

● `pc`

One pica. `1pc` = `12pt` = 1/6th of `1in`.

● `pt`

One point. `1pt` = 1/72nd of `1in`.

## 扩展阅读

**Physical pixel**

物理像素又被称为设备像素，是显示屏的最小物理单位，每一像素都包含自己的颜色、亮度。像素是没有大小的、是一个抽象概念、是一个相对单位。

理解：设备出厂就已经确定，无法更改。如果你现在用的设备分辨率低，仔细看屏幕上的那一个一个的小点就是啦！

**Device-independent pixel** [Wiki](https://en.wikipedia.org/wiki/Device-independent_pixel)

> A device-independent pixel (also: density-independent pixel, dip, dp) is a physical unit of measurement based on a coordinate system held by a computer and **represents an abstraction of a pixel for use** by an application that an underlying system then converts to physical pixels.

设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的**虚拟像素**（比如 CSS 像素），然后由相关系统转换为物理像素。

`<meta>`里面设置`width=device-width`，这个`device-width`就是设备独立像素

在 chrome 里看到的`375×667` `320×480`就是设备独立像素，它们在数值上与 css 数值是相等的

![](https://pic4.zhimg.com/80/eed8c1dcad203b9c54099d873636109b_hd.png)

**CSS pixel**

CSS 像素是浏览器使用的抽象单位，用来**精确度量**网页上的内容。一般情况之下，CSS 像素称为与设备无关的像素(device-independent pixel)，简称 DIPs。

**Image resolution** [Wiki](https://en.wikipedia.org/wiki/Image_resolution)

Image resolution is the detail an image holds. The term applies to raster digital images, film images, and other types of images. Higher resolution means more image detail.

**Pixels density** [Wiki](https://en.wikipedia.org/wiki/Pixel_density)

Pixels per inch (PPI) or pixels per centimeter (PPCM) are measurements of the pixel density (resolution) of an electronic image device, such as a computer monitor or television display, or image digitizing device such as a camera or image scanner. Horizontal and vertical density are usually the same, as most devices have square pixels, but differ on devices that have non-square pixels.

要计算显示器的每英寸像素值，首先要确定屏幕的尺寸和分辨率。

![](https://pic4.zhimg.com/80/bcf5c9ad6eaf0fb8758ae2742914066f_hd.png)

以尺寸为 4.7 英寸、分辨率为 1334×750 的 iphone6 为例，设备宽度和高度为 375pt×667pt,可以理解为设备的**独立像素**；而其 dpr 为 2，所以其**物理像素**为 750pt×1334pt

![](https://pic3.zhimg.com/80/a3e94e3e67bfed3c5b6fea8e3218b39a_hd.png)

**Device pixel ratio** [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)

设备像素比简称为 dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：

`设备像素比(DPR) ＝ 物理像素 / 设备独立像素` ，在浏览器中，可以通过`window.devicePixelRatio`获取

根据图片辅助理解：

![](http://www.w3cplus.com/sites/default/files/blogs/201212/retina-web-3.jpg)

## 相关文章

- [MDN: CSS-Length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [w3: lengths](https://www.w3.org/TR/css3-values/#lengths)
- [css-tricks: the-lengths-of-css/](https://css-tricks.com/the-lengths-of-css/)
- [知乎: vw 相比 rem](https://www.zhihu.com/question/37179916/answer/469650853)
- [视窗单位 vs 百分比单位](https://www.w3cplus.com/css/viewport-vs-percentage-units.html)
- [移动端上的设计和适配](https://www.w3cplus.com/mobile/mobile-design-and-adapter.html)
