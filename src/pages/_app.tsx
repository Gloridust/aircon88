import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_HK } from "next/font/google";
import { createContext, useState, useEffect, useContext } from "react";
import Head from "next/head";
import Script from 'next/script';
import { useRouter } from 'next/router';

// 添加Google Analytics的全局类型定义
declare global {
  interface Window {
    gtag: (command: string, target: string, config?: object) => void;
  }
}

// 使用繁体中文字体
const notoSansHK = Noto_Sans_HK({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-hk",
});

// 創建聯繫模態框上下文
interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useContactModal = () => useContext(ContactModalContext);

export default function App({ Component, pageProps }: AppProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const router = useRouter();

  // Google Analytics页面跟踪
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className={`${notoSansHK.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Google Analytics 代码 */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <ContactModalContext.Provider
        value={{
          isOpen: isContactModalOpen,
          openModal: openContactModal,
          closeModal: closeContactModal,
        }}
      >
        <Component {...pageProps} />
      </ContactModalContext.Provider>
    </div>
  );
}
