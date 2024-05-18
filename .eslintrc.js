module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard",
        "plugin:react/recommended",
        "plugin:@next/eslint-plugin-next/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "@next/eslint-plugin-next"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        semi: [2, "always"],
        indent: [0, 4],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ],
        "multiline-ternary": [0],
        "no-new": 0
    }
};
