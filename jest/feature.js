function calculateSquare(array) {
    return array.map(item => {
        return {
            name: item.name,
            square: item.width * item.height
        }
    })
}

function filterUser(users) {
    return users.filter(({name} = item) => name.includes('a') || name.includes('A'))
}

function getPromise(status, timeout) {
  return new Promise((res, rej) => {
    if(status === 'reject') {
      setTimeout(() => {
        rej(status)
      }, timeout)
    }
    setTimeout(() => {
      res(status)
    }, timeout)
  })
}

module.exports =  {calculateSquare, filterUser, getPromise}