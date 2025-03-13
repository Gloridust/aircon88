import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useContactModal } from '@/pages/_app';

const ContactPage: NextPage = () => {
  const { openModal: openContactModal } = useContactModal();

  return (
    <Layout>
      <Head>
        <title>聯繫我們 - 同發冷氣工程有限公司</title>
        <meta name="description" content="同發冷氣工程有限公司聯繫方式，包括電話、手機、傳真、電郵和地址。" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-banner.jpg"
            alt="聯繫同發冷氣工程"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">聯繫我們</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            我們隨時準備為您提供專業的冷氣工程服務，歡迎通過以下方式聯繫我們
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      {/* 聯繫信息部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左側聯繫信息 */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">聯繫方式</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">電話</h3>
                      <p className="text-gray-600 mt-1">3188-0271</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">手機</h3>
                      <p className="text-gray-600 mt-1">6215-6152</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">傳真</h3>
                      <p className="text-gray-600 mt-1">3019-6274</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">電郵</h3>
                      <p className="text-gray-600 mt-1">cs.aircon88@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">地址</h3>
                      <p className="text-gray-600 mt-1">屯門新平街2號屯門工業中心A座10樓A1室</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button 
                    onClick={openContactModal}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-primary text-white hover:bg-primary-dark transition-colors shadow-md w-full"
                  >
                    立即聯繫我們
                  </button>
                </div>
              </div>
              
              {/* 付款詳情 */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-md mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">付款詳情</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">付款方式</h3>
                    <p className="text-gray-600 mt-1">現金／轉賬／支票</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">中文抬頭</h3>
                    <p className="text-gray-600 mt-1">同發冷氣工程有限公司</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">英文抬頭</h3>
                    <p className="text-gray-600 mt-1">Tung Fat Air Conditioner & Engineering Co LTD</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">中國銀行</h3>
                    <p className="text-gray-600 mt-1">012-831-1-051286-9</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">FPS轉數快</h3>
                    <p className="text-gray-600 mt-1">108575747</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 右側地圖 */}
            <div className="h-full">
              <div className="bg-gray-50 rounded-lg p-4 shadow-md h-full">
                <div className="relative h-full min-h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.7998441173!2d113.97073!3d22.39097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fae7d6c4d1a9%3A0x5e9c2c8b358b5d2!2z5bGV6ZaA5bel5qWt5Lit5b-D77yBQeW6p-WFq-WxgEEx5a6k!5e0!3m2!1szh-TW!2shk!4v1718000000000!5m2!1szh-TW!2shk" 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 營業時間部分 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">營業時間</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">星期一至五</h3>
                <p className="text-gray-600">上午 9:00 - 下午 6:00</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">星期六</h3>
                <p className="text-gray-600">上午 9:00 - 下午 1:00</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">星期日及公眾假期</h3>
                <p className="text-gray-600">休息</p>
              </div>
            </div>
            
            <div className="mt-6 text-center text-gray-600">
              <p>* 如有緊急維修需求，請致電我們的緊急服務熱線</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage; 