import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { useContactModal } from '@/pages/_app';

// 服務數據
const services = [
  {
    id: 1,
    title: '定期保養',
    description: '度身訂做合適的冷氣保養服務，延長設備壽命，確保運行效率，節省能源消耗。專業處理VRV/VRF系統。',
    detail: `
      <h4 class="text-lg font-bold mb-3">定期保養服務內容</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>每年大洗冷氣系統，以高壓噴射式藥水清洗</li>
        <li>每月/季定期清洗隔塵網</li>
        <li>定期檢查機件</li>
        <li>VRV/VRF系統專業檢查維護</li>
        <li>保養期內免費上門檢查及維修冷氣系統，次數不限</li>
      </ul>
      <p class="mb-3">客戶如需度身訂做合適的冷氣保養服務，請致電：3188 0271</p>
    `,
    image: '/services/maintenance.jpg',
    slug: 'maintenance'
  },
  {
    id: 2,
    title: '供應零售',
    description: '各大品牌冷氣機銷售，包括大金VRV/VRF系統、日立、三菱等知名品牌。',
    detail: `
      <h4 class="text-lg font-bold mb-3">我們供應的產品</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>大金VRV/VRF系統（Daikin VRV/VRF System）</li>
        <li>大金（Daikin）</li>
        <li>珍寶（Chunbao）</li>
        <li>日立（Hitachi）</li>
        <li>樂聲（Lennox）</li>
        <li>美的（Midea）</li>
        <li>三菱重工（Mitsubishi Heavy Industries）</li>
        <li>三菱電機（Mitsubishi Electric）</li>
        <li>水泵、雪種、電子板、溫度掣、壓縮機、冷卻水塔、水冷式櫃機、風機盤管等</li>
      </ul>
      <p class="mb-3">我們的專業顧問會根據您的空間大小、使用需求和預算，推薦最適合的產品型號。</p>
      <p>所有產品均提供原廠保養，並可選購延長保養服務，確保您的投資得到長期保障。</p>
    `,
    image: '/services/retail.jpg',
    slug: 'retail'
  },
  {
    id: 3,
    title: '安裝工程',
    description: '提供各類型冷氣機安裝服務，包括分體式、窗口式、天花式等。',
    detail: `
      <h4 class="text-lg font-bold mb-3">安裝工程服務範圍</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>各類型冷氣機安裝 - 適合家居和小型辦公室</li>
        <li>風機盤管安裝 - 提供高效的空氣流通</li>
        <li>水冷式櫃機安裝 - 適合商業和辦公空間</li>
        <li>冷卻水塔安裝 - 適合大型辦公室和商業場所</li>
        <li>雪種銅喉安裝 - 確保冷氣系統的高效運行</li>
        <li>去水系統安裝 - 防止漏水和異味</li>
        <li>散熱架安裝 - 提高設備的散熱效率</li>
        <li>冷凍水喉安裝 - 確保冷卻效果</li>
        <li>白鐵風喉安裝 - 提供耐用的通風解決方案</li>
        <li>抽風系統安裝 - 改善室內空氣質素</li>
      </ul>
      <p class="mb-3">本公司安裝各類型冷氣機，基於客戶的環境及場地、各有不同，本公司提供睇位，以實際情況作出報價，明碼實價，絕無取巧！請致電：3188 0271</p>
      <p>本公司已購買勞工保險(高空工作)及第三者意外責任保險。</p>
    `,
    image: '/services/installation.jpg',
    slug: 'installation'
  },
  {
    id: 4,
    title: '清洗冷氣',
    description: '清洗各類型冷氣設備，徹底清除積塵、黴菌和細菌，改善室內空氣質素。',
    detail: `
      <h4 class="text-lg font-bold mb-3">冷氣清洗服務內容</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>清洗各類型冷氣機、中央冷氣系統、水冷式櫃機運炮、大型水塔、隔塵網、水泵、水喉、水盤、風喉、風管、通風系統等</li>
      </ul>
      <p class="mb-3">我們使用環保清潔劑和專業設備，確保清洗效果徹底且不損壞設備。</p>
      <p>建議每3-6個月進行一次專業清洗，特別是在多塵、高濕度或有過敏人士的環境中。</p>
    `,
    image: '/services/cleaning.jpg',
    slug: 'cleaning'
  },
  {
    id: 5,
    title: '檢查維修',
    description: '檢查及維修冷氣系統，快速診斷故障原因，提供專業維修服務。',
    detail: `
      <h4 class="text-lg font-bold mb-3">檢查及維修服務</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>檢查包括，散熱風扇機件及啤呤、分體機壓縮器，測試雪種壓力值、出風量、出風溫度及回風溫度、送風機摩打，壓縮機及散熱扇的情況、電壓值、電流值及排水系統的保溫情況等</li>
        <li>維修包括，設置冷氣開關掣、包保溫、加裝水泵、摩打、電容器、電子板、更換壓縮機、更換室內機及室外機等</li>
        <li>如冷氣機出現異常狀況，本公司提供上門檢查冷氣服務，檢查費$450起</li>
        <li>經檢查後客戶如選擇本公司進行維修服務，檢查費可於維修費用內扣減(洗機或入雪種除外)</li>
      </ul>
      <p class="mb-3">我們的技術人員配備先進診斷工具，能夠快速準確地找出故障原因。</p>
      <p>維修服務包括90天保養，確保維修後的設備能夠穩定運行。</p>
    `,
    image: '/services/repair.png',
    slug: 'repair'
  },
  {
    id: 6,
    title: '牌照顧問',
    description: '通風証明、年檢、小型工程等牌照申請顧問服務。',
    detail: `
      <h4 class="text-lg font-bold mb-3">牌照顧問服務範圍</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>通風証明</li>
        <li>年檢</li>
        <li>小型工程</li>
        <li>小型工程文件（1,2,3級）</li>
        <li>核證食物業處所沒有違例建築工程 (違建工程) (UBW-1/UBW-2)</li>
        <li>結構工程師結構、負重報告 (AP/RSE)</li>
        <li>符合規定証明書A (衛生規定)</li>
        <li>符合規定証明書B (樓宇結構規定)</li>
        <li>符合規定証明書C (消防安全規定)</li>
        <li>符合規定証明書D (通風設施規定)</li>
        <li>通風系統數據表</li>
        <li>消防、通風週年檢查証明書 (FSI 251/AIC)</li>
        <li>電力安全証明書 (WR1 / WR2)</li>
        <li>氣體 (煤氣/石油氣) 開工及完工証明文件</li>
        <li>窗戶檢驗證明書</li>
      </ul>
      <p class="mb-3">我們熟悉香港各政府部門的法規要求，能夠協助客戶順利完成各類牌照申請。</p>
      <p>我們的顧問團隊包括註冊工程師和專業技術人員，確保所有文件和工程符合法定標準。</p>
    `,
    image: '/services/license.jpg',
    slug: 'license'
  }
];

