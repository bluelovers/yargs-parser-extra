# README.md

    parse argv with default cong and return input argv

## install

```bash
yarn add yargs-parser-extra
yarn-tool add yargs-parser-extra
yt add yargs-parser-extra
```

```
import Parser from 'yargs-parser-extra';

let argv = Parser([
	'--name=meowmers', 'bare', '-cats', 'woo',
	'-h', 'awesome', '--multi=quux',
	'--key', 'value',
	'-b', '--bool', '--no-meep', '--multi=baz',
	'--', '--not-a-flag', '-', '-h', '-multi', '--', 'eek', 1, true, null
])

let { __ } = argv;

console.dir(argv)
```

```json5
{
  _: [ 'bare' ],
  __: [Getter],
  name: 'meowmers',
  c: true,
  a: true,
  t: true,
  s: 'woo',
  h: 'awesome',
  multi: [ 'quux', 'baz' ],
  key: 'value',
  b: true,
  bool: true,
  meep: false,
  '--': [
    '--not-a-flag',
    '-',
    '-h',
    '-multi',
    '--',
    'eek',
    '1',
    'true',
    'null'
  ],
  [Symbol(InputArgs)]: [
    '--name=meowmers', 'bare',
    '-cats',           'woo',
    '-h',              'awesome',
    '--multi=quux',    '--key',
    'value',           '-b',
    '--bool',          '--no-meep',
    '--multi=baz',     '--',
    '--not-a-flag',    '-',
    '-h',              '-multi',
    '--',              'eek',
    1,                 true,
    null
  ]
}
```
