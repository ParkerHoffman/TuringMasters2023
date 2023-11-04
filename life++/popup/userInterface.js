// Insert vars

var switchToggle = false;
var tabToggle = false;


$(document).ready(function(){

	
	
	
	//Click Listener
	
	$('body').on('click', '.active', (e) => {
		console.log("It worked");
		
		
		if(switchToggle){
			$('.onButton').addClass('active');
			$('.offButton').removeClass('active');
			browser.storage.sync.set({
				buttonOn: true
			});
		} else{
			$('.onButton').removeClass('active');
			$('.offButton').addClass('active');
			browser.storage.sync.set({
				buttonOn: false
			});
		}
		
		switchToggle = !switchToggle;
		
		console.log(switchToggle);
		
		
		
		
	} )
})

$(document).ready(function(){
	
	
	//Click Listener
	
	$('body').on('click', '.tabActive', (e) => {
		console.log("It worked")
		
		if(tabToggle){
			$('.sites').addClass('tabActive');
			$('.messages').removeClass('tabActive');
		} else{
			$('.sites').removeClass('tabActive');
			$('.messages').addClass('tabActive');
		}
		
		tabToggle = !tabToggle;
		
		console.log(tabToggle);
		
		
		
		
	} )
})