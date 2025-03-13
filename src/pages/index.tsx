import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ClientShowcase from '@/components/ClientShowcase';
import PricingCTA from '@/components/PricingCTA';
import BrandShowcase from '@/components/BrandShowcase';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const Home: NextPage = () => {
  // 添加结构化数据脚本以进一步优化SEO
  useEffect(() => {
    // 页面加载时添加自定义结构化数据标记
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "同發冷氣工程服務",
      "provider": {
        "@type": "LocalBusiness",
        "name": "同發冷氣工程有限公司",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "屯門新平街2號屯門工業中心A座10樓A1室",
          "addressLocality": "屯門",
          "addressRegion": "新界",
          "addressCountry": "HK"
        }
      },
      "serviceType": ["冷氣安裝", "冷氣維修", "冷氣保養", "冷氣清洗", "大金VRV", "VRF系統", "冷氣檢查"],
      "areaServed": "香港",
      "description": "同發冷氣工程提供專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，服務香港全區，專業可靠，價格合理。"
    });
    document.head.appendChild(script);

    return () => {
      // 组件卸载时清理
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout
      title="同發冷氣工程有限公司 | 專業冷氣安裝維修保養清洗 | 大金VRV/VRF系統專家"
      description="同發冷氣工程提供專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，服務香港全區。冷氣工程全包，專營各大冷氣品牌，包括大金、日立、三菱等。"
    >
      <Head>
        <meta name="keywords" content="冷氣保養,冷氣檢查,檢查冷氣,VRV,VRF,大金,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣工程,冷氣清洗,冷氣,清洗冷氣,冷氣安裝,冷氣公司,同發冷氣,香港冷氣,空調服務" />
        <link rel="canonical" href="https://aircon88.innovisle.net" />
        <meta property="og:url" content="https://aircon88.innovisle.net" />
        <meta property="og:image" content="https://aircon88.innovisle.net/logo.png" />
        <meta name="twitter:image" content="https://aircon88.innovisle.net/logo.png" />
      </Head>
      <Hero />
      <ClientShowcase />
      <PricingCTA />
      <BrandShowcase />
    </Layout>
  );
};

export default Home;
