const keyGetCurrentTime = "x";
const keyGoBackTo = "z";
let player = document.getElementsByTagName("video")[0];
let currentTime = null;

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case keyGetCurrentTime:
      currentTime = player.currentTime;
      window.alert(currentTime);
      break;
    case keyGoBackTo:
      player.currentTime = currentTime;
    default:
      console.log("Other key pressed");
  }
});
