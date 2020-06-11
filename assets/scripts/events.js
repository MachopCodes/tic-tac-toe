'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

let currentPlayer = "X"
let gameOver = false
let winner = ""

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
  let i = $(event.target).attr("data-cell-index")
  turnChecker(i)
  gameChecker(i)
  api.userUpdateGame(i, currentPlayer, gameOver)
    .then(ui.updateGameSuccess(event, currentPlayer, gameOver, winner))
    .catch(ui.updateGameFailure)
}
const onGameReset = function(event) {
  event.preventDefault()
  currentPlayer = "X"
  const data = getFormFields(event.target)
  console.log(data)
  api.userResetGame(data)
    .then(ui.resetGameSuccess)
    .catch(ui.resetGameFailure)
}
const turnChecker = function(i) {
  if(store.game.cells[i] === "") {
    store.game.cells[i] = currentPlayer
    if(currentPlayer === "X") {
      currentPlayer = "O"
    } else {
      currentPlayer = "X"
    }
  }
}
const gameChecker = function(i) {
  console.log(store.game.cells[i])
  if( store.game.cells[i]===store.game.cells[0] && store.game.cells[0]===store.game.cells[1] && store.game.cells[1]===store.game.cells[2] || store.game.cells[i]===store.game.cells[3] && store.game.cells[3]===store.game.cells[4] && store.game.cells[4]===store.game.cells[5] || store.game.cells[i]===store.game.cells[6] && store.game.cells[6]===store.game.cells[7] && store.game.cells[7]===store.game.cells[8] || store.game.cells[i]===store.game.cells[0] && store.game.cells[0]===store.game.cells[4] && store.game.cells[4]===store.game.cells[8] || store.game.cells[i]===store.game.cells[2] && store.game.cells[2]===store.game.cells[4] && store.game.cells[4]===store.game.cells[6] || store.game.cells[i]===store.game.cells[0] && store.game.cells[0]===store.game.cells[3] && store.game.cells[3]===store.game.cells[6] || store.game.cells[i]===store.game.cells[1] && store.game.cells[1]===store.game.cells[4] && store.game.cells[4]===store.game.cells[7] || store.game.cells[i]===store.game.cells[2] && store.game.cells[2]===store.game.cells[5] && store.game.cells[5]===store.game.cells[8] ) {
    gameOver
    if(store.game.cells[i]==="X") {
      winner = "X wins!"
      console.log("x wins!")
    } else if (store.game.cells[i]==="O") {
      winner = "O wins!"
      console.log("O wins!")
    }
  } else {
    let board = 9
    for(let i = 0; i < store.game.cells.length; i++){
      if(store.game.cells[i]!=="") {
        board--
      }
    }
    if(board === 0) {
      gameOver
      winner = "DRAW"
      console.log("DRAW")
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
  onGameUpdate,
  onGameReset,
  currentPlayer,
  gameOver,
  winner
}
