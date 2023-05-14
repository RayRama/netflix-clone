module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      [
        "module-resolver",
        {
          alias: {
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@screens": "./src/screens",
            "@navigator": "./src/navigator",
            "@services": "./src/services",
            "@assets": "./src/assets",
            "@models": "./src/models",
            "@data": "./src/data",
            "@store": "./src/store",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg", ".svg"],
        },
      ],
    ],
  };
};
