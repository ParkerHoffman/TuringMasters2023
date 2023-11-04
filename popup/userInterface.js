// Insert vars

var switchToggle = false;


$(document).ready(function(){

	
	
	
	//Click Listener
	
	$('body').on('click', '.switch .button.active', (e) => {
		console.log("It worked");
		
		$('.inactive').addClass('active');
		$('.inactive').removeClass('inactive');
		$(this).removeClass('active');
		$(this).addClass('inactive');
		
		switchToggle = !switchToggle;
		
		console.log(switchToggle);
		
		
		
		
	} )
})