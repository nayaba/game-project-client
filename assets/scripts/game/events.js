'use strict'

const api = require('./api')
const ui = require('./ui.js')
const store = require('./../store.js')
// const getFormFields = require('./../../../lib/get-form-fields.js')

// const onStartGame = function (event) {
//   event.preventDefault()
//   console.log('in onStartGame event.js')
//
//   api.startGame()
//     .then(ui.startGameSuccess)
//     .catch(ui.startGameFailure)
// }

const onNewGame = function (event) {
  event.preventDefault()
  $('.box').text('').css('background-color', 'white')
  $('.box').css('pointer-events', 'auto')
  $('#messaging').text('')

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
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
  onNewGame,
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
