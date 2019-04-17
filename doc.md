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
