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

  console.log('in event.js')

  api.cell0(cellId, data)
    .then(ui.onCell0Success)
    .catch()
  // https://git.generalassemb.ly/ga-wdi-boston/game-project/issues/4165
}


const beth = function (event) {
  event.preventDefault()
  const idFromDiv = $(event.target).data('id') // getting id from div for array cell

}


module.exports = {
  onNewGame,
  onCell0,
  beth
}
