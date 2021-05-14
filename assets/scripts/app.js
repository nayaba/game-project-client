'use strict'

// use require with a reference to bundle the file and use it in this file
const userEvents = require('./user/events')
const gameEvents = require('./game/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('click', userEvents.onSignOut)

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#x-move').on('click', gameEvents.onXMove)
})
