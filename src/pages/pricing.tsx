import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useContactModal } from '@/pages/_app';

const PricingPage: NextPage = () => {
  const { openModal: openContactModal } = useContactModal();

  // 清洗價格數據
  const cleaningPrices = [
    {
      type: '窗口機',
      services: [
        '清洗塵網',
        '高壓藥水清洗冷氣機',
        '清洗出風扇',
        '潔淨外殼',
        '清洗去水盤',
        '通去水喉',
        '檢查溫度及機件'
      ],
      note: '( 任何匹數 )',
      price: '$550起',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p1.png'
    },
    {
      type: '掛牆分體機',
      services: [
        '清洗塵網',
        '高壓藥水清洗室內機',
        '清洗出風扇',
        '高壓藥水清洗室外機',
        '潔淨外殼',
        '清洗去水盤',
        '通去水喉',
        '檢查溫度及機件'
      ],
      note: '( 任何匹數 )',
      price: '$600起',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p2.png'
    },
    {
      type: '卡式天花分體機',
      services: [
        '清洗塵網',
        '清洗去水泵',
        '高壓藥水清洗室內機',
        '清洗出風扇',
        '高壓藥水清洗室外機',
        '潔淨外殼',
        '清洗去水盤',
        '通去水喉',
        '檢查溫度及機件'
      ],
      note: '( 任何匹數 )',
      price: '$700起',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p3.png'
    },
    {
      type: '中央冷氣',
      services: [
        '清洗塵網',
        '高壓藥水清洗冷氣機',
        '清洗出風扇',
        '潔淨外殼出入風咀',
        '清洗去水盤',
        '免費加潤滑油',
        '通去水喉',
        '檢查溫度及機件'
      ],
      note: '( 任何匹數 )',
      price: '$700起',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p4.png'
    },
    {
      type: '口琴分體機',
      services: [
        '清洗塵網',
        '高壓藥水清洗室內機',
        '清洗出風扇',
        '高壓藥水清洗室外機',
        '潔淨外殼',
        '清洗去水盤',
        '通去水喉',
        '檢查溫度及機件'
      ],
      note: '( 任何匹數 )',
      price: '$700起',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p5.png'
    },
    {
      type: '鮮風機',
      services: [
        '清洗出風扇',
        '高壓藥水清洗機',
        '免費加潤滑油',
        '檢查機件'
      ],
      note: '( 任何匹數 )',
      price: '$500起',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p6.png'
    },
    {
      type: '風閘',
      services: [
        '免費加潤滑油',
        '清洗出風扇',
        '高壓藥水清洗機',
        '檢查溫度及機件'
      ],
      note: '( 任何匹數 )',
      price: '$500起',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p7.png'
    },
    {
      type: '櫃機',
      services: [
        '清洗塵網',
        '高壓藥水清洗室內機',
        '清洗出風扇',
        '潔淨外殼',
        '清洗去水盤',
        '通去水喉',
        '檢查溫度及機件'
      ],
      note: '( 按匹數 )',
      price: '另議',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p8.png'
    },
    {
      type: '水塔',
      services: [
        '清洗去水泵',
        '免費加潤滑油',
        '清洗水盤',
        '藥水清洗水管',
        '藥水清洗散熱膠',
        '清洗出風扇',
        '檢查溫度及機件'
      ],
      note: '( 按噸數 )',
      price: '另議',
      discount: '優惠期間兩部以上享有優惠',
      image: '/pricing/p9.png'
    }
  ];

  // 檢查收費數據
  const inspectionPrices = [
    {
      types: ['窗口機', '掛牆分體機', '卡式天花分體機', '中央冷氣', '鮮風機', '風閘'],
      price: '$500',
      image: '/pricing/p10.png'
    },
    {
      types: ['水塔', '櫃機'],
      price: '$800',
      image: '/pricing/p11.png'
    },
    {
      types: ['VRV'],
      price: '$2000',
      image: '/pricing/p12.png'
    },
    {
      types: ['中央冷凍主機'],
      price: '$3500',
      image: '/pricing/p13.png'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>服務價格 - 同發冷氣工程有限公司</title>
        <meta name="description" content="同發冷氣工程有限公司提供各類型冷氣機清洗、檢查、安裝及保養服務，價格合理，服務專業。" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-banner.png"
            alt="同發冷氣工程服務價格"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">服務價格</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            我們提供透明合理的價格，讓您清楚了解各項服務收費
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      {/* 價格表格部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">清洗價格</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們提供各類型冷氣機的專業清洗服務，確保您的冷氣機運行效率和空氣質素
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          {/* 清洗價格表格 */}
          <div className="overflow-x-auto mb-16">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">冷氣類型</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">服務內容</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">價格</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cleaningPrices.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">
                      {item.type}
                      <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                      <div className="mt-3 relative w-full h-32">
                        <Image
                          src={item.image}
                          alt={`${item.type}圖片`}
                          fill
                          className="object-left object-contain"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        {item.services.map((service, i) => (
                          <li key={i}>{service}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="text-lg font-bold text-primary">{item.price}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.discount}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 檢查收費 */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">檢查收費</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              專業技術人員上門檢查冷氣機狀況，診斷問題並提供解決方案
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="overflow-x-auto mb-16">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">冷氣類型</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">價格</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inspectionPrices.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">
                      {item.types.join('、')}
                      <div className="mt-3 relative w-full h-32">
                        <Image
                          src={item.image}
                          alt={`${item.types[0]}等檢查圖片`}
                          fill
                          className="object-left object-contain"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <p className="text-lg font-bold text-primary">{item.price}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 安裝及保養收費 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-gray-50 py-4 px-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">安裝收費</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">根據不同機種、不同環境報價。</p>
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src="/pricing/p14.png"
                    alt="冷氣安裝圖片"
                    fill
                    className="object-left object-contain"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-center font-semibold text-gray-800">
                    詳情可致電或WhatsApp查詢
                  </p>
                  <div className="mt-4 text-center">
                    <button 
                      onClick={openContactModal}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-md font-semibold bg-primary text-white hover:bg-primary-dark transition-colors shadow-md"
                    >
                      立即聯繫我們
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-gray-50 py-4 px-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">保養收費</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">根據不同客戶要求，量身訂造服務內容。</p>
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src="/pricing/p15.png"
                    alt="冷氣保養圖片"
                    fill
                    className="object-left object-contain"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-center font-semibold text-gray-800">
                    詳情可致電或WhatsApp查詢
                  </p>
                  <div className="mt-4 text-center">
                    <button 
                      onClick={openContactModal}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-md font-semibold bg-primary text-white hover:bg-primary-dark transition-colors shadow-md"
                    >
                      立即聯繫我們
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服務承諾部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">我們的服務承諾</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              同發冷氣工程有限公司致力提供高質素的服務，確保客戶滿意
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">明碼實價</h3>
              <p className="text-gray-600">所有服務收費透明清晰，絕無隱藏收費，讓客戶安心選擇</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">準時服務</h3>
              <p className="text-gray-600">我們重視客戶的時間，確保按約定時間準時到達，提供高效服務</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">品質保證</h3>
              <p className="text-gray-600">專業技術團隊，使用優質材料和設備，確保服務質素達到最高標準</p>
            </div>
          </div>
        </div>
      </section>

      {/* 聯繫我們部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">需要更多價格資訊？</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            如果您對我們的服務價格有任何疑問，或需要度身訂造的報價，請隨時聯繫我們
          </p>
          <button 
            onClick={openContactModal}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg"
          >
            立即聯繫我們
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage; 