import localFont from "next/font/local";

/**
 * Local faces from /FONTS.
 * Carmela is a single-weight Hebrew text face — do not bold it.
 * Yehuda CLM is the display face: Light for titles, Bold where weight 700 is set.
 * It has Hebrew, digits, and punctuation, and no Latin letters.
 */
export const carmela = localFont({
  src: "../FONTS/Carmela/Carmela_Webfont/Fonts/carmela.woff",
  variable: "--font-carmela",
  display: "swap",
  weight: "400",
  adjustFontFallback: false,
});

export const yehuda = localFont({
  src: [
    {
      path: "../FONTS/yehuda/yehuda/yehudaclm-light-webfont.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../FONTS/yehuda/yehuda/yehudaclm-bold-webfont.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-yehuda",
  display: "swap",
  adjustFontFallback: false,
});
