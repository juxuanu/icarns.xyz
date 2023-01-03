import { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import "../styles/global.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
