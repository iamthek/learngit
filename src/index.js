var center={};
(function (center){
    var list=[],subId=0;
    
    center.publish=function (type,content){
        if(!list[type]){
           return;
        }
        for(let i in list[type]){
            list[type][i].handler( list[type][i].id,content);
        }
    };

    center.subscribe=function (type,handler){
        if(!list[type]){
            list[type]=[];
        }
      
       list[type].push({
           id:++subId,
           handler:handler
        }) ;
        return subId;
    };
    center.unSubscribe=function (id){
        for(let i in list){
                for(let j in list[i]){
                        if(list[i][j].id==id){
                            list[i].splice(j,1);
                            return id;
                        }
                }
            
        }
        return false;
    };
   
}(center))
var A=center.subscribe('click',function(id,content){
    console.log('A-'+id+'-'+content);
})
var B=center.subscribe('click',function(id,content){
    console.log('B-'+id+'-'+content);
})

center.publish('click','这是个点击类')
center.unSubscribe(B)
center.publish('click','这是个点击类2')
//发布订阅模式
function  inherits(Child, Parent) {var F=function(){};F.prototype = Parent.prototype;Child.prototype = new F();Child.prototype.constructor = Child;}
//继承

var  quickSort=function (arr){
  if(arr.length<2){return arr};
  var index=Math.floor(arr.length/2);
  var base=arr.splice(index,1)[0];
  var left=[],right=[];
    for(let i in arr){
        if(arr[i]<base){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([base],quickSort(right));
}
//快速排序
var bubleSort=function (arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
//冒泡排序
// var  a=[1,2,10,3,8,-1,0,64,11];
// console.log(a);
// console.log(bubleSort(a));

var draw=function (){
    var canvasCtx=document.getElementById('mycanvas').getContext('2d');
     canvasCtx.rect(0,0,1,1);
     canvasCtx.fillStyle="#0000009e";
     canvasCtx.fill();
 console.log( canvasCtx.canvas.toDataURL('image/png'));   
}
var s=1;
function b(){
console.log(s);
var s=2;
console.log(s);
}
b();
var s;
console.log(s);
//变量提升
var full='windows';
var obj={
    full:'os',
    p:{
        full:'ps',
        getName:function (){
        return this.full;
    }
}}

console.log(obj.p.getName());
var test=obj.p.getName;
console.log(test());
//this 指针


function fooF(){
    this.a=0;
}
function bar(){
}
var foo=new fooF();
bar.prototype=foo;
bar.prototype.hello=function (){
    console.log(this.a);
   this.a+=1;
}
var bar1=new bar();
var bar2=new bar();
foo.hello();
bar1.hello();
bar2.hello();
foo.hello();

function reverStr(str){
var a=str.split('');
a.reverse();
a[0]=a[0].toUpperCase();

return  a.join('');
}
