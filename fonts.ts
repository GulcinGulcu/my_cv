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
    {
      src: "/inter/static/Inter_18pt-Medium.ttf",
      fontWeight: "medium",
    },
    {
      src: "/inter/static/Inter_24pt-Regular.ttf",
      fontWeight: "semibold",
    },
     {
      src: "/inter/static/Inter_28pt-LightItalic.ttf",
      fontWeight: 300,  
      fontStyle: "italic",
    },
  ],
});
