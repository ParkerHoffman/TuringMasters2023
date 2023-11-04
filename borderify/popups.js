//swal("Hello world!");

const commentArray = [
    "Have you done any exercise recently?",
    "Maybe you should call a relative.",
    "How's your grandma doing? Have you talked to her in a while?",
    "Your grandpa might enjoy hearing your voice again."
];

var functionalCommentArray = commentArray.slice();

function myFunction() {
/*
    // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
alert(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
*/
var ranCommentNum = Math.floor(Math.random() * commentArray.length)
alert(functionalCommentArray[ranCommentNum]);
console.log(commentArray)
console.log(functionalCommentArray)
if (functionalCommentArray.length != 0) {
    functionalCommentArray.splice(ranCommentNum, 1);
} else {
    functionalCommentArray = commentArray.slice();
}
    
}

//setTimeout(function() {window.alert("Help");},10000);
setInterval(myFunction, 3000);

