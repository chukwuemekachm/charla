module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {},
  overrides: [
    {
      files: ["server/**/*.schema.ts","*/config/*.ts", "server/database/schemas/chat.schema.ts"],
      rules: {
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/interface-name-prefix": 0
      }
    }
  ]
};
