import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


export default {
    input: 'src/index.js',
    output: {
        dir: 'dist/',
        format: 'es',
        sourcemap: true,
    },
    plugins: [
        peerDepsExternal(),
        nodeResolve({
            extensions: ['.js', '.jsx'],
        }),
        babel({
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        commonjs(),
    ],
};