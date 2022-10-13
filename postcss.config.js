module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-for"),
    require("postcss-math"),
    require("postcss-math"),
    require("postcss-cssnext"),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
};
