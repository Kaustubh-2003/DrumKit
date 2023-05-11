document.addEventListener("keydown", function (event) {
  // alert("key was pressed");
  detX(event.key);
  keyanime(event.key);

});

// alert('ha jud gya hai ab kya kar loge?');
// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){

//   // var audio = new Audio('sounds/tom-1.mp3');
//   // audio.play();



// }

// document.addEventListener("keydown",function(){
//   alert("key was pressed");

// });


//for button press

for (var i = 0; i < 8; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    detX(buttonInnerHtml);
    keyanime(buttonInnerHtml);
  });
}


// for keypress 

function detX(chart) {
  switch (chart) {
    case "w":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "a":
      var tom3 = new Audio('sounds/tom-4.mp3');
      tom3.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/kick-bass.mp3');
      tom3.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/snare.mp3');
      tom3.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      alert("haha wrong key u dummy");

  };
}


function keyanime(currKey){
  var activeButton = document.querySelector("." + currKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}