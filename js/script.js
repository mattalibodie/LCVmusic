// Validation Bootstrap Form 
(() => {
	'use strict'
	const forms = document.querySelectorAll('.needs-validation')
	Array.from(forms).forEach(form => {
	  form.addEventListener('submit', event => {
		if (!form.checkValidity()) {
		  event.preventDefault()
		  event.stopPropagation()
		}
		form.classList.add('was-validated')
	  }, false)
	})
  })()


function playSong(thisSong) {
	getIndex = $(thisSong).attr("item");
	localStorage.setItem("songID", getIndex);
	window.location.href = "playsong.html";
	console.log(getIndex);
}

$(document).ready(function () {
	setTimeout(function () {
		$('body').addClass('loaded');
		$('h1').css('color', '#222222');
	}, 3000);
});

