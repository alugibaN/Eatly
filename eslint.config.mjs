import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler"

export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: {
            "react-compiler": reactCompiler,
        },
        rules:{
            "react/jsx-indent": [2,4],
            "indent": [2,4],
            "quotes": [2, "double", { "avoidEscape": true }],
            "react/button-has-type": "error",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "no-undef": "off",
            "react-compiler/react-compiler": "error",
            "max-len": ["error", { ignoreComments:true, code: 100}]
        },
        "settings": {
            "react": {
                "version": "detect"
            }
        }
    },
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
];