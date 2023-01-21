const keyGetCurrentTime = "KeyX";
let player = document.getElementsByTagName("video")[0];
let currentTime = null;

document.addEventListener("keydown", function (event) {
  if (event.code === keyGetCurrentTime) {
    currentTime = player.currentTime;
    window.alert(currentTime);
  }
});
