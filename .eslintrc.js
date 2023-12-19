module.exports = {
	root: true,
	env: {
		browser: true,
    es2022: true,
		node: true,
	},
	extends: [
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debug": process.env.NODE_ENV === "production" ? "error" : "off",
	},
};
