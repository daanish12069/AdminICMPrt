module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/asset');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};