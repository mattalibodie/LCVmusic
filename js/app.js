const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".player-foward");
const prevBtn = document.querySelector(".player-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const singerName = document.querySelector(".singer-name");
const musicImage = document.querySelector(".music-thumb img")
const playRepeat = document.querySelector(".play-repeat"); 
let timer;
let isPlaying = false;
let indexSong = localStorage.getItem("songID");

let isRepeat = false;
let repeatCount = 0;
// const musics = ["Lover_TaylorSwift.mp3", 
//                 "making_my_way.mp3", 
//                 "TroThanhPhuThe-HuongLy-10710826.mp3", 
//                 "VuonNha-PhanManhQuynh-9777057.mp3", 
//                 "WeDontTalkAnymore.mp3"];


function changeSong(dir){
    if(dir == 1){
        //next song
        indexSong++;
        if(indexSong > musics.length){
            indexSong = 0;
        }
        isPlaying = true;
    }
    else if(dir == -1)
    {
        //prev song
        indexSong--;
        if(indexSong < 0){
            indexSong = musics.length - 1;
        }
    }
    init(indexSong);
    playPause();
}
window.addEventListener("DOMContentLoaded", (event) =>{
    nextBtn.addEventListener("click", function(){
        changeSong(1);
    });
    prevBtn.addEventListener("click", function () {
        changeSong(-1);
    });
    song.addEventListener("ended", handleEndedSong);
    
    playRepeat.addEventListener("click",changeStatus);
    
});

function changeStatus()
{
    if(isRepeat)
    {
        isRepeat = false;
        playRepeat.removeAttribute("style");
    }
    else
    {
        isRepeat = true;
        playRepeat.style.color = "#ffffff";
    }
}


function handleEndedSong() // Xử lí sau khi hết nhạc
{
    if(isRepeat) //lặp lại
    {
        isPlaying = true;
        playPause();
    }
    else{
        changeSong(1);
    }
}


playBtn.addEventListener("click", playPause);

function playPause(){ // nút play/pause
    if(isPlaying){
        song.play();
        playBtn.innerHTML = '<ion-icon name="pause-circle"></ion-icon>'
        isPlaying = false;
        timer = setInterval(displayTimer, 500);
    }
    else{
        song.pause();
        playBtn.innerHTML = '<ion-icon name="play" class="play-icon"></ion-icon>'
        isPlaying = true;
        clearInterval(timer);
    }
}


function displayTimer(){ // Cập nhật dòng thời gian
    const {duration, currentTime} = song;
    rangeBar.max = duration;
    rangeBar.value = currentTime;
    remainingTime.textContent = formatTime(currentTime);
    if (!duration)
    {
        durationTime.textContent ="00:00";
    }
    else
    {
        durationTime.textContent = formatTime(duration);
    }
}
function formatTime(number)
{
    const minutes = Math.floor(number/60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? '0' + minutes: minutes }:${seconds < 10 ? '0' + seconds : seconds}`;
}

rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar(){
    song.currentTime = rangeBar.value;
}

function playSong(thisSong){
    localStorage.setItem("songID", thisSong.id);
    window.location.href = "playsong.html";
}


function init(indexSong)
{
    displayTimer();
    song.setAttribute("src", `./music/${musics[indexSong].file}`);
    musicImage.setAttribute("src", musics[indexSong].image);
    musicName.textContent = musics[indexSong].title;
    singerName.textContent = musics[indexSong].singer;
}
console.log(localStorage.getItem("songID"));
init(indexSong);
timer = setInterval(displayTimer, 500);
