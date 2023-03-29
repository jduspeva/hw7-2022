var video = document.querySelector("#player1");

/* Initialize the video element and turn off autoplay and turn off looping. */
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.loop = false;
	video.autoplay = false;
	video.defaultPlaybackRate = 1;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerText = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Current playback rate is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Current playback rate is: " + video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerText = "Unmute";
	}
	else 
	{
		video.muted = false;
		document.querySelector('#mute').innerText = 'Mute';
	};
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration){
		video.currentTime = video.currentTime + 10
	} else {
		video.currentTime = 0
	};
	console.log("Current video time is " + video.currentTime);
});

document.querySelector("#slider").addEventListener("input", function() {
	var slider = document.getElementById("slider");
	var output = document.getElementById("volume");
	output.innerHTML = slider.value;
	slider.oninput = function() {
  	output.innerHTML = this.value;
	video.volume = this.value / 100;
	}
	document.querySelector("#volume").innerText = video.volume + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	const element = document.querySelector('.video');
	element.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	const element = document.querySelector('.video');
	element.classList.remove('oldSchool');
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

