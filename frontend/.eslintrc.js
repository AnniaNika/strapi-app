module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
  },
};
