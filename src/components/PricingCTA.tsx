import Image from 'next/image';
import Button from './ui/Button';

export default function PricingCTA() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="服務價格背景"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">想了解我們的服務價格？</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          我們提供透明、合理的價格，並根據不同需求提供客製化方案。點擊下方按鈕查看詳細價目表。
        </p>
        <Button 
          href="/pricing" 
          variant="secondary" 
          size="lg"
          className="border-white text-white hover:bg-white hover:text-primary"
        >
          服務價格 +
        </Button>
      </div>
    </section>
  );
} 