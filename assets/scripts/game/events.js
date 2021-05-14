'use strict'

const api = require('./api')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch()
}

const onCell0 = function (event) {
  event.preventDefault()

  const cellId = event.target.id
  const data = getFormFields(event.target)

  console.log('cellId: ' + cellId + '& data: ' + data)

  api.cell0(cellId, data)
    .then(ui.onBoardClickSuccess)
    .catch()
  // https://git.generalassemb.ly/ga-wdi-boston/game-project/issues/4165
}

module.exports = {
  onNewGame,
  onCell0
}
