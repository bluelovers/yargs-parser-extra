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
    if (options && options.filter) {
        input = input.filter(options.filter);
    }
    if (options && options.map) {
        input = input.slice().map(options.map);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7O0FBR0gsZ0VBQW1DO0FBQ25DLDhFQUErQztBQUVsQyxRQUFBLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBZXBELFNBQWdCLFVBQVUsQ0FBaUUsS0FBUSxFQUFFLE9BQWlCO0lBRXJILElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQzdCO1FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBUSxDQUFBO0tBQzNDO0lBRUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsRUFDMUI7UUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFRLENBQUE7S0FDN0M7SUFFRCxJQUFJLElBQUksR0FBRyxzQkFBTyxDQUFDLEtBQWlCLEVBQUUsNkJBQVksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO1FBQy9ELGFBQWEsRUFBRTtZQUNkLFlBQVksRUFBRSxJQUFJO1NBQ2xCO0tBQ0QsQ0FBQyxDQUFvQixDQUFDO0lBRXZCLElBQUksR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2QsR0FBRyxJQUFJO1FBQ1AsQ0FBQyxvQkFBWSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQU07S0FDakQsQ0FBQztJQUVGLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtRQUNqQyxHQUFHO1lBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEIsQ0FBQztLQUNELENBQUMsQ0FBQztJQUVILE9BQU8sSUFBdUIsQ0FBQTtBQUMvQixDQUFDO0FBakNELGdDQWlDQztBQUVELGtCQUFlLFVBQVUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMjAvMS8xOS5cbiAqL1xuXG5pbXBvcnQgeyBPcHRpb25zIGFzIF9PcHRpb25zLCBBcmd1bWVudHMgYXMgX0FyZ3VtZW50cyB9IGZyb20gJ3lhcmdzLXBhcnNlcic7XG5pbXBvcnQgX1BhcnNlciBmcm9tICd5YXJncy1wYXJzZXInO1xuaW1wb3J0IGRlZmF1bHRzRGVlcCBmcm9tICdsb2Rhc2guZGVmYXVsdHNkZWVwJztcblxuZXhwb3J0IGNvbnN0IFN5bUlucHV0QXJncyA9IFN5bWJvbC5mb3IoJ0lucHV0QXJncycpO1xudHlwZSBJbnB1dEFyZyA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5leHBvcnQgdHlwZSBJbnB1dEFyZ3MgPSBJbnB1dEFyZ1tdO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zID0gX09wdGlvbnMgJiB7XG5cdGZpbHRlcj8oYXJnOiBJbnB1dEFyZywgaW5kZXg6IG51bWJlciwgaW5wdXQ6IElucHV0QXJncyk6IGJvb2xlYW4sXG5cdG1hcD8oYXJnOiBJbnB1dEFyZywgaW5kZXg6IG51bWJlciwgaW5wdXQ6IElucHV0QXJncyk6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0gUmVjb3JkPHN0cmluZywgYW55PiwgUCBleHRlbmRzIElucHV0QXJncyA9IElucHV0QXJncz4gPSBfQXJndW1lbnRzICYgVCAmIHtcblx0W1N5bUlucHV0QXJnc106IFJlYWRvbmx5PFA+LFxuXHQnLS0nPzogc3RyaW5nW10sXG5cdF9fPzogc3RyaW5nW10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXJBcmd2PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBQIGV4dGVuZHMgSW5wdXRBcmdzID0gSW5wdXRBcmdzPihpbnB1dDogUCwgb3B0aW9ucz86IE9wdGlvbnMpXG57XG5cdGlmIChvcHRpb25zICYmIG9wdGlvbnMuZmlsdGVyKVxuXHR7XG5cdFx0aW5wdXQgPSBpbnB1dC5maWx0ZXIob3B0aW9ucy5maWx0ZXIpIGFzIGFueVxuXHR9XG5cblx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5tYXApXG5cdHtcblx0XHRpbnB1dCA9IGlucHV0LnNsaWNlKCkubWFwKG9wdGlvbnMubWFwKSBhcyBhbnlcblx0fVxuXG5cdGxldCBhcmd2ID0gX1BhcnNlcihpbnB1dCBhcyBzdHJpbmdbXSwgZGVmYXVsdHNEZWVwKHt9LCBvcHRpb25zLCB7XG5cdFx0Y29uZmlndXJhdGlvbjoge1xuXHRcdFx0J3BvcHVsYXRlLS0nOiB0cnVlLFxuXHRcdH0sXG5cdH0pKSBhcyBBcmd1bWVudHM8VCwgUD47XG5cblx0YXJndiA9IHtcblx0XHRfOiBhcmd2Ll8sXG5cdFx0X186IGFyZ3ZbJy0tJ10sXG5cdFx0Li4uYXJndixcblx0XHRbU3ltSW5wdXRBcmdzXTogT2JqZWN0LmZyZWV6ZShpbnB1dC5zbGljZSgpKSBhcyBQLFxuXHR9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcmd2LCAnX18nLCB7XG5cdFx0Z2V0KClcblx0XHR7XG5cdFx0XHRyZXR1cm4gdGhpc1snLS0nXVxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBhcmd2IGFzIEFyZ3VtZW50czxULCBQPlxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZXJBcmd2XG4iXX0=