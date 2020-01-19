/**
 * Created by user on 2020/1/19.
 */

import { Options, Arguments as _Arguments } from 'yargs-parser';
import _Parser from 'yargs-parser';
import defaultsDeep from 'lodash.defaultsdeep';

export const SymInputArgs = Symbol.for('InputArgs');
export { Options }

export type IInputArgs = (string | number | boolean)[];

export type Arguments<T extends Record<string, any> = Record<string, any>, P extends IInputArgs = IInputArgs> = _Arguments & T & {
	[SymInputArgs]: Readonly<P>,
	'--'?: string[],
	__?: string[],
}

export function parserArgv<T extends Record<string, any>, P extends IInputArgs = IInputArgs>(input: P, options?: Options)
{
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
