import antfu from '@antfu/eslint-config'

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
)
