/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    safelist: ["theme1", "theme2", "theme3"], 
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Merriweather", "serif"],
                pacifico: ["Pacifico", "cursive"],
            },
        },
    },
    plugins: [],
}

