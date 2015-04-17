var next = 1;
var allImages = $('.images').children();
var total = allImages.length -1;
w = $('body').width();
translateString = "translate(-"+w+"px,0)";
var noTranslate = "translate(0,0)";

allImages.css(
{
	"-webkit-transform": translateString,
    "-moz-transform": translateString,
    "-o-transform": translateString,
    "-ms-transform": translateString
}
);
allImages.first().css(
{
	"-webkit-transform": noTranslate,
    "-moz-transform": noTranslate,
    "-o-transform": noTranslate,
    "-ms-transform": noTranslate
}
);

setInterval(function(){
	prev = (next === 0 ? total : next -1);
	console.log("Previous is "+prev+" Next is "+next);
	allImages.eq(next).css(
	{
		"-webkit-transform": noTranslate,
		"-moz-transform": noTranslate,
		"-o-transform": noTranslate,
		"-ms-transform": noTranslate
	}
	);
	next = (next+1) % (total+1);
	setTimeout(function(){}, 5000);
	allImages.eq(prev).css(
	{
		"-webkit-transform": translateString,
		"-moz-transform": translateString,
		"-o-transform": translateString,
		"-ms-transform": translateString
	}
	);	
}, 5000);