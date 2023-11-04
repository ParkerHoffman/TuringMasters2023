document.body.style.border = "5px solid green";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


await sleep(10*1000)
alert("This is a test alert.")