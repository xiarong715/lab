$(document).ready(function(){
	/*导航条样式控制*/
	/*
	var $a = $("#nav-bar a");
	$a.click(function(){
		$(this).addClass("active").siblings("#nav-bar a").removeClass("active");
	});
	*/
	var $pic = $("#slideshow ul.show-img li");
	var $lib = $("#slideshow ul.lib li");
	var index = 0;
	var length = $pic.length;
	//初始化图片、小圆点显示
	play();
	//为小圆点添加鼠标事件
	$lib.mouseover(function(){
		index = $(this).index();
		play();
	});
	
	//为轮播图添加定时器
	var slidershow_id = setInterval(function() {slidershowTimer();}, 2000);
	
	//清除定时器
	$pic.mouseover(function(){
		clearInterval(slidershow_id);
	});
	$lib.mouseover(function(){
		clearInterval(slidershow_id);
	});
	
	//重置定时器
	$pic.mouseout(function(){
		slidershow_id = setInterval(function() {slidershowTimer();}, 2000);
	});
	$lib.mouseout(function(){
		slidershow_id = setInterval(function() {slidershowTimer();}, 2000);
	});

	//轮播图播放
	function play() {
		$pic.eq(index).fadeIn(300).siblings("#slideshow ul.show-img li").fadeOut(300);
		$lib.eq(index).css({background: "#00A097"}).siblings("#slideshow ul.lib li").css({background: "rgba(255, 255, 255, .5)"});
	};
	
	//定时器调用函数
	function slidershowTimer(){
		index++;
		index %= length;
		play();
	}
	
	//显示二维码图片
	var $qrcode = $("#header a img.qrcode");
	$qrcode.click(function(e){
		e.preventDefault();
		$("#cover").css({display: "block"});
	});
	
	//关闭二维码图片
	var $qrclose = $("#QR img.close");
	$qrclose.click(function(){
		$("#cover").css({display: "none"});
	});
});