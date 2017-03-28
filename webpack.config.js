var path = require('path');
var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
});

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'src/lang.js'),
            path.resolve(__dirname, 'webfont.js'),
            path.resolve(__dirname, 'src/animationHandler.js'),
            path.resolve(__dirname, 'src/states/Preload.js'),
            path.resolve(__dirname, 'src/states/Menu.js'),
            path.resolve(__dirname, 'src/states/Login.js'),
            path.resolve(__dirname, 'src/states/Logout.js'),
            path.resolve(__dirname, 'src/states/Game.js'),
            path.resolve(__dirname, 'src/states/GameOver.js'),
            path.resolve(__dirname, 'src/states/Language.js'),
            path.resolve(__dirname, 'src/entites/Caracter.js'),
            path.resolve(__dirname, 'src/entites/Ennemy.js'),
            path.resolve(__dirname, 'src/entites/Map.js'),
            path.resolve(__dirname, 'src/entites/Tower.js'),
            path.resolve(__dirname, 'src/main.js'),
            path.resolve(__dirname, 'src/socketHandler.js'),
            path.resolve(__dirname, 'src/login-box.js')
        ]
    },
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    plugins: [
        definePlugin,
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        //new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.UglifyJsPlugin({
            drop_console: true,
            mangle: true,
            minimize: true,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'script-loader', include: path.join(__dirname, 'src')},
            {test: /\.css$/, loader: 'css-loader', include: path.join(__dirname, 'css')}
        ]
    }
};