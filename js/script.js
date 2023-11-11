function playSong(thisSong) {
    localStorage.setItem("songID", thisSong.id);
    window.location.href = "playsong.html";
}
