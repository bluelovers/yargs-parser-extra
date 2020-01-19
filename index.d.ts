/**
 * Created by user on 2020/1/19.
 */
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
