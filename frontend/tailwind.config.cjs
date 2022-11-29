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
            },
            boxShadow: {
                "topShadow2xl": "0px -10px 25px 0px rgba(0,0,0,0.15)"
            }
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],

}
