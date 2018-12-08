# Flexbox

The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities.

## Properties for the Parent(flex container)

### `display`

This defines a flex container; inline or block depending on the given value.

```css
.container {
  display: flex; /* or inline-flex */
}
```

### `flex-direction`

The `flex-direction` CSS property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

This establishes the `main-axis`, thus defining the direction flex items are placed in the flex container:

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100px"><title>flex-direction</title><rect x="248.75" width="18" height="18" fill="#e88024"/><rect x="248.75" y="25" width="18" height="18" fill="#e88024"/><rect x="248.75" y="50" width="18" height="18" fill="#e88024"/><line x1="281.75" y1="61" x2="281.75" y2="18.89" fill="none" stroke="#4470b7" stroke-miterlimit="10" stroke-width="5"/><polygon points="272.64 20.11 290.86 20.11 281.75 11 272.64 20.11" fill="#4470b7"/><rect x="188.75" width="18" height="18" fill="#e88024"/><rect x="188.75" y="25" width="18" height="18" fill="#e88024"/><rect x="188.75" y="50" width="18" height="18" fill="#e88024"/><line x1="221.75" y1="11" x2="221.75" y2="53.11" fill="none" stroke="#4470b7" stroke-miterlimit="10" stroke-width="5"/><polygon points="230.86 51.89 212.64 51.89 221.75 61 230.86 51.89" fill="#4470b7"/><rect x="50" y="36.25" width="18" height="18" fill="#e88024"/><rect x="25" y="36.25" width="18" height="18" fill="#e88024"/><rect y="36.25" width="18" height="18" fill="#e88024"/><line x1="9" y1="22.25" x2="51.11" y2="22.25" fill="none" stroke="#4470b7" stroke-miterlimit="10" stroke-width="5"/><polygon points="49.89 13.14 49.89 31.36 59 22.25 49.89 13.14" fill="#4470b7"/><rect x="144" y="36.25" width="18" height="18" fill="#e88024"/><rect x="119" y="36.25" width="18" height="18" fill="#e88024"/><rect x="94" y="36.25" width="18" height="18" fill="#e88024"/><line x1="153" y1="22.25" x2="110.89" y2="22.25" fill="none" stroke="#4470b7" stroke-miterlimit="10" stroke-width="5"/><polygon points="112.11 31.36 112.11 13.14 103 22.25 112.11 31.36" fill="#4470b7"/></svg>

### `flex-wrap`

The `flex-wrap` CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. By default, flex items will all try to fit onto one line(`nowrap`). If wrapping is allowed(`wrap` | `wrap-reverse`), it sets the direction that lines are stacked.

```css
.container {
  flex-wrap: wrap | nowrap | wrap-reverse;
}
```

<p data-height="300" data-theme-id="34874" data-slug-hash="aRYJPx" data-default-tab="css,result" data-user="yuliangmu" data-pen-title="flex-wrap" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/yuliangmu/pen/aRYJPx/">flex-wrap</a> by 鱼梁木 (<a href="https://codepen.io/yuliangmu">@yuliangmu</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### `flex-flow`

The `flex-flow` CSS property is a shorthand property for flex-direction and flex-wrap individual properties. Default is `row nowrap`

```css
.container {
  flex-flow: < "flex-direction" > || < "flex-wrap" >;
}
```

### `justify-content`

