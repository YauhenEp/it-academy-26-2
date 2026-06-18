import {expect, should, assert} from "chai";
import { getPromise } from "../feature.js";
 
describe('Our first tests', function() {
    it('true should be equal true', async () => {
        expect(true).to.equal(true)
    })


    it('should return succes promise', async () => {
        let result = await getPromise('success')
        expect(result).to.equal('success')
    })

    it('should return succes promise after 2500', async () => {
        let result = await getPromise('success', 3000)
        expect(result).to.equal('success')
    })
})