var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var srcDir = path.resolve(__dirname, '../src')
var entries = utils.getEntries(srcDir + '/views/**/*.js')
var libs = path.resolve(__dirname, '../static/js/lib')
//entries['flexible'] = path.resolve(__dirname, libs+'/flexible/flexible.js')
var autoprefixer = require('autoprefixer')
var autoprefixerConf = autoprefixer({ browsers: ['last 2 versions','Android >= 4.0','iOS >= 6'] });
//vux
const vuxLoader = require('vux-loader')
 //= originalConfig; // 原来的 module.exports 代码赋值给变量 webpackConfig


const webpackConfig = {
  entry : entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      // {
      //   test: /\.(css|scss)$/,
      //   loader: "style!css!postcss!sass"
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  //postcss: [autoprefixerConf],
  // vue: {
  //   // .vue 中的样式处理
  //   //loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
  //   postcss: [autoprefixerConf]
  // },
  plugins: [
  ]
}
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
      {name:'vux-ui'},
      {
        name: 'duplicate-style',
        events: {
          done: function () {
            console.log('done!')
          }
        }
      },
      // {
      //   name: 'less-theme',
      //   path: 'src/assets/less/theme.less'
      // }
  ]
});
var pages = utils.getEntries('./src/views/**/*.html',1);

for (var pathname in pages) {
  // 生成html相关配置
  var conf = {
    filename: pathname + '.html', // html文件输出路径
    template: pages[pathname],   // 模板路径
    inject: true,                // js插入位置
    minify: {
      //压缩设置
      //removeComments: true,
      //collapseWhitespace: true,
      //removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  };
  pathname = pathname.split("/")[1];//去掉views
  if (pathname in module.exports.entry) {
    conf.inject = 'body';
    //如果每个html没有进入这里的话，那么全部js将会插入html
   // conf.chunks = ['flexible', pathname, 'vendor', 'manifest'],
    conf.chunks = [ pathname, 'vendor', 'manifest'],
      conf.hash = true;
  }
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
