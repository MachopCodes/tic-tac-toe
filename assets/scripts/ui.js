'use strict'
const store = require('./store')

const signUpSuccess = function(response) {
  console.log(response)
  $('#message').text('Signed up successfully ' + response.user.email)
  $('form').trigger('reset')
}
const signUpFailure = function() {
  console.log(response)
  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}
const signInSuccess = function(response) {
  console.log(response)
  $('#message').text(`Welcome ${response.user.email}!!`)
  $('form').trigger('reset')
  store.user = response.user
}
const signInFailure = function() {
  $('#message').text('Login failed :(')
  $('form').trigger('reset')
}
const changeSuccess = function() {
  $('#message').text('password changed!')
  $('form').trigger('reset')
}
const changeFailure = function() {
  $('#message').text('password change failed!')
  $('form').trigger('reset')
}
const signOutSuccess = function() {
  $('#message').text(`see you later!`)
  $('form').trigger('reset')
}
const signOutFailure = function() {
  $('#message').text(`sign out failed`)
  $('form').trigger('reset')
}
const createGameSuccess = function(data) {
  $('#message').text(`new game initiated, good luck!`)
  $('form').trigger('reset')
  console.log(data)
  store.game = data.game
}
const createGameFailure = function() {
  $('#message').text(`create game failed`)
  $('form').trigger('reset')
}
const indexGameSuccess = function(response) {
  console.log(response.games)
  let data = response.games
  let gameHtml = ''
  data.forEach(game => {
    const oneGame = (`
      <h4>id: ${game._id}</h4>`)
      gameHtml += oneGame
  })
  $('#game-content').html(gameHtml)
}
const indexGameFailure = function() {
  $('#message').text('Index failed!')
}
const showGameSuccess = function(data) {
  console.log(data)
  const gameHTML = (`
    <h4>Title: ${data.game._id},
    <p>Cells</p> ${data.game.cells}`)
    $('#game-display').html(gameHTML)
}
const showGameFailure = function() {
  $('#message').text('show game failed!')
}

module.exports = {
  signOutSuccess,
  signOutFailure,
  changeSuccess,
  changeFailure,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  createGameSuccess,
  createGameFailure,
  indexGameSuccess,
  indexGameFailure,
  showGameSuccess,
  showGameFailure

}
