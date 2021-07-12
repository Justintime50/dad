const fs = require('fs')

function beautifyJson() {
    const outputFilePath = process.env.OUTPUT_FILE || './outputBeautifiedData.json'
    const file = fs.readFileSync(process.env.INPUT_FILE)

    const beautifiedJson = JSON.stringify(JSON.parse(file), null, 2)
    fs.writeFileSync(outputFilePath, beautifiedJson)

    console.log('File beautified!')
}

beautifyJson()
