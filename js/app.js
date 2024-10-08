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
// Cập nhật css icon khi thay nhấn vào
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
playBtn.addEventListener("click", playPause);
function playPause(){ // nút play/pause
    if(isPlaying){ //Bài hát chưa được phát
        song.play();
        playBtn.innerHTML = '<ion-icon name="pause-circle"></ion-icon>' // Cập nhật icon pause
        isPlaying = false;
        timer = setInterval(displayTimer, 500);
    }
    else{ //Bài hát đang được phát thì tạm dừng
        song.pause();
        playBtn.innerHTML = '<ion-icon name="play" class="play-icon"></ion-icon>' // Cập nhật icon play
        isPlaying = true;
        clearInterval(timer); // Tạm dừng bộ đếm thời gian
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
function formatTime(number) // Định dạng dòng thời gian về dạng 00:00 để người dùng dễ theo dõi
{
    const minutes = Math.floor(number/60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? '0' + minutes: minutes }:${seconds < 10 ? '0' + seconds : seconds}`;
}

rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar(){ //Tua Nhạc
    song.currentTime = rangeBar.value;
}

function init(indexSong) //Nhận id bài hát lưu trong id nhạc
{
    displayTimer();
    song.setAttribute("src", `./music/${musics[indexSong].file}`);
    musicImage.setAttribute("src", musics[indexSong].image);
    musicName.textContent = musics[indexSong].title;
    singerName.textContent = musics[indexSong].singer;
}
$(document).ready(function(){
    init(indexSong);
    timer = setInterval(displayTimer, 500);
})


