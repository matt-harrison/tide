/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  root: true,
  rules: {
    'prettier/prettier': [
      'warn',
      {
        bracketLine: false,
        printWidth: 120,
        quoteProps: 'consistent',
        singleAttributePerLine: true,
        singleQuote: true,
        tabWidth: 2,
        vueIndentScriptAndStyle: true,
      },
    ],
    'quote-props': ['warn', 'consistent-as-needed'],
    'quotes': ['warn', 'single'],
    'vue/attributes-order': [
      'warn',
      {
        alphabetical: true,
        // Replicates ASCII sort order w/ special characters.
        order: [
          [
            'UNIQUE', // :prop='foo'
            'ATTR_DYNAMIC', // :class='foo'
          ],
          'EVENTS', // @click='getFoo'
          [
            'ATTR_SHORTHAND_BOOL',
            'ATTR_STATIC',
            'CONDITIONALS',
            'CONTENT',
            'DEFINITION',
            'GLOBAL',
            'LIST_RENDERING',
            'OTHER_DIRECTIVES',
            'RENDER_MODIFIERS',
            'SLOT',
            'TWO_WAY_BINDING',
          ],
        ],
      },
    ],
    'vue/component-tags-order': [
      'warn',
      {
        order: ['script', 'template', 'style[scoped]', 'style:not([scoped])'],
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
          normal: 'always',
          void: 'always',
        },
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'warn',
      {
        ignores: ['pre', 'textarea'],
      },
    ],
    'vue/script-indent': ['warn', 2, { baseIndent: 1 }],
    'vue/sort-keys': ['warn', 'asc'],
  },
};
