let player = getVideo();

function getVideo() {
  return document.getElementsByTagName("video")[0];
}

const keySaveCurrentTime = "x";
const keyGoToSavedTime = "z";
const keyPlaySpeedUp = "s";
const keyPlaySpeedDown = "a";
const keyPlaySpeedDefault = "d";
const keyGoBackTwoSeconds = "Z";

let savedTime = null;

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case keySaveCurrentTime:
      savedTime = player.currentTime;
      break;
    case keyGoToSavedTime:
      if (savedTime === null) break;
      player.currentTime = savedTime;
      break;
    case keyPlaySpeedUp:
      player.playbackRate += 0.1;
      break;
    case keyPlaySpeedDown:
      player.playbackRate -= 0.1;
      break;
    case keyPlaySpeedDefault:
      player.playbackRate = 1;
      break;
    case keyGoBackTwoSeconds:
      player.currentTime -= 2;
      break;
  }
});
