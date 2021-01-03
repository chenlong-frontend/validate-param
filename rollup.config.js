import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs';
import json from 'rollup-plugin-json';
import {terser} from 'rollup-plugin-terser';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const license = `/*!
 * Released under the ISC License.
 */`

export default [{
  input: 'src/validate.ts',
  output: [
    {
      format: 'es',
      name: 'Validate',
      file: 'dist/validate.min.js',
      plugins: [terser()],
      banner: license
    }
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel(),
    typescript()
  ]
}, {
  input: 'example/index.ts',
  output: [
    {
      format: 'umd',
      name: 'example',
      file: 'dist/example.js'
    }
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      },
      preferBuiltins: true
    }),
    nodePolyfills(),
    babel(),
    commonjs(),
    json(),
    typescript()
  ]
}]