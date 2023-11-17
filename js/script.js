function playSong(thisSong) {
    getIndex = $(thisSong).attr("item");
    localStorage.setItem("songID", getIndex);
    window.location.href = "playsong.html";
}

$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
});