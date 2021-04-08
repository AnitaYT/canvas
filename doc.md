[详情](https://blog.csdn.net/u012468376/article/details/73350998)

## canvas 提供了三种方法绘制矩形：

- fillRect(x, y, width, height) 绘制一个填充的矩形
- strokeRect(x, y, width, height) 绘制一个矩形的边框
- clearRect(x, y, width, height) 清除指定的矩形区域，然后这块区域会变的完全透明

- rect(x, y, width, height) 用于创建矩形

​x, y：指的是矩形的左上角的坐标。(相对于canvas的坐标原点)
width, height：指的是绘制的矩形的宽和高



## path
图形的基本元素是路径。
​路径通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
一个路径，甚至一个子路径，都是闭合的。

### 使用路径绘制图形需要一些额外的步骤：
- 1.创建路径起始点
- 2.调用绘制方法去绘制出路径
- 3.把路径封闭
- 4.一旦路径生成，通过描边或填充路径区域来渲染图形。

### 使用方法
beginPath()
新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径

moveTo(x, y)
把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标。

lineTo(x, y)
制一条从当前位置到指定坐标(x, y)的直线

closePath()
闭合路径之后，图形绘制命令又重新指向到上下文中

stroke() 描边
通过线条来绘制图形轮廓
注意：stroke不会自动closePath()

fill()
通过填充路径的内容区域生成实心的图形
注：fill()会自动闭合路径closePath()

fillStyle = color    设置图形的填充颜色
strokeStyle = color  设置图形轮廓的颜色

默认情况下，线条和填充颜色都是黑色。
`color` 可以是表示 `css` 颜色值的字符串、渐变对象或者图案对象。
一旦您设置了 `strokeStyle` 或者 `fillStyle` 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 `fillStyle` 或 `strokeStyle` 的值。


### 绘制圆弧
两种方式
Math.PI = 3.14 = 180度
radians=(Math.PI/180)*degrees   //角度转换成弧度

1.
arc(x, y, r, startAngle, endAngle, anticlockwise):
以(x, y)为圆心，以r为半径，从 startAngle弧度开始到endAngle弧度结束。anticlosewise是布尔值，true表示逆时针，false表示顺时针。(默认是顺时针)

注意：
这里的度数都是弧度、0弧度是指的x轴正方形

2.
arcTo(x1, y1, x2, y2, radius):
根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点。


## 绘制贝塞尔曲线

### 一次贝塞尔曲线(线性贝塞尔曲线)
​一次贝塞尔曲线其实是一条直线。

### 二次贝塞尔曲线(一个控制点)
quadraticCurveTo(cp1x, cp1y, x, y)
​参数1和2：控制点坐标
​参数3和4：结束点坐标

### 三次贝塞尔曲线(两个控制点)
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)：

​参数1和2：控制点1的坐标
参数3和4：控制点2的坐标
参数5和6：结束点的坐标

## Transparency(透明度)
globalAlpha = transparencyValue

这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
globalAlpha 属性在需要绘制大量拥有相同透明度的图形时候相当高效。但是使用rgba()设置透明度更加好一些。

## line style
1. lineWidth = value
线宽。只能是正值。默认是1.0。
起始点和终点的连线为中心，上下各占线宽的一半

2. lineCap = type
线条末端样式

- butt：线段末端以方形结束
- round：线段末端以圆形结束
- square：线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

3. lineJoin = type
同一个path内，设定线条与线条间接合处的样式。

- round 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
- bevel 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
- miter(默认) 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。


4. 虚线
用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式. setLineDash 方法接受一个数组，来指定线段与间隙的交替；lineDashOffset属性设置起始偏移量
getLineDash():返回一个包含当前虚线样式，长度为非负偶数的数组。


## 绘制文本
两种方式
- fillText(text, x, y [, maxWidth])在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的
- strokeText(text, x, y [, maxWidth])在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的

### 给文本添加样式
- font = value 当前我们用来绘制文本的样式。这个字符串使用和 CSS font属性相同的语法. 默认的字体是 10px sans-serif。

- textAlign = value 文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。

- textBaseline = value 基线对齐选项，可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。

- direction = value 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。


## 绘制图片

### 1.由零开始创建图片

步骤：
1. 创建<img>元素
2. 设置图片源地址
3. 绘制图片

### 2.绘制 img 标签元素中的图片

### 3.图片绘入canvas缩放
drawImage(image, x, y, width, height)
image：要绘制的img 
x、y：绘制的img在canvas中的坐标
width、height：这两个参数用来控制 当像canvas画入时图片应该缩放的大小

