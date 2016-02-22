var path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/js/select-picker.tsx')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/assets/',
        library: 'ReactSelectPicker',
        libraryTarget: 'umd'
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    module: {
      loaders: [
        {
           test: /\.ts(x?)$/,
           loaders: ['babel', 'ts'],
           exclude: /(node_modules|bower_components)/
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url?limit=150000'
        },
        {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }
      ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './node_modules')]
    },
    resolve: {
       extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
       alias: {
           'bootstrap-select/js': 'bootstrap-select/js/bootstrap-select.js',
           'bootstrap-select/css': 'bootstrap-select/sass/bootstrap-select.scss'
       }
    }
};
