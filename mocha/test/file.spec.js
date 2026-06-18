import {expect, should, assert} from "chai";
import { getPromise } from "../feature.js";
 
describe('Our first tests', function() {

    describe('positive cases', () => {
        describe('case1 suite', () => {})
        describe('case2 suite', () => {})
    });

    describe('negative cases', () => {
        describe('ncase1 suite', () => {})
        describe('ncase2 suite', () => {})
    });
    let response;
    before(async() => {
        console.log('Before All')
        response = 'token'
    })

    after(async() => {
        console.log('After All')
    })

    beforeEach(async() => {
        console.log('Before Each')
    })

    afterEach(async() => {
        console.log('After Each')
    })

    it('true should be equal true', async () => {
        expect(true).to.equal(true)
    })

    it('false should be equal false', async () => {
        assert.strictEqual(false, 0)
    })

    it('false should be equal false', async () => {
        // Bad practise
        console.log(false, true)
    })

    it('should return succes promise', async () => {
        let result = await getPromise('success')
        expect(result).to.equal('success')
    })

    it('should return succes promise after 2500', async () => {
        let result = await getPromise('success', 2500)
        expect(result).to.equal('success')
    })
})

