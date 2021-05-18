'use strict'

const store = require('./../store.js')

const newGameSuccess = function (res) {
  store.game = res.game
  console.log('res.game', res.game)
}

const newGameFailure = function (error) {
  $('#messaging').text(error)
}

// //////////////////////////// Game Play Section ////////////////////////////

const yourMove0Success = function (res) {
  store.game = res.game
  $('#0').css('pointer-events', 'none')
}

const myMove0Success = function (res) {
  store.game = res.game
  $('#0').css('pointer-events', 'none')
}

const yourMove1Success = function (res) {
  store.game = res.game
  $('#1').css('pointer-events', 'none')
}

const myMove1Success = function (res) {
  store.game = res.game
  $('#1').css('pointer-events', 'none')
}

const yourMove2Success = function (res) {
  store.game = res.game
  $('#2').css('pointer-events', 'none')
}

const myMove2Success = function (res) {
  store.game = res.game
  $('#2').css('pointer-events', 'none')
}

const yourMove3Success = function (res) {
  store.game = res.game
  $('#3').css('pointer-events', 'none')
}

const myMove3Success = function (res) {
  store.game = res.game
  $('#3').css('pointer-events', 'none')
}

const yourMove4Success = function (res) {
  store.game = res.game
  $('#4').css('pointer-events', 'none')
}

const myMove4Success = function (res) {
  store.game = res.game
  $('#4').css('pointer-events', 'none')
}

const yourMove5Success = function (res) {
  store.game = res.game
  $('#5').css('pointer-events', 'none')
}

const myMove5Success = function (res) {
  store.game = res.game
  $('#5').css('pointer-events', 'none')
}

const yourMove6Success = function (res) {
  store.game = res.game
  $('#6').css('pointer-events', 'none')
}

const myMove6Success = function (res) {
  store.game = res.game
  $('#6').css('pointer-events', 'none')
}

const yourMove7Success = function (res) {
  store.game = res.game
  $('#7').css('pointer-events', 'none')
}

const myMove7Success = function (res) {
  store.game = res.game
  $('#7').css('pointer-events', 'none')
}

const yourMove8Success = function (res) {
  store.game = res.game
  $('#8').css('pointer-events', 'none')
}

const myMove8Success = function (res) {
  store.game = res.game
  $('#8').css('pointer-events', 'none')
}

// /////////////////////////// End Game Play /////////////////////////////////

const showGameSuccess = function (res) {
  console.log('in showGameSuccess')
  console.log('store.game.cells: ', store.game.cells)
  console.log(res)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  yourMove0Success,
  myMove0Success,
  yourMove1Success,
  myMove1Success,
  yourMove2Success,
  myMove2Success,
  yourMove3Success,
  myMove3Success,
  yourMove4Success,
  myMove4Success,
  yourMove5Success,
  myMove5Success,
  yourMove6Success,
  myMove6Success,
  yourMove7Success,
  myMove7Success,
  yourMove8Success,
  myMove8Success,
  showGameSuccess
}
