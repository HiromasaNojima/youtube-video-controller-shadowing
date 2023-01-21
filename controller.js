const keyGetCurrentTime = "KeyX";
let player = document.getElementsByTagName("video")[0];

document.addEventListener("keydown", function (event) {
  if (event.code === keyGetCurrentTime) {
    window.alert(player.currentTime);
  }
});
