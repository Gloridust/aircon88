import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-HK">
      <Head>
        <meta name="description" content="同發冷氣工程有限公司 - 專業冷氣安裝、維修及保養服務，服務香港全區" />
        <meta name="keywords" content="冷氣工程,冷氣安裝,冷氣維修,冷氣保養,香港冷氣,空調服務,冷氣工程公司,同發冷氣" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/png" />
        
        {/* 结构化数据标记 - 本地企业 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "同發冷氣工程有限公司",
              "image": "https://www.aircon88.com/logo.png",
              "@id": "https://www.aircon88.com",
              "url": "https://www.aircon88.com",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/aircon88",
                "https://www.instagram.com/aircon88"
              ]
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
