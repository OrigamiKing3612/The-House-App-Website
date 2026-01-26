// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
    features: {
        tooling: true,
        stylistic: {
            commaDangle: 'never',
            braceStyle: '1tbs'
        }
    }
}, {
    rules: {
    }
}).overrideRules({
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'indent': 'off',
    'vue/html-indent': ['error', 4],
    '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
    'vue/no-mutating-props': 'error',
    'vue/no-export-in-script-setup': 'error',
    // 'vue/max-attributes-per-line': ['error', { singleline: 99, multiline: 99 }],
    'vue/max-attributes-per-line': 'off',
    'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore',
        multiline: 'ignore'
    }],
    '@stylistic/max-statements-per-line': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/require-toggle-inside-transition': 'off' // is this needed
})

