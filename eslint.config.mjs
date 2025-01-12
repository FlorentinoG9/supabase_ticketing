import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
      jsx: true,
      overrides: {
        'style/jsx-quotes': ['error', 'prefer-single'],
      },
    },
  },
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cva', 'cn', 'tw', 'twMerge'],
        config: 'tailwind.config.ts',
        cssFiles: [
          '**/*.css',
          '!**/node_modules',
          '!**/.*',
          '!**/dist',
          '!**/build',
        ],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [],
        classRegex: '^class(Name)?$',
      },
    },
  },
)
