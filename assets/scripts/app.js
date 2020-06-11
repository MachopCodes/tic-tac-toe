'use strict'

const events = require('./events')


$(() => {
    $('#sign-out').hide()
    $('#new-game').hide()
    $('#index-games').hide()
    $('#show-games').hide()
    $('#change-password').hide()
    $('.container').hide()
    $('#reset').hide()
    $('#sign-out-form').on('click', events.onSignOut)
    $('#signup-form').on('submit', events.onSignUp)
    $('#change-password-form').on('submit', events.onChangePassword)
    $('#sign-in-form').on('submit', events.onSignIn)
    $('#new-game-form').on('submit', events.onNewGame)
    $('#index-game-form').on('submit', events.onIndexGame)
    $('#show-game-form').on('submit', events.onShowGame)
    $('.board').on('click', events.onGameUpdate)
    $('#reset-button').on('click', events.onGameReset)
})
