// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const videoElement = document.getElementById('video');
const rootStyes = document.documentElement.style;
const pauseButton = document.getElementById('pause');
const minusTen = document.getElementById('minus-ten');
const plusTen = document.getElementById('plus-ten');
const barElement = document.getElementById('bar');
const speedOption = document.getElementById('speed');
const popUpElement = document.getElementById('pop-up');
const volumeRange = document.getElementById('volumeRange');
const volumeIcon = document.getElementById('volumeIcon');
const currentTimeElement = document.getElementById('currentTime');

console.dir(videoElement);

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
  videoElement;
  if (e.value === '0') {
    volumeIcon.classList.remove('fa-volume-high');
    volumeIcon.classList.add('fa-volume-xmark');
  } else {
    volumeIcon.classList.remove('fa-volume-xmark');
    volumeIcon.classList.add('fa-volume-high');
  }
};

const setCurrentTime = currentTime => {
  const date = new Date(null);
  date.setSeconds(currentTime);
  const dateVideoCurrent = date.toISOString().slice(14, 19);
  currentTimeElement.textContent = dateVideoCurrent;
};

videoElement.addEventListener('timeupdate', e => {
  setBarTime(e);
  setCurrentTime(e.target.currentTime);
});

pauseButton.addEventListener('click', e => {
  pauseAndPlay();
});

plusTen.addEventListener('click', e => {
  setTenMoreSeconds();
});

minusTen.addEventListener('click', e => {
  setTenLessSeconds();
});

barElement.addEventListener('click', e => {
  changeBarTime(e);
});

speedOption.addEventListener('click', e => {
  popUpElement.classList.toggle('speed--pop-up--active');
});

popUpElement.addEventListener('click', e => {
  videoElement.playbackRate = e.target.dataset.time;
  speedOption.children[0].textContent = e.target.dataset.time;
  popUpElement.classList.toggle('speed--pop-up--active');
});

volumeRange.addEventListener('change', e => {
  setVolume(e.target);
  videoElement.muted = false;
});
