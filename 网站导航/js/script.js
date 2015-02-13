$(document).ready(function() {
	
	$(window).scroll(function() {
		var top = $(document).scrollTop();//滚动条偏离顶部的位置
		var menu = $("#menu");
		var items = $("#content").find('.item');

		var item3 = $('.item').eq(2);
		var navP  = $('#keyUp');
		var currentId = '';

		var i3H = item3.offset().top;// 第三个item距离顶部的位置


	


		items.each(function() {//遍历每个items执行函数；
			var echI = $(this);	
	 
		
			 topItem = echI.offset().top;//每一个item距离顶部的位置
			if (top > topItem -150){ 
		 currentId = '#'+echI.attr('id');//遍历每一个id的属性并赋值给CURRENTID
				


				}
			else{ 
			return false;
			}

		});//遍历结束
	
		var  currentLink = menu.find('.current');
		if (currentId&&currentLink.attr('href')!= currentId){ 
			currentLink.removeClass('current');
			menu.find('[href='+currentId+']').addClass('current');
			}

		if (top > i3H -150) { 
			navP.fadeIn('3000') ;//animate结束;
			} 
			else{ 
			
			navP.fadeOut('3000');
			
				}
			
	});
					

});