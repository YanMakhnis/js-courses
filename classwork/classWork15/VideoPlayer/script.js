const player = document.querySelector(".player"),
  controls = player.querySelector(".controls"),
  videoWrapper = player.querySelector(".video"),
  videoElem = player.querySelector("video");

const durationBarWrapper = player.querySelector(".duration-bar-wrapper"),
  durationBar = player.querySelector(".duration-bar-wrapper .bar");

const volumeWrapper = player.querySelector(".volume-wrapper"),
  volumeBarWrapper = player.querySelector(".volume-bar-wrapper"),
  volumeBar = player.querySelector(".volume-bar-wrapper .bar");

const buttonPrevious = player.querySelector("button.previous"),
  buttonPlay = player.querySelector("button.play"),
  buttonStop = player.querySelector("button.stop"),
  buttonNext = player.querySelector("button.next"),
  buttonVolume = player.querySelector("button.volume"),
  buttonFullscreen = player.querySelector("button.fullscreen");

let controlsTimerId = null,
  volumeWrapperTimerId = null;

let videoSources = ["video_1", "video_2", "video_3"];

function showControls() {
  controls.classList.add("active");
  if (controlsTimerId) {
    clearTimeout(controlsTimerId);
  }
  controlsTimerId = setTimeout(() => {
    controls.classList.remove("active");
    controlsTimerId = null;
  }, 3000);
}

function showVolume() {
  volumeBarWrapper.classList.add("active");
  if (volumeWrapperTimerId) {
    clearTimeout(volumeWrapperTimerId);
  }
  volumeWrapperTimerId = setTimeout(() => {
    volumeBarWrapper.classList.remove("active");
    volumeWrapperTimerId = null;
  }, 3000);
}

function previousVideo() {
  console.log("Previous video");
}

function playPauseVideo() {
  buttonPlay.classList.toggle("pause");
  if (buttonPlay.classList.contains("pause")) {
    console.log("Play video");
  } else {
    console.log("Pause video");
  }
}

function stopVideo() {
  console.log("Stop video");
}

function nextVideo() {
  console.log("Next video");
}

function muteVideo() {
  if (buttonVolume.classList.contains("volume-mute")) {
    buttonVolume.classList.remove("volume-mute");
    console.log("Unmute video");
  } else {
    buttonVolume.classList.add("volume-mute");
    console.log("Mute video");
  }
}

function durationControlerListeners() {
  durationBar.addEventListener("mousedown", () => {
    durationBarWrapper.addEventListener("mousemove", durationDrag);
  });
  durationBarWrapper.addEventListener("click", durationDrag);

  durationBarWrapper.addEventListener("mouseup", () => {
    durationBarWrapper.removeEventListener("mousemove", durationDrag);
  });
  durationBarWrapper.addEventListener("mouseleave", () => {
    durationBarWrapper.removeEventListener("mousemove", durationDrag);
  });
}

function durationDrag(event) {
  let elemWidth = durationBarWrapper.clientWidth;
  let eventX = event.offsetX;
  let diff = eventX >= elemWidth ? elemWidth : eventX <= 0 ? 0 : eventX;
  let diffPerc = Math.round((100 * diff) / elemWidth) / 100;
}

function volumeControlerListeners() {
  volumeBar.addEventListener("mousedown", () => {
    volumeBarWrapper.addEventListener("mousemove", volumeDrag);
  });
  volumeBarWrapper.addEventListener("click", volumeDrag);

  volumeBarWrapper.addEventListener("mouseup", () => {
    volumeBarWrapper.removeEventListener("mousemove", volumeDrag);
  });
  volumeBarWrapper.addEventListener("mouseleave", () => {
    volumeBarWrapper.removeEventListener("mousemove", volumeDrag);
  });
}

function volumeDrag(event) {
  let elemWidth = volumeBarWrapper.clientWidth;
  let eventX = event.offsetX;
  let diff = eventX >= elemWidth ? elemWidth : eventX <= 0 ? 0 : eventX;
  let diffPerc = Math.round((100 * diff) / elemWidth) / 100;
}

function toggleFullscreenVideo() {
  buttonFullscreen.classList.toggle("fullscreen-exit");
  console.log("Fullscreen video");
}

function toggleFullscreen(element) {
  let isFullscreen =
    document.webkitIsFullScreen || document.mozFullScreen || false;

  element.requestFullScreen =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    function () {
      return false;
    };
  document.cancelFullScreen =
    document.cancelFullScreen ||
    document.webkitCancelFullScreen ||
    document.mozCancelFullScreen ||
    function () {
      return false;
    };

  isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
}

buttonPrevious.addEventListener("click", previousVideo);
buttonPlay.addEventListener("click", playPauseVideo);
buttonStop.addEventListener("click", stopVideo);
buttonNext.addEventListener("click", nextVideo);
buttonVolume.addEventListener("click", muteVideo);
buttonFullscreen.addEventListener("click", toggleFullscreenVideo);
player.addEventListener("mousemove", showControls);
volumeWrapper.addEventListener("mousemove", showVolume);
durationControlerListeners();
volumeControlerListeners();
