const { error } = require("./src/constants")
const File = require("./src/file")
const { rejects } = require('assert')
;
(async () => {
    const filePath = './mocks/threeItems-valid.csv'
    const rejection  = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)

    await rejects(result, rejection)
})()


