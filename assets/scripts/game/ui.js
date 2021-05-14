'use strict'

const store = require('./../store.js')

const newGameSuccess = function (res) {

  // store.game = $.makeArray(res)


  $('#messaging').html(`${res.game}`) // might need to change this to store.game
  store.game = res.games
  console.log('store.game' + store.game)

  // $('#messaging').text('Welcome ' + res.user.email)
  // store.user = res.user
}

// const signInFailure = function (err) {
//   console.log(err) // to see what the error message says
//   $('#messaging').text('Sign in failed')
// }

module.exports = {
  newGameSuccess
}
