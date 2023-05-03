var images = ['img/2517.png', "img/anac.png", "img/atl.png", "img/haski.jpg", "img/loq.jpg"];
var groups = ['25/17', 'Anacondaz', 'ATL', 'Хаски', 'Loqiemean']
var songs = ['Будьте счастливы', 'Рокстар', 'Всего лишь мертвецы', 'Иуда', 'Метаморфоза']
var audios=['music/62517.mp3','music/3anacondaz.mp3','music/2atl.mp3','music/5haski.mp3','music/1loqiemean.mp3',]
var currentIndex = 0;
var currentImg = document.getElementById('img');
var nextBtn = document.getElementById('next-btn');
var prvButton = document.getElementById('prev-btn');
var group = document.getElementById("group");
var song = document.getElementById("song");
var audio = document.getElementById('audio');
var play = document.getElementById('play');


var audioContext = new (window.AudioContext)();
var analyser = audioContext.createAnalyser();
var frequencyData = new Uint8Array(analyser.frequencyBinCount);

var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
//var canvas3 = document.getElementById('canvas3');
//var canvas4 = document.getElementById('canvas4');
var canvasCtx = canvas1.getContext('2d');
var canvasCtx2 = canvas2.getContext('2d');
//var canvasCtx3 = canvas1.getContext('2d');
//var canvasCtx4 = canvas2.getContext('2d');


var source = audioContext.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioContext.destination);

document.addEventListener('mousedown', function() {
    audioContext.resume();
});

function loop(){
    window.requestAnimationFrame(loop);
    array = frequencyData;
    analyser.getByteFrequencyData(array);
    var minHeight = array[40] / 2;
    var minHeight2 = array[100] / 2;
    var minHeight3 = array[1] / 2;
    var minHeight4 = array[22] / 2;
    var minHeight5 = array[70] / 2;
    var minHeight6 = array[50] / 2;

    canvasCtx.clearRect(50, 0, 40, canvas1.height);
    canvasCtx.fillStyle = '#e57db2';
    canvasCtx.fillRect(50, canvas1.height - minHeight3, 40, minHeight3);

    canvasCtx.clearRect(0, 0, 50, canvas1.height);
    canvasCtx.fillStyle = '#8c024a';
    canvasCtx.fillRect(0, canvas1.height - minHeight2, 40, minHeight2);

    canvasCtx.clearRect(100, 0, 40, canvas1.height);
    canvasCtx.fillStyle = '#bd0364';
    canvasCtx.fillRect(100, canvas1.height - minHeight, 40, minHeight);

    canvasCtx.clearRect(150, 0, 40, canvas1.height);
    canvasCtx.fillStyle = '#a82769';
    canvasCtx.fillRect(150, canvas1.height - minHeight4, 40, minHeight4);

    canvasCtx.clearRect(200, 0, 40, canvas1.height);
    canvasCtx.fillStyle = '#e39fc3';
    canvasCtx.fillRect(200, canvas1.height - minHeight5, 40, minHeight5);

    canvasCtx.clearRect(250, 0, 40, canvas1.height);
    canvasCtx.fillStyle = '#b60b64';
    canvasCtx.fillRect(250, canvas1.height - minHeight6, 40, minHeight6);

    canvasCtx2.clearRect(0, 0, 40, canvas2.height);
    canvasCtx2.fillStyle = '#b60b64';
    canvasCtx2.fillRect(0, canvas2.height - minHeight6, 40, minHeight6);

    canvasCtx2.clearRect(50, 0, 40, canvas2.height);
    canvasCtx2.fillStyle = '#e39fc3';
    canvasCtx2.fillRect(50, canvas2.height - minHeight5, 40, minHeight5);

    canvasCtx2.clearRect(100, 0, 50, canvas2.height);
    canvasCtx2.fillStyle = '#a82769';
    canvasCtx2.fillRect(100, canvas2.height - minHeight4, 40, minHeight4);

    canvasCtx2.clearRect(150, 0, 40, canvas2.height);
    canvasCtx2.fillStyle = '#bd0364';
    canvasCtx2.fillRect(150, canvas2.height - minHeight, 40, minHeight);

    canvasCtx2.clearRect(200, 0, 40, canvas2.height);
    canvasCtx2.fillStyle = '#e57db2';
    canvasCtx2.fillRect(200, canvas2.height - minHeight3, 40, minHeight3);

    canvasCtx2.clearRect(250, 0, 40, canvas2.height);
    canvasCtx2.fillStyle = '#8c024a';
    canvasCtx2.fillRect(250, canvas2.height - minHeight2, 40, minHeight2);

}

loop();

function showNextImage() {
    let isPlaying = !audio.paused;
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    currentImg.src = images[currentIndex];
    group.innerHTML = groups[currentIndex];
    song.innerHTML = songs[currentIndex];
    audio.src = audios[currentIndex];
    continueAudio(isPlaying);
}

function showPrevImage() {
    let isPlaying = !audio.paused;
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length-1;
    }
    currentImg.src = images[currentIndex];
    group.innerHTML = groups[currentIndex];
    song.innerHTML = songs[currentIndex];
    audio.src = audios[currentIndex];
    continueAudio(isPlaying);
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        play.innerHTML = '∎';
    } else {
        audio.pause();
        play.innerHTML = "►";
    }
}

function continueAudio(isPlaying){
    if (isPlaying){
        audio.play();
        play.innerHTML = '∎';
    }else {
        audio.pause();
        play.innerHTML = "►";
    }
}

nextBtn.addEventListener('click', showNextImage);
prvButton.addEventListener('click', showPrevImage);

// обновление визуализации в зависимости от выбранной песни
audio.addEventListener('play', function() {
    loop();
});



audio.addEventListener('ended', function() {
    showNextImage();
});
