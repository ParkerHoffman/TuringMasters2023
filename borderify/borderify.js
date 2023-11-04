//swal("Hello world!");

function myFunction() {
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
alert(days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ");
}

//setTimeout(function() {window.alert("Help");},10000);
//setInterval(myFunction,10000);

//body.innerHTML("<script src='https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>');

// contentScript.js (example content script file)// Create a new <script> element
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js'; // Replace 'path/to/sweetalert2.js' with the actual path// Append the <script> tag to the head of the page
document.head.appendChild(sweetAlertScript);
//document.body.appendChild(swal("Hello world!"));
//setTimeout(swal("Hello world!"),10000);
swal("Hello world!");