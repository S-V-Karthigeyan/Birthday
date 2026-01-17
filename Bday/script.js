let musicStarted = false
const music = document.getElementById("bgMusic")

function playMusic() {
    if (!musicStarted) {
        music.src = "music/my_heaven.mp3"
        music.volume = 1
        music.play()
        musicStarted = true
    }
}

function playSong(el, src) {
    document.querySelectorAll(".songs li").forEach(li => li.classList.remove("active"))
    el.classList.add("active")

    let fadeOut = setInterval(() => {
        if (music.volume > 0.05) {
            music.volume -= 0.05
        } else {
            clearInterval(fadeOut)
            music.src = src
            music.play()
            fadeIn()
        }
    }, 50)

    musicStarted = true
}

function fadeIn() {
    music.volume = 0
    let fade = setInterval(() => {
        if (music.volume < 0.95) {
            music.volume += 0.05
        } else {
            clearInterval(fade)
        }
    }, 50)
}

function toggleMusic() {
    music.muted = !music.muted
    document.getElementById("musicToggle").innerText = music.muted ? "🔇" : "🔊"
}

function startExperience() {
    playMusic()
    document.getElementById("startScreen").classList.add("hidden")
}

function showMessage() {
    alert("Happy Birthday Babe❤️🎂\nYou mean the world to me!")
}

function openLetter() {
    document.getElementById("letterModal").classList.add("show")
}

function closeLetter() {
    document.getElementById("letterModal").classList.remove("show")
}

var text = "It's Her Birthday 🎂"
var index = 0
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index)
        index++
        setTimeout(typeEffect, 100)
    }
}
typeEffect()

window.addEventListener("scroll", reveal)
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active")
        }
    })
}
reveal()

function openImage(img) {
    const popup = document.createElement("div")
    popup.style.position = "fixed"
    popup.style.inset = 0
    popup.style.background = "rgba(0,0,0,0.85)"
    popup.style.display = "flex"
    popup.style.alignItems = "center"
    popup.style.justifyContent = "center"
    popup.innerHTML = `<img src="${img.src}" style="max-width:90%;border-radius:15px;">`
    popup.onclick = () => popup.remove()
    document.body.appendChild(popup)
}

let starCount = window.innerWidth < 768 ? 60 : 120

for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.top = Math.random() * 100 + "vh"
    star.style.left = Math.random() * 100 + "vw"
    star.style.animationDuration = (Math.random() * 3 + 2) + "s"
    document.getElementById("stars").appendChild(star)
}
