module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-for"),
    require("postcss-math"),
    require("postcss-math"),
    require("postcss-cssnext")({
      features: {
        customProperties: {
          preserve: true,
          warnings: false,
        },
      },
    }),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
};
