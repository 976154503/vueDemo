const path  = require('path')
module.exports = {
	mode:'production',
	entry: path.join(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname,'./dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=700']
			}
		]
	}
}