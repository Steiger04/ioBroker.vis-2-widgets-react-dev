// this file contains the configuration for the craco project
// Usage in file craco.config.js:
// module.exports = require('@iobroker/vis-2-widgets-react-dev/craco.config.js');

const CracoEsbuildPlugin = require('craco-esbuild');
const { ProvidePlugin } = require('webpack');
const cracoModuleFederation = require('craco-module-federation');

module.exports = {
    plugins: [
        { plugin: CracoEsbuildPlugin },
        {
            plugin: cracoModuleFederation,
            options: { useNamedChunkIds: true },
        }
    ],
    devServer: {
        proxy: {

        },
    },
    webpack: {
        output: {
            publicPath: 'auto',
        },
        plugins: [
            new ProvidePlugin({
                React: 'react',
            }),
        ],
        configure: webpackConfig => {
            webpackConfig.output.publicPath = 'auto';
            return webpackConfig;
        },
    },
};
