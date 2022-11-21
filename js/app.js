import "../css/style.css"
const video = document.getElementById("video")
const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const progressBar = document.getElementById("progress-bar")

playBtn.addEventListener("click", (ev) => {
    video.play()
    playBtn.style.display = "none"
    pauseBtn.style.display = "block"
})

pauseBtn.addEventListener("click", (ev) => {
    video.pause();
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"
})

video.addEventListener("ended", (ev) => {
    playBtn.style.display = "block"
    pauseBtn.style.display = "none"
    isPlayed = true;
})

video.addEventListener("timeupdate", (ev) => {
    progressBar.value = ev.currentTarget.currentTime
    progressBar.max = ev.currentTarget.duration
})

document.getElementById("b-10s").addEventListener("click", (ev) => {
    video.currentTime -= 10
})

document.getElementById("s-10s").addEventListener("click", (ev) => {
    video.currentTime += 10
})

document.getElementById("reset").addEventListener("click", (ev) => {
    video.currentTime = 0
})