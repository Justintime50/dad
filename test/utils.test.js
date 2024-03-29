/* eslint-env node, mocha */
const assert = require('chai').assert;

const fs = require('fs');
const slimJsonUtil = require('../utils/createSlimJson');

describe('Create Slim JSON Util', function () {
  it('creates a slim JSON file from a larger dataset', async function () {
    const testFileName = __dirname + '/files/test-data-set-slim';
    if (fs.existsSync(testFileName)) {
      fs.unlinkSync(testFileName);
    }
    process.env.DATA_SET = __dirname + '/files/test-data-set.json';
    process.env.NUM_ADDRESSES = 5;
    const createSlimJson = await slimJsonUtil.createSlimJson();
    assert.equal(createSlimJson, true);
  });

  it('returns an error when DATA_SET is undefined', async function () {
    // Hacky but works, could instead use https://github.com/domenic/chai-as-promised
    try {
      process.env.DATA_SET = undefined;
      await slimJsonUtil.createSlimJson();
    } catch (error) {
      assert.include(error.message, "Cannot find module 'undefined'");
    }
  });
});
