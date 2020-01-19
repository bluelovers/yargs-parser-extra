const index = require("../index");

module.exports = Object.assign(index.parseArgv, index);

Object.defineProperty(module.exports, "__esModule", { value: true });
