
var tweetForm = document.querySelector('#tweetForm');
var tweetContainer = document.querySelector('#tweets');


tweetForm.addEventListener('submit',function(e){
    e.preventDefault();
    
    var usernameInput = tweetForm.elements.username;
    var tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
    

})

function addTweet(username,tweet){

    var newTweet = document.createElement('li');
    var bTag = document.createElement('b');
    
    bTag.append(username);
    newTweet.append(bTag);
    
    newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click',function(e){
    e.target.nodeName === "LI" && e.target.remove();
})



tweetContainer.addEventListener('click',function(e){
    e.target.nodeName === 'LI' && e.target.remove();
})
