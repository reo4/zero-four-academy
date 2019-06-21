const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwindcss.config.js'),
    require('autoprefixer'),
    process.env.NODE_ENV === "production"? purgecss({
    	content: [
    	"./src/**/*.html", 
    	"./src/**/*.vue"
    	]
    }): ""
  ]
}