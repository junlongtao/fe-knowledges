### CSS
---

**display:none; visibility:hidden;**
- `display:none`元素消失，`visibility: hidden`只是不可见
- `display:none`非继承，`visibility:hidden`继承
- `display`重排,`visibility`重绘
- `display: none;`不读屏；`visibility: hidden`读屏



**css hack**
- 属性hack
- 选择器hack
- IE条件注释



**link 与 @import**
 - `link` 是`HTML`方式， `@import` 是`CSS`方式
 - `link `最大限度支持并行下载，` @import` 过多嵌套导致串行下载，出现FOUC
 - `link` 可以通过 `rel="alternate stylesheet"` 指定候选样式
 - 浏览器对 `link` 支持早于` @import` ，可以使用 `@import` 对老浏览器隐藏样式
 - `@import` 必须在样式规则之前，可以在`css`文件中引用其他文件
 - 总体来说：`link`优于`@import`




**CSS继承属性**

- 文字排版属性：
  - `font`
	- `word-break`
	- `letter-spacing`
	- `text-align`
	- `text-rendering`
	- `word-spacing`
	- `white-space`
	- `text-indent`
	- `text-transform`
	- `text-shadow`
  - `line-height`
  - `color`
  - `visibility`
  - `cursor`



**外边距折叠**
- 毗邻`margin`垂直合并 
- 浮动 `inline-block` 绝对定位 不折叠
- BFC元素不和子元素折叠 



**盒模型**
- IE盒子(content-box)、W3C盒子(border-box)
- box-sizing:border-box(width=content+padding+border+margin)
- box-sizing:content-box(width=content)



**CSS选择符**
- id选择器（ # myid）
- 类选择器（.myclassname）
- 标签选择器（div, h1, p）
- 相邻选择器（h1 + p）
- 子选择器（ul > li）
- 后代选择器（li a）
- 通配符选择器（ * ）
- 属性选择器（a[rel = "external"]）
- 伪类选择器（a:hover, li:nth-child）
 


**CSS优先级**
- `!important >  id > class > tag`



**CSS3新增伪类**
```
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

:after          在元素之前添加内容,也可以用来做清除浮动。
:before         在元素之后添加内容
:enabled        
:disabled       控制表单控件的禁用状态。
:checked        单选框或复选框被选中
```



**绝对定位div居中** 
```
  position: absolute;
  width: 1200px;
  background: none;
  margin: 0 auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
```
  


**display**
- block         象块类型元素一样显示。
- none          缺省值。象行内元素类型一样显示。
- inline-block  象行内元素一样显示，但其内容象块类型元素一样显示。
- list-item     象块类型元素一样显示，并添加样式列表标记。
- table         此元素会作为块级表格来显示
- inherit       规定应该从父元素继承 display 属性的值



**position定位原点**
- absolute      非static第一父元素
- fixed         浏览器窗口
- relative      正常位置
- static        默认值 出现在正常流中
- inherit       继承父元素


 
**纯CSS三角形**
```
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```



**满屏品字布局** 
- 上面的div宽100%，
- 下面的两个div分别宽50%，
- 然后用float或者inline使其不换行即可
  


**常遇到的浏览器兼容性** 
- 浏览器默认margin和padding不同 => *{margin:0;padding:0;}
- Firefox只能getAttribute() => 都使用getAttribute()
- IE even有x,y无pageX,pageY，Firefox event有pageX,pageY无x,y


 
**li之间空白间隔**
-font-size=0



**BFC(block formatting context)**
-BFC内外部元素不会互相影响



**css权重**
- 标签1，class 10，id 100



**display:inline-block移除间隙(携程)**
- 移除空格、margin-right:-3px、font-size:0、letter-spacing:0、word-spacing:0



**box-sizing**
* box-sizing: content-box;  // 默认的标准(W3C)盒模型元素效果
* box-sizing: border-box;   // 触发怪异(IE)盒模型元素的效果
* box-sizing: inherit;      //  继承父元素 box-sizing 属性的值



**CSS选择器有哪些？**
* id选择器        #id
* 类选择器        .class
* 标签选择器      div, h1, p
* 相邻选择器      h1 + p
* 子选择器        ul > li
* 后代选择器      li a
* 通配符选择器    *
* 属性选择器      a[rel='external']
* 伪类选择器      a:hover, li:nth-child



