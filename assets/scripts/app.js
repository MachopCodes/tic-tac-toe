'use strict'

const registrationEvents = require('./registration/events')


$(() => {
    $('#sign-out-form').on('click', registrationEvents.onSignOut)
    $('#signup-form').on('submit', registrationEvents.onSignUp)
    $('#change-password-form').on('submit', registrationEvents.onChangePassword)
    $('#sign-in-form').on('submit', registrationEvents.onSignIn)
    $('#1').on('click',console.log('you clicked 1'))
    $('#2').on('click',console.log('you clicked 2'))
})
