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

const cell0 = function (cellId, data) {
  console.log('cellId: ' + cellId + '& data: ' + data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/:id',
    headers: { Authorization: `Bearer ${store.user.token}` },
    data: {
      game: {
        cell: {
          index: `${cellId}`,
          value: `${data}`
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  cell0
}
