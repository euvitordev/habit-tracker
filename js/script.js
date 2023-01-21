const form = document.querySelector("form")
const newHabit = new NLWSetup(form)
const addHabit = document.querySelector("header .add-habit")

addHabit.addEventListener("click", add)
form.addEventListener("change", save)

const button = document.querySelector(".add-habit")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

addHabit.onclick = function () {
  modal.showModal()
}

buttonClose.onclick = function () {
  modal.close()
}

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = newHabit.dayExists(today)

  if (dayExists) {
    document.getElementById("confirm-habit").innerHTML = "Já está registrado"
    return
  }

  document.getElementById("confirm-habit").innerHTML =
    "Seu dia foi registrado com sucesso"

  newHabit.addDay(today)
}

function save() {
  localStorage.setItem("controltoday@habits", JSON.stringify(newHabit.data)) ||
    {}
}

const data = JSON.parse(localStorage.getItem("controltoday@habits"))
newHabit.setData(data)
newHabit.load()

var today = new Date()
var dd = String(today.getDate()).padStart(2, "0")
var mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
var yyyy = today.getFullYear()
var daysOfWeek = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]
var dayOfWeek = daysOfWeek[today.getDay()]

today = dd + "/" + mm
document.getElementById("demo").innerHTML = today
document.getElementById("dayof").innerHTML = dayOfWeek
