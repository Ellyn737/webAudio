var context = new AudioContext();
var request = new XMLHttpRequest();
var drumPads = document.getElementsByClassName("drumPad");

var soundArray = [];
var mediaSourceArray = [];

for(var i = 0; i < drumPads.length; i++){
    drumPads.getElementById("box" + (i+1)).addEventListener('mousedown', function(e){
        playSound(e);
    });
    
    soundArray[i] = new Audio("sounds/sound"+(i+1)+".wav");
    mediaSourceArray[i] = context.createMediaElementSource(soundArray[i]);
    
    mediaSourceArray[i].connect(context.destination);
}


function playSound(e){
    var number = e.target.id.substring(e.target.id.length-1);
    soundArray[number].play();
}


