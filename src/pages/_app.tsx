import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_HK } from "next/font/google";

// 使用繁体中文字体
const notoSansHK = Noto_Sans_HK({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-hk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${notoSansHK.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
