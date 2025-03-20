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
        },
        "telephone": "31880271",
        "email": "cs.aircon88@gmail.com",
        "priceRange": "$$"
      },
      "serviceType": ["冷氣安裝", "冷氣維修", "冷氣保養", "冷氣清洗", "大金VRV", "VRF系統", "冷氣檢查", "中央冷氣", "分體式冷氣", "窗口機"],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 22.3908,
          "longitude": 113.9725
        },
        "geoRadius": "50km"
      },
      "description": "同發冷氣工程提供專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，服務香港全區，專業可靠，價格合理。",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "HKD",
        "lowPrice": "500",
        "highPrice": "3500",
        "offerCount": "9"
      },
      "brand": {
        "@type": "Brand",
        "name": "同發冷氣工程"
      }
    });
    document.head.appendChild(script);

    return () => {
      // 组件卸载时清理
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout
      title="同發冷氣工程有限公司 | 專業冷氣保養、冷氣檢查、冷氣維修等冷氣工程服務 香港冷氣服務"
      description="同發冷氣工程提供專業冷氣安裝、冷氣維修、冷氣保養、冷氣清洗及檢查服務，大金VRV/VRF系統專家，服務香港全區。冷氣工程全包，專營各大冷氣品牌，包括大金、日立、三菱等。屯門冷氣公司，新界冷氣服務。"
    >
      <Head>
        <meta name="keywords" content="冷氣保養,冷氣檢查,檢查冷氣,VRV系統,VRF系統,大金冷氣,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣工程,冷氣清洗,冷氣機,清洗冷氣,冷氣安裝,冷氣公司,香港冷氣,空調服務,冷氣工程公司,同發冷氣,屯門冷氣,新界冷氣,商業冷氣,住宅冷氣,中央冷氣,分體式冷氣,窗口機,掛牆分體機,天花分體機" />
        <link rel="canonical" href="https://www.aircon88.com" />
        <meta property="og:url" content="https://www.aircon88.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="同發冷氣工程有限公司 | 專業冷氣安裝維修保養清洗 | 大金VRV/VRF系統專家" />
        <meta property="og:description" content="同發冷氣工程提供專業冷氣安裝、冷氣維修、冷氣保養、冷氣清洗及檢查服務，大金VRV/VRF系統專家，服務香港全區。" />
        <meta property="og:image" content="https://www.aircon88.com/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.aircon88.com/logo.jpeg" />
        <meta name="twitter:title" content="同發冷氣工程有限公司 | 專業冷氣服務" />
        <meta name="twitter:description" content="專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家" />
        <meta name="geo.region" content="HK" />
        <meta name="geo.placename" content="Tuen Mun" />
        <meta name="geo.position" content="22.3908;113.9725" />
        <meta name="ICBM" content="22.3908, 113.9725" />
      </Head>
      <Hero />
      <ClientShowcase />
      <PricingCTA />
      <BrandShowcase />
    </Layout>
  );
};

export default Home;
