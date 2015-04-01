var active = 0;
var allImages = $('.images').children();
var total = allImages.length;
console.log(allImages);
allImages.toggle();
allImages.first().toggle();
setInterval(function(){
	allImages.eq(active).fadeToggle(1500);
	active = (active+1) % total;
	allImages.eq(active).fadeToggle(1500);
}, 10000);