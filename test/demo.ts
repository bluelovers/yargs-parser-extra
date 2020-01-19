import Parser from '../index';

let argv = Parser([
	'--name=meowmers', 'bare', '-cats', 'woo',
	'-h', 'awesome', '--multi=quux',
	'--key', 'value',
	'-b', '--bool', '--no-meep', '--multi=baz',
	'--', '--not-a-flag', '-', '-h', '-multi', '--', 'eek', 1, true, null
])

let { __ } = argv;

console.dir(argv)
