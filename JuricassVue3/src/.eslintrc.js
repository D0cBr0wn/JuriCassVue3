// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    env: {
      browser: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: ['plugin:vue/recommended', '@vue/standard'],
    // required to lint *.vue files
    plugins: ['html'],
    // add your custom rules here
  
    rules: {
      'no-console':
        process.env.NODE_ENV === 'production'
          ? ['error', { allow: ['error'] }]
          : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-var': 'error',
      'no-new-object': 'error',
      'no-new-func': 'error',
      'no-array-constructor': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'no-eval': 'error',
      'no-iterator': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'spaced-comment': 'error',
      'prefer-arrow-callback': 'error',
      'no-new-wrappers': 'error',
      radix: 'error',
      camelcase: 'off',
      'new-cap': 'off',
      'no-loop-func': 'error',
      'func-style': 'error',
      'no-param-reassign': 'error',
      'prefer-promise-reject-errors': 'warn',
      'prefer-spread': 'error',
      'array-callback-return': ['error', { allowImplicit: true }],
      'prefer-destructuring': [
        'error',
        { array: true, object: true },
        { enforceForRenamedProperties: false }
      ],
      'vue/script-setup-uses-vars': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'prettier/prettier': ['error', { usePrettierrc: true, endOfLine: 'auto' }]
    }
  }
  