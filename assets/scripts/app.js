'use strict'

const events = require('./events')


$(() => {
    $('#game-board').hide()
    $('#sign-out-form').on('click', events.onSignOut)
    $('#signup-form').on('submit', events.onSignUp)
    $('#change-password-form').on('submit', events.onChangePassword)
    $('#sign-in-form').on('submit', events.onSignIn)
    $('#new-game-form').on('submit', events.onNewGame)
    $('#index-game-form').on('submit', events.onIndexGame)
    $('#show-game-form').on('submit', events.onShowGame)
    $('#game-board').on('click', events.onGameUpdate)
})
