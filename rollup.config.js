import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify';

// rollup.config.js
export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
		sourcemap: true,
	},
	plugins: [
		resolve({
			preferBuiltins: true
		}),
		commonjs(),
		minify({
			comments: false,
		}),
	],
};
