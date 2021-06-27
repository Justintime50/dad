const fs = require('fs')

function minifyJson() {
    const file = fs.readFileSync(process.env.INPUT_FILE)

    const minifiedJson = JSON.stringify(JSON.parse(file))
    fs.writeFileSync(process.env.OUTPUT_FILE, minifiedJson)

    console.log('File minified!')
}

minifyJson()
