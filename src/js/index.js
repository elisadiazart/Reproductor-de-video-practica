// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  changeBarTime,
  setBarTime,
  setCurrentTime,
  setTenLessSeconds,
  setTenMoreSeconds,
  setVolume,
  pauseAndPlay,
  setVolumeOnIcon,
  setVideoTime
} from './controls';

const videoElement = document.getElementById('video');
const pauseButton = document.getElementById('pause');
const minusTen = document.getElementById('minus-ten');
const plusTen = document.getElementById('plus-ten');
const barElement = document.getElementById('bar');
const speedOption = document.getElementById('speed');
const popUpElement = document.getElementById('pop-up');
const volumeRange = document.getElementById('volumeRange');
const plusTenVideo = document.getElementById('plusTen');
const minusTenVideo = document.getElementById('minusTen');
const pausedIcon = document.getElementById('paused');
const volumeIcon = document.getElementById('volumeIcon');

videoElement.addEventListener('timeupdate', e => {
  setBarTime(e);
  setCurrentTime(e.target.currentTime);
  setVideoTime(e.target.duration);
});

videoElement.addEventListener('click', e => {
  pauseAndPlay();
  if (videoElement.paused === true)
    pausedIcon.classList.add('video__paused--active');
  else pausedIcon.classList.remove('video__paused--active');
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

speedOption.addEventListener('click', () => {
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

plusTenVideo.addEventListener('dblclick', () => {
  setTenMoreSeconds();
});

minusTenVideo.addEventListener('dblclick', () => {
  setTenLessSeconds();
});

volumeIcon.addEventListener('click', () => {
  setVolumeOnIcon();
});
