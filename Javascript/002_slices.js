var tweet = prompt("Enter your tweet content:");
var tweetBelow140 = tweet.slice(0,140);

alert("A tweet has to have no more than 140 characters. This is your tweet: '" + tweetBelow140 +"'");

// better

alert(prompt("Enter your tweet content:").slice(0,140));