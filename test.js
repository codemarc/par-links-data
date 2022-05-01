const VERSION = "0.0.6"
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

test("we are working", async () => {
  await getData()
  expect(data).toEqual(expect.objectContaining({version: VERSION}))
  expect(data.hasOwnProperty('config')).toBe(true)
})