**CSS继承**
* 继承：font-size、font-family、color、list-style、cursor
* 不继承：width、height、border、padding、margin、background



**CSS如何计算选择器优先？**
- 行内样式[1000] > id[100] > class[10] > tag[1]
- !important 优先级最高



**CSS3新增伪类**

- :root           选择文档的根元素，等同于 html 元素

- :empty          选择没有子元素的元素
- :target         选取当前活动的目标元素
- :not(selector)  选择除 selector 元素意外的元素

- :enabled        选择可用的表单元素
- :disabled       选择禁用的表单元素
- :checked        选择被选中的表单元素

- :after          在元素内部最前添加内容
- :before         在元素内部最后添加内容

- :nth-child(n)      匹配父元素下指定子元素，在所有子元素中排序第n
- :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数
- :nth-child(odd)
- :nth-child(even)
- :nth-child(3n+1)
- :first-child
- :last-child
- :only-child

- :nth-of-type(n)      匹配父元素下指定子元素，在同类子元素中排序第n
- :nth-last-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n，从后向前数
- :nth-of-type(odd)
- :nth-of-type(even)
- :nth-of-type(3n+1)
- :first-of-type
- :last-of-type
- :only-of-type

- ::selection     选择被用户选取的元素部分
- :first-line     选择元素中的第一行
- :first-letter   选择元素中的第一个字符



**隐藏元素**
* visibility: hidden;   这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在
* opacity: 0;           CSS3属性，设置0可以使一个元素完全透明
* position: absolute;   设置一个很大的 left 负值定位，使元素定位在可见区域之外
* display: none;        元素会变得不可见，并且不会再占用文档的空间。
* transform: scale(0);  将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留
* `<div hidden="hidden">` HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态
* height: 0;            将元素高度设为 0 ，并消除边框
* filter: blur(0);      CSS3属性，将一个元素的模糊度设置为0，从而使这个元素“消失”在页面中




**rgba() opacity**
* opacity 所有内容（包括文字）透明
* rgba() 只作用元素自身



**CSS3新特性**
- 新增选择器     p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
- 弹性盒模型     display: flex;
- 多列布局       column-count: 5;
- 媒体查询       @media (max-width: 480px) {.box: {column-count: 1;}}
- 个性化字体     @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
- 颜色透明度     color: rgba(255, 0, 0, 0.75);
- 圆角           border-radius: 5px;
- 渐变           background:linear-gradient(red, green, blue);
- 阴影           box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
- 倒影           box-reflect: below 2px;
- 文字装饰       text-stroke-color: red;
- 文字溢出       text-overflow:ellipsis;
- 背景效果       background-size: 100px 100px;
- 边框效果       border-image:url(bt_blue.png) 0 10;
- 转换
  - 旋转          transform: rotate(20deg);
  - 倾斜          transform: skew(150deg, -10deg);
  - 位移          transform: translate(20px, 20px);
  - 缩放          transform: scale(.5);
- 平滑过渡       transition: all .3s ease-in .1s;
- 动画           @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;



**Flexbox**
- Flexbox 用于不同尺寸屏幕中创建可自动扩展和收缩布局



**常遇到的JS兼容性**
* 当前样式：getComputedStyle(el, null) VS el.currentStyle
* 事件对象：e VS window.event
* 鼠标坐标：e.pageX, e.pageY VS window.event.x, window.event.y
* 按键码：e.which VS event.keyCode
* 文本节点：el.textContent VS el.innerText


    
**请写出多种等高布局**
* 在列的父元素上使用这个背景图进行Y轴的铺放，从而实现一种等高列的假像
* 模仿表格布局等高列效果：兼容性不好，在ie6-7无法正常运行
* css3 flexbox 布局： .container{display: flex; align-items: stretch;}



**css垂直居中**
```
//文本
.vertical {
  height: 100px;
  line-height: 100px;
}
//已知宽高
.container {
  position: relative;
}
.vertical {
  height: 300px;  /*子元素高度*/
  position: absolute;
  top:50%;  /*父元素高度50%*/
  margin-top: -150px; /*自身高度一半*/
}
//未知宽高
.container {
  display: table;
}
.content {
  display: table-cell;
  vertical-align: middle;
}
//不定宽高
.vertical {
  position: absolute;
  top:50%;  /*父元素高度50%*/
  transform:translateY(-50%, -50%);
}
```



