'use strict'

const events = require('./events')


$(() => {
    $('.auth').hide()
    $('.board').hide()
    $('.customization').hide()
    $('#sign-in').on('submit', events.onSignIn)
    $('#sign-up').on('submit', events.onSignUp)
    $('#select-icon').on('click', events.onIconSelect)
    $('.icon').on('click', events.selectPokemon)
    $('#new-game').on('submit', events.onNewGame)
    $('#index-games').on('submit', events.onIndexGame)
    $('#change-password').on('submit', events.onChangePassword)
    $('#show-game').on('submit', events.onShowGame)
    $('#sign-out').on('click', events.onSignOut)
    $('.board').on('click', events.onGameUpdate)
    // $('#delete-button').on('click', events.onGameDelete)
})
