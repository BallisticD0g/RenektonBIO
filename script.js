var audioPlayed = false;
const loadedImg = document.querySelector('.loadImg');
const renAudio = document.querySelector('#RenVoice');
const renBox = document.querySelector('.RenImg');

loadedImg.addEventListener('click', () => {
    loadedImg.classList.add('preload');
});

window.addEventListener('click', () => {
    if (!audioPlayed){
        var audio = document.getElementById('SandyWind');
        audio.play();
        audioPlayed = true;
    }  
});

renBox.addEventListener('click', () => {
    renAudio.play();
});






