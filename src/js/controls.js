const videoElement = document.getElementById('video');
const rootStyes = document.documentElement.style;
const pauseButton = document.getElementById('pause');
const volumeIcon = document.getElementById('volumeIcon');
const currentTimeElement = document.getElementById('currentTime');
const timeVideoElement = document.getElementById('timeVideo');

const setBarTime = e => {
  rootStyes.setProperty(
    '--player-position',
    (e.target.currentTime * 100) / e.target.duration + '%'
  );
};

const pauseAndPlay = e => {
  pauseButton.classList.toggle('fa-play');
  pauseButton.classList.toggle('fa-pause');
  if (videoElement.paused === false) videoElement.pause();
  else videoElement.play();
};

const setTenMoreSeconds = e => {
  videoElement.currentTime += 10;
};

const setTenLessSeconds = e => {
  videoElement.currentTime -= 10;
};

const changeBarTime = e => {
  videoElement.currentTime =
    (e.offsetX / e.target.clientWidth) * videoElement.duration;
};

const setVolume = e => {
  videoElement.volume = e.value / 100;
  if (e.value === '0') {
    volumeIcon.classList.remove('fa-volume-high');
    volumeIcon.classList.add('fa-volume-xmark');
  } else {
    volumeIcon.classList.remove('fa-volume-xmark');
    volumeIcon.classList.add('fa-volume-high');
  }
};

const setVolumeOnIcon = () => {
  videoElement.volume = 1;
  videoElement.muted = !videoElement.muted;
  if (videoElement.muted) {
    volumeRange.value = 0;
    volumeIcon.classList.remove('fa-volume-high');
    volumeIcon.classList.add('fa-volume-xmark');
  } else {
    volumeRange.value = 50;
    volumeIcon.classList.remove('fa-volume-xmark');
    volumeIcon.classList.add('fa-volume-high');
  }
};

const setCurrentTime = currentTime => {
  const date = new Date(null);
  date.setSeconds(currentTime);
  const dateVideoCurrent = date.toISOString().slice(14, 19);
  currentTimeElement.textContent = dateVideoCurrent + ' /';
};

const setVideoTime = currentTime => {
  const date = new Date(null);
  date.setSeconds(currentTime);
  const dateVideoCurrent = date.toISOString().slice(14, 19);
  timeVideoElement.textContent = '/ ' + dateVideoCurrent;
};

export {
  setBarTime,
  setCurrentTime,
  setTenLessSeconds,
  setTenMoreSeconds,
  setVolume,
  pauseAndPlay,
  changeBarTime,
  setVolumeOnIcon,
  setVideoTime
};
