# Grid 布局

[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) which is largely a 1-dimensional system.

## Important Terminology

### Grid Container

The element on which `display: grid` is applied. It's the direct parent of all the grid items.

### Grid Item

The children (i.e. **direct** descendants) of the grid container.

### Grid Line

Grid lines are the horizontal and vertical dividing lines of the grid. A grid line exists on either side of a column or row. They can be referred to by numerical index, or by an author-specified name. 

> Lines are **numbered** according to the writing mode of the document. In a left-to-right language, line **1** is on the left-hand side of the grid. Lines can also be named.

### Grid Track

The space between two **adjacent** grid lines.

> MDN 解释有误，参考 [W3C](https://drafts.csswg.org/css-grid/#grid-track-concept)

### Grid Cell

The space between two adjacent row and two adjacent column grid lines. It's a single "unit" of the grid.

### Grid Area

A grid area is the logical space used to lay out one or more grid items, It is bound by four grid lines,.

## Grid Properties Table of Contents

Properties for the Grid Container | Properties for the Grid Items
------------ | -------------
[`display`](#display) | [`display`](#display)
[`grid-template-columns`](#grid-template-columns<br>grid-template-rows) | [`grid-column-start`](#grid-column-start<br>grid-column-end<br>grid-row-start<br>grid-row-end)
[`grid-template-rows`](#grid-template-columns<br>grid-template-rows) | [`grid-column-end`](#grid-column-start<br>grid-column-end<br>grid-row-start<br>grid-row-end)
[`grid-template-areas`](#grid-template-areas) | [`grid-row-start`](#grid-column-start<br>grid-column-end<br>grid-row-start<br>grid-row-end)
[`grid-template`](#grid-template) | [`grid-row-end`](#grid-column-start<br>grid-column-end<br>grid-row-start<br>grid-row-end)
[`grid-column-gap`](#grid-column-gap<br>grid-row-gap) | [`grid-column`](#grid-column<br>grid-row)
[`grid-row-gap`](#grid-column-gap<br>grid-row-gap) | [`grid-row`](#grid-column<br>grid-row)
[`grid-gap`](#grid-gap) | [`grid-area`](#grid-area)
[`justify-items`](#justify-items) | [`justify-self`](#justify-self)
[`align-items`](#align-items) | [`align-self`](#align-self)
[`place-items`](#place-items) | [`place-self`](#place-self)
[`justify-content`](#justify-content) | 
[`align-content`](#align-content) | 
[`place-content`](#place-content) | 
[`grid-auto-columns`](#grid-auto-columns<br>grid-auto-rows) | 
[`grid-auto-rows`](#grid-auto-columns<br>grid-auto-rows) | 
[`grid-auto-flow`](#grid-auto-flow) | 
[`grid`](#grid) | 

## Properties for the Parent

### `display`

```css
.container {
  display: grid | inline-grid;
}
```

> Defines the element as a grid container and establishes a new grid formatting context for its contents.

<hr>

### grid-template-columns<br>grid-template-rows

```css
.container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```
> Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

Values: 

* **`<track-size>`** can be a length, a percentage, or a fraction of the free space in the grid (using the fr unit)
* **`<line-name>`** an arbitrary name of your choosing

Examples:

```css
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/template-columns-rows-01.svg" alt="">

> When you leave an empty space between the track values, the grid lines are **automatically assigned** positive and negative numbers.

But you can choose to **explicitly name** the lines. Note the bracket syntax for the line names:

```css
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/template-column-rows-02.svg" alt="Grid with user named lines">

 **Note** that a line can have **more than one name**. For example, here the second line will have two names: row1-end and row2-start:

```css
.container {
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}
```

**`repeat()`**

If your definition contains repeating parts, you can use the `repeat()` notation to streamline things:

```css
.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}

<!-- 等价于 -->
.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}
```

If multiple lines share the same name, they can be referenced by their **line name** and **count**: 

```css
.item {
  grid-column-start: col-start 2;
}
```

**`fr`** unit

The fr unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

The free space is calculated **after** any non-flexible items. In this example the total amount of free space available to the fr units doesn't include the 50px:

```css
.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}
```

使用 `fr` 的三种情况：（参考文末张鑫旭的介绍）

a).和固定尺寸值混用（如上）

b).和 `auto` 混用（当有设置 `fr` 尺寸的时候，`auto` 的尺寸表现为“包裹”，为内容宽度）

c).和 `auto` 混用，但`fr` 的数值之和小于 1 （自己去看）

### grid-template-areas

Defines a grid template by referencing the names of the grid areas which are specified with the `grid-area` property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides **a visualization of the structure** of the grid.

```css
.container {
  grid-template-areas: 
    "<grid-area-name> | . | none | ..."
    "...";
}
```

Values:

- **`<grid-area-name>`** the name of a grid area specified with `grid-area`

- **`.`** a period signifies an empty grid cell

- **`none`** no grid areas are defined 

Example:

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

That'll create a grid that's four columns wide by three rows tall. The entire top row will be comprised of the **header** area. The middle row will be comprised of two **main** areas, one empty cell, and one **sidebar** area. The last row is all **footer**.

<img src="https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg" alt="Example of grid-template-areas">

**NOTE**:

Each row in your declaration needs to have the **same number** of cells.

You can use any number of adjacent periods to declare a single empty cell. As long as the periods have no spaces between them they represent a single cell.

Notice that you're not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is **foo**, the name of the area's starting row line and starting column line will be **foo-start**, and the name of its last row line and last column line will be **foo-end**. This means that some lines might have multiple names, such as the far left line in the above example, which will have three names: header-start, main-start, and footer-start.

### grid-template

A shorthand for setting `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` in a single declaration. (了解，使用 `grid` 代替)

```css
.container {
  grid-template: none | <grid-template-rows> / <grid-template-columns>;
}
```

It also accepts a more complex but quite handy syntax for specifying all three. Here's an example:

```css
.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
<!-- 等同于 -->
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}
```

**NOTE：** Since `grid-template` doesn't reset the implicit grid properties (`grid-auto-columns`, `grid-auto-rows`, and `grid-auto-flow`), which is probably what you want to do in most cases, it's recommended to use the `grid` property instead of `grid-template`.

[MDN: `grid-template`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)

<hr>

### grid-column-gap<br>grid-row-gap

The **row-gap** and **column-gap** properties (and their **gap** shorthand), when specified on a grid container, define the gutters between grid rows and grid columns. Their syntax is defined in [CSS Box Alignment 3 §8 Gaps Between Boxes](https://www.w3.org/TR/css3-align/#gaps).

```css
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
// 注意标准是：column-gap、row-gap
```

Values: 

**`<line-size>`** a length value

Example:

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-gap.svg" alt="Example of grid-column-gap and grid-row-gap">

The gutters are only created between the columns/rows, not on the outer edges.

**Note**: The `grid-` prefix will be removed and `grid-column-gap` and `grid-row-gap` renamed to `column-gap` and `row-gap`. The unprefixed properties are already supported in Chrome 68+, Safari 11.2 Release 50+ and Opera 54+.

### grid-gap

A shorthand for `grid-row-gap` and `grid-column-gap`

```css
.container {
  grid-gap: <grid-row-gap>空格<grid-column-gap>;
}
// 注意标准是：gap
```

**NOTE**: If no `grid-row-gap` is specified, it's set to the same value as `grid-column-gap`. The `grid-` prefix will be removed and `grid-gap` renamed to `gap`. The unprefixed property is already supported in Chrome 68+, Safari 11.2 Release 50+ and Opera 54+.

<hr>

### justify-items

Aligns grid items along the inline (row) axis (as opposed to [`align-items`](#align-items) which aligns along the block (column) axis). This value applies to all grid items inside the container.

```css
.container {
  justify-items: start | end | center | stretch;
}
```

`justify-items: start`:

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-start.svg" alt="Example of justify-items set to start">

`justify-items: end`:

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-end.svg" alt="Example of justify-items set to end">

`justify-items: center`:

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-center.svg" alt="Example of justify-items set to center">

`justify-items: stretch`:

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-items-stretch.svg" alt="Example of justify-items set to stretch">

This behavior can also be set on individual grid items via the **`justify-self`** property.

### align-items

Aligns grid items along the block (column) axis (as opposed to [`justify-items`](#justify-items) which aligns along the inline (row) axis). This value applies to all grid items inside the container.

```css
.container {
  align-items: start | end | center | stretch;
}
```
这里只放一张 `align-items: end;` 效果图：

<img src="https://css-tricks.com/wp-content/uploads/2018/11/align-items-end.svg" alt="Example of align-items set to end">

This behavior can also be set on individual grid items via the **`align-self`** property.


### place-items

`place-items` sets both the `align-items` and `justify-items` properties in a single declaration.(注意兼容，不用简写兼容更好：All major browsers except Edge support the `place-items` shorthand property.)

```css
.container {
  place-items: <align-items> / <justify-items>;
}
```

Values:

`<align-items>` / `<justify-items>` - The first value sets `align-items`, the second value `justify-items`. If the second value is omitted, the first value is assigned to both properties.

<hr>

### justify-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the **inline (row)** axis (as opposed to `align-content` which aligns the grid along the **block (column)** axis).

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}
```

把每一列看成一个 `flex-item`，效果就和给 `flex-container` 一样：

看一个 `justify-content: space-between;` 的效果：

<img src="https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-between.svg" alt="Example of justify-content set to space-between">

### align-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the **block (column)** axis (as opposed to `justify-content` which aligns the grid along the **inline (row)** axis).

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;	
}
```

效果和 `justify-content` 一样，不过是换了个方向。下面是 `align-content: center;` 效果图：

<img src="https://css-tricks.com/wp-content/uploads/2018/11/align-content-center.svg" alt="Example of align-content set to center">

### place-content

`place-content` sets both the `align-content` and `justify-content` properties in a single declaration. (兼容同 [`place-items`](#place-items))

```css
.container {
  place-content: <align-content> / <justify-content>;
}
```

Values:

**`<align-content>`** / **`<justify-content>`** The first value sets `align-content`, the second value `justify-content`. If the second value is omitted, the first value is assigned to both properties.

<hr>

### grid-auto-columns<br>grid-auto-rows

Specifies the size of any auto-generated grid tracks (aka **implicit grid tracks**). Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid. 

Values:

**`<track-size>`** can be a length, a percentage, or a fraction of the free space in the grid (using the `fr` unit)

```css
.container {
  grid-auto-columns: <track-size> ...;
  grid-auto-rows: <track-size> ...;
}
```

To illustrate how implicit grid tracks get created, think about this:

```css
.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px
}

.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-02.svg" alt="Example of implicit tracks">

We told `.item-b` to start on column line 5 and end at column line 6, **but we never defined a column line 5 or 6**. Because we referenced lines that don't exist, implicit tracks with widths of 0 are created to fill in the gaps. We can use `grid-auto-columns` and `grid-auto-rows` to specify the widths of these implicit tracks:

```css
.container {
  grid-auto-columns: 60px;
}
```

效果如下：

<img src="https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-03.svg" alt="grid-auto-columns-rows">

### grid-auto-flow

If you have grid items that you don't explicitly place on the grid, the **auto-placement algorithm** kicks in to automatically place the items. This property controls how the auto-placement algorithm works.

```css
.container {
  grid-auto-flow: row | column | row dense | column dense;
}
```

**Note** that dense only changes the visual order of your items and might cause them to appear out of order, which is bad for accessibility.

> dense这个英文是稠密的意思。如果有设置，则表示自动排列启用“密集”打包算法。如果稍后出现的网格比较小，则尝试看看前面有没有合适的地方放置，使网格尽可能稠密紧凑。此属性值仅仅改变视觉顺序，会导致DOM属性和实际呈现顺序不符合，这对于可访问性是不友好的，建议谨慎使用。

Values:

- **row** - tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)

- **column** - tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary

- **dense** - tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

Example:

Consider this HTML:

```html
<section class="container">
  <div class="item-a">item-a</div>
  <div class="item-b">item-b</div>
  <div class="item-c">item-c</div>
  <div class="item-d">item-d</div>
  <div class="item-e">item-e</div>
</section>
```

You define a grid with five columns and two rows, and set `grid-auto-flow` to row (which is also the default):

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}
```

When placing the items on the grid, you only specify spots for two of them:

```css
.item-a {
  grid-column: 1;
  grid-row: 1 / 3;
}
.item-e {
  grid-column: 5;
  grid-row: 1 / 3;
}
```

Because we set `grid-auto-flow` to **`row`**, our grid will look like this. Notice how the three items we didn't place (**item-b**, **item-c** and **item-d**) flow across the available rows:

<img src="https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-01.svg" alt="Example of grid-auto-flow set to row">

If we instead set `grid-auto-flow` to **`column`**, **item-b**, **item-c** and **item-d** flow down the columns:

<img src="https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-02.svg" alt="Example of grid-auto-flow set to column">

<hr>

### grid

A shorthand for setting all of the following properties in a single declaration: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow` (Note: You can only specify the explicit or the implicit grid properties in a single grid declaration).

`grid` 属性看起来很吃力，建议参考张鑫旭的[讲解](https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/#grid-grid)

Values:

- **`none`** - sets all sub-properties to their initial values.

- **`<grid-template>`** - works the same as the `grid-template` shorthand.

- **`<grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?`** - sets `grid-template-rows` to the specified value. If the `auto-flow` keyword is to the right of the slash, it sets `grid-auto-flow` to `column`. If the `dense` keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If `grid-auto-columns` is omitted, it is set to `auto`.

- **`[ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns>`** - sets `grid-template-columns` to the specified value. If the `auto-flow` keyword is to the left of the slash, it sets `grid-auto-flow` to `row`. If the `dense` keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If `grid-auto-rows` is omitted, it is set to `auto`.

Examples:

The following two code blocks are equivalent:

```css
.container {
  grid: 100px 300px / 3fr 1fr;
}

.container {
  grid-template-rows: 100px 300px;
  grid-template-columns: 3fr 1fr;
}
```

```css
.container {
  grid: auto-flow / 200px 1fr;
}

.container {
  grid-auto-flow: row;
  grid-template-columns: 200px 1fr;
}
```

```css
.container {
  grid: auto-flow dense 100px / 1fr 2fr;
}

.container {
  grid-auto-flow: row dense;
  grid-auto-rows: 100px;
  grid-template-columns: 1fr 2fr;
}
```

```css
.container {
  grid: 100px 300px / auto-flow 200px;
}

.container {
  grid-template-rows: 100px 300px;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
}
```

It also accepts a more complex but quite handy syntax for setting everything at once. You specify `grid-template-areas`, `grid-template-rows` and `grid-template-columns`, and all the other sub-properties are set to their initial values. What you're doing is specifying the line names and track sizes inline with their respective grid areas. This is easiest to describe with an example:

```css
.container {
  grid: [row1-start] "header header header" 1fr [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}

.container {
  grid-template-areas: 
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;    
}
```

## Properties for the Children

**NOTE**:

`float`, `display: inline-block`, `display: table-cell`, `vertical-align` and `column-*` properties have no effect on a grid item.

### grid-column-start<br>grid-column-end<br>grid-row-start<br>grid-row-end

### grid-column<br>grid-row

### grid-area

### justify-self

### align-self

### place-self

## References

[张鑫旭](https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/)

[CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
