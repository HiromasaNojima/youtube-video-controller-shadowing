const keyGetCurrentTime = "x";
let player = document.getElementsByTagName("video")[0];
let currentTime = null;

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "x":
      currentTime = player.currentTime;
      window.alert(currentTime);
      break;
    default:
      console.log("Other key pressed");
  }
});
