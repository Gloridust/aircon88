import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <Layout
      title="頁面未找到 | 404 錯誤 - 同發冷氣工程有限公司"
      description="很抱歉，您嘗試訪問的頁面不存在。返回我們的主頁探索我們的冷氣安裝、維修、保養、清洗及檢查服務。"
    >
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">頁面未找到</h2>
          <p className="text-lg text-gray-600 mb-8">
            很抱歉，您嘗試訪問的頁面不存在或已被移動。
            請返回主頁或使用以下鏈接訪問我們的其他服務。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/" 
              className="px-6 py-3 bg-white text-primary border border-primary rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              返回主頁
            </Link>
            <Link 
              href="/services" 
              className="px-6 py-3 bg-white text-primary border border-primary rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              查看服務
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-white text-primary border border-primary rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              聯繫我們
            </Link>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">您可能在尋找：</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
              <Link href="/services#maintenance" className="text-primary hover:underline">冷氣保養</Link>
              <Link href="/services#repair" className="text-primary hover:underline">冷氣維修</Link>
              <Link href="/services#cleaning" className="text-primary hover:underline">冷氣清洗</Link>
              <Link href="/services#vrv-system" className="text-primary hover:underline">大金VRV系統</Link>
              <Link href="/services#installation" className="text-primary hover:underline">冷氣安裝</Link>
              <Link href="/faq" className="text-primary hover:underline">常見問題</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage; 