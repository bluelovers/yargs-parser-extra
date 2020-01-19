"use strict";
/**
 * Created by user on 2020/1/19.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_parser_1 = require("yargs-parser");
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
exports.SymInputArgs = Symbol.for('InputArgs');
function handleOptions(options) {
    return lodash_defaultsdeep_1.default({}, options, {
        configuration: {
            'populate--': true,
        },
    });
}
exports.handleOptions = handleOptions;
function detailed(input, options) {
    options = handleOptions(options);
    if (options.filter) {
        input = input.filter(options.filter);
    }
    if (options.map) {
        input = input.slice().map(options.map);
    }
    let data = yargs_parser_1.detailed(input, options);
    let { argv } = data;
    argv = {
        _: argv._,
        __: argv['--'],
        ...argv,
        [exports.SymInputArgs]: Object.freeze(input.slice()),
    };
    Object.defineProperty(argv, '__', {
        get() {
            return this['--'];
        },
    });
    data.argv = argv;
    return data;
}
exports.detailed = detailed;
function parseArgv(input, options) {
    return detailed(input, options).argv;
}
exports.parseArgv = parseArgv;
exports.default = parseArgv;
//# sourceMappingURL=index.js.map