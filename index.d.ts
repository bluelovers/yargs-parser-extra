/**
 * Created by user on 2020/1/19.
 */
import { Options, Arguments as _Arguments } from 'yargs-parser';
export declare const SymInputArgs: unique symbol;
export { Options };
export declare type IInputArgs = (string | number | boolean)[];
export declare type Arguments<T extends Record<string, any> = Record<string, any>, P extends IInputArgs = IInputArgs> = _Arguments & T & {
    [SymInputArgs]: Readonly<P>;
    '--'?: string[];
    __?: string[];
};
export declare function parserArgv<T extends Record<string, any>, P extends IInputArgs = IInputArgs>(input: P, options?: Options): Arguments<T, P>;
export default parserArgv;
