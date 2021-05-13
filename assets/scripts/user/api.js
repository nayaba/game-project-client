'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-in'
  })
}

const signOut = function () {
  // console.log(`user token: ${store.user.token}`)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
