// Validation Bootstrap Form  //
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
// ------------------------------------- //

//	Lấy id local để phát nhạc//
function playSong(thisSong) {
	getIndex = $(thisSong).attr("item");
	localStorage.setItem("songID", getIndex);
	window.location.href = "playsong.html";
	console.log(getIndex);
}
// -------------------------------------- //

// Phần Loading Screen https://ihatetomatoes.net/create-custom-preloading-screen/ 
$(document).ready(function () {
	setTimeout(function () {
		$('body').addClass('loaded');
		$('h1').css('color', '#222222');
	}, 1000);
	showLabel();
});
// ------------------------------------- //

// Đa ngôn ngữ // 
function setLang(code) {
	window.localStorage.setItem("lang", code);
	location.reload();
}
function getLang() {
	if (window.localStorage.getItem("lang") === null)
		window.localStorage.setItem("lang", "vi-VN");
	return window.localStorage.getItem("lang");
}
function showLabel() {
	//var lang="vi-VN";
	var lang = getLang();
	$('.multilang').each(function (i, obj) {
		$("#" + obj.id).html(langs[obj.id][lang]).attr("title", langs[obj.id][lang]);
	});
}
function regCourse(idx) {
	alert(idx);
}

// -------------------------------------- //