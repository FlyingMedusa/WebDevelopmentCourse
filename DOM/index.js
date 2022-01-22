third_li = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;

document.querySelector("ul").lastElementChild.innerHTML = "Martha!";
document.getElementsByTagName("li")[3].style.color = "darkcyan";
document.getElementsByClassName("btn")[0].style.backgroundColor = "lightcyan";
document.getElementById("title").innerHTML = "Bye!";
document.querySelector("#title").style.color = "darkcyan";
document.querySelector("li a").style.color = "red";
document.querySelector("li.scnd").style.color = "darkorange";
document.querySelectorAll("#unordered .list")[1].style.fontStyle = "italic";
// hierarchical selector
document.querySelector("#unordered div").style.backgroundColor = "crimson";

console.log(document.getElementsByTagName("li").length);