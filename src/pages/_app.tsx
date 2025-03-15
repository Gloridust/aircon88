import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_HK } from "next/font/google";
import { createContext, useState, useEffect, useContext } from "react";
import Head from "next/head";
import Script from 'next/script';
import { useRouter } from 'next/router';

// 添加Google Tag Manager的全局类型定义
declare global {
  interface Window {
    gtag: (command: string, target: string, config?: object) => void;
    dataLayer: Array<Record<string, unknown>>;
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

  // 頁面路由變化時通知 GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'pageview',
          page: url,
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
      
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-ND8XZG8K');
          `
        }}
      />
      
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
