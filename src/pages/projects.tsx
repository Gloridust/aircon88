import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '@/styles/Projects.module.css';

// 项目分类定义
type ProjectCategory = {
  id: string;
  title: string;
  folder: string;
  subCategories?: SubCategory[];
};

// 子分类定义
type SubCategory = {
  id: string;
  title: string;
  folder: string;
};

// 所有项目分类
const projectCategories: ProjectCategory[] = [
  {
    id: 'central-ac',
    title: '中央空調',
    folder: '中央空調',
    subCategories: [
      { id: 'daikin', title: '大金', folder: '大金' },
      { id: 'hitachi', title: '日立', folder: '日立' },
      { id: 'trane', title: '特靈', folder: '特靈' },
      { id: 'carrier', title: '開利', folder: '開利' },
      { id: 'mcquay', title: '麥克維爾', folder: '麥克維爾' },
      { id: 'danfoss', title: '丹佛斯', folder: '丹佛斯' },
      { id: 'fan-coil', title: 'FAN COIL', folder: 'FAN COIL' },
    ]
  },
  {
    id: 'vrv-vrf',
    title: 'VRV及VRF多聯機',
    folder: 'VRV及VRF多聯機',
    subCategories: [
      { id: 'daikin-vrv', title: '大金', folder: '大金' },
      { id: 'hitachi-vrv', title: '日立', folder: '日立' },
      { id: 'samsung', title: '三星', folder: '三星' },
      { id: 'mitsubishi-heavy', title: '三菱重工', folder: '三菱重工' },
      { id: 'mitsubishi-electric', title: '三菱電機', folder: '三菱電機' },
      { id: 'toshiba', title: '東芝', folder: '東芝' },
      { id: 'general', title: '珍寶', folder: '珍寶' },
      { id: 'midea', title: '美的', folder: '美的' },
      { id: 'mcquay-vrv', title: '麥克維爾', folder: '麥克維爾' },
    ]
  },
  {
    id: 'ac-installation',
    title: '安裝冷氣',
    folder: '安裝冷氣'
  },
  {
    id: 'ac-cleaning',
    title: '清洗冷氣',
    folder: '清洗冷氣'
  },
  {
    id: 'ac-maintenance',
    title: '冷氣保養',
    folder: '冷氣保養'
  },
  {
    id: 'ac-repair',
    title: '冷氣維修',
    folder: '冷氣維修',
    subCategories: [
      { id: 'chilla-water-pump', title: '冷水泵', folder: '冷水泵' },
      { id: 'motor', title: '馬達', folder: 'motor' },
      { id: 'other-repair', title: '其他維修', folder: 'other repair' }
    ]
  },
  {
    id: 'ventilation',
    title: '通風工程',
    folder: '通風工程'
  },
  {
    id: 'supply-retail',
    title: '供應零售',
    folder: '供應零售'
  }
];

