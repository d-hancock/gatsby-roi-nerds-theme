const path = require('path');

module.exports = {
    stories: ["../src/**/*.stories.{js,jsx}"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-links",
        "@storybook/addon-storysource",
        "@storybook/addon-a11y",
        'storybook-fixtures',
        'storybook-mobile',
        'storybook-addon-performance/register',
        // '@react-theming/storybook-addon',
        'storybook-addon-paddings',
        'storybook-addon-outline',
    ],
    'presets': [
        'storybook-addon-deps/preset',
        'storybook-addon-deps/preset-explorer',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
                // Config for js and jsx files
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: require.resolve("babel-loader"),
                        options: {
                            presets: [
                                // use @babel/preset-react for JSX and env (instead of staged presets)
                                require.resolve("@babel/preset-react"),
                                require.resolve("@babel/preset-env"),
                            ],
                            plugins: [
                                // use @babel/plugin-proposal-class-properties for class arrow functions
                                require.resolve("@babel/plugin-proposal-class-properties"),
                                // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                                require.resolve("babel-plugin-remove-graphql-queries"),
                                // use babel-plugin-react-docgen to ensure PropTables still appear
                                require.resolve("babel-plugin-react-docgen"),
                            ],
                        },
                    },
                ],
                exclude: [/node_modules\/(?!(gatsby)\/)/],
            }
        );
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                            ],
                        },
                    }
                },
            ],
            include: path.resolve(__dirname, '../'),
        })

        return config;
    },
};
