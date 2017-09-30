var context = new AudioContext();
var oscillatorNode = context.createOscillator();
var gainNode = context.createGain();


//Lautstärke gain=Zunahme
oscillatorNode.connect(gainNode);
gainNode.connect(context.destination);

gainNode.gain.value = 0.3;
oscillatorNode.frequency.value = 660;

oscillatorNode.start(context.currentTime);
oscillatorNode.stop(context.currentTime + 1);


//Mausposition
//x = höhe
//y=lautstärke

document.body.addEventListener('mousedown', function(e){
    mousedown = true;
})

document.body.addEventListener('mousemove', function(e){
    if(mousedown){
        //var x = e.clientX;
        //var y = e.clientY;
        //var maxX = window.innerWidth;
        //var maxY = window.innerHeight;
        
        
        
        
    }
})