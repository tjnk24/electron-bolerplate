module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
          'vars': 'all',
          'args': 'all',
          'varsIgnorePattern': '^_',
          'argsIgnorePattern': '^_',
          'ignoreRestSiblings': true,
      },
    ],
  },
};
