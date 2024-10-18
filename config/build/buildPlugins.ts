import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[]{
  return [
    new HtmlWebpackPlugin ({
    template: paths.html,
  }
  ), // для сборки html файлов 
  new webpack.ProgressPlugin(), // показывает при сборке сколько еще осталось до конца сборки 
  new MiniCssExtractPlugin({
   filename: 'css/[name].]conten' 
  })
  ]
} 