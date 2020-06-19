'use strict'

const events = require('./events')

$(() => {
    $('.auth').hide()
    $('.board').hide()
    $('#sign-in').on('submit', events.onSignIn)
    $('#sign-up').on('submit', events.onSignUp)
    $('#new-game').on('submit', events.onNewGame)
    $('#index-games').on('submit', events.onIndexGame)
    $('#change-password').on('submit', events.onChangePassword)
    $('#sign-out').on('click', events.onSignOut)
    $('.board').on('click', events.onGameUpdate)
})



    // $('.customization').hide()
  // $('#select-icon').on('click', events.onIconSelect)
    // $('.icon').on('click', events.selectPokemon)
// $('#delete-button').on('click', events.onGameDelete)
// $('#show-game').on('submit', events.onShowGame)