const ServicesPage: NextPage = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { openModal: openContactModal } = useContactModal();

  const openServiceModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Layout
      title="冷氣工程服務 | 冷氣安裝、維修、保養、清洗、檢查 | 大金VRV專家 - 同發冷氣工程"
      description="同發冷氣工程提供專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，多年冷氣工程經驗，服務包括家用分體式及商用中央空調系統，覆蓋香港全區。"
    >
      <Head>
        <meta name="keywords" content="冷氣保養,冷氣檢查,檢查冷氣,VRV,VRF,大金,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣工程,冷氣清洗,冷氣安裝,冷氣公司,服務範圍" />
        <link rel="canonical" href="https://aircon88.innovisle.net/services" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-banner.jpg"
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">我們的服務</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們提供全方位冷氣工程服務，滿足各種客戶需求
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                id={service.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => openServiceModal(service)}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center"
                  >
                    了解更多
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
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
          <button 
            onClick={openContactModal}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white border border-primary transition-colors shadow-lg"
          >
            立即聯繫我們
          </button>
        </div>
      </section>

      {/* 服務詳情彈窗 */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 animate-fadeIn overflow-y-auto max-h-[90vh]">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedService.title}</h3>
                <div 
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: selectedService.detail }}
                />
                
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => {
                      closeModal();
                      openContactModal();
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white border border-primary transition-colors shadow-md"
                  >
                    預約此服務
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ServicesPage; 