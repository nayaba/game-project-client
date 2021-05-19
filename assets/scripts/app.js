'use strict'

// use require with a reference to bundle the file and use it in this file
const userEvents = require('./user/events')
const gameEvents = require('./game/events')

// use require without a reference to ensure a file is bundled
// require('./example')



$(() => {
  // $(document.body).click(function () {
  //   $(`${store.game.cells}`).each(function (i) {
  //     if (store.game.cells !== null) {
  //       $('#messaging').text('Your move!')
  //     } else {
  //       $('#messaging').text('Game over!')
  //     }
  //   })
  // })

  $('.board').hide()
  $('#after-sign-in').hide()

  $('.box').on('click', gameEvents.onBoxClick)

  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('click', userEvents.onSignOut)

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#show-game').on('click', gameEvents.onShowGame)
  // $('#anew-game').on('click', gameEvents.onANewGame)

  $('#0').on('click', gameEvents.onYourMove0)
  $('#1').on('click', gameEvents.onYourMove1)
  $('#2').on('click', gameEvents.onYourMove2)
  $('#3').on('click', gameEvents.onYourMove3)
  $('#4').on('click', gameEvents.onYourMove4)
  $('#5').on('click', gameEvents.onYourMove5)
  $('#6').on('click', gameEvents.onYourMove6)
  $('#7').on('click', gameEvents.onYourMove7)
  $('#8').on('click', gameEvents.onYourMove8)
})
