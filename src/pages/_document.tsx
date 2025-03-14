import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-HK">
      <Head>
        <meta name="description" content="同發冷氣工程有限公司 - 專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，服務香港全區" />
        <meta name="keywords" content="冷氣保養,冷氣檢查,檢查冷氣,VRV,VRF,大金,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣工程,冷氣清洗,冷氣,清洗冷氣,冷氣安裝,冷氣公司,香港冷氣,空調服務,冷氣工程公司,同發冷氣" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/png" />
        <meta name="google-site-verification" content="您的Google站点验证码" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 结构化数据标记 - 本地企业 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "同發冷氣工程有限公司",
              "alternateName": "Tung Fat Air Conditioner & Engineering Co LTD",
              "image": "https://aircon88.innovisle.net/logo.jpeg",
              "@id": "https://aircon88.innovisle.net",
              "url": "https://aircon88.innovisle.net",
              "telephone": "31880271",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "屯門新平街2號屯門工業中心A座10樓A1室",
                "addressLocality": "屯門",
                "addressRegion": "新界",
                "postalCode": "",
                "addressCountry": "HK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.3908,
                "longitude": 113.9725
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "13:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/aircon88",
                "https://www.instagram.com/aircon88"
              ],
              "description": "同發冷氣工程有限公司提供專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，服務香港全區，專業可靠，價格合理。",
              "priceRange": "$$",
              "servesCuisine": "冷氣工程",
              "areaServed": "香港",
              "serviceType": ["冷氣安裝", "冷氣維修", "冷氣保養", "冷氣清洗", "冷氣檢查", "大金VRV", "VRF系統"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "冷氣服務",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "冷氣安裝"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "冷氣維修"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "冷氣保養"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "冷氣清洗"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "冷氣檢查"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "大金VRV/VRF系統"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <body className="antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
