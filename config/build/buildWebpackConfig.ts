import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoader } from "./buildLoader";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration{
  const {paths, mode, isDev} = options
return {
  mode,
  entry: paths.entry, //откуда будет осуществляться сборка с какого файла 
  output:{
    filename: '[name].[contenthash].js',
    path: paths.build, // сборка для выгрузки 
    clean:true, // после каждой сборки очщает build 
  },
  plugins: buildPlugins(options),
  module:{
    rules: buildLoader(),     // обработка файлы который выходят за рамки js
  },
  resolve: buildResolve(),
  devtool: isDev ? 'source-map': undefined, // При объединение кода в одном из файле может быть ошибка и при сборке все они объеденятся в один файл и чтобы можно было понять из какого файла добавилась ошибка добавляется этот файл
  devServer: isDev? buildDevServer(options) : undefined // Благодоря дев серверу можно кажэдый раз не перезапускать приложение после внесения изменений 
}
}