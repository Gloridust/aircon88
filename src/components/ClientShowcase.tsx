import Image from 'next/image';
// import Link from 'next/link';
import Button from './ui/Button';
import { useState } from 'react';

// 客户案例数据
const clients = [
  {
    id: 1,
    name: '保良局',
    description: '為多間保良局轄下機構清洗冷氣 ',
    image: '/clients/client-1.jpg',
    slug: 'po-leung-kuk',
    details: `為轄下機構清洗冷氣

保良局盧邱玉霜耆暉中心
保良局就業服務中心(藍田)
保良局蝴蝶灣幼稚園暨幼兒園
保良局嚴重肢體傷殘人士綜合支援服務(新界區)
保良局唐楚男(瀝源)幼稚園暨幼兒園
保良局李俊駒伉儷幼稚園暨幼兒園
保良局石硤尾職業服務中心`
  },
  {
    id: 2,
    name: '山崎麵包 Yamazaki Bakery',
    description: '旗下店舖冷氣清洗、維修及安裝 富景花園 - 安裝天花機 康德閣地下 -安裝天花 ',
    image: '/clients/client-2.jpg',
    slug: 'yamazaki-bakery',
    details: `旗下店舖冷氣清洗、維修及安裝

富景花園 - 安裝天花機
康德閣地下 - 安裝天花機
都會駅商場 - 清洗冷氣
新港城中心 - 清洗冷氣
上水匯 - 清洗冷氣
西九龍中心 - 清洗冷氣`
  },
  {
    id: 3,
    name: '美味棧',
    description: ' 龍華樓地下鋪 安裝天花機*1 成基商業中心地下 安裝天花機*1 ',
    image: '/clients/client-3.jpg',
    slug: 'delicious-restaurant',
    details: `龍華樓地下鋪
安裝天花機*1

成基商業中心地下
安裝天花機*1`
  },
  {
    id: 4,
    name: '順豐速運',
    description: '為順豐速運香港安裝櫃機及維修冷氣 ',
    image: '/clients/client-4.jpg',
    slug: 'sf-express',
    details: `安裝整體式水源熱泵機組
更換及維修VRV 機組
`
  },
];

export default function ClientShowcase() {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openClientModal = (client: typeof clients[0], e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedClient(client);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">我們的客戶</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            多年來，我們為眾多知名企業及機構提供專業冷氣工程服務，贏得客戶的信任與好評
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
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
                <p className="mt-2 text-gray-600">{client.description}</p>
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
        
        <div className="mt-12 text-center">
          <Button href="/clients" variant="secondary" size="md">
            查看更多客戶案例
          </Button>
        </div>
      </div>

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
    </section>
  );
} 