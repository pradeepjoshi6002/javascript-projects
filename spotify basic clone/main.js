let songs = [
  { songname: "let me love you", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
  { songname: "let me love you", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
  { songname: "let me love you", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
  { songname: "let me love you", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
  { songname: "let me love you", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
  { songname: "let me love you", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" }
]
let songindx = 0;
let audio = new Audio(songs[songindx].filepath);

let masterplay = document.querySelector("#masterplay");
let progressbar = document.querySelector("#mybar");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let gif = document.querySelector("#two");




masterplay.addEventListener("click", () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else {
    audio.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
})


prev.addEventListener("click", () => {

})
next.addEventListener("click", () => {
  if (songindx >= 9) {
    songindx = 0;
  }
  else {
    songindx += 1;
  }
  audio.src = `songs/${songindx}.mp3`;
  audio.currentTime = 0;
  audio.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
})


progressbar.addEventListener('change', () => {

  audio.currentTime = audio.duration * (progressbar.value / 100);
})

audio.addEventListener('timeupdate', () => {
  progress = parseInt((audio.currentTime / audio.duration) * 100);
  progressbar.value = progress;
})