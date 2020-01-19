/**
 * Created by user on 2020/1/19.
 */

import { Options as _Options, Arguments as _Arguments } from 'yargs-parser';
import _Parser, { detailed as _detailed, DetailedArguments as _DetailedArguments } from 'yargs-parser';
import defaultsDeep from 'lodash.defaultsdeep';

export const SymInputArgs = Symbol.for('InputArgs');
type InputArg = string | number | boolean;
export type InputArgs = InputArg[];

export type Options = _Options & {
	filter?(arg: InputArg, index: number, input: InputArgs): boolean,
	map?(arg: InputArg, index: number, input: InputArgs): string,
}

export type Arguments<T extends Record<string, any> = Record<string, any>, P extends InputArgs = InputArgs> = _Arguments & T & {
	[SymInputArgs]: Readonly<P>,
	'--'?: string[],
	__?: string[],
}

export type DetailedArguments<T extends Record<string, any> = Record<string, any>, P extends InputArgs = InputArgs> = Omit<Arguments, 'argv'> & {
	argv: Arguments<T, P>;
}

export function handleOptions(options?: Options): Options
{
	return defaultsDeep({}, options, {
		configuration: {
			'populate--': true,
		},
	})
}

export function detailed<T extends Record<string, any>, P extends InputArgs = InputArgs>(input: P, options?: Options)
{
	options = handleOptions(options)

	if (options.filter)
	{
		input = input.filter(options.filter) as any
	}

	if (options.map)
	{
		input = input.slice().map(options.map) as any
	}

	let data = _detailed(input as string[], options) as any as DetailedArguments<T, P>;

	let { argv } = data;

	argv = {
		_: argv._,
		__: argv['--'],
		...argv,
		[SymInputArgs]: Object.freeze(input.slice()) as P,
	};

	Object.defineProperty(argv, '__', {
		get()
		{
			return this['--']
		},
	});

	data.argv = argv;

	return data
}

export function parseArgv<T extends Record<string, any>, P extends InputArgs = InputArgs>(input: P, options?: Options)
{
	return detailed<T, P>(input, options).argv
}

export default parseArgv
