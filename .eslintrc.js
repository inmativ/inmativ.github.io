module.exports = {
  root: true,
  ignorePatterns: [
    'projects/**/*'
  ],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    project: ['tsconfig.app.json']
  },
  plugins: ['rxjs'],
  overrides: [
    {
      files: ['*.js'],
      'extends': [
        'eslint:recommended',
      ],
      rules: {
        'quotes': ['error', 'single'],
      }
    },
    {
      files: ['*.ts'],
      'extends': [
        'eslint:recommended',
        '.eslint-config',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
    },
    {
      'files': [
        '*.html'
      ],
      'extends': [
        'plugin:@angular-eslint/template/recommended'
      ],
    }
  ],
}
