# template
```
<html>

<head>
    <title>Canvas tutorial</title>
    <style type="text/css">
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body onload="draw()">
<canvas id="canvas" width="300" height="300"></canvas>
</body>
<script type="text/javascript">
    function draw() {
        let canvas = document.getElementById("canvas");
        // 检测支持性
        if (!canvas.getContext) return;
        //获得 2d 上下文对象
        let ctx = canvas.getContext("2d");
        //开始代码
    }
</script>

</html>
```
[文档地址]（https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors）
## 内容

不同于 SVG，<canvas> 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。但众多路径生成的方法让复杂图形的绘制成为了可能。

两条非平行的连线可以构成一个区域。

### 绘制矩形（三种方法）
- fillRect(x,y,width,height)
- clearRect(x,y,width,height)
- strokeRect(x,y,width,height)

- rect(x, y, width, height) 当该方法执行的时候，moveTo()方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。
`
ctx.rect(0,0,75,75); // rect此方法绘制的是矩形路径而不是独立的形状, 需要fill() 或 stroke()
ctx.fill();

// 等同于
fillRect(0,0,75,75);
`

### 绘制路径
- beginPath()
- closePath()
- stroke()
- fill()  和fill()配合使用，要填充的区域无需闭合。

### 绘制圆和圆弧 [详解](https://blog.csdn.net/weixin_41646716/article/details/82386332)
- arc(x,y,radius,startAngle,endAngle,anticlockwise)   弧线，圆，也可以绘制扇形
  画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
  注意：arc()函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式: `弧度=(Math.PI/180)*角度 即: rad= (π / 180) * deg   deg = (rad * 180) / π` `π = Math.PI`
- arcTo(x1,y1,x2,y2,radius) 仅能绘制出弧线
根据给定的`控制点(x1,y1)`，`结束点(x2,y2)` 和 `半径`画一段圆弧，再以直线连接两个控制点。

### 绘制直线
- lineTo(x,y)  绘制一条从当前位置到指定x以及y位置的直线。

### 移动笔触
- moveTo(x,y)  moveTo()绘制一些不连续的路径

### 二次贝塞尔曲线及三次贝塞尔曲线
- quadraticCurveTo(cp1x, cp1y, x, y)
绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
- bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。


### Path2D()
Path2D()会返回一个新初始化的Path2D对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含SVG path数据的字符串作为变量）

###  SVG paths
`
var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
这条路径将先移动到点 (M10 10) 然后再水平移动80个单位(h 80)，然后下移80个单位 (v 80)，接着左移80个单位 (h -80)，再回到起点处 (z)
`


### 颜色 Color
（默认情况系下，线条和填充颜色都是黑色,color可以是表示 CSS 颜色值的字符串，渐变对象canvasGradient或者图案对象）
- fillStyle = color;
- stroleStyle = color;

### 透明度
- globalAplan
- rgba()

### 线型 Line styles
- lineWidth = value(默认1，注意没有单位)  设置线条宽度  lineWidth 设置的是最终stroke()画笔的宽度。只要是放在stroke()前，那放哪里都无所谓。
- lineCap = type(默认：butt)     设置线条末端样式
  - butt，round，square
- lineJoin = type(默认miter)    设定线条和线条间接合处样式  
  - round, bevel，miter。
- miterLimit = value 限制当两条线相交时交界处最大长度(所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度)
- setLineDash(segments= []) 设置当前虚线样式
- lineDashOffset = value 设置虚线样式的起始偏移量
- getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组

### 渐变 Gradients  addColorStop
- createLineGradient(x1,y1,x2,y2) 起点(x1,y1)  结束点(x2,y2)
- createRadialGradient(x1,y1,r1,x2,y2,r2)
  前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆


### 图案样式(图片画刷) Patterns
- createPattern(image,type)   
image: image对象/canvas对象
type: repeat  repeat-x repeat-y no-repeat


### 阴影 Shadows
- shadowOffsetX / shadowOffsetY = float  阴影在X轴/y轴的延伸距离 正值表示向下或右延伸  负值表示向上或向左延伸  默认都为0
- shadowBlur = float    阴影模糊程度
- shadowColor = color   阴影颜色


###  canvas 填充规则

### 文本
- font = value (默认字体 10px sans-serif)
- textAlign = value (默认start)  文本对齐
  start/end/left/right/center   
- textBaseLine = value (默认alphabetic)         基线对齐
  top/hanging/middle/alphabetic/ideographlic/bottom
- direction = value 文本方向
  ltr/rtl/inherit
- measureText()  返回一个TextMetrics对象的宽度，所在像素，提现文本特向的属性


### 绘制文本 
- fillText(text,x,y [, maxWidth]);
- strokeText(text,x,y [, maxWidth]);


## 图片

### canvas图片源
- HTMLImageElemnt 
- HTMLVedioElement
- HTMLCanvasElement 
- ImageBitmap
- ImageBitmap

### 使用相同页面内的图片
- document.images
- document.getElementsByTagName()等

### 使用其他域名下的图片
- img url  img.crossOrigin = 'anonymous';

### 其他canvas元素
- 引入准备好了的canvas元素


`注：`可通过data：url方式引入图像 例如:`img.src = Base64`

### 绘制图片
- drawImage(img,x,y)   img:图片源(x,y)是img在canvas里的起始坐标
- drawImage(img,x,y,width,height) width,height 控制图片的缩放
- drawImage(img,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight) 切片
前4个是定义图像源的切片位置和大小，后4个则是定义切片的目标显示位置和大小。
不要在用drawImage时缩放图像.


### 控制图像的缩放行为
imageSmoothingEnabled 属性
`
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
`


###  图形组合方式 （目标图 源图） globalCompositeOperation 
- source-over  默认组合方式
-destination-out   目标图以外的图形
-


### 状态的保存和恢复
- save()
- restore()
`注：在做变形之前保存状态是一个良好的习惯`


### 使用多层画布去画一个复杂的场景
`
// 例如，假设您有一个游戏，其UI位于顶部，中间是游戏性动作，底部是静态背景。
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black
  }
  canvas { position: absolute; }
  #ui-layer { z-index: 3 }
  #game-layer { z-index: 2 }
  #background-layer { z-index: 1 }
</style>
`


### 移动 Translating
- translate(x,y)

### 旋转 Rotate
- rotate(angle)

### 缩放 Scale
- scale(x,y)

### 变形 Transforms
- transform(a,b,c,d,e,f)
a (m11)
水平方向的缩放
b(m12)
竖直方向的倾斜偏移
c(m21)
水平方向的倾斜偏移
d(m22)
竖直方向的缩放
e(dx)
水平方向的移动
f(dy)
竖直方向的移动

- setTransform(a, b, c, d, e, f)
- resetTransform()

### 组合 Compositing
### 裁切路径  clip()


### 基本动画
- 1.清空canvas  clearRect(0,0,canvas.width,canvas.height)
- 2.保存canvas状态
- 3.绘制动画图形 （重绘动画帧）
- 4.恢复canvas状态

### 高级动画


## ImageData 对象  存储着canvas对象真实的像素数据
只读属性
- width
- height
- data Uint8ClampedArray类型的一维数组
data属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。每个像素用4个1bytes值(按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用0至255来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引0位置。像素从左到右被处理，然后往下，遍历整个数组。

根据行、列读取某像素点的R/G/B/A值的公式：
`
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3];  
//0/1/2/3 => RGBA
`

Uint8ClampedArray.length属性来读取像素数组的大小
`
var numBytes = imageData.data.length;
`
ctx.createImageData()  
ctx.getImageData(left, top, width, height);


