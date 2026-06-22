const axios = require("axios");
const activitiesSchema = require('./schemas/activitiesGET.v1.json')
const {sendHttpRequest} = require('./helper/sendHttpRequest')

const URL = `https://fakerestapi.azurewebsites.net/api/v1/Activities`
describe('[GET] Activities', () => {

    describe(`positive cases `, function () {
        let response;
        beforeAll(async () => {
            response = await axios.get(URL);
        })

        test('[Get] should return 200 with valid url', async () => {
            expect(await response.status).toEqual(200)
        })

        test('[Get] should return approptiate json schema', async () => {
            expect(response).toBeValidSchema(activitiesSchema)
        })
    })

    describe(`positive cases `, function () {
        let response;
        beforeAll(async () => {
            const params = {
                url: URL
            }
            response = await sendHttpRequest(params);
        })

        test('[Get] should return 200 with valid url', async () => {
            expect(await response.status).toEqual(200)
        })

        test('[Get] should return approptiate json schema', async () => {
            expect(response).toBeValidSchema(activitiesSchema)
        })
    })


    test('[Get] should return 404 with invalid url', async () => {
        let response;
        try {
            response = await axios.get(URL + 'nsdjfms');
        } catch (err) {
            response = err.response;
        }
        console.log(response.data)
        expect(await response.status).toEqual(404)
    })

    test('[Get] should return 404 with invalid url 123', async () => {
        const params = {
            url: URL + 'nsdjfms'
        }
        let response = await sendHttpRequest(params)
        expect(await response.status).toEqual(404)
    })
});