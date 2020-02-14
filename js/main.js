(() => {


const buttons = document.querySelectorAll('button'),
	  audioElement = document.querySelector('audio');


function playTrack() {
	

	let audioSource = this.dataset.trackref;

	audioElement.src = `audio/${audioSource}.mp3`;

	audioElement.load();
	audioElement.play();
}

function pauseTrack() {
	audioElement.pause();
	globalPaused = true;
}

function rwTrack() {
	audioElement.currentTime = 0;
}




buttons.forEach(button => button.addEventListener("click", playTrack));
pausButtons.forEach

})();


