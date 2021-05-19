'use strict'

const api = require('./api')
const ui = require('./ui.js')
const store = require('./../store.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')

const onStartGame = function (event) {
  event.preventDefault()
  console.log('in onStartGame event.js')

  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onANewGame = function (event) {
  event.preventDefault()
  $('div.box').text('').css('background-color', 'white')
  $('div.box').css('pointer-events', 'auto')
  $('#messaging').text('')

  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}
// //////////////////////////// Game Play Section ////////////////////////////

let currentPlayer = '✕'

const onBoxClick = (event) => {
  const box = $(event.target)
  console.log(event.target)
  box.css('background', 'transparent').text(currentPlayer)
  currentPlayer = currentPlayer === 'O' ? '✕' : 'O'

  $('div.box').click(function () {
    const index = $('div.box').index(this)
    console.log('index: ', index)
  })

  // $( `${store.game.cells}` ).each(function() {
  //     if ( this.game.cells === true ) {
  //       $('#messaging').text('Draw')
  //       $('.board').css('pointer-events', 'none')
  //     } else {
  //       return false
  //     }


  // X WINS //////////////////////////////////////////////////////////////////

  if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
    // $(`${store.game.cells}`).each(console.log())
  } else if (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'x' && store.game.cells[4] === 'x' && store.game.cells[2] === 'x') {
    $('#messaging').text('X Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  } else if (store.game.cells[6] === 'o' && store.game.cells[4] === 'o' && store.game.cells[2] === 'o') {
    $('#messaging').text('O Wins!')
    $('.board').css('pointer-events', 'none')
  // } else if (store.game.cells.forEach() !== '') {
  //   $('#messaging').text('Game Over')
  //   $('.board').css('pointer-events', 'none')
  } else {
    $('#messaging').text('')
  }
}

const onYourMove0 = function () {
  event.preventDefault()

  if (currentPlayer === 'O') {
    api.yourMove0()
      .then(ui.yourMove0Success)
  } else {
    api.myMove0()
      .then(ui.myMove0Success)
  }
}

const onYourMove1 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove1()
      .then(ui.yourMove1Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove1()
      .then(ui.myMove1Success)
  }
}

const onYourMove2 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove2()
      .then(ui.yourMove2Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove2()
      .then(ui.myMove2Success)
  }
}

const onYourMove3 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove3()
      .then(ui.yourMove3Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove3()
      .then(ui.myMove3Success)
  }
}

const onYourMove4 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove4()
      .then(ui.yourMove4Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove4()
      .then(ui.myMove4Success)
  }
}

const onYourMove5 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove5()
      .then(ui.yourMove5Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove5()
      .then(ui.myMove5Success)
  }
}

const onYourMove6 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove6()
      .then(ui.yourMove6Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove6()
      .then(ui.myMove6Success)
  }
}

const onYourMove7 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove7()
      .then(ui.yourMove7Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove7()
      .then(ui.myMove7Success)
  }
}

const onYourMove8 = function () {
  if (currentPlayer === 'O') {
    console.log('Next Player: ', currentPlayer)

    api.yourMove8()
      .then(ui.yourMove8Success)
  } else {
    console.log('Next Player: ', currentPlayer)

    api.myMove8()
      .then(ui.myMove8Success)
  }
}

// /////////////////////////// End Game Play /////////////////////////////////

const onShowGame = function () {
  api.showGame()
    .then(ui.showGameSuccess)
}

module.exports = {
  onStartGame,
  onANewGame,
  onBoxClick,
  onYourMove0,
  onYourMove1,
  onYourMove2,
  onYourMove3,
  onYourMove4,
  onYourMove5,
  onYourMove6,
  onYourMove7,
  onYourMove8,
  onShowGame
}
