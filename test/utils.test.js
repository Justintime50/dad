/* eslint-env node, mocha */
import { assert } from 'chai';
import { existsSync, unlinkSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { createSlimJson } from '../utils/createSlimJson.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('Create Slim JSON Util', function () {
  it('creates a slim JSON file from a larger dataset', async function () {
    const testFileName = __dirname + '/files/test-data-set-slim';
    if (existsSync(testFileName)) {
      unlinkSync(testFileName);
    }
    process.env.DATA_SET = __dirname + '/files/test-data-set.json';
    process.env.NUM_ADDRESSES = 5;
    const jsonData = await createSlimJson();
    assert.equal(jsonData, true);
  });

  it('returns an error when DATA_SET is undefined', async function () {
    // Hacky but works, could instead use https://github.com/domenic/chai-as-promised
    try {
      process.env.DATA_SET = undefined;
      await createSlimJson();
    } catch (error) {
      assert.include(error.message, 'no such file or directory');
    }
  });
});
