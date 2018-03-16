const path = require('path');

module.exports = {
    entry: './src/App.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { 
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    mode: 'development'
};
