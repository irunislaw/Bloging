/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'dabloons': "url('/image/dabloons.jpg')",
                'dabloons2' : "url('/image/dabloons2.jpg')"
            }
        },
    },
    plugins: [],

}
