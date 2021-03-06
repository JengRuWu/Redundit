module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:react/recommended",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: [
      "react",
    ],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "react/prop-types": "off",
    },
  };