**CSS3弹性盒模型**
```
.container {
  display:flex;
  justify-content: center; /*子元素水平居中*/
  align-items: center; /*子元素垂直居中*/
}
```



**什么是双飞翼布局？实现原理？**

- 双飞翼布局：对圣杯布局（使用相对定位，对以后布局有局限性）的改进，消除相对定位布局
- 原理：主体元素上设置左右边距，预留两翼位置。左右两栏使用浮动和负边距归位，消除相对定位。

 
```css
.container {
    /*padding-left:150px;*/
    /*padding-right:190px;*/
}
.main-wrap {
    width: 100%;
    float: left;
}
.main {
    margin-left: 150px;
    margin-right: 190px;
}
.left {
    float: left;
    width: 150px;
    margin-left: -100%;
    /*position: relative;*/
    /*left:-150px;*/
}
.right {
    float: left;
    width: 190px;
    margin-left: -190px;
    /*position:relative;*/
    /*right:-190px;*/
}
```



**px em rem**
* px精确稳定，无法自适应
* em = 像素值 / 父级font-size
```
html{font-size: 62.5%;}
body{font-size: 1.4rem;}
h1{font-size: 2.4rem;}
```



**reset.css**
* 样式默认值不同 
* 可用reset.css/normalize.css



**浮动**
* 子元素浮动容器高度不能撑开影响布局



**清除浮动**
* `<div style="clear:both"></div>`
* `<br clear="all" />`
* 父元素overflow：hidden; 在IE6中还需要触发 hasLayout，例如zoom：1;
* 父元素也浮动
* :after
```
  .clearfix:after{
    content: "\200B";
    display: table; 
    height: 0;
    clear: both;
  }
  .clearfix{
    *zoom: 1;
  }
```
  
  
  
**FOUC(Flash of Unstyled Content)**
* 样式表晚加载, 应把link放在head
 
 
 
**CSS优化**
* css合并减少HTTP请求
* css置顶
* 移除空css
* no expression
* 避免选择器层级过深
* 利用css继承减少代码
* 提取公共样式减少代码量
* 0属性值不加单位
* 省略小数点前面0 
* icon-font



**解析CSS选择器**
- 从右到左解析



**使用偶数字体**
- 奇数字体时文本段落无法对齐


 
**抽离样式模块怎么写，说出思路？**

- CSS可以拆分成2部分：公共CSS 和 业务CSS：
  - 网站的配色，字体，交互提取出为公共CSS。这部分CSS命名不应涉及具体的业务
  - 对于业务CSS，需要有统一的命名，使用公用的前缀。可以参考面向对象的CSS
  
**元素竖向的百分比设定是相对于容器的高度吗？**

- 元素竖向的百分比设定是相对于容器的宽度，而不是高度

**全屏滚动的原理是什么？ 用到了CSS的那些属性？**

* 原理类似图片轮播原理，超出隐藏部分，滚动时显示
* 可能用到的CSS属性：overflow:hidden; transform:translate(100%, 100%); display:none;

**什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？**

* 响应式设计就是网站能够兼容多个终端，而不是为每个终端做一个特定的版本
* 基本原理是利用CSS3媒体查询，为不同尺寸的设备适配不同样式
* 对于低版本的IE，可采用JS获取屏幕宽度，然后通过resize方法来实现兼容：


```javascript
$(window).resize(function () {
  screenRespond();
});
screenRespond();
function screenRespond(){
var screenWidth = $(window).width();
if(screenWidth <= 1800){
  $("body").attr("class", "w1800");
}
if(screenWidth <= 1400){
  $("body").attr("class", "w1400");
}
if(screenWidth > 1800){
  $("body").attr("class", "");
}
}
```

**什么是视差滚动效果，如何给每页做不同的动画？**

 * 视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，具有非常出色的视觉体验
 * 一般把网页解剖为：背景层、内容层和悬浮层。当滚动鼠标滚轮时，各图层以不同速度移动，形成视差的
 
* 实现原理
  - 以 “页面滚动条” 作为 “视差动画进度条”
  - 以 “滚轮刻度” 当作 “动画帧度” 去播放动画的
  - 监听 mousewheel 事件，事件被触发即播放动画，实现“翻页”效果
  
**a标签上四个伪类的执行顺序是怎么样的？**

```link > visited > hover > active```

