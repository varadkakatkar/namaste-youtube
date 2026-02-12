const path = require("path");

module.exports = {
  style: {
    postcss: {
      mode: "file",
      loaderOptions: (options, { paths }) => {
        // postcss-loader v5+ doesn't support 'ident' - use postcssOptions for config file
        const { ident, sourceMap, ...rest } = options;
        return {
          ...rest,
          ...(sourceMap !== undefined && { sourceMap }),
          postcssOptions: {
            config: path.join(paths.appPath, "postcss.config.js"),
          },
        };
      },
    },
  },
};
