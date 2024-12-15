import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoaders";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.m?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fileLoader = {
    // Так же можно в регулярку добавить шрифты для обработки
        test: /\.(png|jpg|gif|ttf|woff2)$/,
        type: 'asset/resource',
    };

    return [cssLoader, babelLoader, typescriptLoader, svgLoader, fileLoader];
}
