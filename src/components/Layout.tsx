import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';
import { useContactModal } from '@/pages/_app';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = '同發冷氣工程有限公司 - 專業冷氣安裝、維修、保養、清洗及檢查服務 | 大金VRV/VRF系統專家',
  description = '同發冷氣工程有限公司提供專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，冷氣工程全包，服務香港全區，專業可靠，價格合理。'
}: LayoutProps) {
  const { isOpen, closeModal } = useContactModal();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="同發冷氣工程有限公司" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content="冷氣保養,冷氣檢查,檢查冷氣,VRV,VRF,大金,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣工程,冷氣清洗,冷氣,清洗冷氣,冷氣安裝,冷氣公司" />
        <link rel="canonical" href="https://aircon88.innovisle.net" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </>
  );
} 