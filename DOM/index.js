third_li = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;

document.querySelector("ul").lastElementChild.innerHTML = "Martha!";
document.getElementsByTagName("li")[3].style.color = "darkcyan";
document.getElementsByClassName("btn")[0].style.backgroundColor = "lightcyan";

//innerHTML vs textContent
document.getElementById("title").innerHTML = "<em>Bye!</em>";
document.getElementById("subtitle").textContent = "<em>1 2 3...</em>"

document.querySelector("#title").style.color = "darkcyan";
document.querySelector("li a").style.color = "red";
document.querySelector("li.scnd").style.color = "darkorange";
document.querySelectorAll("#unordered .list")[1].style.fontStyle = "italic";
// hierarchical selector
document.querySelector("#unordered div").style.backgroundColor = "crimson";

//adding-removing a class
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");

console.log(document.getElementsByTagName("li").length);
console.log(document.querySelector("li.scnd").classList);

// the first a attributes
console.log(document.querySelector("a").attributes);
console.log(document.querySelector("a").setAttribute("href", "https://www.bing.com"));