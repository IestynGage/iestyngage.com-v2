const minifier = require("html-minifier").minify;
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
require('dotenv').config()

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy({"./src/robots/robots.txt":"robots.txt"});
  eleventyConfig.addPassthroughCopy({"./src/favicon":"/"});

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addTransform("htmlmin", function(content) {
    if( process.env.build === "production" && this.outputPath && this.outputPath.endsWith(".html") ) {
      let minified = minifier(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });


  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
