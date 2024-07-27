/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            "primary": "#272b33;",
            "secondary": "#202329;",
            "warning": "#ff9800",
			white: "#ffffff",
			black: "#000000"
        },
        extend: {},
    },
    plugins: [],
};
