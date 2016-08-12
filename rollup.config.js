import { rollup } from 'rollup';
import typescript from 'rollup-plugin-typescript';

export default {
    entry: 'src/test.ts',
    dest: 'dist/test.js',
    plugins: [
        typescript({
            typescript: require('typescript')
        }),
    ]
}
