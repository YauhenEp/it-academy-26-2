import {expect, should, assert} from "chai";
import { getPromise } from "../feature.js";
 
describe('Our first tests', function() {

    const testData = [
        {value: 'Success', timeout: 300},
        {value: 'Not', timeout: 250},
        {value: 'Hello', timeout: 250}
    ]

    it('true should be equal true', async () => {
        expect(true).to.equal(true)
    })


    it('should return succes promise', async () => {
        let result = await getPromise('success')
        expect(result).to.equal('success')
    })

    it('should return succes promise after 2500', async () => {
        let result = await getPromise('success', 1500)
        expect(result).to.equal('success')
    })

    testData.forEach(({value, timeout} = obj) => {
        it(`should return promise ${value} after ${timeout} ms`, async () => {
            const result = await getPromise(value, timeout)
            expect(result).to.equal(value)
        })
    })
})