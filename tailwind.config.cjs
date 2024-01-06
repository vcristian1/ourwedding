/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "main": "url('./assets/main.svg')",
        "mainmobile": "url('./assets/mainmobile.svg')",
        "mainmobiles8": "url('./assets/mainmobileS8.svg')",
        "mainipad": "url('./assets/mainipad.svg')",
        "mainipadair": "url('./assets/mainipadair.svg')",
        "mainipadpro": "url('./assets/mainipadpro.svg')",
        "mainsp7": "url('./assets/mainsp7.svg')",
        "mainspduo": "url('./assets/mainspduo.svg')",
        "maingalaxyfold": "url('./assets/maingalaxyfold.svg')",
        "maindell": "url('./assets/maindell.svg')",
        "mainhp": "url('./assets/mainhp.svg')",
        "mainmacbookpro": "url('./assets/mainmacbookpro.svg')"


      }),
      fontFamily: {
        cenzit: ["Cenzit"],
  
      },
      content: {
      },
    },
    screens: {
      gfold: "280px",
      gs8: "360px",
      xs: "370px",
      ip12: "390px",
      pix7: "412px",
      xr: "414px",
      ip14: "430px",
      spduo: "540px",
      sm: "768px",
      ipa: "820px",
      sp7: "912px",
      ipp: "1024px",
      md: "1060px",
      mbpro: "1280px",
      lg: "1405px",
      del: "1519px",
      xlg: "1905px",
      // imacretina21: "2048px",
      // imacretina: "2240px",
      // imacretina2016: "2560px",
      // imacpro: "3200px",
    },
  },
  plugins: [],
};
