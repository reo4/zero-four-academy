const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    // process.env.NODE_ENV === "production"? purgecss({
    // 	content: [
	   //  	"./src/**/*.html", 
	   //  	"./src/**/*.vue",
    // 	],
    // 	whitelist: ["html", "body"],
    // 	whitelistPatterns: [/^children/ , /^first-child/ , /^last-child/ , /^bg/ , /^bottom_heading/ , /^slick/ , /^draggable/]
    // }): ""
  ]
}