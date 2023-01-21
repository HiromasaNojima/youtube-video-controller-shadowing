let player = document.getElementsByTagName("video")[0];

const keySaveCurrentTime = "x";
const keyGoToSavedTime = "z";
let savedTime = null;

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case keySaveCurrentTime:
      savedTime = player.currentTime;
      break;
    case keyGoToSavedTime:
      player.currentTime = savedTime;
      break;
  }
});
