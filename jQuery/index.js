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

// Adding Event Listeners
$("h1").click(function() {
    $("h1").css("color","beige");
});

$("input").keypress(function(event) {
    console.log(event.key);
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

// on
$("h1").on("mouseover", function () {
    $("h1").css("color","yellow");
});

$("h1").on("click", function () {
    $("h1").css("color","red");
});

// adding and removing elements
$("h1").before("<button>New1</button>");
$("h1").after("<button>New2</button>");
$("h1").prepend("<button>New3</button>");
$("h1").append("<button>New4</button>");

// remove
// $("button").remove();

/* 
hide an element - .hide()
hide and show - .toggle()
hide slower - .fadeOut();
show slower - .fadeIn();
hide and show slower - .fadeToggle();
slide:
slideUp(); slideDown(); slideToggle();

animate: inside {} only those rules that have a numeric value
*/

$("button").on("click", function() {
    $("h3").slideUp().slideDown().animate({opacity: 0.5, margin: "5%"});
});