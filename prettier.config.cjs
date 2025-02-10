/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/base.css",
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

module.exports = config;
