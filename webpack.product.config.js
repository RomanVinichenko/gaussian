module.exports = {
    output: {
        filename: 'bundle.min.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    "presets": [
                        [
                            "@babel/preset-env",
                            {
                                "useBuiltIns": "entry",
                                "corejs": "3.0.0",
                                "targets": {
                                    "chrome": "58",
                                    "ie": "11"
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    externals: {
        jquery: 'jQuery',
    }

};
