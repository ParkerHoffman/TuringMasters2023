// Insert vars

var switchToggle = false;


$(document).ready(function(){

	
	
	
	//Click Listener
	
	$('body').on('click', '.active', (e) => {
		console.log("It worked");
		
		
		if(switchToggle){
			$('.onButton').addClass('active');
			$('.offButton').removeClass('active');
		} else{
			$('.onButton').removeClass('active');
			$('.offButton').addClass('active');
		}
		
		switchToggle = !switchToggle;
		
		console.log(switchToggle);
		
	} )
	
	//Add more code after this
	
	
	
})