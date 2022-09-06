import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(timeupdate) {
    let timeStop = timeupdate.seconds;
    localStorage.setItem("videoplayer-current-time", timeStop);
};
if (!localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(0);
} else { player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))};