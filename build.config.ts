import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
  /* https://github.com/unjs/unbuild/issues/112#issuecomment-1331769536 */
  hooks: {
    'rollup:dts:options'(_ctx, options) {
      if (Array.isArray(options.plugins)) {
        const esbuildPlugin = options.plugins.find(
          // rome-ignore lint/suspicious/noExplicitAny: <explanation>
          (p) => (p as any).name === 'esbuild'
        )
        // rome-ignore lint/suspicious/noExplicitAny: <explanation>
        ;(esbuildPlugin as any).renderChunk = () => null
      }
    },
  },
})
