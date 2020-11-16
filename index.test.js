const { error } = require("./src/constants")
const File = require("./src/file")
const { rejects, deepStrictEqual } = require('assert')
;
(async () => {
    {   
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection  = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {   
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection  = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'  
        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "name": "Luiz Topin",
              "id": 123,
              "profession": "Backend Programmer",
              "birthDay": 1983
            },
            {
              "name": "badanha da silva",
              "id": 321,
              "profession": "Backend Especialist",
              "birthDay": 1976
            },
            {
              "name": "xuranha jones",
              "id": 231,
              "profession": "Backend Junior",
              "birthDay": 2001
            }
          ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))  

    }
})()


