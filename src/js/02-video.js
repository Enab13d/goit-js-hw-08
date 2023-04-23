import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(function() {
player.getCurrentTime().then(function(seconds) {
    let currentTime = seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
}).catch(function(error) {
    console.log(error.name);
});
}, 1000);
player.on('timeupdate', onPlay);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);