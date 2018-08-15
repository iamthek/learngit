## 14天训练营作业提交
### day1
- 利用image测网速和上传数据
    - get请求后带参数，koa2里面使用koa-logger日志就可以统计了
- css 里的xss漏洞
    - color:expression(js), url(js)
    - 利用伪类伪元素精简dom
- iframe 通信
    - window.postMessage(); window.onmessage=(e)=>{}
    - iframe 可以跨域 扩容localStorage
- html 语义化
### day2
-  css3d 
    - transform-style:  preserve-3d 子元素将保留其 3D 位置。
    - transform: perspective(74px); 透视视角 方便调试
    - transform-origin 调整移动中心  高宽的一般为立方体中心
- js获取手机陀螺仪
    - 罗盘校准
    ```javascript
    window.addEventListener("compassneedscalibration", function(event) {
      alert('您的罗盘需要校准');
      event.preventDefault();}, true);
    ```
    - 获取重力加速度
    ```javascript
    window.addEventListener("devicemotion", function(event) {
   // 处理event.acceleration
   //	x(y,z):设备在x(y,z)方向上的移动加速度值
   //event.accelerationIncludingGravity
   //考虑了重力加速度后设备在x(y,z)
   // event.rotationRate
	//alpha,beta,gamma:设备绕x,y,z轴旋转的角度
  }, true);

    ```
    - 获取旋转角度
    ```javascript
    window.addEventListener(“deviceorientation”, function(event) {
        // 处理event.alpha、event.beta及event.gamma}, true);
    });
    ```
- 实现3d 圆环（淘宝造物节）
    - 绕y轴旋转 并推开一个半径
    - css视角 perspective  进入到圆环中心
    - 首先每个竖片组成一个一环 然后只需要监听鼠标 整体y轴旋转他的容器就行，旋转的是x方向的偏移量  
### day3
- BFC 
- css 利用伪类和box-shadow 绘制多个元素
- 线性渐变 linear-gradient(角度,颜色值1,颜色值2)
    - 两个相邻颜色坐标如果是一样颜色就是一段纯色，适当模糊可以消除锯齿
- 径向渐变 radial-gradient(x轴半径,y轴半径 at 中心X 中心Y ，颜色值1 位置,颜色值2 ,位置)
- mix-blend-mode 设置烫金字
### day4
- 动画贝塞尔曲线
  - transition : all 1s  cubic-bezier(.17, .86, .73, .14);
  - 可以直接借助Chrome开发者工具调试贝塞尔
- matrix
   - transform: matrix(a,b,c,d,e,f);
    $$
    \left[
    \begin{matrix}
        a & c & e \\
        b & d & f \\
        0 & 0 & 1
    \end{matrix}
    \right] * 
  \left[
    \begin{matrix}
        x  \\
        y\\
        1
    \end{matrix}
    \right]
        =
          \left[
    \begin{matrix}
        ax+cy+e \\
        bx+dy+f\\
        0+0+1
    \end{matrix}
    \right] 
    $$
    - 位移  matrix(1, 0, 0, 1, x, y);
    - 缩放 比例是 s，则有matrix(s, 0, 0, s, 0, 0);第一个s代表x轴，第二个s代表y轴。
    - 旋转 matrix(cosθ,sinθ,-sinθ,cosθ,0,0)
    - 拉伸 matrix(1,tan(θ)y,tan(θ)x,1,0,0)
    - 可以借助网站或工具设置matrix 完成组合变换效果,亦可以实现ie下兼容