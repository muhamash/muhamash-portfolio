import { Arsenal_SC, Edu_NSW_ACT_Foundation, Nunito, Outfit, Source_Code_Pro } from "next/font/google";

export const arsenalSC = Arsenal_SC( {
  weight: [ "400", "700" ],
  subsets: [ "latin" ],
  display: "swap",
  variable: "--arsenal-sc",
} );

export const nunito = Nunito({
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nunito",
});

export const outfit = Outfit( {
  weight: [ "200", "400", "500", "600", "700", "800", "900" ],
  subsets: [ "latin" ],
  display: "swap",
  variable: "--outfit",
} );

export const eduFont = Edu_NSW_ACT_Foundation({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--edu-font",
});

export const codeFont = Source_Code_Pro( {
  weight: [ "400", "500", "600", "700", "800" ],
  subsets: [ "latin" ],
  display: "swap",
  variable: "--code-font",
} );