let hp1 = 100
let hp2 = 100
let currentPlayer = 1

function switchTurn() {
  currentPlayer = currentPlayer === 1 ? 2 : 1
  document.getElementById("turnIndicator").innerText = "Player " + currentPlayer + "'s turn!"
}

function randomDamage() {
  return Math.floor(Math.random() * 20) + 1
}

function healthPot(){
  return Math.floor(Math.random() * 10) + 1
}


function attack(player){
  if (currentPlayer !== player) {
    alert("It's not your turn!")
    return
  }
  let damage = randomDamage()

  if(player === 1) {
    hp2 -= damage
    document.getElementById("hp2").innerText = hp2 + " HP"
    if (hp2 <= 0) {
      endGame(1)
      return
    }
  } else {
    hp1 -= damage
    document.getElementById("hp1").innerText = hp1 + " HP"
    if (hp1 <= 0) {
      endGame(2)
    return
  }
}
  alert("Player " + player + " dealt " + damage + " damage!")

  switchTurn()
}

function heal(player) {
  if (currentPlayer !== player) {
    alert("It's not your turn!")
    return
  }
  if (hp1 && hp2 === 100) {
    alert("You're at full HP!")
    return
  }
  let heal = healthPot()

  if(player === 1){
    hp1 += heal
    document.getElementById("hp1").innerText = hp1 + " HP"
  } else {
    hp2 += heal
    document.getElementById("hp2").innerText = hp2 + " HP"
  }
  alert("Player " + player + " healed for " + heal + " HP")

  switchTurn()
}


function reloadPage() {
  window.location.reload()
}

function endGame(winner) {
  alert("Player " + winner + " wins!")
  document.getElementById("rematchButton").style.display = "block"
}

document.getElementById("rematchButton").addEventListener("click", function () {
reloadPage()
})

document.getElementById("attack1").addEventListener("click", function() {
  heal(1)
})

document.getElementById("attack2").addEventListener("click", function() {
  attack(1)
})

document.getElementById("attack3").addEventListener("click", function() {
  attack(1)
})

document.getElementById("attack4").addEventListener("click", function() {
  attack(1)
})

document.getElementById("attack5").addEventListener("click", function() {
  heal(2)
})

document.getElementById("attack6").addEventListener("click", function() {
  attack(2)
})

document.getElementById("attack7").addEventListener("click", function() {
  attack(2)
})

document.getElementById("attack8").addEventListener("click", function() {
  attack(2)
})
