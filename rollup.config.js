import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'

export default {
  external: [
    'styled-components'
  ],
  input: 'src/components/index.ts',
  output: [
    {
      format: 'cjs',
      file: `${packageJson.main}`,
      exports: 'named',
      sourcemap: false
    },
    {
      format: 'es',
      file: `${packageJson.module}`,
      exports: 'named',
      sourcemap: false
    }
  ],
  plugins: [
    resolve(),
    external(),
    commonjs({
      include: ['node_modules/**']
    }),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: true,
      tsconfigOverride: {
        exclude: ["**/*.test.tsx"]
      },
      exclude: ['node_modules', 'src/playground', 'src/**/*.test.tsx']
    }),
  ]
}
