//jQuery

//include this link in the head section of html to access functions
//jquery.com
//written in head section of html to give you convienence
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

//Selecting elements with jQuery
$("p")
$("main-nav")
$("main-nav")

//Ensures code does not run until document  is ready
$(document).ready()snippet

/*Anonymous Function. will use as a call back
	Uses a function as a variable*/

	//example
	function() {
		//do something
	}

	//last class
	function someName() {
		//do something
	}

//allows you to chain things together

$(document).ready(function() {
	// code that gets run when the page is loaded
});

$(".color-block").fadeOut();
$(".color-block").fadeIn();

//fade over time
$(".color-block").fadeOut(1000);
$(".color-block").fadeIn(4000);

//hide wiyh slide
$(".color-block").slideUp(1000);
$(".color-block").slideDown(4000);

//animating
$(".color-block").animate({
	opacity: 0.25,
	width: 70%
}, 1000);

//click event
$("item").click(
	Function(){
		alert('imclicked');
	}
);

/*callbacksanonymous function in another function
that starts when the first function finishes*/

var animateMenu = function(){
	$(".menu").animate({opacity: 0.5})
}
$(".menu").show(animateMenu)

//simplified
$(".menu").show(function(){
	$(".menu").animate( {opacity: 0.5})
})




