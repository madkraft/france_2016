var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './app/client.js',

    devServer: {
        contentBase: 'app'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css!autoprefixer'
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style!css!autoprefixer!stylus'
            },
            {
                test: /\.jade$/,
                exclude: /node_modules/,
                loader: 'jade'
            }
        ]
    },
    output: {
        path: __dirname + '/app',
        filename: 'client.min.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
