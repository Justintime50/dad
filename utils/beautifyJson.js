import { readFileSync, writeFileSync } from 'fs';

// A helper tool to beautify (unminify) a JSON file
// Usage: INPUT_FILE=path/to/file.json OUTPUT_FILE=path/to/file.json node beautifyJson.js

function beautifyJson() {
  const outputFilePath = process.env.OUTPUT_FILE || './outputBeautifiedData.json';
  const file = readFileSync(process.env.INPUT_FILE);

  const beautifiedJson = JSON.stringify(JSON.parse(file), null, 2);
  writeFileSync(outputFilePath, beautifiedJson);

  console.log('File beautified!');
}

beautifyJson();
