module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'default-param-last': 'warn',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': ['error', 'prefer-single'],
        'linebreak-style': 'off',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true,
                },
                ObjectPattern: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true,
                },
                ImportDeclaration: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true,
                },
                ExportDeclaration: {
                    minProperties: 6,
                    multiline: true,
                    consistent: true,
                },
            },
        ],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-array-index-key': 'warn',
        'react/prop-types': 'off',
    },
//   settings: {
//     'import/resolver': {
//       node: {
//         paths: ['src'],
//       },
//     },
//   },
};
