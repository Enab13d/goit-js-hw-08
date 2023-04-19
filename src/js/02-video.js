import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(function(data) {
player.getCurrentTime().then(function(seconds) {
    let currentTime = seconds;
    console.log(currentTime);
    localStorage.setItem("videoplayer-current-time", currentTime);
}).catch(function(error) {
    console.log(error.name);
});
}, wait=1000);
player.on('timeupdate', onPlay);
const savedTime = Number(localStorage.getItem("videoplayer-current-time"));
player.setCurrentTime(savedTime);
console.log(throttle);