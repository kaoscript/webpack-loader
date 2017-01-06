[@kaoscript/webpack-loader](https://github.com/kaoscript/webpack-loader)
=================================================================

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
![Dependencies](https://img.shields.io/david/kaoscript/webpack-loader.svg)

[kaoscript](https://github.com/kaoscript/kaoscript) loader module for [webpack](https://webpack.github.io/)

Usage
-----

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

Recommended configuration
-------------------------

### ES6 Browsers

``` javascript
{
	module: {
		loaders: [
			{
				test: /\.ks$/,
				loader: '@kaoscript/webpack-loader?target=es6'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.ks']
	}
}
```

### ES5 Browsers

``` javascript
{
	module: {
		loaders: [
			{
				test: /\.ks$/,
				loader: '@kaoscript/webpack-loader?target=es5'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.ks']
	}
}
```

License
-------

Copyright &copy; 2016 Baptiste Augrain

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).