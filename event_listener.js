const grandParent = document.querySelector(".grandParent")
const parent= document.querySelector(".parent")
const child = document.querySelector(".child")
const childNoPropagation = document.querySelector(".childNoPropagation")
const loggTest= document.querySelector("#loggTest")
const runOnce = document.querySelector("#runOnce")

function printInBox(textToPrint){
    const x = document.createElement("LI");
    const t = document.createTextNode(textToPrint);
    x.appendChild(t);

    const textBox = document.getElementById("addBox"); //no need of # here
    textBox.appendChild(x);
}


// --------------------bubble and capture --------------------
// the order in which we writte the listeners is not important ! 
// The order in which they are called depend only on the capture/bubble scheme

//first phase : event capture
parent.addEventListener("click", (e) => {
    printInBox("capture : parent")
}, {capture : true})

grandParent.addEventListener("click", (e) => {
    printInBox("capture : grandParent")
},{capture : true})

child.addEventListener("click", (e) => {
    printInBox("capture : child")
}, {capture : true})


//second phase : event bubbling
parent.addEventListener("click", (e) => {
    printInBox("bubble : parent")
})

childNoPropagation.addEventListener("click", (e) => {
    printInBox("capture : child")
    printInBox("!! Stopping the propagation here !! ")
    e.stopPropagation()
})

grandParent.addEventListener("click", (e) => {
    printInBox("bubble : grandParent")
})

child.addEventListener("click", (e) => {
    printInBox("bubble : child");
})




// --------------------misc options--------------------

// can also remove a function from the listener of a given event on some element 

// logging of the event that is generated
loggTest.addEventListener('click', (e) => {
    console.log("When you clicked you generated the event : ", e);
    console.log("event target property is", e.target)
    console.log("It can be used to modify this element")
    const newContent = document.createTextNode("  \'logg\'  ");
    e.target.append(newContent);
    e.stopPropagation
})

// print in box only once
runOnce.addEventListener("click",(e) => {
    printInBox("I Only logg once")
}, {once: true})