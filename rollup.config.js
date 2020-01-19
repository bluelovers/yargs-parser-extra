import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

let extraOptions = {
	external: [ 'tslib' ],
	plugins: [
		resolve({
			preferBuiltins: true,
		}),
		commonjs({
			extensions: ['.js', '.ts', ],
		}),
		minify({
			comments: false,
		}),
	],
};

// rollup.config.js
export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/bundle.js',
			format: 'cjs',
			sourcemap: true,
		},
		...extraOptions,
		plugins: [
			typescript({
				module: 'CommonJS',
				tsconfig: path.join(__dirname, 'tsconfig.json'),
				inlineSourceMap: false,
			}),
			...extraOptions.plugins,
		]
	},
//	{
//		input: 'index.ts',
//		output: {
//			file: 'dist/bundle.es.js',
//			format: 'es',
//			sourcemap: true,
//		},
//		...extraOptions,
//		plugins: [
//			typescript({
//				tsconfig: path.join(__dirname, 'tsconfig.json'),
//				inlineSourceMap: false,
//			}),
//			...extraOptions.plugins,
//		]
//	},
];
