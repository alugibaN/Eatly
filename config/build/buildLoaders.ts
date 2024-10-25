import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:5]",
            namedExport: false, //  Отключает  namedExport // Благодоря этим двум строчкам подключается модуль в новых версиях css loader
            exportLocalsConvention: "as-is", //  Сохраняет  исходные  имена  классов
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {  // Так же можно в регулярку добавить шрифты для обработки 
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: "file-loader",
        options: {},
      },
    ],
  };


  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
