var tweetForm = document.querySelector("#tweetform");
var tweetContainer = document.querySelector('#tweets');
tweetForm.addEventListener("submit",function(e){
    e.preventDefault();

    // var usernameInput = document.querySelectorAll("input")[0];
    // var tweetInput = document.querySelectorAll("input")[1];
   
    var usernameInput = tweetForm.elements.username;
    var tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
    

});


var addTweet = function(username,tweet){
    var newtweet = document.createElement('li');
    var bTag = document.createElement('b');

    bTag.append(username);
    newtweet.append(bTag);

    newtweet.append(`- ${tweet}`);
    tweetContainer.append(newtweet);
}


