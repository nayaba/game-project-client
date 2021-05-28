'use strict'

const store = require('./../store.js')


const newGameSuccess = function (res) {
  store.game = res.game
  console.log('res.game', res.game)
  $('.board').show()
  $('#messaging').text('')
}

const newGameFailure = function (error) {
  $('#messaging').text(error)
}

// //////////////////////////// Game Play Section ////////////////////////////



const yourMove0Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#0').css('pointer-events', 'none')

}

const myMove0Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#0').css('pointer-events', 'none')
}

const yourMove1Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#1').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove1Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#1').css('pointer-events', 'none')
}

const yourMove2Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#2').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove2Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#2').css('pointer-events', 'none')
}

const yourMove3Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#3').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove3Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#3').css('pointer-events', 'none')
}

const yourMove4Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#4').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove4Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#4').css('pointer-events', 'none')
}

const yourMove5Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#5').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove5Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#5').css('pointer-events', 'none')
}

const yourMove6Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#6').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove6Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#6').css('pointer-events', 'none')
}

const yourMove7Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#7').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove7Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#7').css('pointer-events', 'none')
}

const yourMove8Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#8').css('pointer-events', 'none')
  currentPlayer = '✕'
}

const myMove8Success = function (res) {
  store.game = res.game
  checkForWin()
  $('#8').css('pointer-events', 'none')
}

// /////////////////////////// End Game Play /////////////////////////////////

const showGameSuccess = function (res) {
  console.log('in showGameSuccess')
  console.log('store.game.cells: ', store.game.cells)
  console.log(res)
}

const checkForWin = function () {
  // X WINS //////////////////////////////////////////////////////////////////
  if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'x' && store.game.cells[4] === 'x' && store.game.cells[2] === 'x') {
    $('#messaging').text('X Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'o' && store.game.cells[4] === 'o' && store.game.cells[2] === 'o') {
    $('#messaging').text('O Wins!')
    $('.box').css('pointer-events', 'none')
  } else if (store.game.cells[0] != '' && store.game.cells[1] != '' && store.game.cells[2] != '' && store.game.cells[3] != '' && store.game.cells[4] != '' && store.game.cells[5] != '' && store.game.cells[6] != '' && store.game.cells[7] != '' && store.game.cells[8] != '') {
    $('#messaging').text('Draw')
    $('.board').css('pointer-events', 'none')
  } else {
    $('#messaging').text('')
  }
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
  showGameSuccess,
}
