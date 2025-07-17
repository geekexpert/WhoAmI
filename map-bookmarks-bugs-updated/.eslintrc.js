module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'react/prop-types': 'warn',
    'max-len': ['warn', 120],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: true },
    ],
    'no-plusplus': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
  },
};
