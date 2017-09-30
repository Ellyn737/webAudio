var context = new AudioContext();
oscillator = context.createOscillator();
oscillator.connect(context.destination);

oscillator.frequency.value = 660;
oscillator.start(context.currentTime);

oscillator.stop(context.currentTime + 1);


//Lautstärke 
var gain = context.createGain();
oscillator.connect(gain);
gain.connect(context.destination);
gain.gain.value = 0.5;


//Mausposition tracken und x, y holen
//x = höhe
//y = lautstärke

document.body.addEventListener('mousedown', function(e){
    mousedown = true;
})


//die gesammte fläche reagiert
document.body.addEventListener('mousemove', function(e){
    
    console.log("funktioniert");
    if(mousedown){
        //position holen
        //clientY
        console.log(e.clientX);
        //max x-Value
        console.log(window.innerHeight);
        console.log(window.innerWidth);
    }
    
});





