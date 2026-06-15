let bool: boolean = true
console.log(bool)
let num: number = 10;
let str: string = "asdfd"

let univers: string | number | boolean = 10
univers = true
univers = 'str'

const strArr: string[] = ['stf', 'sdf']
const strNum: Array<number> = [12, 75, 23, 34]
const tupple: [number, string, boolean, null] = [10, 'string', true, null]

const arr: Array<string | number> = ['str', 10, 10]
const arr1: (number | string)[] = ['str', 10, 10]

let nul: null = null
console.log(typeof null)

let und: undefined


// TODO remove type any in the next iteration
let anyType: any = 10
anyType = 'str'
anyType = {}
