
const player = document.getElementById('audioPlayer');
const play = document.querySelector('.play');
const backward = document.querySelector('.backward');
const forward = document.querySelector('.forward');
const arrayTracks = ['song1.mp3', 'song2.mp3', 'song3.mp3']

let currentSong = 0;

play.onClick = function (e) {
    if (player.paused) {
        player.play();
        e.target.classList.replace('fa-play', 'fa-pause');
    } else {
        player.pause();
        e.target.classList.replace('fa-pause', 'fa-play');
    }
}

forward.onClick = function () {
    currentSong = ++currentSong % arrayTracks.length;
    playSong(currentSong);
} 

function playSong(songNumber = 0, forcePlay = false){
    const paused = player.paused;
    player.src = arrayTracks[currentSong];
    (!paused || forcePlay) || player.play();

    const playIcons = document.querySelectorAll('#playList li i.fa-play');
    playIcons.forEach(playIcon => playIcon.classList.add('hidden'));
    playIcons[songNumber].classList.remove('hidden');
}

backward.onClick = function (){
    currentSong--;
    if(currentSong === -1){
        currentSong = arrayTracks.length -1;
    }
    playSong(currentSong);
}

player.onended = function(){
    currentSong = ++currentSong % arrayTracks.length;
    playSong(currentSong, true);
}

player.addEventListener('ended', forward);








// function backwardSong() {
//     if (currentSong < 0) {
//         currentSong = 0;
//     } else {
//         currentSong -= 1;
//         loadSong(currentSong);
//         audio.play();
//     }
// }

// function loadSong(index) {
//     player.src = arrayTracks[index];
//     player.load();
// }

// function pausePlay(){
//     if(audio.paused){
//         audio.play();
//         playButton.innerHTML = '<i class="fa fa-pause"></i>';
//     }else{
//         audio.pause();
//         playButton.innerHTML = '<i class="fa fa-play"></i>'; 
//     }
// }

// play.addEventListener('click', pausePlay);

// backward.addEventListener('click', backwardSong);

// fordward.addEventListener('click', forwardSong);

