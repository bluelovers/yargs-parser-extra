/**
 * Created by user on 2020/1/19.
 */

import { Options as _Options, Arguments as _Arguments } from 'yargs-parser';
import _Parser from 'yargs-parser';
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

export function parserArgv<T extends Record<string, any>, P extends InputArgs = InputArgs>(input: P, options?: Options)
{
	if (options && options.filter)
	{
		input = input.filter(options.filter) as any
	}

	if (options && options.map)
	{
		input = input.slice().map(options.map) as any
	}

	let argv = _Parser(input as string[], defaultsDeep({}, options, {
		configuration: {
			'populate--': true,
		},
	})) as Arguments<T, P>;

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

	return argv as Arguments<T, P>
}

export default parserArgv
