import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';

// 專業資格數據
const qualifications = [
  {
    id: 1,
    title: '機電工程署註冊電業承辦商',
    image: '/qualifications/q1.png'
  },
  {
    id: 2,
    title: '屋宇署註冊小型工程承辦商',
    image: '/qualifications/q2.png'
  },
  {
    id: 3,
    title: '建造業議會合資格承辦商',
    image: '/qualifications/q3.png'
  },
  {
    id: 4,
    title: '職業訓練局(空氣調節及冷凝技工證書)',
    image: '/qualifications/q4.png'
  },
  {
    id: 5,
    title: '職業安全健康局 (平安咭、工人註冊證明書)',
    image: '/qualifications/q5.png'
  },
  {
    id: 6,
    title: '環境保護署室內空氣質素服務供貨商',
    image: '/qualifications/q6.png'
  },
  {
    id: 7,
    title: '消防署通風系統課防火證書',
    image: '/qualifications/q7.png'
  },
  {
    id: 8,
    title: '水務署(水喉匠牌照)',
    image: '/qualifications/q8.png'
  },
  {
    id: 9,
    title: '蘇黎世保險公司(勞工保險)',
    image: '/qualifications/q9.png'
  },
  {
    id: 10,
    title: '永隆保險(第三者意外責任保險)',
    image: '/qualifications/q10.png'
  }
];

const AboutPage: NextPage = () => {
  return (
    <Layout
      title="關於同發冷氣工程 | 專業冷氣安裝維修保養公司 | 大金VRV專家"
      description="同發冷氣工程有限公司擁有30年專業冷氣安裝、維修、保養經驗，持多項專業資格，專營大金VRV/VRF系統，服務範圍覆蓋香港全區。"
    >
      <Head>
        <meta name="keywords" content="冷氣保養,冷氣檢查,檢查冷氣,VRV,VRF,大金,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣工程,冷氣清洗,冷氣安裝,冷氣公司,同發冷氣,冷氣工程公司" />
        <link rel="canonical" href="https://www.aircon88.com/about" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-banner.jpg"
            alt="關於同發冷氣工程"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">公司簡介</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            專業冷氣工程服務商，擁有30年行業經驗
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      {/* 公司介紹部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">同發冷氣工程有限公司</h2>
              <div className="w-16 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <div className="relative h-64 md:h-80">
                <Image
                  src="/about-company.jpg"
                  alt="同發冷氣工程團隊"
                  fill
                  className="object-cover object-center"
                />
              </div> */}
              
              <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    自成立以來，憑藉多年豐富的冷氣工程經驗，已為無數顧客提供一站式冷氣服務。本公司長期為多間大型機構及連鎖商鋪提供冷氣工程顧問及定期保養，並得到他們的支持及信任。
                  </p>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    我們特設冷氣工程車隊，服務迅速更加優質，讓顧客節省更多時間。儀器及工具齊全，務求提供安全、可靠及高效率的優質服務。
                  </p>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    本公司業務範圍遍及全港九新界，專營各政府機構、商業機構、學校團體、寫字樓、商鋪及住宅用戶的冷氣清洗、維修及保養服務 、專業冷氣安裝及設計工程。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    聘請資深的技術人員，更是接受過陪訓及持有相關的專業資格，所有工程均由本公司技術人員直接處理，並提供免費上門睇位服務，明碼實價，絶不含隱藏收費!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 專業資格部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">專業資格</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們擁有多項專業資格認證，確保為客戶提供最專業、最安全的冷氣工程服務
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {qualifications.map((qualification) => (
              <div 
                key={qualification.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105"
              >
                <div className="relative h-48 flex items-center justify-center p-4">
                  <Image
                    src={qualification.image}
                    alt={qualification.title}
                    width={200}
                    height={150}
                    className="object-contain max-h-full"
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {qualification.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服務承諾部分 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">我們的服務承諾</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">品質保證</h3>
              <p>所有工程均由專業技術人員執行，確保工程質量達到最高標準</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">準時服務</h3>
              <p>我們重視客戶的時間，承諾準時到達，高效完成工程</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">透明收費</h3>
              <p>明碼實價，絕不含隱藏收費，讓客戶安心選擇我們的服務</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 