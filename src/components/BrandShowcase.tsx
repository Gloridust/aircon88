import Image from 'next/image';

// 品牌数据
const brands = [
  // 第一行
  { name: 'GREE（格力）', logo: '/brands/gree.png' },
  { name: 'MITSUBISHI ELECTRIC（三菱电机）', logo: '/brands/mitsubishi-electric.png' },
  { name: 'Panasonic（松下）', logo: '/brands/panasonic.png' },
  { name: 'DAIKIN（大金）', logo: '/brands/daikin.png' },
  { name: 'RYOBISHI（菱机）', logo: '/brands/ryobishi.png' },
  { name: 'YORK（约克）', logo: '/brands/york.png' },
  
  // 第二行
  { name: 'TAKAMURA（高村）', logo: '/brands/takamura.png' },
  { name: 'Carrier（开利）', logo: '/brands/carrier.png' },
  { name: 'TOSHIBA（东芝）', logo: '/brands/toshiba.png' },
  { name: 'Rasonic（乐声牌）', logo: '/brands/rasonic.png' },
  { name: 'HITACHI（日立）', logo: '/brands/hitachi.png' },
  { name: 'McQuay（麦克维尔）', logo: '/brands/mcquay.png' },
  
  // 第三行
  { name: 'SAMSUNG（三星）', logo: '/brands/samsung.jpg' },
  { name: 'O\'GENERAL（日本将军）', logo: '/brands/ogeneral.png' },
  { name: 'MITSUBISHI HEAVY INDUSTRIES, LTD.（三菱重工）', logo: '/brands/mitsubishi-heavy.png' },
  { name: 'SINKO（新晃）', logo: '/brands/sinko.png' },
  { name: 'Midea（美的）', logo: '/brands/midea.png' },
  { name: 'temperzone（温控区）', logo: '/brands/temperzone.png' },
];
export default function BrandShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">提供各個冷氣品牌選擇</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            我們與多個知名冷氣品牌合作，為客戶提供多樣化的選擇，滿足不同需求和預算
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {brands.map((brand, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-2 flex items-center justify-center h-30 w-40 transition-transform hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}