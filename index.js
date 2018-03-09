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
function  inherits(Child, Parent) {var F=function(){};F.prototype = Parent.prototype;Child.prototype = new F();Child.prototype.constructor = Child;}


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
var  a=[1,2,10,3,8,-1,0,64,11];
console.log(a);
console.log(bubleSort(a));

var draw=function (){
    var canvasCtx=document.getElementById('mycanvas').getContext('2d');
     canvasCtx.stokeRect(10,10,20,20)   ;
}
draw();