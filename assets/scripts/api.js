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
const signUserIn = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}
const userChangePass = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const userSignOut = (data) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const userCreateGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const userIndexGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const userUpdateGame = (i, currentPlayer) => {
  return $.ajax({
    url: config.apiUrl + "/games/" + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: i,
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
  userUpdateGame
}


// const userDeleteGame = function(data) {
//   return $.ajax({
//     url: config.apiUrl + "/games/" + store.game._id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
// const userShowGame = (data) => {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + data.games._id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
