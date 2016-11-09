'use strict';
var webpack  = require('webpack');

module.exports = {
    entry: [
        './src/app.js',
    ],
    devtool: 'source-map',
    output: {
        filename: './src/bundle.js'
    },
    module : {
      loaders : [
        { test : /\.js$/, include : `${__dirname}/src`, loaders : ['babel'] }
      ]
    },
    externals: {
        'React': 'React',
        'ReactDOM': 'ReactDOM',
        '$': 'jquery'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
    /*,
    plugins: [
         new webpack.optimize.UglifyJsPlugin({
             minimze: true,
             mangle: {
                 except: ['$super', '$', 'exports', 'require']
             }
         })
    ]*/
};
