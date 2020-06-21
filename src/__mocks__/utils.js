const actualUtils = jest.requireActual("../utils");

const utils = { ...actualUtils, getWindowWidth: jest.fn(() => 1024) };

module.exports = utils;
