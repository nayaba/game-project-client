'use strict'

const api = require('./api')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch()
}

const onXMove = function (event) {
  event.preventDefault()

  api.xMove()
    .then(ui.xMoveSuccess)
}

module.exports = {
  onNewGame,
  onXMove
}
