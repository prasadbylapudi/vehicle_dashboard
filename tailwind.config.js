module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          200: "#eaeaea",
          300: "#d3dfed",
          400: "#c1c8d0",
          600: "#808080",
          "700_33": "#615f5f33",
        },
        white: { A700_e5: "#ffffffe5", A700_cc: "#ffffffcc", A700: "#ffffff" },
        indigo: { 50: "#ebf0f8", A700_7f: "#0000ff7f" },
        green: { 100: "#c5f0de", A700: "#00cd6d" },
        black: {
          900: "#000000",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_01": "#0c0b0b",
        },
        blue_gray: { 100: "#c1c9d1" },
        blue: { 700: "#1c6ee2", "700_cc": "#0c65e5cc" },
        red: { 100: "#fbd7dd", 600: "#e32748", A700: "#ff0000" },
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { poppins: "Poppins" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
