import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useContactModal } from '@/pages/_app';

// FAQ數據結構
type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: number;
  title: string;
  items: FAQItem[];
};

// FAQ數據 - 您可以根據需要填充或修改
const faqData: FAQCategory[] = [
  {
    id: 1,
    title: '清洗問題',
    items: [
      {
        question: '冷氣機要多久清潔一次？',
        answer: '冷氣機愈來愈不凍，很多時都是因為沒有為它好好清潔。不論窗口式或分體式，最好都每開2個月就檢查及清潔其入風位的隔塵網，至於一些特別例子如入風口對正公路，就要更頻繁清潔，大約每月一次。'
      },
      {
        question: '清洗程序是什麼?',
        answer: '師傅會先開機測試機件是否運作正常後才拆下面蓋﹐以高壓水槍伸至豬籠摩打清洗﹐其間師傅會以防水物料包圍室內機身﹐防止污水濺出。'
      },
      {
        question: '清洗會否有保養期?',
        answer: '一般我們會提供1個月的保養'
      },
      {
        question: '如何清洗大金VRV系統的冷氣機？',
        answer: '大金VRV系統需要專業的清洗維護，與普通分體式冷氣不同。我們的專業技術人員會使用特殊設備和清潔劑，清洗室內機組的蒸發器、風扇、排水盤和過濾網，同時檢查室外機組的冷凝器和製冷劑。由於VRV系統較為複雜，建議每季度進行一次專業清洗，確保系統高效運行，延長使用壽命。'
      }
    ]
  },
  {
    id: 2,
    title: '安裝問題',
    items: [
      {
        question: '安裝匹數是如何計算?',
        answer: '每9000BTU 為1匹﹐每平方尺有100 BTU/hr的製冷量通常是足夠的，即100平方尺的室內空間所需的製冷量為10,000 BTU/hr。當然您仍然需要考慮其他因素去決定選用的冷氣機匹數，請向技術人員查詢專業意見。'
      },
      {
        question: '定頻式 及 變頻式 分別?',
        answer: '定頻式是指空調的壓縮機工作頻率是固定不變的，始終是50Hz，當空調製冷將房間溫度降到設定溫度時，壓縮機會停止工作。 而變頻式是指空調壓縮機會根據設定溫度與環境溫度的差值大小，來改變工作頻率，當空調製冷將房間溫度降到設定溫度時，壓縮機不會停止工作，而是轉為較低的工作頻率來工作。 簡單理解：定頻式是根據溫控器探頭來指揮空調機的啟動和停機（所以它有頻繁啟動/停機的特點），而空調機的每次啟動都帶來一個較大的瞬間電流，由此造成較耗電。而變頻式是通過改變工作頻率來維持溫度設定。也就是說它是自開機以來就不再停機了，只是通過改變運行頻率來工作，由此它就沒有什麼瞬間電流的問題了。所以它較定頻空調省電。'
      },
      {
        question: '大金VRV/VRF系統與傳統分體式冷氣有什麼不同？',
        answer: '大金VRV（Variable Refrigerant Volume）或VRF（Variable Refrigerant Flow）系統是一種高效能的中央空調系統，與傳統分體式冷氣相比有多個優勢：1) 能效更高，可節省20-30%能耗；2) 一個室外機可連接多達64個室內機；3) 溫度控制更精準，每個區域可獨立控制；4) 運行更安靜；5) 佔用空間更少；6) 適合大型商業和工業建築。安裝VRV/VRF系統需要專業團隊進行設計和施工，我們擁有豐富的大金VRV系統安裝經驗，可提供整體解決方案。'
      },
      {
        question: '大金VRV系統安裝需要多長時間？',
        answer: '大金VRV系統的安裝時間取決於項目規模和複雜度。小型辦公室通常需要3-5天，而大型商業空間可能需要2-4週。安裝過程包括系統設計規劃、室外機和室內機安裝、冷媒管道連接、電氣接線、系統測試和調試等步驟。我們的專業團隊會根據客戶需求制定詳細的安裝計劃，確保安裝質量和效率。'
      },
      {
        question: '冷氣甚麼牌子耐用?',
        answer: '市面上一般消費者會選用大金,樂聲,樂信,珍寶等知名牌子; 而大金產地分別是泰國及馬來西亞,泰國出產的價錢會較為昂貴,而馬來西亞產地的價格相對便宜﹐但性能上是與泰國產地的沒有分別; 此外﹐樂信及樂聲是同一廠家,樂信比樂聲較為便宜,質量與樂聲差不多; 而其次可選用美的,格力或開利,格力是近年進註香港的冷氣牌子,其質量也可媲美大牌子的冷氣'
      },
      {
        question: '外牆沒有位置裝室機怎麼辦?',
        answer: '因香港現在有[潛建]條例,家裡只有窗口式窗台而大廈外牆未必可以給客人安裝有室外機的冷氣機,客人有機會要向屋宇署申請加建才合法,如有此情況客人可選用窗口式分體機或窗口機,窗口式分體機的室外機較為細小,一般都可以安裝在窗台位置,而窗口式分體機比窗口機較為靜,是一個不錯的選擇。'
      },
      {
        question: '一級能源標籤可以節省幾多能源？',
        answer: '1級能源標籤的冷氣機其能源效益最高，5級則最低。根據機電工程署網頁的資料，以窗口式冷氣機為例，1級能源標籤就比3級的節省11%能源；至於1級分體式冷氣機則比3級的節省36%能源。冷氣機愈合符能源效益，不但會消耗較少能源，有助保護環境，亦可為用戶節省電費。'
      },
      {
        question: '分體式vs窗口式冷氣機，各有甚麼優缺點？',
        answer: '窗口式冷氣即最傳統的冷氣機，顧名思義必須安裝在窗台位置；至於近年流行的分體式冷氣機，是指將傳統冷氣機中，製冷部分的壓縮器分柝出來，壓縮器繼續裝在窗台上，而出風的室內機則可另外安裝在室內的任何一道牆身上。\n \n相對而言，窗口式冷氣不論在安裝、清潔而至維修上都較為簡單，不過由於壓縮器沒有分柝出來，所以即使是最靜的形號亦會發出嘈音。\n \n至於分體式冷氣機方面，由於壓縮器被分拆出來裝在室外，因此可大大減少噪音，寧靜得多。不過，分體式冷氣機一般售價及安裝費都較貴，維修上亦比窗式冷氣機更複雜。'
      },
      {
        question: '冷氣匹數與房間之間有甚麼關係？',
        answer: '客廳或房間的面積愈大，就需要愈大匹數的冷氣機。50呎至100呎的房間約需要一部3/4匹的冷氣機，至於200呎的客廳就需要1匹至1.5匹的冷氣。如果整個廳面積達700呎，又或者是飯廳連開放式廚房，就可能需要2匹的冷氣機。\n \n不同環境需要的冷氣匹數有所不同，例如一個經常西斜，或者位處高層、四周沒有建築物遮擋的單位，由於經常受陽光照射，加上石屎牆身吸熱，所需的冷氣匹數亦可能比一般單位較高，因此挑選冷氣機前亦需考慮這些因素。'
      }
    ]
  },
  {
    id: 3,
    title: '維修問題',
    items: [
      {
        question: '我的冷氣室內機漏水是什麼原因呢?',
        answer: '冷氣滴水會因以下幾個情況出現漏水問題﹐若遇到漏水問題可以聯絡維修人員上門維修\n       1.室內機安裝不牢固造成移位：室內機固定掛板安裝固定不牢固，時間長了發生移位，導致排水管引出一側位置偏高，造成排水困難。\n　　2.室內機機體的水準位置安裝不當：室內機水準位置安裝傾斜，管路口方向位置過高造成結露水外排受阻。\n　　3.排水管不良：由於排水管老化鬆弛或彎曲成波浪形狀，造成排水不暢。\n　　4.配管上結露水：由於管路上的保溫材料品質太差或過薄，或未完全包裹，當管內製冷劑通過時，引起結露。\n　　5.引出室外的排水管被人為堵住或排水口被贓物堵住，造成結露水無法排出。'
      },
      {
        question: '我的窗口式冷氣機滴水給人投訴',
        answer: '市面上的窗口式冷氣機只附有一個較細小的水盤﹐而該去水盤會較為容易淤塞﹐為長遠計﹐建議加裝不銹鋼或塑膠的去水盤﹐再接駁一條去水喉沿牆身流﹐可減低投訴風險'
      },
      {
        question: '為什麼冷氣會結冰',
        answer: 'A.雪種不足(漏雪種) \nB.濾網或蒸發器鰭片太髒造成,熱交換效率差,造成壓縮機輕載,也會結冰 \nC.馬達轉速變慢,造成輕載,也會結冰\n這個時候﹐請與你的維修員聯絡'
      },
      {
        question: '搖控不能控制冷氣',
        answer: '先檢查是否搖控器電池沒電,如換電池後都不能操作,可能是搖控器壞或冷氣的接收感應器故障,需預約冷氣師傅到現場檢查問題'
      },
      {
        question: '冷氣噪音較響時',
        answer: '請先確認聲音是否源自冷氣；冷氣啟動或停機時，內機塑膠件因溫度變化發生脹縮而發出的聲音屬正常現象；內外機固定牆壁是否結實；檢查室內外連接管是否固定好，有無和室外機或其它物體發生碰撞；冷氣啟動或停機時，系統內雪種在達到平衡之前會發出較響流動聲，屬正常現象。'
      }
    ]
  },
  {
    id: 4,
    title: '檢查問題',
    items: [
      {
        question: '冷氣機什麼時候才需要入雪種?',
        answer: '雪種不足或洩漏, 才需要入雪種, 所以一般不用定期更換或入雪種。'
      },
      {
        question: '冷氣機未能啓動?',
        answer: '檢查定時開機的設定時間和供電是否出問題'
      },
      {
        question: '冷氣機啓動後風量較弱?',
        answer: '清洗過濾網或聯絡維修人員上門檢查'
      },
      {
        question: '分體機的燈在閃爍，如何處理？',
        answer: '如果隱藏天花式冷氣機前面版的綠燈在閃爍，表示出現故障，您應盡快處理。'
      },
      {
        question: '如掛牆式冷氣機的其他燈在閃爍，有可能代表冷氣出現異常，',
        answer: '請與你的維修員聯絡。'
      },
      {
        question: '冷氣機自動關機',
        answer: '這請與你的維修員聯絡。不過在這之前，你先確定一下遙控上沒有自動關機的設置'
      },
      {
        question: '冷氣出風葉不能擺動:',
        answer: '先看看搖控器是否設定了不擺動,如果設定是正常而不能擺動,可能是摩打故障,需找冷氣師傅跟進'
      }
    ]
  },
  {
    id: 5,
    title: '其他問題',
    items: [
      {
        question: '為什麼室內機有氣味產生?',
        answer: '冷氣機吸收了房間、家具或香煙的氣味，然後在運作時排出。'
      },
      {
        question: '冷氣出風葉有水珠',
        answer: '因為冷氣機與室內空氣的温差太大,導致有汗水,先開機一段時間就不會再有倒汗水'
      },
      {
        question: '冷氣為什麼會噴白煙？',
        answer: '當室內溫度和濕度較高時，冷氣製冷會吹出霧氣。這是由於空氣中的水蒸氣被冷卻所引起的。當室內溫度和濕度降低後則霧氣會消失。這屬於正常現象'
      }
    ]
  }
];

