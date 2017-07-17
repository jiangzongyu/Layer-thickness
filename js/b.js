define(['jquery'],function($){
	// $('#btn').click(function(event) {
	// 	alert('hahah');
	// });
	return{
		open:function(){
			var str='<div class="container">'
						+'<div class="mask"></div>'
							+'<div class="box">'
								+'<div class="nav">'
									+'<div class="title">hhahah</div>'
										+'<div class="close">[X]</div>'
								'</div>'
							'</div>	'
					'</div>'
			$('body').append(str);
		},
		close:function(){
			$('.close').click(function(event) {
					$('.container').remove();
			});
		}
	}
});