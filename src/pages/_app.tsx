import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_HK } from "next/font/google";
import { createContext, useState, useEffect, useContext } from "react";
import Head from "next/head";

// 使用繁体中文字体
const notoSansHK = Noto_Sans_HK({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-hk",
});

// 創建聯繫模態框上下文
type ContactModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    // 添加全局事件監聽器
    const handleOpenEvent = () => {
      openModal();
    };

    window.addEventListener('open-contact-modal', handleOpenEvent);

    // 清理函數
    return () => {
      window.removeEventListener('open-contact-modal', handleOpenEvent);
    };
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

// 自定義鉤子
export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${notoSansHK.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ContactModalProvider>
        <Component {...pageProps} />
      </ContactModalProvider>
    </div>
  );
}
