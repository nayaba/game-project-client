'use strict'

const store = require('./../store.js')

const newGameSuccess = function (res) {
  $('#messaging').html(`${res.game}`) // might need to change this to store.game
  store.game = res.games
  console.log('store.game' + store.game)
}

const onCell0Success = function (response) {
  // const cell = cells.length.event.target.id
  console.log('in onCell0Success')
}

module.exports = {
  newGameSuccess,
  onCell0Success
}
