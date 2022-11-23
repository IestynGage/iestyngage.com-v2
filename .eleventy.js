module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy({"./src/robots/robots.txt":"robots.txt"});

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
