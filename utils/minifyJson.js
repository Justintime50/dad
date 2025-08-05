import { readFileSync, writeFileSync } from 'fs';

// A helper tool to minify a JSON file
// Usage: INPUT_FILE=path/to/file.json OUTPUT_FILE=path/to/file.json node minifyJson.js

function minifyJson() {
  const outputFilePath = process.env.OUTPUT_FILE || './outputMinifiedData.json';
  const file = readFileSync(process.env.INPUT_FILE);

  const minifiedJson = JSON.stringify(JSON.parse(file));
  writeFileSync(outputFilePath, minifiedJson);

  console.log('File minified!');
}

minifyJson();
