/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};