'use strict'

const store = require('./../store.js')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').text('Sign up successful!')
}

const signUpFailure = function (err) {
  console.log(err) // to see what the error message says
  $('#messaging').text('Failed to sign up')
}

const signInSuccess = function (res) {
  $('#messaging').text('Welcome ' + res.user.email)
  store.user = res.user
  $('#sign-in').trigger('reset')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
}

const signInFailure = function (err) {
  console.log(err) // to see what the error message says
  $('#messaging').text('Sign in failed')
}

const signOutSuccess = function () {
  $('#messaging').text('Successfully signed out')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  $('.box').text('').css('background-color', 'white')
  $('.board').hide()
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#messaging').text('Failed to sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
