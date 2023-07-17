module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "script-dist": "scripts" });
  eleventyConfig.addPassthroughCopy({ "css-src": "css" });
  eleventyConfig.addPassthroughCopy({ img: "img" });
  // Return your Object options:
  eleventyConfig.addFilter("stringify", function (value) {
    return JSON.stringify(value);
  });
  eleventyConfig.addNunjucksFilter("orderSort", function (arr) {
    return arr.sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });
  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
