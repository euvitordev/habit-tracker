const form = document.querySelector("form")
const newHabit = new NLWSetup(form)
const addHabitButton = document.querySelector("header .add-habit")
const modal = document.querySelector("dialog")
const closeModalButton = document.querySelector("dialog button")
const playButton = document.getElementById("play")
const player = document.getElementById("player")
const newUser = document.getElementById("login")
const newUserContinue = document.getElementById("continue")

// Registrando nome do usuario
function checkUsername() {
  let storedUsername = localStorage.getItem("username")
  if (storedUsername !== null) {
    document.getElementById("login").style.display = "none"
    document.getElementById("username").innerHTML = storedUsername
  }
}

function saveUser() {
  let name = document.getElementById("name").value
  let input = document.getElementById("name")
  let loginUsername = document.querySelector(".username")

  if (name === "") {
    // Trocar a mensagem no placeholder
    input.placeholder = "Por favor, insira seu nome"
    loginUsername.style.border = "1px solid red"
  } else {
    localStorage.setItem("username", name)
    input.classList.remove("error")
    document.getElementById("username").innerHTML = name
    // Adicionar a classe de animação
    document.getElementById("login").classList.add("fade")
    // Recarregar a página após a animação
    setTimeout(function () {
      location.reload()
    }, 1000)
  }
}

// Registrando nome do usuario

addHabitButton.addEventListener("click", add)
form.addEventListener("change", save)
playButton.addEventListener("click", playPause)

player.onplay = function () {
  playButton.classList.toggle("fa-play", false)
  playButton.classList.toggle("fa-pause", true)
}

player.onpause = function () {
  playButton.classList.toggle("fa-play", true)
  playButton.classLis.toggle("fa-pause", false)
}

addHabitButton.addEventListener("click", function () {
  modal.showModal()
})

closeModalButton.addEventListener("click", function () {
  modal.close()
})

const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
const daysOfWeek = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]
const dayOfWeek = daysOfWeek[new Date().getDay()]

function add() {
  if (newHabit.dayExists(today)) {
    document.getElementById("confirm-habit").innerHTML = "Já está registrado"
    return
  }

  document.getElementById("confirm-habit").innerHTML =
    "Seu dia foi registrado com sucesso"

  newHabit.addDay(today)
}

function save() {
  localStorage.setItem("controltoday@habits", JSON.stringify(newHabit.data))
}

function playPause() {
  player.paused ? player.play() : player.pause()
}

const data = JSON.parse(localStorage.getItem("controltoday@habits"))
newHabit.setData(data)
newHabit.load()

document.getElementById("demo").innerHTML = today
document.getElementById("dayof").innerHTML = dayOfWeek
