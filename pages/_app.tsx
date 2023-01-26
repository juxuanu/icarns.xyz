import { AppProps } from "next/app";
import { Montserrat, Zilla_Slab } from "@next/font/google";
import "../styles/global.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-zilla-slab",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${zillaSlab.variable}`}>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  );
}
