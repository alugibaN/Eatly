import webpack from "webpack";

export function buildLoader(): webpack.RuleSetRule[] {

const cssLoader =  {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
};

  const typescriptLoader = {
    test: /\.tsx?$/, // это регулярное выражение будет обрабатывать как ts так tsx
    use: "ts-loader",
    exclude: /node_module/, // исключаем папку node_module
  };

  return [
    typescriptLoader,
    cssLoader
  ];
}
