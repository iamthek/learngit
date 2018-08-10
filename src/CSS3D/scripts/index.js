var container = document.getElementById('container');
var box = document.getElementById('box');
var arr = box.getElementsByTagName('div');
var radius = calculateRadius(129, 20);
var audio = document.getElementById('audio');

for (var i = 0; i < arr.length; i++) {
	arr[i].style.background = 'url("./img/p' + (i + 1) + '.png") no-repeat';
	arr[i].style.WebkitTransform = "rotateY(" + 360 / arr.length * i + 'deg) translatez(' + radius + 'px)';
}

function calculateRadius(length, totalNum) {
	return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
}
$('#laba').on('tap', function(e) {
	if (audio.paused) {
		audio.play();
		$('#laba').text('🎺');
	} else {
		audio.pause();
		$('#laba').text('⏸');
	}
})

var startX = 0,startY=0,
	x = 0,y=0
	endX = 0,endY=0;
var flag = true;
$('#box').on('touchstart', function(event) {
	event.preventDefault();

	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
	startY=touch.pageY-y;
})
$('#box').on('touchmove', function(event) {
	if (flag) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		endY = touch.pageY;
		x = endX - startX;
		y = endY - startY;
		// x=Math.abs(x)>180?x*-1:x;
		// y=Math.abs(y)>90?y*-1:y;
		box.style.transform =`rotateY(${x}deg) rotateX(${formartY(y)}deg)` //'rotateY(' + x + 'deg)';
	} else {
		return false;
	}

})
$('#box').on('touchend', function(event) {
	console.log("over");
});


window.addEventListener('deviceorientation', function(event) {

	var gamma = event.gamma;
	if (Math.abs(gamma) > 1) {
		flag = false;
		box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';
	} else {
		flag = true;
	}

})

function formartY(oy){
	if(oy>90){
		return 90;
	}
	else if(oy<-90)
	{
		return -90;
	}
	else{
		return oy;
	}
}