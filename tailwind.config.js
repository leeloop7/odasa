module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        extend: {
            height: {
                128: "32rem",
                192: "48rem",
                256: "64rem",
            },
            fontFamily: {
                Open: ["Open Sans", "sans-serif"],
                Cabin: ["Cabin", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
