// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  rtl: true,
  theme: {
    dark: false, // Set to true for a dark theme
    themes: {
      light: {
        primary: "#2196F3",
        secondary: "#424242",
        accent: "#FF4081",
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
