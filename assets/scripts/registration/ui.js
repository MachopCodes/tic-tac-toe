'use strict'
const store = require('./../store')

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

module.exports = {
  signOutSuccess,
  signOutFailure,
  changeSuccess,
  changeFailure,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure
}
