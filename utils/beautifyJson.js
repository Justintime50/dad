const fs = require('fs')

function beautifyJson() {
    const file = fs.readFileSync(process.env.INPUT_FILE)

    const beautifiedJson = JSON.stringify(JSON.parse(file), null, 2)
    fs.writeFileSync(process.env.OUTPUT_FILE, beautifiedJson)

    console.log('File beautified!')
}

beautifyJson()
