let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    this.style.color = "white";
  });
}

// document.querySelector("button").addEventListener("click", handleClick)
// function handleClick() {
//   alert("I got clicked!");
// }



// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();