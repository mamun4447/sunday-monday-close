/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f4af6e",

          secondary: "#1c87c9",

          accent: "#ef46f4",

          neutral: "#181424",

          "base-100": "#3A3F59",

          info: "#9BDEF8",

          success: "#24B26D",

          warning: "#E0A210",

          error: "#E02444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
