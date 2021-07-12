const fs = require('fs')

function minifyJson() {
    const outputFilePath = process.env.OUTPUT_FILE || './outputMinifiedData.json'
    const file = fs.readFileSync(process.env.INPUT_FILE)

    const minifiedJson = JSON.stringify(JSON.parse(file))
    fs.writeFileSync(outputFilePath, minifiedJson)

    console.log('File minified!')
}

minifyJson()
