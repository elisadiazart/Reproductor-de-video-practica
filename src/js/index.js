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

videoElement.addEventListener('timeupdate', e => {
  setBarTime(e);
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
