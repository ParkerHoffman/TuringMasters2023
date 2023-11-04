// Insert vars

var switchToggle = false;


$(document).ready(function(){

	
	
	
	//Click Listener
	
	$('body').on('click', '.switch .button.on', (e) => {
		console.log("It worked");
		
		$('.off').addClass('on');
		$('.off').removeClass('off');
		$(e.currentTarget).addClass('on');
		
		
		
		
	} )
})