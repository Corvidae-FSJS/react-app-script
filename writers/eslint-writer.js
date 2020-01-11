const { writeJSON } = require('./writer');

const createEslint = path => {
  const eslint = {
    'parserOptions': {
      'ecmaVersion': 9,
      'sourceType': 'module'
    },
    'parser': 'babel-eslint',
    'env': {
      'es6': true,
      'browser': true,
      'jest': true
    },
    'plugins': [
      'babel',
      'react'
    ],
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    'rules': {
      'no-console': 'warn',
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1
        }
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ],
      'space-in-parens': [
        'error'
      ],
      'space-infix-ops': 'error',
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'comma-spacing': 'error',
      'space-before-function-paren': [
        'error',
        'never'
      ],
      'eol-last': [
        'error',
        'always'
      ],
      'keyword-spacing': [
        'error',
        {
          'before': true,
          'after': true,
          'overrides': {
            'do': {
              'after': false
            },
            'for': {
              'after': false
            },
            'if': {
              'after': false
            },
            'switch': {
              'after': false
            },
            'while': {
              'after': false
            },
            'catch': {
              'after': false
            }
          }
        }
      ],
      'array-bracket-spacing': 'error',
      'babel/no-invalid-this': 1,
      'babel/semi': 0
    }
  };



  writeJSON(path + '../src/.eslintrc', eslint);
};

module.exports = createEslint;