// 项目分类描述
const categoryBios: Record<string, string> = {
  'VRV及VRF多聯機': `🏢 商用/住宅多聯機冷氣有問題？我哋由設計到維修一條龍搞掂！
🔧 服務範圍

✅ 專業維修：冷氣唔凍、漏水、出Error Code？即日上門檢查！
✅ 新機安裝：日本大金/三菱/日立多聯機，包設計同埋工程跟進
✅ 系統設計：幫你計準制冷量，慳電又夠凍，唔會裝完先發現唔夠力
✅ 定期保養：簽約年保計劃，預防故障，延長機命
💎 我哋嘅優勢

✔ 原廠認證技術團隊，唔會亂咁整
✔ 用 專業儀器 檢查雪種壓力、電流，唔係齋睇表面
✔ 提供 3D管道設計圖，CAD ，BIM，安裝前睇清楚
✔ 明碼實價，唔會整完先話要加錢
💰 優惠推廣

📢 新客首次維修：檢查費$1000(原價$1500)，維修再扣返
📢 安裝套餐：包5匹主機+3台室內機，特價48,800起
📢∗∗年保計劃∗∗：每年2次檢查+1次清洗，平均每月$800有找
📞 即刻聯絡我哋

📲 WhatsApp報價：62156152（同發冷氣工程有限公司）
🏠 公司地址：屯門新平街2號屯門工業中心A座10樓A1室
⏰ 服務時間：朝9晚6（緊急情況24小時）
💡 客戶常見問題

❓ 「多聯機同普通分體機有咩分別？」
👉 更慳位、更慳電，一拖十都得，適合辦公室、大單位

❓ 「洗一次要幾錢？」
👉 視乎台數，$500/台起，包消毒同檢查

❓ 「安裝要幾耐？」
👉 一般3-5個工作天，唔會影響你營業

🏆 20年經驗團隊，過千宗成功案例，信心保證！`,
  '中央空調': `🏢 商用/住宅中央空調有問題？我哋由設計到維修一條龍搞掂！
🔧 服務範圍

✅ 專業維修：冷氣唔凍、漏水、出Error Code？即日上門檢查！
✅ 新機安裝：日本大金/開利/特靈中央空調，包設計同埋工程跟進
✅ 系統設計：幫你計準制冷量，慳電又夠凍，唔會裝完先發現唔夠力
✅ 定期保養：簽約年保計劃，預防故障，延長機命
💎 我哋嘅優勢

✔ 原廠認證技術團隊，唔會亂咁整
✔ 用 專業儀器 檢查雪種壓力、電流，唔係齋睇表面
✔ 提供 3D管道設計圖，CAD ，BIM，安裝前睇清楚
✔ 明碼實價，唔會整完先話要加錢
💰 優惠推廣

📢 新客首次維修：檢查費$1000(原價$1500)，維修再扣返
📢 安裝套餐：包中央空調主機+風櫃，特價$98,800起
📢∗∗年保計劃∗∗：每年2次檢查+1次清洗，平均每月$1,500有找
📞 即刻聯絡我哋

📲 WhatsApp報價：62156152（同發冷氣工程有限公司）
🏠 公司地址：屯門新平街2號屯門工業中心A座10樓A1室
⏰ 服務時間：朝9晚6（緊急情況24小時）
💡 客戶常見問題

❓ 「中央空調同普通分體機有咩分別？」
👉 更慳位、更慳電，一套系統就可以覆蓋成棟大廈，適合商場、寫字樓

❓ 「洗一次要幾錢？」
👉 視乎系統大小，$1,000/台起，包消毒同檢查

❓ 「安裝要幾耐？」
👉 一般5-10個工作天，會配合你嘅工程進度

🏆 20年經驗團隊，過千宗成功案例，信心保證！`,
  '安裝冷氣': `🔥 夏天熱到爆？新冷氣買咗但未裝？
🚀 我哋專業安裝團隊，快、靚、正幫你搞掂！
💯 點解要揀我哋？

✅ 原廠認證安裝團隊，唔會裝完漏雪種
✅ 包量位、包設計，唔會裝完先發現唔夠凍
✅ 明碼實價，唔會裝完先話要加錢
✅ 提供保養，安裝後有問題即跟進
🔧 安裝服務包括

✔ 分體式冷氣安裝（窗口式、掛牆式、天花式）
✔ 專業鑽孔、接駁雪種喉、排水喉
✔ 電線接駁及安全測試
✔ 基本試機及操作教學
💰 安裝套餐優惠

📢 標準安裝（1對1分體機）：1,200起
📢 窗口式分體冷氣安裝：1,000起
📢 窗口式冷氣安裝：600起
📢 多聯機/VRV/VFV系統：免費上門報價

🎁 限時優惠：即日起至8月31日
📞 立即預約

📲 WhatsApp速報價：62156215
🏠 服務範圍：全港九新界
⏰ 最快即日上門（緊急安裝可安排夜間服務）
⚠️ 溫馨提示

1️⃣ 安裝前請確認冷氣型號及尺寸
2️⃣ 高層單位或特殊位置需額外評估
3️⃣ 建議冷氣使用前先做基本清潔

❄️ 專業安裝，冷氣先會夠凍又耐用！
（我哋唔止裝機，仲教你點保養，部機用多幾年都得！）

需要調整內容或查詢其他服務，隨時聯絡我哋！ 😊`,
  '清洗冷氣': `💨 冷氣「噏味」頂唔順？ 🥵 越開越唔凍又嘥電？
🚿 我哋幫你徹底「大掃除」！
🔍 點解要洗冷氣？

✅ 慳電！ 冷氣積塵散熱差，電費隨時貴 20%！
✅ 冇臭味！ 霉菌、細菌滋生，一開機就「噏住陣味」？洗走佢！
✅ 健康！ 塵蟎、PM2.5 吹出嚟，搞到鼻敏感、咳唔停？
✅ 耐用！ 定期清洗，部機冇咁易壞，慳返維修錢！
✨ 我哋嘅服務特點

✔ 專業拆洗：蒸發器、風扇葉、排水槽 徹底清潔，唔係齋抹表面！
✔ 高溫殺菌：用 蒸汽+環保清潔劑，KO 霉菌同細菌！
✔ 檢查隱患：順便幫你睇吓有冇塞排水管、漏雪種等問題！
✔ 明碼實價：$500起/部，洗得乾淨又放心！
📅 優惠推廣

📢 預約清洗 2部或以上，即送 有優惠 ！
（數量有限，快啲 WhatsApp 我哋啦！📲62156152）
👨🔧 適合邊啲人？

🏠 住家：屋企有細路、長輩，怕冷氣吹出嚟唔乾淨？
🏢 辦公室：成日有人病？可能係冷氣太污糟！
🍴 餐廳/店舖：冷氣「油煙味」勁？我哋幫你搞掂！

📌 溫馨提示：冷氣機 每年至少洗1次，夏天前洗就最啱！
📞 立即預約：62156152（同發冷氣工程有限公司）

🌬️ 洗走污糟嘢，冷氣清新又夠凍！
（你嘅健康同部機嘅壽命，就係咁簡單！😉）`,
  '冷氣保養': `一、冷氣保養（每月1次）
1. 清潔濾網
步驟：
關閉電源，取下室內機濾網。
用吸塵器或軟毛刷清除灰塵，以清水沖洗（可搭配中性清潔劑）。
陰乾後裝回，避免陽光直曬導致變形。
目的：防止灰塵堆積影響風量與空氣品質，降低耗電量。

2. 檢查出風口與外觀
步驟：
擦拭出風口葉片，避免灰塵積聚。
檢查室內外機有無明顯異物（如樹葉、雜物）阻塞。

3. 簡易運轉測試
步驟：
開啟冷氣後，確認出風溫度、風速切換是否正常。
觀察排水管是否順暢（無漏水或異音）。

二、季度專業保養（每3-6個月）
1. 室內機深度清潔
項目：
拆洗蒸發器：使用專用清潔劑噴灑，溶解黴菌與污垢後沖洗。
清潔冷凝水盤：移除藻類與沉澱物，倒入稀釋漂白水殺菌。
檢查排水管：疏通堵塞並確認坡度是否利於排水。

2. 室外機維護
項目：
清除散熱片灰塵：用高壓氣槍或軟毛刷逆向清潔（避免彎曲鰭片）。
檢查支架與螺絲：加固鬆動處，防鏽處理金屬部件。
清理周圍環境：移除2公尺內雜物，確保通風良好。

3. 系統功能檢測
項目：
冷媒壓力測試：確認壓力值是否符合原廠規範（R22、R32、R134A、R410A等冷媒標準不同）。
檢查電路與絕緣：避免線路老化引發短路或漏電。
測試運轉電流：確保壓縮機與風扇馬達負載正常。

三、年度深度保養（每年1次）
1. 冷媒循環系統檢查
項目：
使用電子檢漏儀檢查管路、閥門與接頭是否洩漏。
回收舊冷媒並重新定量充填（需持證技師操作）。

2. 馬達與軸承維護
項目：
潤滑風扇馬達軸承（使用耐高溫黃油）。
檢查皮帶張力（商用大型空調）或無刷馬達驅動狀態。

3. 控制系統校準
項目：
清潔紅外線接收器與遙控器接點。
更新電路板韌體（部分智慧型空調支援）。
校正溫度感測器，避免溫控誤差。`,
  '冷氣維修': `冷氣唔凍？漏水？成日熄機？
我哋快修專家30分鐘到場，即場診斷！
🚨 常見急修問題

✅ 完全唔凍：雪種漏、壓縮機故障
✅ 滴水漏冰：排水管塞、隔熱棉老化
✅ 自動熄機：電子板短路、過熱保護
✅ 怪聲異味：風扇摩打損壞、霉菌滋生
💎 維修優勢

✔ 原廠零件｜日本/外國品牌專用配件
✔ 免檢查費｜維修後先收錢（不成功不收費）
✔ 資深團隊｜15年經驗，專攻疑難雜症
✔ 價錢透明｜WhatsApp 62156152 即時報價，絕無隱藏收費
💰 限時優惠（至8月31日）

🔥 急修特快服務：3小時內到場 ➔ 9折
🔥 長者優惠：60歲以上 ➔ 免$500上門費
📍 服務流程

    WhatsApp報料：拍片講症狀更快報價

    師傅上門：攜帶專業檢測儀器

    即場維修：80%問題1小時內搞掂

    保養跟進：維修後享3個月保養期

📞 24小時緊急熱線

📲 電話：62156152
⏰ 營業時間：
平日 9:00-18:00｜假日 9:00-13:00

（暴雨/打風照常服務）
❗ 維修小貼士

⚠️ 冷氣突然停機？先試：

    關電源15分鐘重啟

    清洗隔塵網

    檢查遙控器電池

「最怕拖症！細問題變大修理，早Call早著數！」

需要其他服務（清洗/安裝）？我哋一條龍幫到手！ 😊`,
  '通風工程': `通風工程是建築環境與能源應用工程的重要分支，主要涉及空氣的輸送、分配、淨化及環境控制，目的是保障室內空氣品質（IAQ）、溫度適宜，並滿足安全或製程需求。

主要功能：
- 改善空氣品質：排出污濁空氣（如CO₂、甲醛、粉塵），引入新鮮空氣
- 控制溫濕度：配合空調系統調節環境舒適度或製程需求（如電子廠房需恆濕）
- 安全排煙/排毒：火災時排出煙霧（防排煙系統），或實驗室/工廠排除有害氣體（如化學廢氣）
- 節能環保：透過熱回收裝置（如全熱交換器）減少能量損失

應用場景：
- 民用建築：住宅、商場、辦公大樓（如新風系統、地下車庫通風）
- 工業領域：工廠車間（焊接煙塵排放）、無塵室（醫院、晶片廠的無塵環境）
- 特殊場所：隧道（縱向/橫向通風）、地鐵站、地下空間（機械加壓送風）
- 災害防控：火災時的排煙系統（如樓梯間正壓送風阻隔煙氣）

系統類型：
- 自然通風：利用風壓、熱壓（如建築中庭設計）
- 機械通風：
  - 全面通風：整體換氣（如辦公室新風）
  - 局部通風：針對性抽排（如實驗室通風櫃、廚房油煙罩）
- 混合通風：結合自然與機械方式（如智慧控制的開窗+風扇連動）

關鍵設備：
- 風扇：軸流風扇、離心風機（依風壓需求選擇）
- 風管：鍍鋅鐵皮、酚醛複合管等（需保溫防結露）
- 淨化裝置：過濾器（PM2.5）、活性碳吸附（VOCs）、UV殺菌
- 控制系統：感知器（CO₂監測）連動變頻風機調節風量

設計要點：
- 風量計算：依人數、污染源或換氣次數（如廚房15-20次/小時）
- 氣流組織：優化送風口/回風口位置避免死角（如手術室層流送風）
- 噪音控制：選用低噪音設備，加裝消音器
- 能源效率標準：符合LEED、WELL等綠建築認證要求

相關規範：
- 國際：ASHRAE標準（美國）、EN 13779（歐盟）`,
  '供應零售': `🏠 想買冷氣？配件唔齊？我哋幫你搞掂！
❄️ 冷氣機零售

✅ 分體式、窗口式、移動式，各大品牌齊全（Panasonic、格力、美的等）
✅ 包基本安裝，師傅上門睇位，唔使擔心裝唔到！
✅ 節能型號，一級能源標籤，長開都唔肉赤！

💡 優惠推廣：
📢 即日起至7月31日，購買任何冷氣機有優惠！
🔧 冷氣配件及材料

✔ 雪種（R32 / R22 / R407C / R410A....）｜✔ 隔塵網（多種尺寸）
✔ 排水管 / 絕緣膠布｜✔ 遙控器（原廠/代用）
✔ 支架 / 防鏽螺絲｜✔ 清潔劑（蒸發器專用）

📌 溫馨提示： 冷氣配件唔好亂買！我哋有專業師傅幫你配對，唔怕買錯！
🏪 點解揀我哋？

✨ 門市現貨，唔使等！｜✨ 價錢公道，唔會劏客！
✨ 專業建議，唔會亂sell！｜✨ 售後保養，買得放心！
📞 立即查詢 / 訂購：

📲 WhatsApp：62156152
🏠 地址：屯門新平街2號屯門工業中心A座10樓A1室
⏰ 營業時間：朝9晚6（星期一至六）

🌬️ 冷氣機、配件、材料，一次過搞掂，唔使四圍撲！
（我哋唔止賣機，仲教你點保養，部機耐用啲！😉）`
};

const ProjectsPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  // 选择主分类
  const handleCategorySelect = (category: ProjectCategory) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  // 选择子分类
  const handleSubCategorySelect = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
  };

  // 返回上一级
  const handleBack = () => {
    if (selectedSubCategory) {
      setSelectedSubCategory(null);
    } else {
      setSelectedCategory(null);
    }
  };

  // 构建图片路径
  const getImagePaths = () => {
    const basePath = '/case/';
    let folderPath = '';
    
    if (selectedCategory) {
      folderPath += selectedCategory.folder + '/';
      
      if (selectedSubCategory) {
        folderPath += selectedSubCategory.folder + '/';
      }
    }
    
    return basePath + folderPath;
  };

  const getProjectImages = () => {
    // 子分类图片集合
    const subCategoryImages: Record<string, Record<string, string[]>> = {
      '中央空調': {
        '大金': ['Daikin-1 (2).jpg', 'Daikin-1 (3).jpg', 'Daikin-1 (4).jpg', 'Daikin-1 (5).jpg', 'Daikin-1 (6).jpg','Daikin-1 (7).jpg','Daikin-1 (8).jpg','Daikin-1 (9).jpg','Daikin-1 (10).jpg','Daikin-1 (11).jpg','central-air-conditioning.jpg'],
        '日立': ['Hitachi-1 (1).jpg', 'Hitachi-1 (2).jpg', 'Hitachi-1 (3).jpg', 'Hitachi-1 (4).jpg', 'Hitachi-1 (5).jpg', 'Hitachi-1 (6).jpg', 'Hitachi-1 (7).jpg', 'Hitachi-1 (8).jpg', 'Hitachi-1 (9).jpg', 'Hitachi-1 (10).jpg', 'Hitachi-1 (11).jpg', 'Hitachi-1 (12).jpg', 'Hitachi-1 (13).jpg', 'Hitachi-1 (14).jpg'],
        '特靈': ['Trane1/Trane-1 (1).jpg', 'Trane1/Trane-1 (2).jpg', 'Trane1/Trane-1 (3).jpg', 'Trane1/Trane-1 (4).jpg', 'Trane1/Trane-1 (5).jpg', 'Trane1/Trane-1 (6).jpg', 'Trane1/Trane-1 (7).jpg', 'Trane1/Trane-1 (8).jpg', 'Trane1/Trane-1 (9).jpg', 'Trane2/Trane-1 (1).jpg', 'Trane2/Trane-1 (2).jpg', 'Trane2/Trane-1 (3).jpg'],
        '開利': ['Carrier1/Carrier-1 (1).jpg', 'Carrier1/Carrier-1 (2).jpg', 'Carrier1/Carrier-1 (3).jpg', 'Carrier1/Carrier-1 (4).jpg', 'Carrier1/Carrier-1 (5).jpg', 'Carrier1/Carrier-1 (6).jpg', 'Carrier1/Carrier-1 (7).jpg', 'Carrier1/Carrier-1 (8).jpg', 'Carrier1/Carrier-1 (9).jpg', 'Carrier1/Carrier-1 (10).jpg', 'Carrier1/Carrier-1 (11).jpg', 'Carrier1/Carrier-1 (12).jpg', 'Carrier2/Carrier-1 (1).jpg', 'Carrier2/Carrier-1 (2).jpg', 'Carrier2/Carrier-1 (3).jpg', 'Carrier2/Carrier-1 (4).jpg', 'Carrier2/Carrier-1 (5).jpg', 'Carrier3/Carrier-1 (1).jpg', 'Carrier3/Carrier-1 (2).jpg', 'Carrier3/Carrier-1 (3).jpg', 'Carrier3/Carrier-1 (4).jpg', 'Carrier4/Carrier-1 (1).jpg', 'Carrier4/Carrier-1 (2).jpg', 'Carrier4/Carrier-1 (3).jpg', 'Carrier5/Carrier-1 (1).jpg', 'Carrier5/Carrier-1 (2).jpg', 'Carrier5/Carrier-1 (3).jpg', 'Carrier5/Carrier-1 (4).jpg', 'Carrier5/Carrier-1 (5).jpg', 'Carrier5/Carrier-1 (6).jpg', 'Carrier5/Carrier-1 (7).jpg'],
        '麥克維爾': ['McQuay-1 (1).png', 'McQuay-1 (2).png', 'McQuay-1 (3).png', 'McQuay-1 (4).png', 'McQuay-1 (5).png'],
        '丹佛斯': ['danfoss-1 (1).jpg', 'danfoss-1 (2).jpg', 'danfoss-1 (3).jpg', 'danfoss-1 (4).jpg', 'danfoss-1 (5).jpg', 'danfoss-1 (6).jpg', 'danfoss-1 (7).jpg', 'danfoss-1 (8).jpg'],
        'FAN COIL': ['FAN COIL -1 (1).jpg', 'FAN COIL -1 (2).jpg', 'FAN COIL -1 (3).jpg', 'FAN COIL -1 (4).jpg'],
      },
      'VRV及VRF多聯機': {
        '大金': ['DAIKIN-1.jpg', 'DAIKIN-2.jpg', 'DAIKIN-3.jpg', 'DAIKIN-4.jpg', 'DAIKIN-5.jpg', 'DAIKIN-6.jpg', 'DAIKIN-7.jpg', 'DAIKIN-8.jpg', 'DAIKIN-9.jpg', 'DAIKIN-10.jpg', 'DAIKIN-11.jpg', 'DAIKIN-12.jpg', 'DAIKIN-13.jpg', 'DAIKIN-14.jpg', 'DAIKIN-15.jpg', 'DAIKIN-16.jpg', 'DAIKIN-17.jpg', 'DAIKIN-18.jpg', 'DAIKIN-19.jpg', 'DAIKIN-20.jpg', 'DAIKIN-21.jpg', 'DAIKIN-22.jpg', 'DAIKIN-23.jpg', 'DAIKIN-24.jpg'],
        '日立': ['Hitachi-1.jpg', 'Hitachi-2.jpg', 'Hitachi-3.jpg', 'Hitachi-4.jpg'],
        '三星': ['Samsung-1.jpg', 'Samsung-2.jpg', 'Samsung-3.jpg', 'Samsung-4.jpg', 'Samsung-5.jpg', 'Samsung-6.jpg'],
        '三菱重工': ['Mitsubishi Heavy Industries-1.jpg', 'Mitsubishi Heavy Industries-2.jpg', 'Mitsubishi Heavy Industries-3.jpg', 'Mitsubishi Heavy Industries-4.jpg', 'Mitsubishi Heavy Industries-5.jpg', 'Mitsubishi Heavy Industries-6.jpg', 'Mitsubishi Heavy Industries-7.jpg', 'Mitsubishi Heavy Industries-8.jpg', 'Mitsubishi Heavy Industries-9.jpg'],
        '三菱電機': ['Mitsubishi Electric-1.jpg', 'Mitsubishi Electric-2.jpg', 'Mitsubishi Electric-3.jpg', 'Mitsubishi Electric-4.jpg', 'Mitsubishi Electric-5.jpg', 'Mitsubishi Electric-6.jpg', 'Mitsubishi Electric-7.jpg'],
        '東芝': ['Toshiba-1.jpg', 'Toshiba-2.jpg', 'Toshiba-3.jpg', 'Toshiba-4.jpg', 'Toshiba-5.jpg', 'Toshiba-6.jpg'],
        '珍寶': ['GENERAL-1.jpg', 'GENERAL-2.jpg', 'GENERAL-3.jpg', 'GENERAL-4.jpg', 'GENERAL-5.jpg', 'GENERAL-6.jpg'],
        '美的': ['Midea-1.jpg', 'Midea-2.jpg', 'Midea-3.jpg'],
        '麥克維爾': ['McQuay-1.png', 'McQuay-2.png', 'McQuay-3.png', 'McQuay-4.jpg', 'McQuay-5.jpg', 'McQuay-6.png'],
      },
      '冷氣維修': {
        '冷水泵': ['chillawaterpump-1-1.jpeg', 'chillawaterpump-1-2.jpeg', 'chillawaterpump-1-3.jpeg', 'chillawaterpump-1-4.jpeg', 'chillawaterpump-1-5.jpeg', 'chillawaterpump-1-6.jpeg', 'chillawaterpump-1-7.jpeg', 'chillawaterpump-1-8.jpeg', 'chillawaterpump-1-9.jpeg', 'chillawaterpump-1-10.jpeg', 'chillawaterpump-1-11.jpeg', 'chillawaterpump-1-12.jpeg', 'chillawaterpump-1-13.jpeg', 'chillawaterpump-1-14.jpeg', 'chillawaterpump-1-15.jpeg', 'chillawaterpump-1-16.jpeg', 'chillawaterpump-1-17.jpeg', 'chillawaterpump-1-18.jpeg', 'chillawaterpump-1-19.jpeg', 'chillawaterpump-1-20.jpeg', 'chillawaterpump-1-21.jpeg'],
        'motor': ['motor-1-1.jpg', 'motor-1-2.jpg', 'motor-1-3.jpg', 'motor-1-4.jpg', 'motor-1-5.jpg', 'motor-1-6.jpg', 'motor-1-7.jpg', 'motor-1-8.jpg'],
        'other repair': ['other repair1 (1).jpg', 'other repair1 (2).jpg', 'other repair1 (3).jpg', 'other repair1 (4).jpg', 'other repair1 (5).jpg', 'other repair1 (6).jpg', 'other repair1 (7).jpg', 'other repair1 (8).jpg', 'other repair1 (9).jpg', 'other repair1 (10).jpg', 'other repair1 (11).jpg', 'other repair1 (12).jpg']
      }
    };

    // 主分类图片集合（没有子分类的项目）
    const mainCategoryImages: Record<string, string[]> = {
      '通風工程': ['ventilation.png', 'airduct-2.png', 'airduct-3.png', 'airduct-4.png', 'airduct-5.png', 'airduct-6.png', 'airduct-7.jpeg', 'airduct-8.jpeg', 'airduct-9.jpeg', 'airduct-10.jpeg'],
      '安裝冷氣': ['Install air conditioner-1 (1).jpeg', 'Install air conditioner-1 (2).jpeg', 'Install air conditioner-1 (3).jpeg', 'Install air conditioner-1 (4).jpeg', 'Install air conditioner-1 (5).jpeg', 'Install air conditioner-1 (6).jpeg', 'Install air conditioner-1 (7).jpeg', 'Install air conditioner-1 (8).jpeg', 'Install air conditioner-1 (9).jpeg', 'Install air conditioner-1 (10).jpeg', 'Install air conditioner-1 (11).jpeg', 'Install air conditioner-1 (12).jpeg', 'Install air conditioner-1 (13).jpeg', 'Install air conditioner-1 (14).jpeg', 'Install air conditioner-1 (15).jpeg', 'Install air conditioner-1 (1).png', 'Install air conditioner-1 (2).png'],
      '清洗冷氣': ['Cleaning the air conditioner1 (1).jpg', 'Cleaning the air conditioner1 (2).jpg', 'Cleaning the air conditioner1 (1).png', 'Cleaning the air conditioner1 (2).png', 'Cleaning the air conditioner1 (3).png', 'Cleaning the air conditioner1 (4).png', 'Cleaning the air conditioner1 (5).png', 'Cleaning the air conditioner1 (6).png'],
      '冷氣保養': ['ps.jpg'],
      '供應零售': ['aircon-1 (1).jpg', 'aircon-1 (12).jpg', 'aircon-1 (13).jpg', 'aircon-1 (14).jpg', 'aircon-1 (15).jpg', 'aircon-1 (16).jpg', 'aircon-1 (17).jpg', 'aircon-1 (18).jpg', 'aircon-1 (19).jpg', 'aircon-1 (20).jpg', 'aircon-1 (21).jpg', 'aircon-1 (22).jpg', 'aircon-1 (23).jpg', 'aircon-1 (24).jpg', 'aircon-1 (25).JPG', 'aircon-1 (1).png']
    };

    // 返回图片数组
    if (selectedCategory && selectedSubCategory) {
      // 如果选择了子分类，返回子分类的图片
      return subCategoryImages[selectedCategory.folder]?.[selectedSubCategory.folder] || [];
    } else if (selectedCategory) {
      // 如果只选择了主分类
      if (selectedCategory.subCategories) {
        // 如果主分类有子分类但没有选择子分类，返回空数组（由界面显示子分类列表）
        return [];
      } else {
        // 如果主分类没有子分类，直接返回主分类的图片
        return mainCategoryImages[selectedCategory.folder] || [];
      }
    }
    
    // 默认返回空数组
    return [];
  };

  return (
    <Layout 
      title="工程案例 | AirCon88" 
      description="查看我們的工程案例，包括中央空調、VRV/VRF系統、冷氣安裝、清洗、維修與保養等專業服務的成功案例。"
    >
      <div className={styles.projectsContainer}>
        <h1 className={styles.pageTitle}>工程案例</h1>
        
        {selectedCategory && (
          <div className={styles.breadcrumb}>
            <button className={styles.backButton} onClick={handleBack}>
              返回
            </button>
            <span>{selectedCategory.title}</span>
            {selectedSubCategory && <span> &gt; {selectedSubCategory.title}</span>}
          </div>
        )}

        {!selectedCategory ? (
          <div className={styles.categoryGrid}>
            {projectCategories.map((category) => (
              <div 
                key={category.id} 
                className={styles.categoryCard}
                onClick={() => handleCategorySelect(category)}
              >
                <h2>{category.title}</h2>
                {category.subCategories && (
                  <p className={styles.subCategoriesHint}>
                    {category.subCategories.length} 個子分類
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : selectedCategory.subCategories && !selectedSubCategory ? (
          <>
            <div className={styles.categoryGrid}>
              {selectedCategory.subCategories.map((subCategory) => (
                <div 
                  key={subCategory.id} 
                  className={styles.categoryCard}
                  onClick={() => handleSubCategorySelect(subCategory)}
                >
                  <h2>{subCategory.title}</h2>
                </div>
              ))}
            </div>
            {categoryBios[selectedCategory.folder] && (
              <div className={styles.categoryBio}>
                {categoryBios[selectedCategory.folder].split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.imageGrid}>
              {getProjectImages().map((image, index) => (
                <div key={index} className={styles.imageCard}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={`${getImagePaths()}${image}`}
                      alt={`工程案例 ${index + 1}`}
                      width={300}
                      height={200}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            {!selectedSubCategory && categoryBios[selectedCategory.folder] && (
              <div className={styles.categoryBio}>
                {categoryBios[selectedCategory.folder].split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProjectsPage; 