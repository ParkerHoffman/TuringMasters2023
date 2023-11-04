function commentAlert() {
    const commentArray = [
        "Have you done any exercise recently?",
        "Maybe you should call a relative.",
        "How's your grandma doing? Have you talked to her in a while?",
        "Your grandpa might enjoy hearing your voice again."
    ];
    var functionalCommentArray = commentArray.slice();
    var ranCommentNum = Math.floor(Math.random() * functionalCommentArray.length)
    swal(functionalCommentArray[ranCommentNum]);
    //console.log(commentArray)
    //console.log(functionalCommentArray)
    if (functionalCommentArray.length != 1) {
        functionalCommentArray.splice(ranCommentNum, 1);
    } else {
        functionalCommentArray.pop();
        functionalCommentArray = commentArray.slice();
    }
    
}