module.exports = {
  extends: ['./'],
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-function-named-arguments': [
      'always',
      { ignore: ['single-argument'] },
    ],
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': [
      'always',
      { ignore: ['single-argument'] },
    ],
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
    'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/no-duplicate-dollar-variables': [
      null,
      {
        ignoreInsideAtRules: ['if', 'mixin'],
      },
    ],
    'scss/no-duplicate-mixins': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
