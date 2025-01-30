// @ts-check

/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig & import('prettier-plugin-tailwindcss').PluginOptions} PluginConfigs */

/** @type {import('prettier').Config & PluginConfigs} */
// eslint-disable-next-line no-undef
module.exports = {
  tabWidth: 2,
  printWidth: 80,
  jsxSingleQuote: false,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  endOfLine: "auto",
  quoteProps: "preserve",

  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // #region @ianvs/prettier-plugin-sort-imports
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/", "^[.][.]/", "^[.]/"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  // #endregion @ianvs/prettier-plugin-sort-imports
};
