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
    window.addEventListener(“compassneedscalibration", function(event) {
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