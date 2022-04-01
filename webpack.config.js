module.exports = {
    output: {
        filename: 'bundle.js',
        pathinfo: false,
    },
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],

    },
    resolve: {
        symlinks: false,
        cacheWithContext: false,
    },
    // node: {
    //     child_process: 'empty',
    //     fs: 'empty',
    //     crypto: 'empty',
    //     net: 'empty',
    //     tls: 'empty'
    // },
    // watch: true,
    optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        splitChunks: false,
    },
    externals: {
        jQuery: 'jQuery'
    },
    mode: 'development'
};
