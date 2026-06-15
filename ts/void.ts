function doSomeAction(): void {
    console.log('Without Return')
}

function returnEmptyReturn(): void {
    console.log('Wit empty Return')
    return
}

function getError(): never {
    throw new Error('This is exzmple of usage never type')
}