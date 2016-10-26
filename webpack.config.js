var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'src/lang.js'),
            path.resolve(__dirname, 'src/animationHandler.js'),
            path.resolve(__dirname, 'src/states/Preload.js'),
            path.resolve(__dirname, 'src/states/Menu.js'),
            path.resolve(__dirname, 'src/states/Game.js'),
            path.resolve(__dirname, 'src/states/GameOver.js'),
            path.resolve(__dirname, 'src/states/Language.js'),
            path.resolve(__dirname, 'src/entites/Caracter.js'),
            path.resolve(__dirname, 'src/entites/Ennemy.js'),
            path.resolve(__dirname, 'src/entites/Map.js'),
            path.resolve(__dirname, 'src/entites/Tower.js'),
            path.resolve(__dirname, 'src/main.js'),
            path.resolve(__dirname, 'src/socketHandler.js')


        ]
    },
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15, minChunkSize: 10000}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            beautify: true,
            comment: false
        })

    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'script-loader', include: path.join(__dirname, 'src') },
        ]
    }
}