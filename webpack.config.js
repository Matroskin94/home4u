const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'App.jsx'),
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public')
    },
    mode: 'development'
};
