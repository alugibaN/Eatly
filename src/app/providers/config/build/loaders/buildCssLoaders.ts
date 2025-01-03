import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev:boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: "[hash:base64:5]",
                        // isDev
                        //     ? "[path][name]__[local]--[hash:base64:5]"
                        //     : "[hash:base64:5]",
                        namedExport: false, //  Отключает  namedExport // Благодоря этим двум строчкам подключается модуль в новых версиях css loader
                        exportLocalsConvention: "as-is", //  Сохраняет  исходные  имена  классов
                    },
                },
            },
            "sass-loader",
        ],
    };
}