const player = document.getElementById('player');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');
const progressBar = document.getElementById('progressBar');
const timeDisplay = document.getElementById('timeDisplay');

function toggleVideoStatus() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}




function updatePlayIcon() {
  if (player.paused) {
    playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

function updateProgress() {
  progressBar.value = (player.currentTime / player.duration) * 100;

  let mins = Math.floor(player.currentTime / 60);
  if (mins < player.duration) {
    mins = '0' + String(mins);
  }

  let secs = Math.floor(player.currentTime % 60);
  if (secs < player.duration) {
    secs = '0' + String(secs);
  }

  timeDisplay.innerHTML = `${mins}:${secs}`;
}

function setVideoProgress() {
  player.currentTime = (+progressBar.value * player.duration) / 100;
}

function stopVideo() {
  player.currentTime = 0;
  player.pause();
}

player.addEventListener('click', toggleVideoStatus);
player.addEventListener('pause', updatePlayIcon);
player.addEventListener('play', updatePlayIcon);
player.addEventListener('timeupdate', updateProgress);

playButton.addEventListener('click', toggleVideoStatus);

stopButton.addEventListener('click', stopVideo);

progressBar.addEventListener('change', setVideoProgress);
