


/*document.body.addEventListener("click", function()){
    let buttonClick = event.target;

    if (buttonClick.classList.contains('button') {
        const bulbId = buttonClick.id + ' Light';
        const bulb = document.getElementById(bulbId);
    })
}
*/

// Get stop button by id
const stopButton = document.getElementById("stopButton")
const stopBulb = document.getElementById("stopLight")

// Add click event listener on the stop button
stopButton.addEventListener("click", function()  {
stopBulb.classList.toggle("stop")
})

// Add click events for when mouse enters and leaves
stopButton.addEventListener("mouseenter", function() {
  console.log("Entered Stop Button");
})

stopButton.addEventListener('mouseleave', function() {
  console.log('Left Stop button');
})




// Get slow button by id
const slowButton = document.getElementById("slowButton")
const slowBulb = document.getElementById("slowLight")

// Add click event listener on the slow button
slowButton.addEventListener("click", function()  {
slowBulb.classList.toggle("slow")
})

// Add click events for when mouse enters and leaves
slowButton.addEventListener("mouseenter", function() {
  console.log("Entered Slow Button");
})

slowButton.addEventListener('mouseleave', function() {
  console.log('Left Slow button');
})




// Get go button by id
const goButton = document.getElementById("goButton")
const goBulb = document.getElementById("goLight")

// Add click event listener on the go button
goButton.addEventListener("click", function()  {
goBulb.classList.toggle("go")
}) 

// Add click events for when mouse enters and leaves
goButton.addEventListener("mouseenter", function() {
  console.log("Entered Go Button");
})

goButton.addEventListener('mouseleave', function() {
  console.log('Left Go button');
})

if (bulbOn = true) {
    console.log(textContent + ' bulb on')
 } else {
    console.log(textContent + 'bulb off')
}

//When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
//When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.
//addEventListener("mouseenter", (event)
//addEventListener("mouseleave", (event) => {});

//When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
//When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.

// Create <textContent> from html code for button

// let stopLightGrab = document.getElementsById("stopLight")
// let stopLightText = stopLightGrab.textContent

// let slowLightGrab = document.getElementsById("slowLight")
// let slowLightText = slowLightGrab.textContent

// let goLightGrab = document.getElementsById("goLight")
// let goLightText = goLightGrab.textContent

// Get the element, add a click listener...
/* document.getElementById("controls").addEventListener("click", function(target) {
	// id matches controls
  // event listener happens upon click
  // parameter for function is a target (the id)
	if(target.className == "button") {
		// id.class name = "button"
		console.log("<textContent> bulb on");
	}
  else {
    console.log("<textContent> bulb off")
  }
}); */




/* workshop code

goButton.addEventListener("mouseenter", function() {
  console.log(event.target.textContent)
  console.log("Entered ${event.target.textContent} Button");
}) 

function mouseEnter(event) {
  console.log('Entered ${event.target.textTontent} Button`)
}



*/

/* Bonus

let controlDiv = document.querySelector("#controls")





*/

/* 

Solution 2 remedy for individual buttons

goButton.addEventListener("mouseenter", function(event){
  console.log("Entered ${goButton.textContent} button")
})

goButton.addEventListener("mouseleave", function(event){
  console.log("Leaving ${goButton.textContent} button")
})

That's great and all, but let's do event propogation to put that all into one line of code

const controlDiv = document.querySelector("#controls")

controlDiv.addEventListener("click", function(event){
  console.log("target, event.target");
  let clickedButton = event.target
  if (clickedButton === stopButton){
    console.log("${stopButton.textContent} bulb")
  } else if (clickedButton === slowButton){
    console.log("$slowButton.textContent} bulb")
    else if (clickedButton === goButton){
      console.log("$goButton.textContent} bulb")
    }
  }
})

function bulbHandler(event){

}

__________________________________________

controlDiv.addEventListener("mouseenter", function(event){
  console.log("Entered ${event.target} button")
})

controlDiv.addEventListener("mouseleave", function(event){
  console.log("Leaving ${event.target} button")
})


*/
