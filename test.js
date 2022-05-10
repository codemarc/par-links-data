const UPDATED = "20220501"
const VERSION = "0.0.7"
const axios = require("axios")

var data = { version: VERSION }

const getData = async () => {
  await axios
    .get(
      "https://raw.githubusercontent.com/codemarc/parlinks/master/default.json"
    )
    .then((response) => {
      data = response.data
    })
    .catch((error) => {
      data.error = error
    })
}

describe('Test local data ', function () {
  test("checking default.json", () => {
    const data=require('./default.json')
    expect(data).toEqual(expect.objectContaining({version: VERSION}))
    expect(data.hasOwnProperty('config')).toBe(true)
    expect(data.config.length).toBeGreaterThan(0)
    expect(data.config.length).toBeLessThan(21)
  })
})

describe('Testing remote data ', function () {
test("checking data object", async () => {
  await getData()
  expect(data).toEqual(expect.objectContaining({version: VERSION}))
  expect(data.hasOwnProperty('config')).toBe(true)
  expect(data.config.length).toBeGreaterThan(0)
  expect(data.config.length).toBeLessThan(21)
})
})
