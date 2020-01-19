	
	$(document).ready(function() {
		
	$('#nav2').hide(0);

		
			$(window).scroll(function(){


					var windowHeight = $(window).scrollTop();
					var main = $("#main").offset();

					main = main.top;


					if(windowHeight >= main  ){
						

						$('#nav2').fadeIn(500);

					}else{
						$('#nav2').fadeOut(1000);

					}


			});

	});
