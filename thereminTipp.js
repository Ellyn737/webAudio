document.body.addEventListener('mousemove', function(e){
    console.log(e.clientX);
    console.log(e.clientY);

    console.log(window.innerWidth);
    console.log(window.innerHeight);
});

var context = new AudioContext();
var oscillatorNode = context.createOscillator();
var gainNode = context.createGain();
    
oscillatorNode.connect(gainNode);
gainNode.connect(context.destination);

gainNode.gain.value = 0.3;
oscillatorNode.frequency.value = 880;

oscillatorNode.start(context.currentTime);
oscillatorNode.stop(context.currentTime + 1);