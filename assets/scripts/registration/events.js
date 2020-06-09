'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
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


module.exports = {
  onSignOut,
  onSignUp,
  onChangePassword,
  onSignIn
}
