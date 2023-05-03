var audio = document.getElementById('audio');
var context;
var analyser;
var src;
var array;
var logo = document.getElementById('logo')
var play = document.getElementById('play');

function preparation(){
    context = new AudioContext();
    analyser=context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser)
    analyser.connect(context.destination)
    loop();
}

function loop(){
    window.requestAnimationFrame(loop);
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    logo.minHeight = (array[40])+'px';
    logo.widh = (array[40])+'px';
}