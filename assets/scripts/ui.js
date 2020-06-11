'use strict'
const store = require('./store')
const events = require('./events')


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
  store.user = response.user
  $('form').trigger('reset')
  $('#sign-out').show()
  $('#new-game').show()
  $('#index-games').show()
  $('#show-games').show()
  $('#change-password').show()
  $('#reset').show()
  $('#sign-in').hide()
  $('#signup').hide()

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
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#index-games').hide()
  $('#show-games').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#signup').show()
}
const signOutFailure = function() {
  $('#message').text(`sign out failed`)
  $('form').trigger('reset')
}
const createGameSuccess = function(data) {
  $('#message').text(`new game initiated, good luck!`)
  $('form').trigger('reset')
  $('.container').show()
  $('.box').html('')
  $('#game-content').html('')
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
