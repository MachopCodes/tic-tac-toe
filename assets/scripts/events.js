'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
const onGameUpdate = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.userUpdateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  // var str = event.target.id
  // var short = str.substring(1,2)
  // console.log(short)
  return $(`#${event.target.id}`).html("X")
}
const onShowGame = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.userShowGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

//let's write our function to print out ever Id of any element clicked


module.exports = {
  onSignOut,
  onSignUp,
  onChangePassword,
  onSignIn,
  onNewGame,
  onIndexGame,
  onGameUpdate

}
