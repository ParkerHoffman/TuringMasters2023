// Insert vars
//import "..background.js"
var switchToggle = false;
var tabToggle = false;


$(document).ready(function(){
/*
	async function testpull() {
		let onBool = await browser.storage.sync.get('buttonOn');
		console.log(onBool);
	}

	async function testpush(bool) {
		await browser.storage.sync.set({
			buttonOn: bool
		});
	}
	*/
	
	//Click Listener
	
	$('body').on('click', '.active', (e) => {
		
		
		if(switchToggle){
			$('.onButton').addClass('active');
			$('.offButton').removeClass('active');
			testpush(true);
		} else{
			$('.onButton').removeClass('active');
			$('.offButton').addClass('active');
			testpush(false);
		}
		
		switchToggle = !switchToggle;
		
//		console.log(switchToggle);
//		let onBool = browser.storage.managed.get('buttonOn');
//		console.log(onBool);
		testpull();
		
		
		
		
	} )
})

$(document).ready(function(){
	
	
	//Click Listener
	
	$('body').on('click', '.tabActive', (e) => {
		console.log("It worked");
		
		if(tabToggle){
			$('.sites').addClass('tabActive');
			$('.messages').removeClass('tabActive');
		} else{
			$('.sites').removeClass('tabActive');
			$('.messages').addClass('tabActive');
		}
		
		tabToggle = !tabToggle;
		
//		console.log(tabToggle);
		
		
		
		
	} )
})