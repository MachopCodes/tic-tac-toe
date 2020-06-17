'use strict'
const store = require('./store')
const events = require('./events')


const signUpSuccess = function(response) {
  console.log(response)
  $('#message').text('Signed up successfully ' + response.user.email)
  $('form').trigger('reset')
}
const signUpFailure = function(response) {
  console.log(response)
  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}
const signInSuccess = function(response) {
  console.log(response)
  $('#message').text(`Welcome ${response.user.email}!!`)
  store.user = response.user
  $('form').trigger('reset')
  $('.auth').show()
  $('.unauth').hide()
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
  $('.auth').hide()
  $('.unauth').show()
  $('.board').hide()
}
const signOutFailure = function() {
  $('#message').text(`sign out failed`)
  $('form').trigger('reset')
}
const createGameSuccess = function(data) {
  $('#message').text(`Good luck!`)
  $('form').trigger('reset')
  $('.board').show()
  $('.box').html('')
  $('#game-content').html('')
  store.game = data.game
}
const createGameFailure = function() {
  $('#message').text(`create game failed`)
  $('form').trigger('reset')
}
const indexGameSuccess = function(response) {
  let data = response.games
  let gameHtml = ''
  data.forEach(game => {
    const oneGame = (`
      <h4>id: ${game._id}</h4>`)
      gameHtml += oneGame
  })
  $('#message').text("game history")
  $('#game-content').html(gameHtml)
}
const indexGameFailure = function() {
  $('#message').text('Index failed!')
}
const showGameSuccess = function(response) {
  let game = response.game[0]
  let gameHTML = `<h4>cells: ${game.cells}`
  $('#game-content').html(gameHTML)
  $('form').trigger('reset')
}
const showGameFailure = function() {
  $('#message').text('show game failed!')
}
const updateGameSuccess = function(event, currentPlayer, i, gameOver, winner) {
  if($(event.target).html()==="" && !gameOver){
    $(event.target).html(store.game.cells[i])
    $('#game-content').text(currentPlayer + ' is up! ' + winner)
  } else if ($(event.target).html() !=="" && !gameOver) {
    $('#game-content').text('somebody already put a piece there!')
  } else if ($(event.target).html()==="" && gameOver) {
    $(event.target).html(store.game.cells[i])
    $('#game-content').text(winner)
  } else {
    $('#game-content').text("invalid!")
  }
}
const updateGameFailure = function() {
  $('#message').text('update failed :(')
}
const resetGameSuccess = function() {
  $('#message').text('game reset')
  $('.box').html('')
}
const resetGameFailure = function() {
  $('#message').text('game reset failure')
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
  showGameFailure,
  updateGameSuccess,
  updateGameFailure,
  resetGameSuccess,
  resetGameFailure
}
