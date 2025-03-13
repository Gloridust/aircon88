import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';

// 客户案例数据
const clients = [
  {
    id: 1,
    name: '保良局',
    description: '為多間保良局轄下機構清洗冷氣 ',
    image: '/clients/client-1.jpg',
    slug: 'po-leung-kuk'
  },
  {
    id: 2,
    name: '山崎麵包 Yamazaki Bakery',
    description: '旗下店舖冷氣清洗、維修及安裝 富景花園 - 安裝天花機 康德閣地下 -安裝天花 ',
    image: '/clients/client-2.jpg',
    slug: 'yamazaki-bakery'
  },
  {
    id: 3,
    name: '美味棧',
    description: ' 龍華樓地下鋪 安裝天花機*1 成基商業中心地下 安裝天花機*1 ',
    image: '/clients/client-3.jpg',
    slug: 'delicious-restaurant'
  },
  {
    id: 4,
    name: '順豐速運',
    description: '為順豐速運香港安裝櫃機及維修冷氣 ',
    image: '/clients/client-4.jpg',
    slug: 'sf-express'
  },
];

export default function ClientShowcase() {
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
                <Link 
                  href={`/clients/${client.slug}`}
                  className="mt-4 inline-flex items-center text-secondary hover:text-primary font-semibold py-1 border-b border-secondary hover:border-primary transition-colors"
                >
                  查看詳情
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
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
    </section>
  );
} 