// @ts-check

import pluginVue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  ...pluginVue.configs['flat/recommended'],
  {
    ignores: [
      '**/.nuxt/**',
      '**/dist/**',
      '**/node_modules/**'
    ],
    rules: {
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'prefer-const': 'error',
      // 'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'semi': ['error', 'always'],
      'vue/require-v-for-key': 'warn',
        "@typescript-eslint/ban-ts-comment": 'off',
      'vue/define-emits-declaration': 'error',
      'vue/no-mutating-props': 'error',
      'vue/no-parsing-error': 'error',
      'vue/no-export-in-script-setup': 'error',
      'vue/max-attributes-per-line': ['error', {
        "singleline": {
          "max": 999,
        },
        "multiline": {
          "max": 999,
        }
      }]
    }
  }
]);
