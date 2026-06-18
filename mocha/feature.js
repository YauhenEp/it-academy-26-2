function getPromise(status, timeout = 1000) {
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

export {getPromise}