require(['jquery','b'],function($,b){
	$("#btn").on('click',function() {
		b.open();
		b.close();
	});
	// b.close();
	// $('.close').on('click',function(event) {
	// 	b.close();
	// });
});