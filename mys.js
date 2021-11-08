console.log("added")
console.log(window.outerWidth);
console.log(document);


var mybutton = document.getElementById("mybtn");
var display = document.getElementById("count");

console.log(display);

var mycount = 0;

function addCount() {
	mycount = mycount + 1;
    display.innerText = mycount;

}

mybutton.addEventListener("click", addCount)

