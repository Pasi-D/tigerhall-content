import localFont from "next/font/local";

const ppNeuman = localFont({
  src: [
    {
      path: "../../../public/fonts/PPNeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/PPNeueMontreal-SemiBolditalic.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/PPNeueMontreal-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/PPNeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/PPNeueMontreal-Thin.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/PPNeueMontreal-Book.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pp",
});

export const fonts = {
  ppNeuman,
};
