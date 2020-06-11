'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

let currentPlayer = "X"
let gameOver = false


const onSignUp = function(form) {
  event.preventDefault()
  console.log(event)
  let data = getFormFields(event.target)
  console.log(data)
  api.addUser(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function(form) {
  event.preventDefault()
  console.log(event)
  let data = getFormFields(event.target)
  console.log(data)
  api.signUserIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function(form){
  event.preventDefault()
  const data = getFormFields(event.target)
  api.userChangePass(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFailure)
}
const onSignOut = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.userSignOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function(event) {
  event.preventDefault()
  currentPlayer = "X"
  const data = getFormFields(event.target)
  api.userCreateGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
    console.log(data)
}
const onIndexGame = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.userIndexGame(data)
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}
const onShowGame = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.userShowGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}
const onGameUpdate = function(event) {
  event.preventDefault()
  let index = $(event.target).attr("data-cell-index")
  api.userUpdateGame(index, currentPlayer, gameOver)
  .then(ui.updateGameSuccess(event))
  .catch(ui.updateGameFailure)
  turnChecker(index)
  gameChecker(index)
}

const turnChecker = function(index) {
  if(store.game.cells[index] !== "") {
    console.log("invalid space")
  } else {
    store.game.cells[index] = currentPlayer
    if(currentPlayer === "X"){
      currentPlayer = "O"
    } else {
      currentPlayer = "X"
    }
  }
  console.log(store.game.cells)
}
const gameChecker = function(index) {
  console.log(store.game.cells[index])
  if( store.game.cells[index]===store.game.cells[0] && store.game.cells[0]===store.game.cells[1] && store.game.cells[1]===store.game.cells[2] || store.game.cells[index]===store.game.cells[3] && store.game.cells[3]===store.game.cells[4] && store.game.cells[4]===store.game.cells[5] || store.game.cells[index]===store.game.cells[6] && store.game.cells[6]===store.game.cells[7] && store.game.cells[7]===store.game.cells[8] || store.game.cells[index]===store.game.cells[0] && store.game.cells[0]===store.game.cells[4] && store.game.cells[4]===store.game.cells[8] || store.game.cells[index]===store.game.cells[2] && store.game.cells[2]===store.game.cells[4] && store.game.cells[4]===store.game.cells[6] || store.game.cells[index]===store.game.cells[0] && store.game.cells[0]===store.game.cells[3] && store.game.cells[3]===store.game.cells[6] || store.game.cells[index]===store.game.cells[1] && store.game.cells[1]===store.game.cells[4] && store.game.cells[4]===store.game.cells[7] || store.game.cells[index]===store.game.cells[2] && store.game.cells[2]===store.game.cells[5] && store.game.cells[5]===store.game.cells[8] ) {
    gameOver = true
    if(currentPlayer="X") {
      $('#message').html("Game Over X wins!")
    } else {
      $('#message').html("Game Over O wins!")
    }
  }
}








module.exports = {
  onSignOut,
  onSignUp,
  onChangePassword,
  onSignIn,
  onNewGame,
  onIndexGame,
  onShowGame,
  onGameUpdate
}
