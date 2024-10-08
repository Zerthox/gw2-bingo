module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        node: true
    },
    plugins: [
        "@typescript-eslint",
        "node",
        "import",
        "react",
        "react-hooks"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "google"
    ],
    rules: {
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "max-len": "off",
        "quotes": ["error", "double"],
        "no-multiple-empty-lines": ["error", {max: 1}],
        "operator-linebreak": ["error", "before"],
        "unused-vars": "off",
        "require-jsdoc": "off",
        "valid-jsdoc": "off",
        "import/extensions": ["error", {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
            scss: "always",
            json: "always"
        }],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error"
    }
};
