const { basename, dirname, resolve } = require('path');
const browserslist = require('browserslist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const postcssPlugins = require('@wordpress/postcss-plugins-preset');
const path = require('path');
const fs = require('fs');

module.exports = (env) => {
	const isProduction = env.NODE_ENV === 'production';
	const mode = isProduction ? 'production' : 'development';
	const fromConfigRoot = (fileName) =>
		path.join(path.dirname(__dirname), 'config', fileName);

	let target = 'browserslist';
	if (!browserslist.findConfig('.')) {
		target += ':' + fromConfigRoot('.browserslistrc');
	}

	// App directory
	const appDirectory = fs.realpathSync(process.cwd());

	// Gets absolute path of file within app directory
	const resolveAppPath = (relativePath) =>
		path.resolve(appDirectory, relativePath);

	const host = process.env.HOST || 'localhost';

	const cssLoaders = [
		{ loader: MiniCSSExtractPlugin.loader },
		{
			loader: require.resolve('css-loader'),
			options: { sourceMap: !isProduction, modules: { auto: true } },
		},
		{
			loader: require.resolve('postcss-loader'),
			options: {
				postcssOptions: {
					ident: 'postcss',
					sourceMap: !isProduction,
					plugins: isProduction
						? [
								...postcssPlugins,
								require('cssnano')({
									preset: [
										'default',
										{
											discardComments: {
												removeAll: true,
											},
										},
									],
								}),
							]
						: postcssPlugins,
				},
			},
		},
	];

	return {
		mode,
		target: target,
		entry: {
			cms: './src/cms/index.js',
			cms_fullwidth: './src/cms/fullwidth.js',
			contest: './src/contest/index.js',
			contest_layout: './src/contest/scss/layout.scss',
			text2win: './src/text-to-win/index.js',
		},
		output: { filename: '[name].js', path: resolve(process.cwd(), 'dist') },
		resolve: {
			alias: {
				react: 'h',
				'react-dom': 'h',
				'react/jsx-runtime': 'h',
				'lodash-es': 'lodash',
				Utils: path.resolve(__dirname, 'src/utils'),
			},
			extensions: ['.jsx', '.ts', '.tsx', '...'],
		},
		optimization: {
			// Only concatenate modules in production, when not analyzing bundles.
			concatenateModules: isProduction,
			minimize: isProduction,
			minimizer: [
				new TerserPlugin({
					parallel: true,
					terserOptions: {
						output: { comments: /translators:/i },
						compress: { passes: 3 },
					},
					extractComments: false,
				}),
			],
		},
		module: {
			rules: [
				{
					test: /\.(j|t)sx?$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: require.resolve('babel-loader'),
						options: {
							babelrc: true,
							configFile: true,
							presets: [
								'@babel/preset-react',
								[
									'@babel/preset-env',
									{
										loose: true,
										debug: true,
										useBuiltIns: 'usage',
										corejs: require('core-js/package.json')
											.version,
									},
								],
							],
							plugins: [
								['@babel/plugin-transform-runtime'],
								[
									'@babel/plugin-transform-react-jsx',
									{ pragma: 'h', pragmaFrag: 'Fragment' },
								],
							],
						},
					},
				},
				{ test: /\.css$/, use: cssLoaders },
				{
					test: /\.(sc|sa)ss$/,
					use: [
						...cssLoaders,
						{
							loader: require.resolve('sass-loader'),
							options: { sourceMap: !isProduction },
						},
					],
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin({
				cleanAfterEveryBuildPatterns: ['!fonts/**', '!images/**'],
				// Prevent it from deleting webpack assets during builds that have
				// multiple configurations returned in the webpack config.
				cleanStaleWebpackAssets: false,
			}),
			new MiniCSSExtractPlugin({ filename: '[name].css' }),
		],
		devServer: {
			// Serve index.html as the base
			static: resolveAppPath('./'),

			// Enable compression
			compress: false,

			// Enable hot reloading
			hot: true,

			host,

			port: 3001,

			allowedHosts: 'all',
		},
	};
};
