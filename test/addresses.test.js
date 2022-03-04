/* eslint-env node, mocha */
const fs = require('fs');
const path = require('path');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Data Structure of Address Lists', function () {
  const startingDir = 'src/addresses';
  const filesToIgnore = ['src/addresses/.DS_Store'];
  let files = [];

  const getFilesRecursively = (directory) => {
    const filesInDirectory = fs.readdirSync(directory);
    for (const file of filesInDirectory) {
      const absolute = path.join(directory, file);
      if (fs.statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute);
      } else {
        files.push(absolute);
      }
    }
  };

  getFilesRecursively(startingDir);

  files.forEach(function (file) {
    if (!filesToIgnore.includes(file)) {
      const fileData = JSON.parse(fs.readFileSync(file));
      it(`"${file}" returns a list of addresses with a length of at least 5 and no more than 100`, function () {
        assert.isAtLeast(fileData.length, 5);
        assert.isAtMost(fileData.length, 100);
      });

      fileData.forEach(function (singleAddress) {
        it(`ensures the data structure of "${singleAddress.street1}" matches that of an address record`, function () {
          expect(singleAddress).to.contain.all.keys('street1', 'street2', 'city', 'state', 'zip', 'country');
          assert.typeOf(singleAddress.street1, 'string');
          assert.typeOf(singleAddress.street2, 'string');
          assert.typeOf(singleAddress.city, 'string');
          assert.typeOf(singleAddress.state, 'string');
          assert.typeOf(singleAddress.zip, 'string');
          assert.typeOf(singleAddress.country, 'string');
        });
      });
    }
  });
});
