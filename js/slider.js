sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);//bring in initial image
	startSlider();//start slide show

  //stop slideshow on mouse over, resume when mouse out
  $('#slider > img').on("mouseover", function(){
  	stopLoop();
  });

  $('#slider > img').on('mouseout',function(){
  	startSlider();
  });
});

//function to loop through all images
function startSlider(){
	count = $('#slider > img').length;

	loop = setInterval(function(){

		if(sliderNext > count){
			sliderNext = 1;
			sliderInt = 1;
		}

		$('#slider > img').fadeOut(300);
		$('#slider > img#'+sliderNext).fadeIn(300);

		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;

		}, 3000)
}

//insert user control functionality
function prev(){
	newSlide = sliderInt -1;
	showSlide(newSlide);
}

//user control functionality
function next(){
	newSlide = sliderInt +1;
	showSlide(newSlide);

}

//function to stop the side show and to prevent glitching
//when user controls are used
function stopLoop(){
	window.clearInterval(loop);
}

//function to show the next slide and then resume slideshow
function showSlide(id){
	stopLoop();
  //bounds checking
	if(id > count){
			id = 1;
		}else if(id < 1){
			id = count;
		}

	$('#slider > img').fadeOut(300);
	$('#slider > img#'+id).fadeIn(300);

	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
}
