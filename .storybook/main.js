const path = require('path');

module.exports = {
    "stories": [
        "../resources/js/**/*.stories.@(js|jsx|ts|tsx|mdx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-vite"
    },
    "features": {
        "storyStoreV7": true
    },

    async viteFinal(config, { configType }) {
        return {
            ...config,
            resolve: {
                alias: [
                    {
                        find: "@/hooks/I18n",
                        replacement: path.resolve(__dirname, '../resources/js/__mocks__/hooks/I18n.js'),
                    },
                    {
                        find: "@/hooks/Toast",
                        replacement: path.resolve(__dirname, '../resources/js/__mocks__/hooks/Toast.js'),
                    },
                    {
                        find: "@",
                        replacement: path.resolve(__dirname, '../resources/js'),
                    },
                ],
            },
        };
    },
}
