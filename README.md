# canvas
learn canvas and some demo

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
<canvas id="canvas" width="300" height="300"></canvas>
</body>
<script type="text/javascript">
    function draw() {
        var canvas = document.getElementById("canvas");
        // 检测支持性
        if (!canvas.getContext) return;
        //获得 2d 上下文对象
        var ctx = canvas.getContext("2d");
        //开始代码

    }
    draw();
</script>

</html>
```
