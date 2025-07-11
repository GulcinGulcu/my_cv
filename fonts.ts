import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "/inter/static/Inter_24pt-Light.ttf",
      fontWeight: "normal",
    },
    {
      src: "/inter/static/Inter_28pt-SemiBold.ttf",
      fontWeight: "bold",
    },
  ],
});
