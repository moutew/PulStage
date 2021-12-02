module.exports = {
    extends: '@pulsanova/react',
    parserOptions: {
        babelOptions: {
            configFile: './babel.config.js',
        },

        // - Si votre projet utilise TypeScript...
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        'require-atomic-updates': 'off',
    },
};
