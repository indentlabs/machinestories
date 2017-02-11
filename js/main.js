//This function generates a value that I can use to call random array elements.
function getRandomArbitrary (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//show and hide additional content
$(".more_btn").click(function() { 
	$(".more").toggleClass( "show" );
});
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
$(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == getDocHeight()) {
           alert("bottom!");
       }
   });
//This ajax request calls 10 initial sets of random array elements strung together (on page load). 
$.ajax({
  type: "GET",
  url: "http://m8ker.github.io/machinestories/js/data.js",
  dataType: "script",
  success: function(){
		for (var i = 1; i <= 10; i++) {
			var random_occ = getRandomArbitrary (0, occupations.length),
					random_adj = getRandomArbitrary (0, adjectives.length),
          random_vrb = getRandomArbitrary (0, verbs.length),
          random_adv = getRandomArbitrary (0, adverbs.length),
					random_emo = getRandomArbitrary (0, emotions.length);
        $("#postswrapper").append('<p><span class="adj">'+adjectives[random_adj]+"</span>"+" "+occupations[random_occ]+" "+"feeling"+" "+'<span class="emo">'+emotions[random_emo]+"</span>"+","+" "+verbs[random_vrb]+"s"+" "+adverbs[random_adv]+"."+"</p>");
		};
  }
});
alert("HI")
/*
The following ajax request loads additional array elements when the user scrolls to the bottom of the page.

Using the Javascript event method scroll(), the js interpreter is watching for a scroll event.

The method scrollTop() tracks the position of the scrollbar. It's value corresponds to the number of pixels that 
are hidden from fiew above the scrollable area. When $(document).height() - $(window).height() equals the 
scrollbar position, this means we have scrolled to the bottom of the document.  This is our signal that ajax 
needs to add additional content to the page. 
*/
/*$(window).scroll(function() 
{
  if($(window).scrollTop() == $(document).height() - $(window).height())
  {
	  alert("hi");
    $.ajax({
    	type: "GET",
		  url: "http://m8ker.github.io/machinestories/js/data.js",
		  dataType: "script",
    	success: function() {
    		for (var i = 1; i <= 10; i++) {
	    		var random_occ = getRandomArbitrary (0, occupations.length),
							random_adj = getRandomArbitrary (0, adjectives.length),
              random_vrb = getRandomArbitrary (0, verbs.length),
              random_adv = getRandomArbitrary (0, adverbs.length),
							random_emo = getRandomArbitrary (0, emotions.length);
        $("#postswrapper").append('<p><span class="adj">'+adjectives[random_adj]+"</span>"+" "+occupations[random_occ]+" "+"feeling"+" "+'<span class="emo">'+emotions[random_emo]+"</span>"+","+" "+verbs[random_vrb]+"s"+" "+adverbs[random_adv]+"."+"</p>");
    	  };
    	}
    });
  }
});*/


