const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

module.exports = (env) => {
    if (env.prod) {
        return merge(commonConfig, prodConfig)
    }
    return merge(commonConfig, devConfig)

}