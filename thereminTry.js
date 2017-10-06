//context --> Web Audio API
var context = new AudioContext();
var oscillator = null;
var mousedown = false;
var gainNode = context.createGain();



var calculateFrequency = function(mouseXPosition){
    //hearing range
    var minFrequency = 20,
        maxFrequency = 2000;
    
    return ((mouseXPosition / window.innerWidth) * maxFrequency) + minFrequency;
};

var calculateGain = function(mouseYPosition){
    //hearing range
    var minGain = 0,
        maxGain = 1;
    
    return 1- ((mouseYPosition / window.innerHeight) * maxGain) + minGain;
};


//mouse has been pressed
document.body.addEventListener('mousedown', function(e){
    mousedown = true;
    //generates a continuous tone
    oscillator = context.createOscillator();
    //change frequency
    //oscillator.frequency.value =  calculateFrequency(e.clientX);
    //with smooth transition on x
    //(frequency to change to, when, change rate)
   
    oscillator.frequency.setTargetAtTime(calculateFrequency(e.clientX), context.currentTime, 0.01);
    
   //calculate the gain by moving the mouse up/down
    gainNode.gain.setTargetAtTime(calculateGain(e.clientY), context.currentTime, 0.01);
    //connect oscillator with speakers
    //oscillator.connect(context.destination);
    //first get the loudness, then connect to speakers
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    //generate a tone
    oscillator.start(context.currentTime);

})

//mouse was moved
document.body.addEventListener('mousemove', function(e){
   if(mousedown){                  
       //calculate the frequency
       oscillator.frequency.setTargetAtTime(calculateFrequency(e.clientX), context.currentTime, 0.01);
          //calculate the gain by moving the mouse up/down
    gainNode.gain.setTargetAtTime(calculateGain(e.clientY), context.currentTime, 0.01);
    }
})


//mouse was released
document.body.addEventListener('mouseup', function(e){
    mousedown = false;
    //do this only when there is an oscillator
    if(oscillator != null){
    //stop ocillator
        oscillator.stop(context.currentTime);
        oscillator.disconnect();
    }
})




