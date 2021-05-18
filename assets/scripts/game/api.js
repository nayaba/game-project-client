'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const startGame = function () {
  console.log('store.user.token' + `${store.user.token}`)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: {},
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// //////////////////////////// Game Play Section ////////////////////////////

const yourMove0 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove0 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 0,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove1 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 1,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove1 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 1,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove2 = function () {
  console.log(`in yourMove2 id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 2,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove2 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 2,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove3 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 3,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove3 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 3,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove4 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 4,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove4 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 4,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove5 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 5,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove5 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 5,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove6 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 6,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove6 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 6,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove7 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 7,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove7 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 7,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const yourMove8 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 8,
          value: 'x'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const myMove8 = function () {
  console.log(`in yourMove id: ${store.game._id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: 8,
          value: 'o'
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// /////////////////////////// End Game Play /////////////////////////////////

const showGame = function () {
  console.log('in showGame')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/games/${store.game._id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  startGame,
  yourMove0,
  myMove0,
  yourMove1,
  myMove1,
  yourMove2,
  myMove2,
  yourMove3,
  myMove3,
  yourMove4,
  myMove4,
  yourMove5,
  myMove5,
  yourMove6,
  myMove6,
  yourMove7,
  myMove7,
  yourMove8,
  myMove8,
  showGame
}
