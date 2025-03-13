import Image from 'next/image';

export default function Hero() {
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
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            {/* 第一個按鈕：使用白色背景和藍色文字，確保在深色背景上清晰可見 */}
            <a 
              href="tel:85231880271" 
              className="w-[160px] inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white border border-white transition-colors shadow-lg"
              onClick={() => {
                if (!navigator.userAgent.match(/(iPhone|iPod|Android|Opera Mini|IEMobile|WPDesktop)/)) {
                  alert('即將撥打電話。如果未彈出電話，請手動聯繫：+85231880271');
                }
              }}
            >
              立即聯繫我們
            </a>
            
            {/* 第二個按鈕：使用透明背景和白色文字，帶白色邊框 */}
            <a 
              href="/services" 
              className="w-[160px] inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold bg-transparent text-white hover:bg-white hover:text-primary border border-white transition-colors shadow-lg"
            >
              了解我們的服務
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 