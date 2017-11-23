const { ifAnyDep } = require('../utils');
const prettierConfig = require('./prettierrc');

module.exports = {
  extends: [
    require.resolve('eslint-config-kentcdodds/jest'),
    ifAnyDep(
      'react',
      require.resolve('eslint-config-airbnb'),
      require.resolve('eslint-config-airbnb-base'),
    ),
    require.resolve('eslint-config-prettier'),
  ].filter(Boolean),
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