const FAQPage: NextPage = () => {
  const { openModal: openContactModal } = useContactModal();
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <Layout
      title="冷氣常見問題FAQ | 冷氣保養、維修、檢查、清洗、大金VRV系統 - 同發冷氣工程"
      description="了解冷氣使用、保養、維修、檢查、清洗及大金VRV/VRF系統相關的常見問題與專業解答。同發冷氣工程專業技術團隊為您提供冷氣系統全方位支援。"
    >
      <Head>
        <meta name="keywords" content="冷氣FAQ,冷氣常見問題,冷氣保養,冷氣檢查,檢查冷氣,VRV系統,VRF系統,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣清洗,冷氣安裝" />
        <link rel="canonical" href="https://www.aircon88.com/faq" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/faq-banner.jpg"
            alt="常見問題"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">常見問題</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            我們整理了客戶常見的問題及解答，希望能幫助您更了解我們的服務
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      {/* FAQ內容部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左側分類導航 */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">問題分類</h3>
                <nav>
                  <ul className="space-y-2">
                    {faqData.map(category => (
                      <li key={category.id}>
                        <button
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                            activeCategory === category.id
                              ? 'bg-primary text-white font-semibold'
                              : 'text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* 右側問答內容 */}
            <div className="lg:w-3/4">
              {faqData.map(category => (
                <div 
                  key={category.id} 
                  className={activeCategory === category.id ? 'block' : 'hidden'}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    {category.title}相關問題
                  </h2>
                  
                  <div className="space-y-8">
                    {category.items.map((item, index) => (
                      <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                      >
                        <div className="p-4 bg-gray-50">
                          <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                        </div>
                        <div className="p-4 bg-white">
                          <p className="text-gray-600 whitespace-pre-line">{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 未找到答案部分 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">沒有找到您的問題？</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            如果您有其他問題或需要更詳細的資訊，請隨時聯繫我們的客戶服務團隊
          </p>
          <button 
            onClick={openContactModal}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg"
          >
            立即聯繫我們
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage; 