# README.md

    parse argv with default cong and return input argv

## install

```bash
yarn add yargs-parser-extra
yarn-tool add yargs-parser-extra
yt add yargs-parser-extra
```

```ts
import { Options as _Options, Arguments as _Arguments } from 'yargs-parser';
export declare const SymInputArgs: unique symbol;
declare type InputArg = string | number | boolean;
export declare type InputArgs = InputArg[];
export declare type Options = _Options & {
    filter?(arg: InputArg, index: number, input: InputArgs): boolean;
    map?(arg: InputArg, index: number, input: InputArgs): string;
};
export declare type Arguments<T extends Record<string, any> = Record<string, any>, P extends InputArgs = InputArgs> = _Arguments & T & {
    [SymInputArgs]: Readonly<P>;
    '--'?: string[];
    __?: string[];
};
export declare function parserArgv<T extends Record<string, any>, P extends InputArgs = InputArgs>(input: P, options?: Options): Arguments<T, P>;
export default parserArgv;
```

```ts
import Parser from 'yargs-parser-extra/dist/bundle';
```

```ts
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
