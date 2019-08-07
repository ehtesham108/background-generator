var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// Excercise

// 1. Write code so that the colour inputs match the background generated on the first page load. 
window.onload = setGradient();

// 2. Display the initial CSS linear gradient property on page load.
// This line{{window.onload = setGradient();}} already did that.


//3. BONUS: Add a random button which generates two random numbers for the colour inputs.
random.addEventListener("click",setRandomColor);

function setRandomColor(){
	var rc1=getRandomColor();
	var rc2=getRandomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ rc1 
	+ ", " 
	+ rc2
	+ ")";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
