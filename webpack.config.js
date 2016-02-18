var path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/js/select-picker.tsx')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/assets/'
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
            test: require.resolve('jquery'),
            loader: 'expose?$!expose?jQuery'
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
           'bootstrap/js': 'bootstrap-sass/assets/javascripts/bootstrap.js',
           'bootstrap/css': 'bootstrap-sass/assets/stylesheets/_bootstrap.scss',
           'bootstrap-select/js': 'bootstrap-select/js/bootstrap-select.js',
           'bootstrap-select/css': 'bootstrap-select/sass/bootstrap-select.scss'
       }
    }
};
