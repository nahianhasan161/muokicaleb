/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        /* "2xl": "1536px", */
        "2xl": "2150px",
      },
      backgroundImage: {
        border: `url('public/icons/borderRounded.svg')`,
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        blue: {
          lite: "#070773",
        },
        indigo: {
          primary: "#635BFF",
          deep: "#642EFF",
        },
        slate: {
          primary: "#6B7194",
          secondary: "#A1A1AA",
          lite: "#F6F9FC",
          lite__100: "#D6D6E3",
          "lite-sm": "#FAFCFD",
          deep: "#D6D6E3",
          pure: "#52525B",
          border: "#D2D2E3",
          "bg-content": "#FDFDFE",
        },
        black: {
          lite: "#52525B",
          primary: "#27272A",
          dark_bg: "#0A2540",
          dark_400: "#0B1720",
          dark_500: "#0D1116",
          dark_600: "#161B22",
          dark_700: "#11243F",
        },
        fontFamily: {
          Roboto: ["Roboto"],
          Big_Shoulders_Display: ["Big Shoulders Display"],
          Space_Grotesk: ["Space Grotesk"],
          Helvetica_Neue: ["Helvetica Neue"],
        },
      },
      boxShadow: {
        border:
          "0px 0.2222222238779068px 1.2986111640930176px 0px rgba(0, 0, 0, 0.00), 0px 0.9777777791023254px 2.6888887882232666px 0px rgba(0, 0, 0, 0.01), 0px 2.4000000953674316px 5.362500190734863px 0px rgba(0, 0, 0, 0.01), 0px 4.622222423553467px 10.51111125946045px 0px rgba(0, 0, 0, 0.01), 0px 7.777777671813965px 19.32638931274414px 0px rgba(0, 0, 0, 0.02), 0px 12px 33px 0px rgba(0, 0, 0, 0.02)",
        dark_input: "23px 23px 64px -24px rgba(57, 59, 106, 0.18)",
        card_glass:
          "0px 0.22222px 1.29861px 0px rgba(0, 0, 0, 0.00), 0px 0.97778px 2.68889px 0px rgba(0, 0, 0, 0.01), 0px 2.4px 5.3625px 0px rgba(0, 0, 0, 0.01), 0px 4.62222px 10.51111px 0px rgba(0, 0, 0, 0.01), 0px 7.77778px 19.32639px 0px rgba(0, 0, 0, 0.02), 0px 12px 33px 0px rgba(0, 0, 0, 0.02)",
      },
      /*  gradientColorStops{
        color:"linear-gradient(277deg, #C8BDFF 0%, #B5EDFF 0%, #00CBFF 16.64%, #6721FF 64.25%, #C8BDFF 100%)"
      } */
    },
  },
  plugins: [],
};
