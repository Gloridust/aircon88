import Image from 'next/image';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
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
            專業冷氣工程服務<br />
            <span className="text-primary">為您打造舒適環境</span>
          </h1>
          <p className="mt-6 text-lg text-white max-w-lg drop-shadow-md">
            同發冷氣工程有限公司提供全方位冷氣安裝、維修及保養服務，服務香港全區，專業可靠，價格合理。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="md" className="shadow-lg">
              立即聯繫我們
            </Button>
            <Button 
              href="/services" 
              variant="secondary" 
              size="md" 
              className="border-white text-white hover:bg-white hover:text-primary hover:border-white shadow-lg"
            >
              了解我們的服務
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 