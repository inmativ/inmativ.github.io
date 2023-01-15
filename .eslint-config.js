module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'eol-last': ['error'],
    'indent': ['error', 2],
    'key-spacing': ['error'],
    'lines-between-class-members': ['error', 'always'],
    'max-len': ['error', { code: 120, ignoreStrings: true }],
    'newline-before-return': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-rename': 'error',
    'no-whitespace-before-property': 'error',
    'object-shorthand': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'prefer-destructuring': ['error'],
    'quote-props': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],

    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      { overrides: { constructors: 'no-public' } }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/indent': ['error', 2],
    "@typescript-eslint/member-ordering": "error",
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
    ],
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error', { after: true }],

    "rxjs/no-ignored-subscription": "error",
  },
};
