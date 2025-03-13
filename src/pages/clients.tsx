import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

// 客戶數據
const allClients = [
  {
    id: 1,
    name: '保良局',
    description: '為多間保良局轄下機構清洗冷氣',
    image: '/clients/client-1.jpg',
    details: `為轄下機構提供專業冷氣清洗服務：

• 保良局盧邱玉霜耆暉中心
• 保良局就業服務中心(藍田)
• 保良局蝴蝶灣幼稚園暨幼兒園
• 保良局嚴重肢體傷殘人士綜合支援服務(新界區)
• 保良局唐楚男(瀝源)幼稚園暨幼兒園
• 保良局李俊駒伉儷幼稚園暨幼兒園
• 保良局石硤尾職業服務中心`
  },
  {
    id: 2,
    name: '山崎麵包 Yamazaki Bakery',
    description: '旗下店舖冷氣清洗、維修及安裝',
    image: '/clients/client-2.jpg',
    details: `為多間分店提供全面冷氣服務：

【安裝服務】
• 富景花園分店 - 安裝天花機
• 康德閣地下分店 - 安裝天花機

【清洗服務】
• 都會駅商場分店
• 新港城中心分店
• 上水匯分店
• 西九龍中心分店`
  },
  {
    id: 3,
    name: '美味棧',
    description: '龍華樓地下鋪及成基商業中心地下安裝天花機',
    image: '/clients/client-3.jpg',
    details: `為餐飲門店提供專業冷氣安裝：

• 龍華樓地下鋪 - 安裝天花機 1部
• 成基商業中心地下 - 安裝天花機 1部`
  },
  {
    id: 4,
    name: '順豐速運',
    description: '為順豐速運香港安裝櫃機及維修冷氣',
    image: '/clients/client-4.jpg',
    details: `為物流中心提供專業冷氣工程：

• 安裝整體式水源熱泵機組
• 更換及維修VRV系統機組`
  },
  {
    id: 5,
    name: '華潤物流(潤發倉碼)有限公司',
    description: '倉庫冷氣系統安裝及維護',
    image: '/clients/client-5.jpg',
    details: `提供定期冷氣系統保養及清潔服務：

• 天花機 - 15部
• VRV室內機 - 14部
• VRV室外機 - 3部`
  },
  {
    id: 6,
    name: '浸信會愛羣社會服務處',
    description: '多間服務中心冷氣清洗及維修',
    image: '/clients/client-6.jpg',
    details: `為轄下多個機構提供全面冷氣服務：

• 大埔浸信會區張秀芳長者鄰舍中心 - 維修冷氣保溫喉管
• 總部9樓 - 安裝天花機 2部
• 總部6樓 - 安裝分體機 5部

以及其他服務中心的冷氣系統維護`
  },
  {
    id: 7,
    name: '俊和',
    description: '辦公室及工地冷氣系統安裝及維護',
    image: '/clients/client-7.jpg',
    details: `為辦公室及工地提供專業冷氣服務：

• 安達臣道石礦場地盤 - 清洗、檢查、維修及安裝冷氣
• 徑口路16號 - 清洗冷氣 38部

以及其他地點的冷氣系統維護`
  },
  {
    id: 8,
    name: 'Harvey Nichols Department',
    description: '百貨公司冷氣系統維護及優化',
    image: '/clients/client-8.jpg',
    details: `為多間百貨分店提供專業冷氣清洗服務：

• Bank Centre Mall - FCU 67部、分體機 2部
• The One - FCU 52部、STU 1部
• Central - FCU 183部、風櫃 2部
• Langham Place - FCU 80部、AHU 2部、STU 3部

以及其他分店的冷氣系統維護`
  },
  {
    id: 9,
    name: '天喜堂藥廠有限公司',
    description: '藥廠冷氣系統安裝及維護',
    image: '/clients/client-9.jpg',
    details: `為藥品生產工廠提供專業冷氣安裝及維護服務，確保符合藥品生產環境標準`
  },
  {
    id: 10,
    name: '匡智會',
    description: '多間服務中心冷氣清洗及維修',
    image: '/clients/client-10.jpg',
    details: `為轄下多個機構提供專業冷氣服務：

• 匡智屯門晨崗學校 - 安裝大金5匹定頻淨冷風喉機 3組
• 匡智賽馬會松嶺日間活動及住宿大樓 - 清洗冷氣機組 230部
• 匡智瑞財宿舍 - 清洗冷氣機組 30部
• 匡智松嶺綜合職業訓練中心 - 清洗冷氣機組 117部`
  },
  {
    id: 11,
    name: '伊斯蘭鮑伯濤紀念小學',
    description: '學校冷氣系統安裝及維護',
    image: '/clients/client-11.jpg',
    details: `為學校提供全面冷氣解決方案：

• 專業冷氣系統安裝
• 定期清洗及維護服務
• 故障檢修及零件更換`
  }
];

const ClientsPage: NextPage = () => {
  const [selectedClient, setSelectedClient] = useState<typeof allClients[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openClientModal = (client: typeof allClients[0], e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedClient(client);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <Head>
        <title>我們的客戶 - 同發冷氣工程有限公司</title>
        <meta name="description" content="同發冷氣工程有限公司為眾多知名企業及機構提供專業冷氣工程服務，包括保良局、山崎麵包、順豐速運等。" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/clients-banner.png"
            alt="同發冷氣工程客戶案例"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">我們的客戶</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            多年來，我們為眾多知名企業及機構提供專業冷氣工程服務，贏得客戶的信任與好評
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      {/* 客戶列表部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">合作客戶</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們的客戶來自各行各業，包括政府機構、教育機構、餐飲業、物流業等，我們為每一位客戶提供專業的冷氣工程服務
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allClients.map((client) => (
              <div key={client.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{client.name}</h3>
                  <p className="mt-2 text-gray-600 min-h-[3rem]">{client.description}</p>
                  <a 
                    href="#"
                    onClick={(e) => openClientModal(client, e)}
                    className="mt-4 inline-flex items-center text-secondary hover:text-primary font-semibold py-1 border-b border-secondary hover:border-primary transition-colors"
                  >
                    查看詳情
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作優勢部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">與我們合作的優勢</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              選擇同發冷氣工程有限公司，您將獲得專業、可靠、高效的冷氣工程服務
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
              <h3 className="text-xl font-semibold mb-2">專業團隊</h3>
              <p className="text-gray-600">擁有多年經驗的技術團隊，持有相關專業資格證書，確保服務質素</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">快速響應</h3>
              <p className="text-gray-600">特設冷氣工程車隊，快速響應客戶需求，提供及時服務</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">合理收費</h3>
              <p className="text-gray-600">明碼實價，絕不含隱藏收費，提供詳細報價和服務說明</p>
            </div>
          </div>
        </div>
      </section>

      {/* 客戶詳情彈窗 */}
      {showModal && selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 animate-fadeIn overflow-y-auto max-h-[90vh]">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedClient.name}</h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 whitespace-pre-line">
                {selectedClient.details}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ClientsPage; 