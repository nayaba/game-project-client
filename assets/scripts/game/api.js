'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const xMove = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: `Bearer ${store.user.token}` },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  xMove
}
