var active = 0;
var allImages = $('.images').not('.bomb').children();
var bomba = $('.images').not('.main').children();
var total = allImages.length;
console.log(allImages);
allImages.toggle();
allImages.first().toggle();
setInterval(function(){
	allImages.eq(active).fadeToggle(1500);
	active = (active+1) % total;
	allImages.eq(active).fadeToggle(1500);
}, 10000);

document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
	var totale = bomba.length;
	bomba.toggle();
	bomba.first().toggle();
	setInterval(function(){
		bomba.eq(active).fadeToggle(1500);
		active = (active+1) % totale;
		bomba.eq(active).fadeToggle(1500);
	}, 10000);
};