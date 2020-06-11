'use strict'

const config = require('./config')
const store = require('./store')
const events = require('./events')

const addUser = function(data){
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}
const signUserIn = function(data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}
const userChangePass = function(data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const userSignOut = function(data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const userCreateGame = function(data){
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const userIndexGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const userShowGame = function(data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.games._id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const userUpdateGame = function(index, currentPlayer) {
  return $.ajax({
    url: config.apiUrl + "/games/" + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: currentPlayer
        },
        over: events.gameOver
      }
    }
  })
}

module.exports = {
  addUser,
  signUserIn,
  userChangePass,
  userSignOut,
  userCreateGame,
  userIndexGame,
  userShowGame,
  userUpdateGame
}
