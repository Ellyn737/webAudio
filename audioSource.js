var context = new AudioContext();
var request = new XMLHttpRequest();

request.open('GET', "sound.wav", true);
request.responseType = 'arraybuffer';
request.onload = function(){
    var undecodedAudio = request.response;
    context.decodeAudioData(undecodedAudio, function(buffer){
        var sourceBuffer = context.createBufferSource();
        sourceBuffer.buffer = buffer;
        sourceBuffer.connect(context.destination);
        sourceBuffer.start(context.currentTime);
    });
};
request.send();
