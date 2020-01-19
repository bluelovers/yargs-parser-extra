import Parser, { detailed } from '../index';

let argv = detailed([
	'--name=meowmers', 'bare', '-cats', 'woo',
	'-h', 'awesome', '--multi=quux',
	'--key', 'value',
	'-b', '--bool', '--no-meep', '--multi=baz',
	'--', '--not-a-flag', '-', '-h', '-multi', '--', 'eek', 1, true, null
])

console.dir(argv)
