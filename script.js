const $player = document.querySelector('.player');
const $video = document.querySelector('.video-js');

const vjs = videojs($video, {
  controlBar: {
    volumeMenuButton: {
      inline: false,
      vertical: true },

    volumePanel: { inline: false },
    progressControl: {
      seekBar: true },

    textTrackSettings: false,
    currentTimeDisplay: true,
    timeDivider: true,
    durationDisplay: true,
    remainingTimeDisplay: false,
    subtitlesButton: false,
    captionsButton: false,
    audioTrackButton: false } });



vjs.on('ready', () => {
  $player.classList.add('ready');

  const $progress = document.querySelector('.vjs-play-progress.vjs-slider-bar');

  vjs.on('seeking', () => {
    $progress.style.width = `${vjs.currentTime() / vjs.duration() * 100}%`;
  });
});