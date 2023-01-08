/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fullyellow: "#fef08a",
                halfyellow: "#fef9c3",
                gradientyellow: "#ffda8a",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