- L-V-H-A love hate 用喜欢和讨厌两个词来方便记忆

**伪元素和伪类的区别和作用？**

- 伪元素 -- 在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。
- 它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}

```

- 伪类 -- 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```
a:hover {color: #FF00FF}
p:first-child {color: red}
```

**::before 和 :after 中双冒号和单冒号有什么区别？**

* 在 CSS 中伪类一直用 : 表示，如 :hover, :active 等
* 伪元素在CSS1中已存在，当时语法是用 : 表示，如 :before 和 :after
* 后来在CSS3中修订，伪元素用 :: 表示，如 ::before 和 ::after，以此区分伪元素和伪类
* 由于低版本IE对双冒号不兼容，开发者为了兼容性各浏览器，继续使使用 :after 这种老语法表示伪元素
* 综上所述：::before 是 CSS3 中写伪元素的新语法； :after 是 CSS1 中存在的、兼容IE的老语法


**如何修改Chrome记住密码后自动填充表单的黄色背景？**

- 产生原因：由于Chrome默认会给自动填充的input表单加上 input:-webkit-autofill 私有属性造成的
- 解决方案1：在form标签上直接关闭了表单的自动填充：autocomplete="off"
- 解决方案2：input:-webkit-autofill { background-color: transparent; }

**input [type=search] 搜索框右侧小图标如何美化？**

```css
input[type="search"]::-webkit-search-cancel-button{
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 8px;
  background:url("images/searchicon.png") no-repeat 0 0;
  background-size: 15px 15px;
}
```

**网站图片文件，如何点击下载？而非点击预览？**

`<a href="logo.jpg" download>下载</a>`
`<a href="logo.jpg" download="网站LOGO" >下载</a>`

**iOS safari 如何阻止“橡皮筋效果”？**

```javascript
  $(document).ready(function(){
      var stopScrolling = function(event) {
          event.preventDefault();
      }
      document.addEventListener('touchstart', stopScrolling, false);
      document.addEventListener('touchmove', stopScrolling, false);
  });
```

**你对 line-height 是如何理解的？**

* line-height 指一行字的高度，包含了字间距，实际上是下一行基线到上一行基线距离
* 如果一个标签没有定义 height 属性，那么其最终表现的高度是由 line-height 决定的
* 一个容器没有设置高度，那么撑开容器高度的是 line-height 而不是容器内的文字内容
* 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中
* line-height 和 height 都能撑开一个高度，height 会触发 haslayout，而 line-height 不会

**line-height 三种赋值方式有何区别？（带单位、纯数字、百分比）**

* 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
* 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px
* 百分比：将计算后的值传递给后代

**设置元素浮动后，该元素的 display 值会如何变化？**

- 设置元素浮动后，该元素的 display 值自动变成 block

**怎么让Chrome支持小于12px 的文字？**

```css
  .shrink{
    -webkit-transform:scale(0.8);
    -o-transform:scale(1);
    display:inline-block;
  }
```

**让页面里的字体变清晰，变细用CSS怎么做？（IOS手机浏览器字体齿轮设置）**

```css
  -webkit-font-smoothing: antialiased;
```

**font-style 属性 oblique 是什么意思？**

- font-style: oblique; 使没有 italic 属性的文字实现倾斜

**如果需要手动写动画，你认为最小时间间隔是多久？**

- 16.7ms 多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔: 1s / 60 * 1000 ＝ 16.7ms

**display:inline-block 什么时候会显示间隙？**

* 相邻的 inline-block 元素之间有换行或空格分隔的情况下会产生间距
* 非 inline-block 水平元素设置为 inline-block 也会有水平间距
* 可以借助 vertical-align:top; 消除垂直间隙
* 可以在父级加 font-size：0; 在子元素里设置需要的字体大小，消除垂直间隙
* 把 li 标签写到同一行可以消除垂直间隙，但代码可读性差

**overflow: scroll 时不能平滑滚动的问题怎么处理？**

- 监听滚轮事件，然后滚动到一定距离时用 jquery 的 animate 实现平滑效果。

**一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度**

 - 方案1：
    `.sub { height: calc(100%-100px); }`
 - 方案2：
    `.container { position:relative; }`
    `.sub { position: absolute; top: 100px; bottom: 0; }`
 - 方案3：
    `.container { display:flex; flex-direction:column; }`
    `.sub { flex:1; }`