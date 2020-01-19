"use strict";
/**
 * Created by user on 2020/1/19.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_parser_1 = __importDefault(require("yargs-parser"));
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
exports.SymInputArgs = Symbol.for('InputArgs');
function parserArgv(input, options) {
    let argv = yargs_parser_1.default(input, lodash_defaultsdeep_1.default({}, options, {
        configuration: {
            'populate--': true,
        },
    }));
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
    return argv;
}
exports.parserArgv = parserArgv;
exports.default = parserArgv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7O0FBR0gsZ0VBQW1DO0FBQ25DLDhFQUErQztBQUVsQyxRQUFBLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBV3BELFNBQWdCLFVBQVUsQ0FBbUUsS0FBUSxFQUFFLE9BQWlCO0lBRXZILElBQUksSUFBSSxHQUFHLHNCQUFPLENBQUMsS0FBaUIsRUFBRSw2QkFBWSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7UUFDL0QsYUFBYSxFQUFFO1lBQ2QsWUFBWSxFQUFFLElBQUk7U0FDbEI7S0FDRCxDQUFDLENBQW9CLENBQUM7SUFFdkIsSUFBSSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxHQUFHLElBQUk7UUFDUCxDQUFDLG9CQUFZLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBTTtLQUNqRCxDQUFDO0lBRUYsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1FBQ2pDLEdBQUc7WUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQixDQUFDO0tBQ0QsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUF1QixDQUFBO0FBQy9CLENBQUM7QUF2QkQsZ0NBdUJDO0FBRUQsa0JBQWUsVUFBVSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAyMC8xLzE5LlxuICovXG5cbmltcG9ydCB7IE9wdGlvbnMsIEFyZ3VtZW50cyBhcyBfQXJndW1lbnRzIH0gZnJvbSAneWFyZ3MtcGFyc2VyJztcbmltcG9ydCBfUGFyc2VyIGZyb20gJ3lhcmdzLXBhcnNlcic7XG5pbXBvcnQgZGVmYXVsdHNEZWVwIGZyb20gJ2xvZGFzaC5kZWZhdWx0c2RlZXAnO1xuXG5leHBvcnQgY29uc3QgU3ltSW5wdXRBcmdzID0gU3ltYm9sLmZvcignSW5wdXRBcmdzJyk7XG5leHBvcnQgeyBPcHRpb25zIH1cblxuZXhwb3J0IHR5cGUgSUlucHV0QXJncyA9IChzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuKVtdO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4gPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBQIGV4dGVuZHMgSUlucHV0QXJncyA9IElJbnB1dEFyZ3M+ID0gX0FyZ3VtZW50cyAmIFQgJiB7XG5cdFtTeW1JbnB1dEFyZ3NdOiBSZWFkb25seTxQPixcblx0Jy0tJz86IHN0cmluZ1tdLFxuXHRfXz86IHN0cmluZ1tdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VyQXJndjxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55PiwgUCBleHRlbmRzIElJbnB1dEFyZ3MgPSBJSW5wdXRBcmdzPihpbnB1dDogUCwgb3B0aW9ucz86IE9wdGlvbnMpXG57XG5cdGxldCBhcmd2ID0gX1BhcnNlcihpbnB1dCBhcyBzdHJpbmdbXSwgZGVmYXVsdHNEZWVwKHt9LCBvcHRpb25zLCB7XG5cdFx0Y29uZmlndXJhdGlvbjoge1xuXHRcdFx0J3BvcHVsYXRlLS0nOiB0cnVlLFxuXHRcdH0sXG5cdH0pKSBhcyBBcmd1bWVudHM8VCwgUD47XG5cblx0YXJndiA9IHtcblx0XHRfOiBhcmd2Ll8sXG5cdFx0X186IGFyZ3ZbJy0tJ10sXG5cdFx0Li4uYXJndixcblx0XHRbU3ltSW5wdXRBcmdzXTogT2JqZWN0LmZyZWV6ZShpbnB1dC5zbGljZSgpKSBhcyBQLFxuXHR9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcmd2LCAnX18nLCB7XG5cdFx0Z2V0KClcblx0XHR7XG5cdFx0XHRyZXR1cm4gdGhpc1snLS0nXVxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBhcmd2IGFzIEFyZ3VtZW50czxULCBQPlxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZXJBcmd2XG4iXX0=