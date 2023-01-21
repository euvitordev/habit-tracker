// let songs = [
//   {
//     name: "",
//     path: "",
//     artist: "",
//     cover: "",
//   },
//   {
//     name: "",
//     path: "",
//     artist: "",
//     cover: "",
//   },
//   {
//     name: "",
//     path: "",
//     artist: "",
//     cover: "",
//   },
//   {
//     name: "",
//     path: "",
//     artist: "",
//     cover: "",
//   },
//   {
//     name: "",
//     path: "",
//     artist: "",
//     cover: "",
//   },
//   {
//     name: "",
//     path: "",
//     artist: "",
//     cover: "",
//   },
//   {
//     name: "",
//     path: "",
//     artist: "",
//     cover: "",
//   },
// ]

// const music = document.querySelector("#audio")
// const songName = document.querySelector(".music-name")
// const artistName = document.querySelector(".artist-name")
// const disk = document.querySelector(".disk")
// const forwardBtn = document.querySelector(".forward")
// const backwardBtn = document.querySelector(".backward")

var player = document.getElementById("player")
let playBtn = document.getElementById("play")

var playPause = function () {
  if (player.paused) {
    player.play()
  } else {
    player.pause()
  }
}

playBtn.addEventListener("click", playPause)

player.onplay = function () {
  playBtn.classList.remove("fa-play")
  playBtn.classList.add("fa-pause")
}

player.onpause = function () {
  playBtn.classList.add("fa-play")
  playBtn.classList.remove("fa-pause")
}
