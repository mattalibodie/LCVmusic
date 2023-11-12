// function playSong(thisSong) {
//     localStorage.setItem("songID", thisSong.id);
//     window.location.href = "playsong.html";
// }

function playSong(thisSong) {
    getIndex = $(thisSong).attr("item");
    localStorage.setItem("songID", getIndex);
    window.location.href = "playsong.html";
}