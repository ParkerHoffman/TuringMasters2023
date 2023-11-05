// Insert vars
var switchToggle = false;
var tabToggle = false;
/*
function toggleButton(e) {
					
	if (e.classList.contains('on')) {
		e.classList.remove('on');
		console.log("Functional!! Turned off");
	} else {
		e.classList.add('on');
		console.log("Functional!! Turned on");
	}
}


async function testpull() {
	let onBool = await window.storage.sync.get('buttonOn');
	console.log(onBool);
}

async function testpush(bool) {
	await window.storage.sync.set({
		buttonOn: bool
	});
}
*/

//credit to Craig Otis, https://stackoverflow.com/questions/840088/how-to-load-xml-file-contents-using-javascript
var xmlHTTP = new XMLHttpRequest();
try {
    xmlHTTP.open("GET", "storage.html", false);
    xmlHTTP.send(null);
} catch (e) {
    window.alert("Unable to load the requested file.");
    //    return;
}

xmlStorage = xmlHTTP.responseText;
alert(xmLStorage);

$(document).ready(function(){

	
	
	//Click Listener
	
	$('#onOffButton').on('click', (e) => {
		
		
		if(switchToggle){
			$('#onOffButton').addClass('on');
			$('#onOffButton').removeClass('off');
			//$('#onOffButton').addClass('active');
			//testpush(true);

		} else{
			$('#onOffButton').addClass('off');
			$('#onOffButton').removeClass('on');
		//	$('.onButton').removeClass('active');
		//	$('.offButton').addClass('active');
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