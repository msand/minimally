import buble from 'rollup-plugin-buble';
import flow from 'rollup-plugin-flow';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    useStrict: false,
    sourceMap: true,
    plugins: [flow(), buble()],
    output: [
      {
        name: 'minimally',
        file: pkg.browser,
        format: 'umd',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
