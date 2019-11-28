module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // don't require .vue extension when importing    
        'import/extensions': ['error', 'always', { js: 'never', vue: 'never' }],
        'linebreak-style': [0, 'error', 'windows'],
        'indent': ["off", 2],
        'semi': ['off', 'always'],
        "quotes": ['off', "always"],
        'comma-dangle': ['off', 'always'],
        "max-len": ['off', 'always'],
        'no-trailing-spaces': ['off', 'always'],
        'no-param-reassign': ['off', 'always'],
        'import/prefer-default-export': 0,
        'arrow-parens': 0,
        'no-use-before-define': 0,
        'no-param-reassign': 0,
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // 'no-param-reassign': ['error', {
        //   props: true,
        //   ignorePropertyModificationsFor: [
        //     'state', // for vuex state
        //     'acc',
        // for reduce accumulators
        //     'e'
        // for e.returnvalue
        //   ]    // }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', { optionalDependencies: ['test/unit/index.js'] }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
