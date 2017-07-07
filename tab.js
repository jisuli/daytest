$('header p').on('click',function(){
	var index = $(this).index();
	$(this).addClass('click').siblings().removeClass('click');
	$('.list-item').animate({"margin-left":-index*100+'%'},600)
})