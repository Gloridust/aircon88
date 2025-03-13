import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// 服務數據
const services = [
  {
    id: 1,
    title: '定期保養',
    description: '度身訂做合適的冷氣保養服務，延長設備壽命，確保運行效率，節省能源消耗。我們的專業技術人員會定期檢查冷氣系統的各個部件，及時發現並解決潛在問題。',
    image: '/services/maintenance.jpg',
    slug: 'maintenance'
  },
  {
    id: 2,
    title: '供應零售',
    description: '各大品牌冷氣機銷售，包括日立、大金、三菱等知名品牌。我們提供專業的選購建議，幫助客戶選擇最適合的冷氣設備，並提供安裝及售後服務。',
    image: '/services/retail.jpg',
    slug: 'retail'
  },
  {
    id: 3,
    title: '安裝工程',
    description: '提供各類型冷氣機安裝服務，包括分體式、窗口式、天花式等。我們的安裝團隊經驗豐富，確保安裝工程符合安全標準，並保證設備的最佳性能。',
    image: '/services/installation.jpg',
    slug: 'installation'
  },
  {
    id: 4,
    title: '清洗冷氣',
    description: '清洗各類型冷氣設備，徹底清除積塵、黴菌和細菌，改善室內空氣質素，減少過敏源。定期清洗還能提高冷氣效能，降低電費支出。',
    image: '/services/cleaning.jpg',
    slug: 'cleaning'
  },
  {
    id: 5,
    title: '檢查維修',
    description: '檢查及維修冷氣系統，快速診斷故障原因，提供專業維修服務。我們的技術團隊配備先進工具，能夠處理各種冷氣問題，確保設備恢復正常運作。',
    image: '/services/repair.png',
    slug: 'repair'
  },
  {
    id: 6,
    title: '牌照顧問',
    description: '通風証明、年檢、小型工程等牌照申請顧問服務。我們熟悉相關法規要求，協助客戶辦理各類冷氣工程所需的牌照和證明，確保工程合法合規。',
    image: '/services/license.jpg',
    slug: 'license'
  }
];

const ServicesPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>業務範圍 - 同發冷氣工程有限公司</title>
        <meta name="description" content="同發冷氣工程有限公司提供全方位冷氣服務，包括定期保養、供應零售、安裝工程、清洗冷氣、檢查維修及牌照顧問等。" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-banner.png"
            alt="同發冷氣工程服務範圍"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">業務範圍</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            我們提供全方位冷氣工程服務，滿足不同客戶的需求
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      {/* 服務介紹部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">我們的專業服務</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              同發冷氣工程有限公司提供全面的冷氣服務，從安裝、維修到保養，一站式滿足您的所有需求
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary hover:text-secondary font-semibold py-1 border-b border-primary hover:border-secondary transition-colors"
                  >
                    了解更多
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服務流程部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">我們的服務流程</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              從預約到完工，我們提供專業、高效的服務流程，確保每一步都符合客戶期望
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">預約諮詢</h3>
                <p className="text-gray-600">電話或網上預約，我們的客服團隊會詳細了解您的需求</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">上門評估</h3>
                <p className="text-gray-600">專業技術人員上門評估，提供最適合的解決方案和報價</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">服務執行</h3>
                <p className="text-gray-600">按照約定時間執行服務，嚴格按照專業標準操作</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">完工確認</h3>
                <p className="text-gray-600">服務完成後，確認客戶滿意度，提供後續保養建議</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服務優勢部分 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">為什麼選擇我們？</h2>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">專業團隊</h3>
              <p className="text-center">擁有多年經驗的技術團隊，持有相關專業資格證書</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">快速響應</h3>
              <p className="text-center">特設冷氣工程車隊，快速響應客戶需求，提供及時服務</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">合理收費</h3>
              <p className="text-center">明碼實價，絕不含隱藏收費，提供詳細報價和服務說明</p>
            </div>
          </div>
        </div>
      </section>

      {/* 聯繫我們部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">需要我們的服務？</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            無論是家居、商業還是工業冷氣需求，我們都能提供專業的解決方案
          </p>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const contactModal = document.getElementById('contact-modal');
              if (contactModal && typeof window !== 'undefined') {
                const event = new CustomEvent('open-contact-modal');
                window.dispatchEvent(event);
              } else {
                window.location.href = '/contact';
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white border border-primary transition-colors shadow-lg"
          >
            立即聯繫我們
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage; 