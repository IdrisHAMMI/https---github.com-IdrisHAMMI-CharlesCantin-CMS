module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/filter_function.js');
  eleventyConfig.addPassthroughCopy('./src/assets');

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
} 