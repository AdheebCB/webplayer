const form = document.getElementById('video-form');
const videoPlayer = document.getElementById('video-player');
const playPauseBtn = document.getElementById('play-pause-btn');

// Set up the video player once it's ready
videoPlayer.addEventListener('loadedmetadata', () => {
  videoPlayer.controls = true;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const videoLink = document.getElementById('video-link').value;
  videoPlayer.src = videoLink;
  videoPlayer.play();
});

playPauseBtn.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
  } else {
    videoPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
  }
});
