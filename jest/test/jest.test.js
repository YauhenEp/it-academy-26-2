// import {expect} from "chai"
const {calculateSquare, getPromise} = require("../feature.js")

const mock = jest.fn()

describe('Our first test suite', function() {
    // const a = new mock()
    const ssa1 = [
        {name: "a", width: "10", height: "12"},
        {name: "b", width: "12", height: "14"},
        {name: "c", width: "15", height: "11"},
        {name: "d", width: "16", height: "12"},
        {name: "e", width: "19", height: "14"},
    ]

    beforeAll(async () => {
        console.log('I am running before all tests');
    })

    beforeEach(async () => {
        console.log('I am running before EACH test');
    })

    afterAll(async () => {
        console.log('I am running after all tests');
    })

    afterEach(async () => {
        console.log('I am running after EACH test');
    })

    test('true should be equal true', async () => {
        console.log('I am test')
        expect(true).toBe(true)
    })

    test.each([
        {value: 'Success', timeout: 300},
        {value: 'Not', timeout: 250},
        {value: 'Hello', timeout: 250}
    ])('should return promise with options %p', async ({value, timeout}) => {
        const result = await getPromise(value, timeout)
        expect(result).toEqual(value)
    })

    test.each([
        ['Success 1', 300],
        ['Not 2', 250],
        ['Hello 3', 250]
    ])('should return promise %s with options %i', async (value, timeout) => {
        // const {expect} = require("chai")
        const result = await getPromise(value, timeout)
        expect(result).toEqual(value)
    })

    it('should check mock function', async () => {
        expect(mock).toHaveBeenCalledTimes(0)
        mock()
        expect(mock).toHaveBeenCalledTimes(1)
    })

    it('should be key square in new objects', async() => {
        const newArr = calculateSquare(ssa1)
        for(let ssa of newArr) {
            expect(ssa).toHaveProperty('name')
            expect(ssa).toHaveProperty('square')
        }
        expect(newArr[0]).toHaveProperty('square');
    })

    // it('should be key square in new objects', async() => {
    //     const newArr = calculateSquare(ssa1)
    //     for(let ssa of newArr) {
    //         expect(ssa).to.have.nested.deep.keys('name', 'square')
    //     }
    // })

    // it('should be the same length', async () => {
    //     const newArr = calculateSquare(ssa1)
    //     expect(ssa1.length).to.equal(newArr.length)
    // })

    // it('should return promise after 3 seconds', async () => {
    //     const result = await getPromise('Success', 3000)
    //     expect(result).to.equal('Success')
    // })
})