The CSS `justify-content` property defines how the browser distributes space between and around content items along the main-axis of their container. Default is `flex-start`

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly;
}
```

This defines the alignment along the main axis:

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="450"><title>justify-content</title><rect y="24" width="319" height="45" fill="#89479b"/><rect y="35.5" width="52.9" height="22" fill="#e88024"/><rect x="63.1" y="35.5" width="26.9" height="22" fill="#e88024"/><rect x="100.8" y="35.5" width="96.2" height="22" fill="#e88024"/><rect y="98" width="319" height="45" fill="#89479b"/><rect x="122" y="109.5" width="52.9" height="22" fill="#e88024"/><rect x="185.1" y="109.5" width="26.9" height="22" fill="#e88024"/><rect x="222.8" y="109.5" width="96.2" height="22" fill="#e88024"/><text transform="translate(8 21)" font-size="16" fill="#89479b" font-family="OperatorMono-Bold, Operator Mono" font-weight="700" style="isolation:isolate">flex-start</text><text transform="translate(8 95)" font-size="16" fill="#89479b" font-family="OperatorMono-Bold, Operator Mono" font-weight="700" style="isolation:isolate">flex-end</text><rect y="173" width="319" height="45" fill="#89479b"/><rect x="59.4" y="184.5" width="52.9" height="22" fill="#e88024"/><rect x="122.5" y="184.5" width="26.9" height="22" fill="#e88024"/><rect x="160.2" y="184.5" width="96.2" height="22" fill="#e88024"/><text transform="translate(8 170)" font-size="16" fill="#89479b" font-family="OperatorMono-Bold, Operator Mono" font-weight="700" style="isolation:isolate">center</text><rect x="0.7" y="248" width="319" height="45" fill="#89479b"/><rect y="259.5" width="52.9" height="22" fill="#e88024"/><rect x="127.2" y="259.5" width="26.9" height="22" fill="#e88024"/><rect x="222.8" y="259.5" width="96.2" height="22" fill="#e88024"/><text transform="translate(8.68 245)" font-size="16" fill="#89479b" font-family="OperatorMono-Bold, Operator Mono" font-weight="700" style="isolation:isolate">space-between</text><rect x="1" y="324" width="319" height="45" fill="#89479b"/><rect x="23" y="335.5" width="52.9" height="22" fill="#e88024"/><rect x="123.5" y="335.5" width="26.9" height="22" fill="#e88024"/><rect x="201.1" y="335.5" width="96.2" height="22" fill="#e88024"/><text transform="translate(9.03 321)" font-size="16" fill="#89479b" font-family="OperatorMono-Bold, Operator Mono" font-weight="700" style="isolation:isolate">space-around</text><rect x="1" y="398" width="319" height="45" fill="#89479b"/><rect x="32.95" y="409.5" width="52.9" height="22" fill="#e88024"/><text transform="translate(9.03 395)" font-size="16" fill="#89479b" font-family="OperatorMono-Bold, Operator Mono" font-weight="700" style="isolation:isolate">space-evenly</text><rect x="123.5" y="409.5" width="26.9" height="22" fill="#e88024"/><rect x="185.1" y="409.5" width="96.2" height="22" fill="#e88024"/></svg>

### `align-items`

The CSS `align-items` property sets the align-self value on all direct children as a group. The `align-self` property sets the alignment of an item within its containing block. Default is `stretch`

> Note: `align-item` 和 `align-self` 作用的对象不一样

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

This defines the default behaviour for how flex items are laid out along the cross axis on the current line:

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="319px" height="377px" viewBox="0 0 319 377" enable-background="new 0 0 319 377" xml:space="preserve"><title>align-items</title><rect y="24" fill="#89479B" width="148.895" height="98"/><rect y="24" fill="#E88024" width="29.547" height="48.5"/><rect x="39.119" y="24" fill="#E88024" width="29.547" height="59.5"/><rect x="79.355" y="24" fill="#E88024" width="29.547" height="29.75"/><rect x="119.347" y="24" fill="#E88024" width="29.547" height="48.5"/><text transform="matrix(1 0 0 1 8 24)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">flex-start</text><rect y="155" fill="#89479B" width="148.895" height="98"/><rect y="178.281" fill="#E88024" width="29.547" height="48.5"/><rect x="39.119" y="172.781" fill="#E88024" width="29.547" height="59.5"/><rect x="79.355" y="187.656" fill="#E88024" width="29.547" height="29.75"/><rect x="119.347" y="178.281" fill="#E88024" width="29.547" height="48.5"/><text transform="matrix(1 0 0 1 8 155)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">center</text><rect y="279" fill="#89479B" width="308.395" height="98"/><rect y="287.406" fill="#E88024" width="64" height="68.875"/><rect x="70.121" y="293.562" fill="#E88024" width="64" height="43.438"/><rect x="142.273" y="286.406" fill="#E88024" width="78.727" height="63.594"/><rect x="229.039" y="290.047" fill="#E88024" width="78.727" height="76.953"/><text transform="matrix(1 0 0 1 8 279)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">baseline</text><rect x="159.5" y="155" fill="#89479B" width="148.895" height="98"/><rect x="159.5" y="154.031" fill="#E88024" width="29.547" height="98.969"/><rect x="198.619" y="155" fill="#E88024" width="29.547" height="98"/><rect x="238.855" y="155" fill="#E88024" width="29.547" height="98"/><rect x="278.848" y="155" fill="#E88024" width="29.547" height="98"/><text transform="matrix(1 0 0 1 167.5 155)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">stretch</text><rect x="159.5" y="24" fill="#89479B" width="148.895" height="98"/><rect x="159.5" y="73.5" fill="#E88024" width="29.547" height="48.5"/><rect x="198.619" y="62.5" fill="#E88024" width="29.547" height="59.5"/><rect x="238.855" y="92.25" fill="#E88024" width="29.547" height="29.75"/><rect x="278.848" y="73.5" fill="#E88024" width="29.547" height="48.5"/><text transform="matrix(1 0 0 1 167.5 24)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">flex-end</text><text transform="matrix(1 0 0 1 5 308)" font-family="'GothamRounded-Book'" font-size="13">text text</text><text transform="matrix(1 0 0 1 243 308)" font-family="'GothamRounded-Book'" font-size="13">text text</text><text transform="matrix(1 0 0 1 81.666 308.7295)" font-family="'GothamRounded-Book'" font-size="10">text text</text><text transform="matrix(1 0 0 1 149.1973 307.2715)" font-family="'GothamRounded-Book'" font-size="16">text text</text><line fill="none" stroke="#F7EC1D" stroke-miterlimit="10" x1="0" y1="308" x2="308.395" y2="308"/></svg>

### `align-content`

The CSS `align-content` property defines how the browser distributes space between and around content items along the cross-axis of their container, which is serving as a flexbox container.

> Note: this property has no effect when there is only one line of flex items.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

This aligns a flex container's lines within when there is extra space in the cross-axis:

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="319px" height="377px" viewBox="35 -63 319 377" enable-background="new 35 -63 319 377" xml:space="preserve"><title>align-content</title><rect x="35" y="-39" fill="#89479B" width="148.9" height="98"/><text transform="matrix(1 0 0 1 43 -39)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">flex-start</text><rect x="35" y="90" fill="#89479B" width="148.9" height="98"/><text transform="matrix(1 0 0 1 43 90)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">center</text><rect x="35" y="216" fill="#89479B" width="148.9" height="98"/><text transform="matrix(1 0 0 1 43 216)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">space-between</text><rect x="194.5" y="90" fill="#89479B" width="148.9" height="98"/><text transform="matrix(1 0 0 1 202.5 90)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">stretch</text><rect x="194.5" y="216" fill="#89479B" width="148.9" height="98"/><text transform="matrix(1 0 0 1 202.5 216)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">space-around</text><rect x="194.5" y="-39" fill="#89479B" width="148.9" height="98"/><text transform="matrix(1 0 0 1 202.5 -39)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">flex-end</text><rect x="38.5" y="-35.5" fill="#E38712" width="15.5" height="19.5"/><rect x="58" y="-35.5" fill="#E38712" width="30" height="19.5"/><rect x="91.5" y="-35.5" fill="#E38712" width="8.5" height="19.5"/><rect x="38.8" y="-12" fill="#E38712" width="26.8" height="19.5"/><rect x="69" y="-12" fill="#E38712" width="26.8" height="19.5"/><rect x="38.8" y="11" fill="#E38712" width="19.2" height="19.5"/><rect x="61.4" y="11" fill="#E38712" width="26.6" height="19.5"/><rect x="99" y="-12" fill="#E38712" width="15.3" height="19.5"/><rect x="117.8" y="-12" fill="#E38712" width="63.2" height="19.5"/><rect x="103.2" y="-35.5" fill="#E38712" width="22.3" height="19.5"/><rect x="128.7" y="-35.5" fill="#E38712" width="52.3" height="19.5"/><rect x="198.7" y="-11.2" fill="#E38712" width="15.5" height="19.5"/><rect x="218.2" y="-11.2" fill="#E38712" width="30" height="19.5"/><rect x="251.7" y="-11.2" fill="#E38712" width="8.5" height="19.5"/><rect x="198.9" y="12.2" fill="#E38712" width="26.8" height="19.5"/><rect x="229.2" y="12.2" fill="#E38712" width="26.8" height="19.5"/><rect x="198.9" y="35.2" fill="#E38712" width="19.2" height="19.5"/><rect x="221.6" y="35.2" fill="#E38712" width="26.6" height="19.5"/><rect x="259.2" y="12.2" fill="#E38712" width="15.3" height="19.5"/><rect x="278" y="12.2" fill="#E38712" width="63.2" height="19.5"/><rect x="263.4" y="-11.2" fill="#E38712" width="22.3" height="19.5"/><rect x="288.9" y="-11.2" fill="#E38712" width="52.3" height="19.5"/><rect x="38.2" y="106" fill="#E38712" width="15.5" height="19.5"/><rect x="57.7" y="106" fill="#E38712" width="30" height="19.5"/><rect x="91.2" y="106" fill="#E38712" width="8.5" height="19.5"/><rect x="38.4" y="129.5" fill="#E38712" width="26.8" height="19.5"/><rect x="68.7" y="129.5" fill="#E38712" width="26.8" height="19.5"/><rect x="38.4" y="152.5" fill="#E38712" width="19.2" height="19.5"/><rect x="61.1" y="152.5" fill="#E38712" width="26.6" height="19.5"/><rect x="98.7" y="129.5" fill="#E38712" width="15.3" height="19.5"/><rect x="117.5" y="129.5" fill="#E38712" width="63.2" height="19.5"/><rect x="102.9" y="106" fill="#E38712" width="22.3" height="19.5"/><rect x="128.4" y="106" fill="#E38712" width="52.3" height="19.5"/><rect x="38.2" y="220" fill="#E38712" width="15.5" height="19.5"/><rect x="57.7" y="220" fill="#E38712" width="30" height="19.5"/><rect x="91.2" y="220" fill="#E38712" width="8.5" height="19.5"/><rect x="38.4" y="254.5" fill="#E38712" width="26.8" height="19.5"/><rect x="68.7" y="254.5" fill="#E38712" width="26.8" height="19.5"/><rect x="38.4" y="291" fill="#E38712" width="19.2" height="19.5"/><rect x="61.1" y="291" fill="#E38712" width="26.6" height="19.5"/><rect x="98.7" y="254.5" fill="#E38712" width="15.3" height="19.5"/><rect x="117.5" y="254.5" fill="#E38712" width="63.2" height="19.5"/><rect x="102.9" y="220" fill="#E38712" width="22.3" height="19.5"/><rect x="128.4" y="220" fill="#E38712" width="52.3" height="19.5"/><rect x="197.7" y="222.8" fill="#E38712" width="15.5" height="19.5"/><rect x="217.2" y="222.8" fill="#E38712" width="30" height="19.5"/><rect x="250.7" y="222.8" fill="#E38712" width="8.5" height="19.5"/><rect x="197.9" y="256.2" fill="#E38712" width="26.8" height="19.5"/><rect x="228.2" y="256.2" fill="#E38712" width="26.8" height="19.5"/><rect x="197.9" y="288.8" fill="#E38712" width="19.2" height="19.5"/><rect x="220.6" y="288.8" fill="#E38712" width="26.6" height="19.5"/><rect x="258.2" y="256.2" fill="#E38712" width="15.3" height="19.5"/><rect x="277" y="256.2" fill="#E38712" width="63.2" height="19.5"/><rect x="262.4" y="222.8" fill="#E38712" width="22.3" height="19.5"/><rect x="287.9" y="222.8" fill="#E38712" width="52.3" height="19.5"/><rect x="197.7" y="94" fill="#E38712" width="15.5" height="26.7"/><rect x="217.2" y="94" fill="#E38712" width="30" height="26.7"/><rect x="250.7" y="94" fill="#E38712" width="8.5" height="26.7"/><rect x="197.9" y="126.2" fill="#E38712" width="26.8" height="26.7"/><rect x="228.2" y="126.2" fill="#E38712" width="26.8" height="26.7"/><rect x="197.9" y="157.8" fill="#E38712" width="19.2" height="26.7"/><rect x="220.6" y="157.8" fill="#E38712" width="26.6" height="26.7"/><rect x="258.2" y="126.2" fill="#E38712" width="15.3" height="26.7"/><rect x="277" y="126.2" fill="#E38712" width="63.2" height="26.7"/><rect x="262.4" y="94" fill="#E38712" width="22.3" height="26.7"/><rect x="287.9" y="94" fill="#E38712" width="52.3" height="26.7"/></svg>

## Properties for the Children(flex-item)

### `align-self`

The `align-self` CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to auto, then `align-self` is ignored.

> Note that `float`, `clear` and `vertical-align` have no effect on a flex item.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="319px" height="134px" viewBox="0 0 319 134" enable-background="new 0 0 319 134" xml:space="preserve"><title>align-self</title><rect x="7" y="21" fill="#89479B" width="148.895" height="98"/><rect x="7" y="21" fill="#E88024" width="29.547" height="48.5"/><rect x="46.119" y="21" fill="#E88024" width="29.547" height="59.5"/><rect x="86.355" y="89.25" fill="#E88024" width="29.547" height="29.75"/><rect x="126.347" y="21" fill="#E88024" width="29.547" height="48.5"/><text transform="matrix(1 0 0 1 179.5 110)" fill="#E88024" font-family="'GothamRounded-Book'" font-size="16">flex-end</text><text transform="matrix(1 0 0 1 7 21)" fill="#89479B" font-family="'GothamRounded-Book'" font-size="16">flex-start</text><g><g><line fill="none" stroke="#E88024" stroke-width="3" stroke-miterlimit="10" x1="170" y1="104.125" x2="136.035" y2="104.125"/><g><polygon fill="#E88024" points="138.005,97.394 126.347,104.125 138.005,110.856"/></g></g></g></svg>

### `order`

The `order` CSS property specifies the order used to lay out a flex or grid item in its flex or grid container. Items within the same container are **laid out in ascending order according to their order values**. Elements with the same order value are laid out in the order in which they appear in the source code.

```css
.item {
  order: <integer>; /* default is 0 */
}
```

The order property controls the order in which they appear in the flex container:

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="319px" height="300px"  enable-background="new 50 39.5 372 248.7" xml:space="preserve"><title>order</title><rect x="63.5" y="56.1" fill="#88499C" width="341" height="31.8"/><rect x="69.3" y="59.4" fill="#E77F24" width="44.4" height="25"/><rect x="119.8" y="59.4" fill="#E77F24" width="71.3" height="25"/><rect x="296.1" y="59.4" fill="#E77F24" width="102.2" height="25"/><rect x="197.4" y="59.4" fill="#E77F24" width="44.4" height="25"/><rect x="247.1" y="59.5" fill="#E77F24" width="44.4" height="25"/><rect x="63.5" y="102.1" fill="#88499C" width="341" height="31.8"/><rect x="69.3" y="105.4" fill="#E77F24" width="44.4" height="25"/><rect x="169.5" y="105.4" fill="#E77F24" width="71.3" height="25"/><rect x="119.8" y="105.4" fill="#E77F24" width="44.4" height="25"/><rect x="245.8" y="105.4" fill="#E77F24" width="35.5" height="25"/><rect x="63.5" y="147.5" fill="#88499C" width="111.5" height="125.3"/><text transform="matrix(1 0 0 1 87 75.5)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">1</text><text transform="matrix(1 0 0 1 85 121.8333)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">-1</text><text transform="matrix(1 0 0 1 138.3333 121.8333)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">1</text><text transform="matrix(1 0 0 1 202.3333 121.8337)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">2</text><text transform="matrix(1 0 0 1 260.6667 121.8337)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">5</text><text transform="matrix(1 0 0 1 151.6667 75.5)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">1</text><text transform="matrix(1 0 0 1 214.6667 75.5)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">1</text><text transform="matrix(1 0 0 1 264.6664 75.5)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">2</text><text transform="matrix(1 0 0 1 347.24 75.5)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">3</text><rect x="71.3" y="156.4" fill="#E77F24" width="94.9" height="25"/><rect x="71.3" y="189.4" fill="#E77F24" width="94.9" height="25"/><rect x="71.3" y="223" fill="#E77F24" width="94.9" height="41.5"/><text transform="matrix(1 0 0 1 113.6667 172.8337)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">2</text><text transform="matrix(1 0 0 1 113.6668 205.8337)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">2</text><text transform="matrix(1 0 0 1 111.6667 246.8337)" fill="#FFFFFF" font-family="'Gotham-Bold'" font-size="12">99</text></svg>

### `flex-grow`

The `flex-grow` CSS property specifies the flex grow factor of a flex item. It specifies how much of the available space in the flex container should be assigned to that item. If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.

In use, `flex-grow` is used alongside the other flex properties flex-shrink and flex-basis, and normally defined using the flex shorthand to ensure all values are set.

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

### `flex-shrink`

The `flex-shrink` CSS property specifies the flex shrink factor of a flex item. Flex items will shrink to fill the container according to the `flex-shrink` number, when the default size of flex items is larger than the flex container.

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

### `flex-basis`

The `flex-basis` CSS property specifies the initial main size of a flex item. This property determines the size of the content-box unless specified otherwise using `box-sizing`.

It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property" (which was temporarily done by the main-size keyword until deprecated).

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

If set to `0`, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its flex-grow value. [See this graphic](https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg)

### `flex`

The `flex` CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) property that sets `flex-grow`, `flex-shrink`, and `flex-basis`. The second and third parameters (`flex-shrink` and `flex-basis`) are optional. Default is `0 1 auto`.

- `auto`  
  The item is sized according to its width and height properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container. This is equivalent to setting `flex: 1 1 auto`.

- `initial`  
  This is the default value. The item is sized according to its width and height properties. It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container. This is equivalent to setting `flex: 0 1 auto`.

- `none`  
  The item is sized according to its width and height properties. It is fully inflexible: it neither shrinks nor grows in relation to the flex container. This is equivalent to setting `flex: 0 0 auto`.

- `<positive-number>`  
  The item is given the specified proportion of the free space in the container. This is equivalent to setting `flex: <positive-number> 1 0`.

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

By default flex items don't shrink below their minimum content size. To change this, set the item's [`min-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width) or [`min-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height).

For most purposes, authors should set flex to one of the following values: **`auto`, `initial`, `none`**, or a positive unitless number. To see the effect of these values, try resizing the flex containers below:

<iframe src="https://mdn.mozillademos.org/en-US/docs/Web/CSS/flex$samples/flex?revision=1413347" height="370" width="1200" id="frame_flex" class="live-sample-frame example-outcome-frame" frameborder="0"></iframe>

## References

- CSS-TRICKS: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- MDN: [Flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox)
