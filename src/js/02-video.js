const iframe = document.querySelector('iframe#vimeo-player');
const player = new Vimeo.Player(iframe);

const saveTime = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
  if (seconds === duration) {
    localStorage.setItem('videoplayer-current-time', 0);
  }
};

player.on('timeupdate', _.throttle(saveTime, 1000));

const getLocalLastPlayedTime = () => {
  const defaultTime = 0;
  try {
    const locallySavedTime = localStorage.getItem('videoplayer-current-time');
    if (!locallySavedTime) return defaultTime;

    const parsedTime = JSON.parse(locallySavedTime);
    return Number(parsedTime);
  } catch (error) {
    console.log({ error });
    return defaultTime;
  }
};

const resumePlayerOnLastPlayed = () => {
  const lastPlayedTime = getLocalLastPlayedTime();
  player.setCurrentTime(lastPlayedTime);
};

resumePlayerOnLastPlayed();