### 4.切片
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

第一个参数和其它的是相同的，都是一个图像或者另一个 canvas 的引用。

其他8个参数：
​前4个是定义图像源的切片位置和大小，
​后4个则是定义切片的目标显示位置和大小。



## 状态的保存和恢复
Saving and restoring state是绘制复杂图形时必不可少的操作。
save()和restore()
​save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。

可以调用任意多次 save方法。(类似数组的push())
每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。(类似数组的pop())


## 变形
1. translate
translate(x, y):用来移动 canvas 的原点到指定的位置

注意：
```
在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 restore 方法比手动恢复原先的状态要简单得多。又如果你是在一个循环中做位移但没有保存和恢复canvas 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 canvas 范围以外了。
```
2. rotate
rotate(angle):旋转坐标轴。
这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。
旋转的中心是坐标原点。


3. scale
scale(x, y)
用来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。

scale方法接受两个参数。x,y分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩	小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。
默认情况下，canvas 的 1 单位就是 1 个像素。举例说，如果我们设置缩放因子是 0.5，1 个单位就变成对应 0.5 个像素，这样绘制出来的形状就会是原先的一半。同理，设置为 2.0 时，1 个单位就对应变成了 2 像素，绘制的结果就是图形放大了 2 倍

4. transform(变形矩阵)
transform(a, b, c, d, e, f)

|a c e|
|b d f|
|0 0 0|

a (m11) Horizontal scaling.

b (m12) Horizontal skewing.

c (m21) Vertical skewing.

d (m22) Vertical scaling.

e (dx) Horizontal moving.

f (dy) Vertical moving.

## 合成
在前面的所有例子中、，我们总是将一个图形画在另一个之上，对于其他更多的情况，仅仅这样是远远不够的。比如，对合成的图形来说，绘制顺序会有限制。不过，我们可以利用 globalCompositeOperation 属性来改变这种状况。

globalCompositeOperation = type

type值有：
- 1.source-over 这是默认设置，新图像会覆盖在原有图像
- 2.source-in 仅仅会出现新图像与原来图像重叠的部分，其他区域都变成透明的。(包括其他的老图像区域也会透明)
- 3.source-out 仅仅显示新图像与老图像没有重叠的部分，其余部分全部透明。(老图像也不显示)
- 4.source-atop 新图像仅仅显示与老图像重叠区域。老图像仍然可以显示。
- 5.destination-over 新图像会在老图像的下面。与1相反
- 6.destination-in 仅仅新老图像重叠部分的老图像被显示，其他区域全部透明
- 7.destination-out 仅仅老图像与新图像没有重叠的部分。 注意显示的是老图像的部分区域。
- 8.destination-atop 老图像仅仅仅仅显示重叠部分，新图像会显示在老图像的下面。
 // 效果叠加
- 9.lighter 新老图像都显示，但是重叠区域的颜色做加处理
- 10.darken 保留重叠部分最黑的像素。(每个颜色位进行比较，得到最小的)
- 11.lighten 保证重叠部分最量的像素。(每个颜色位进行比较，得到最大的)
- 12.xor 重叠部分会变成透明

- 13.copy 只有新图像会被保留，其余的全部被清除边透明

### 裁剪路径
clip()
把已经创建的路径转换成裁剪路径。
裁剪路径的作用是遮罩。只显示裁剪路径内的区域，裁剪路径外的区域会被隐藏。
注意：clip()只能遮罩在这个方法调用之后绘制的图像，如果是clip()方法调用之前绘制的图像，则无法实现遮罩。


## 动画
### 步骤：
1.清空canvas
再绘制每一帧动画之前，需要清空所有。清空所有最简单的做法就是clearRect()方法

2.保存canvas状态
如果在绘制的过程中会更改canvas的状态(颜色、移动了坐标原点等),又在绘制每一帧时都是原始状态的话，则最好保存下canvas的状态

3.绘制动画图形
这一步才是真正的绘制动画帧

4.恢复canvas状态
如果你前面保存了canvas状态，则应该在绘制完成一帧之后恢复canvas状态。

### 控制动画
我们可用通过canvas的方法或者自定义的方法把图像会知道到canvas上。正常情况，我们能看到绘制的结果是在脚本执行结束之后。例如，我们不可能在一个 for 循环内部完成动画。
也就是，为了执行动画，我们需要一些可以定时执行重绘的方法。

一般用到下面三个方法：
setInterval()
setTimeout()
requestAnimationFrame()

### link
`
https://www.cnblogs.com/merryZhang/p/7055677.html
`


