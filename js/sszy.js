$(function(){
	var div_width = $(document).width();
	var div_height = $(document).height();
	$(window).resize(function (){
		$('#main_right').css('width',$(document).width()-239);
		location.reload();
	});
	$('#div2').css({
		'top':(div_height/2-$('#div2').height()/2)+'px',
		'left':(div_width/2-$('#div2').width()/2)+'px'	
	});
	$('.showlogin').click(function (){
		$('#div2').slideDown('slow');						   
	});
	$('.cbutton').click(function (){
		$('#div2').slideUp('slow');
		
	});
	
		//accordion   ÕÛµþ²Ëµ¥
	$('#menu').accordion({
		collapsible:true,
		event:'click',
		active:true
	});
	$('#main_right').css({
		'width':$(document).width()-239+'px',
		'height':$(document).height()-150+'px'	
	});

	$('#menu h3').click(function (){
		$('#spans span').eq(0).text($(this).text());
		$('#spans span').eq(1).text('');
		$('#spans span').eq(2).text('');
	});
	$('#menu a').click(function (){
		$('#spans span').eq(1).text('>>');
		$('#spans span').eq(2).text($(this).text());
	});
 })

function cleart(obj){
	obj.value='';	
}