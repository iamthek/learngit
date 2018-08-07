function imgData(){
let img=new Image();
let start=new Date();
let time=start.getMinutes()+':'+start.getSeconds();
img.src='test.png?time='+time;
img.crossOrigin='anonymous';
img.onload=function (){
    let end=Date.now();
    var speed=(267/1000)/(end-start)*1000;//flesize 267b
    console.log(`当前网速:${speed}  kb/s`)
}
}
function   iframLocalStorage(){
    var frame=window.frames['sendMessage'];
   
    frame.postMessage('name:kong','http://localhost:8086');
}
