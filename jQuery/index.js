$("h3").css("color", "white");
console.log($("h3").css("color"));

// jQuery has no difference in selecting one or many
$("button");

$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");

console.log($("h1").hasClass("margin-50"));

//manipulating text
$("h1").text("Bye");
$("button").text("Click ME");
$("button").html("<em>Don't click me</em>");

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
console.log($("h1").attr("class"));