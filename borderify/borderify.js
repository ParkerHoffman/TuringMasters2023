<<<<<<< Updated upstream
document.body.style.border = "5px solid red";
=======
//swal("Hello world!");

<<<<<<< HEAD
=======
const commentArray = [
    "Have you done any exercise recently?",
    "Maybe you should call a relative.",
    "How's your grandma doing? Have you talked to her in a while?",
    "Your grandpa might enjoy hearing your voice again."
];

var functionalCommentArray = commentArray.slice();

>>>>>>> 6c25488e547e3202cf971b65954d2d0893b8f58c
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
<<<<<<< HEAD
alert(days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ");
=======
alert(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
*/
var ranCommentNum = Math.floor(Math.random() * commentArray.length)
alert(functionalCommentArray[ranCommentNum]);
if (functionalCommentArray.length != 0) {
    functionalCommentArray.splice(ranCommentNum, 1);
} else {
    functionalCommentArray = commentArray.slice();
}
    
>>>>>>> 6c25488e547e3202cf971b65954d2d0893b8f58c
}

//setTimeout(function() {window.alert("Help");},10000);
setInterval(myFunction, 10000);

<<<<<<< HEAD
//body.innerHTML("<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>');

// contentScript.js (example content script file)// Create a new <script> element
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js'; // Replace 'path/to/sweetalert2.js' with the actual path// Append the <script> tag to the head of the page
document.head.appendChild(sweetAlertScript);

const sweetAlertUses = document.createElement('script');
sweetAlertUses.innerHTML = 'setInterval(function() {swal("Hello world!");}, 10000);';
document.body.appendChild(sweetAlertUses);
=======
>>>>>>> 6c25488e547e3202cf971b65954d2d0893b8f58c
>>>>>>> Stashed changes
