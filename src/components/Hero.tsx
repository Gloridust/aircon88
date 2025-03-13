import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [showContactModal, setShowContactModal] = useState(false);

  // 處理聯繫方式選擇
  const handleContactClick = (type: string) => {
    switch(type) {
      case 'phone':
        window.location.href = 'tel:+85231880271';
        break;
      case 'mobile':
        window.location.href = 'tel:+85262156152';
        break;
      case 'whatsapp':
        window.open('https://api.whatsapp.com/send?phone=85262156152&text=%E6%9F%A5%E8%A9%A2%E5%86%B7%E6%B0%A3', '_blank');
        break;
      case 'email':
        window.open('mailto:cs.aircon88@gmail.com', '_blank');
        break;
    }
    setShowContactModal(false);
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="冷氣工程服務"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
          優質服務<br />
            <span className="text-primary">同發創造</span>
          </h1>
          <p className="mt-6 text-lg text-white max-w-lg drop-shadow-md">
            同發冷氣工程有限公司提供全方位冷氣安裝、維修及保養服務，服務香港全區，專業可靠，價格合理。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* 第一個按鈕：使用白色背景和藍色文字，確保在深色背景上清晰可見 */}
            <button 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white border border-white transition-colors shadow-lg"
              onClick={() => setShowContactModal(true)}
            >
              立即聯繫我們
            </button>
            
            {/* 第二個按鈕：使用透明背景和白色文字，帶白色邊框 */}
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-transparent text-white hover:bg-white hover:text-primary border border-white transition-colors shadow-lg"
            >
              了解我們的服務
            </a>
          </div>
        </div>
      </div>

      {/* 聯繫方式選擇彈窗 */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowContactModal(false)}></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">選擇聯繫方式</h3>
            <div className="grid grid-cols-1 gap-3">
              <button 
                onClick={() => handleContactClick('phone')}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  電話
                </span>
                <span className="text-gray-600">3188-0271</span>
              </button>
              
              <button 
                onClick={() => handleContactClick('mobile')}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  手機
                </span>
                <span className="text-gray-600">6215-6152</span>
              </button>
              
              <button 
                onClick={() => handleContactClick('whatsapp')}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  WhatsApp
                </span>
                <span className="text-gray-600">6215-6152</span>
              </button>
              
              <button 
                onClick={() => handleContactClick('email')}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  電郵
                </span>
                <span className="text-gray-600">cs.aircon88@gmail.com</span>
              </button>
            </div>
            <button 
              className="mt-4 w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-gray-800"
              onClick={() => setShowContactModal(false)}
            >
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 