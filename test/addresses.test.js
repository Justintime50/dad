/* eslint-env node, mocha */
import { assert, expect } from 'chai';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

describe('Data Structure of Address Lists', function () {
  const startingDir = 'src/addresses';
  const filesToIgnore = ['src/addresses/.DS_Store'];
  let files = [];

  const getFilesRecursively = (directory) => {
    const filesInDirectory = readdirSync(directory);
    for (const file of filesInDirectory) {
      const absolute = join(directory, file);
      if (statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute);
      } else {
        files.push(absolute);
      }
    }
  };

  getFilesRecursively(startingDir);

  files.forEach(function (file) {
    if (!filesToIgnore.includes(file)) {
      const fileData = JSON.parse(readFileSync(file));
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
