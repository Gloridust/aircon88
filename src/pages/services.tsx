import { NextPage } from 'next';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { useContactModal } from '@/pages/_app';

// 服務數據
const services = [
  {
    id: 1,
    title: '定期保養',
    description: '度身訂做合適的冷氣保養服務，延長設備壽命，確保運行效率，節省能源消耗。專業處理VRV/VRF系統。',
    detail: `
      <h4 class="text-lg font-bold mb-3">定期保養服務內容</h4>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>每年大洗冷氣系統，以高壓噴射式藥水清洗</li>
        <li>每月/季定期清洗隔塵網</li>
        <li>定期檢查機件</li>
        <li>VRV/VRF系統專業檢查維護</li>
        <li>保養期內免費上門檢查及維修冷氣系統，次數不限</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">保養建議</h4>
      <h5 class="font-bold mt-4 mb-2">一、冷氣保養（每月1次）</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>清潔濾網：關閉電源取下濾網，用吸塵器或軟毛刷清除灰塵，以清水沖洗後陰乾</li>
        <li>檢查出風口與外觀：擦拭葉片，檢查有無異物阻塞</li>
        <li>運轉測試：確認溫度、風速及排水是否正常</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">二、季度專業保養（每3-6個月）</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>室內機深度清潔：拆洗蒸發器、清潔冷凝水盤、檢查排水管</li>
        <li>室外機維護：清除散熱片灰塵、檢查支架與螺絲、清理周圍環境</li>
        <li>系統功能檢測：冷媒壓力測試、檢查電路與絕緣、測試運轉電流</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">三、年度深度保養（每年1次）</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>冷媒循環系統檢查：檢漏測試、冷媒回收與充填</li>
        <li>馬達與軸承維護：潤滑風扇馬達、檢查驅動狀態</li>
        <li>控制系統校準：清潔接收器、更新韌體、校正感測器</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">專業設備與工具</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>高壓清洗設備與專業清潔劑</li>
        <li>電子檢漏儀與壓力測試儀</li>
        <li>絕緣測試儀與雪種壓力錶</li>
      </ul>

      <p class="mb-3">定期保養可節省10-30%耗電量，延長設備壽命3-5年。如需度身訂做合適的冷氣保養服務，請致電：3188 0271</p>
      
      <p class="text-sm">本公司持有冷凍空調工程技師證照，提供專業VRV/VRF系統維護，保養期內免費上門檢查維修，次數不限。</p>
    `,
    image: '/services/maintenance.jpg',
    slug: 'maintenance'
  },
  {
    id: 2,
    title: '供應零售',
    description: '各大品牌冷氣機銷售，包括大金VRV/VRF系統、日立、三菱等知名品牌。',
    detail: `
      <h4 class="text-lg font-bold mb-3">我們供應的產品</h4>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>大金VRV/VRF系統（Daikin VRV/VRF System）</li>
        <li>大金（Daikin）</li>
        <li>珍寶（Chunbao）</li>
        <li>日立（Hitachi）</li>
        <li>樂聲（Lennox）</li>
        <li>美的（Midea）</li>
        <li>三菱重工（Mitsubishi Heavy Industries）</li>
        <li>三菱電機（Mitsubishi Electric）</li>
        <li>水泵、雪種、電子板、溫度掣、壓縮機、冷卻水塔、水冷式櫃機、風機盤管等</li>
      </ul>

      <p class="mb-3">我們的專業顧問會根據您的空間大小、使用需求和預算，推薦最適合的產品型號。</p>

      <p class="mb-4">所有產品均提供原廠保養，並可選購延長保養服務，確保您的投資得到長期保障。</p>
      <h4 class="text-lg font-bold mb-3">🏠 想買冷氣？配件唔齊？我哋幫你搞掂！</h4>
      <h5 class="font-bold mt-4 mb-2">❄️ 冷氣機零售</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>分體式、窗口式、移動式，各大品牌齊全（Panasonic、格力、美的等）</li>
        <li>包基本安裝，師傅上門睇位，唔使擔心裝唔到！</li>
        <li>節能型號，一級能源標籤，長開都唔肉赤！</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">💡 優惠推廣</h5>
      <p class="mb-3">📢 即日起至7月31日，購買任何冷氣機有優惠！</p>

      <h5 class="font-bold mt-4 mb-2">🔧 冷氣配件及材料</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>雪種（R32 / R22 / R407C / R410A....）</li>
        <li>隔塵網（多種尺寸）</li>
        <li>排水管 / 絕緣膠布</li>
        <li>遙控器（原廠/代用）</li>
        <li>支架 / 防鏽螺絲</li>
        <li>清潔劑（蒸發器專用）</li>
      </ul>

      <p class="mb-3">📌 溫馨提示：冷氣配件唔好亂買！我哋有專業師傅幫你配對，唔怕買錯！</p>

      <h5 class="font-bold mt-4 mb-2">🏪 點解揀我哋？</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>門市現貨，唔使等！</li>
        <li>價錢公道，唔會劏客！</li>
        <li>專業建議，唔會亂sell！</li>
        <li>售後保養，買得放心！</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">📞 立即查詢 / 訂購</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📲 WhatsApp：62156152</li>
        <li>🏠 地址：屯門新平街2號屯門工業中心A座10樓A1室</li>
        <li>⏰ 營業時間：朝9晚6（星期一至六）</li>
      </ul>

      <p class="mb-3">🌬️ 冷氣機、配件、材料，一次過搞掂，唔使四圍撲！</p>
      <p>我哋唔止賣機，仲教你點保養，部機耐用啲！😉</p>
    `,
    image: '/services/retail.jpg',
    slug: 'retail'
  },
  {
    id: 3,
    title: '安裝冷氣',
    description: '提供各類型冷氣機安裝服務，包括分體式、窗口式、天花式等。',
    detail: `
      <h4 class="text-lg font-bold mb-3">🛠️ 安裝工程服務範圍</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>各類型冷氣機安裝 - 適合家居和小型辦公室</li>
        <li>風機盤管安裝 - 提供高效的空氣流通</li>
        <li>水冷式櫃機安裝 - 適合商業和辦公空間</li>
        <li>冷卻水塔安裝 - 適合大型辦公室和商業場所</li>
        <li>雪種銅喉安裝 - 確保冷氣系統的高效運行</li>
        <li>去水系統安裝 - 防止漏水和異味</li>
        <li>散熱架安裝 - 提高設備的散熱效率</li>
        <li>冷凍水喉安裝 - 確保冷卻效果</li>
        <li>白鐵風喉安裝 - 提供耐用的通風解決方案</li>
        <li>抽風系統安裝 - 改善室內空氣質素</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">🔥 夏天熱到爆？新冷氣買咗但未裝？</h4>
      <p class="mb-3">🚀 我哋專業安裝團隊，快、靚、正幫你搞掂！</p>

      <h5 class="font-bold mt-4 mb-2">💯 點解要揀我哋？</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✅ 原廠認證安裝團隊，唔會裝完漏雪種</li>
        <li>✅ 包量位、包設計，唔會裝完先發現唔夠凍</li>
        <li>✅ 明碼實價，唔會裝完先話要加錢</li>
        <li>✅ 提供保養，安裝後有問題即跟進</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">🔧 安裝服務包括</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✔ 分體式冷氣安裝（窗口式、掛牆式、天花式）</li>
        <li>✔ 專業鑽孔、接駁雪種喉、排水喉</li>
        <li>✔ 電線接駁及安全測試</li>
        <li>✔ 基本試機及操作教學</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">💰 安裝套餐優惠</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📢 標準安裝（1對1分體機）：1,200起</li>
        <li>📢 窗口式分體冷氣安裝：1,000起</li>
        <li>📢 窗口式冷氣安裝**：600起</li>
        <li>📢 多聯機/VRV/VFV系統：免費上門報價</li>
      </ul>

      <p class="mb-3">🎁 限時優惠：即日起至8月31日</p>

      <h5 class="font-bold mt-4 mb-2">📞 立即預約</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📲 WhatsApp速報價：62156215</li>
        <li>🏠 服務範圍：全港九新界</li>
        <li>⏰ 最快即日上門（緊急安裝可安排夜間服務）</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">⚠️ 溫馨提示</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>1️⃣ 安裝前請確認冷氣型號及尺寸</li>
        <li>2️⃣ 高層單位或特殊位置需額外評估</li>
        <li>3️⃣ 建議冷氣使用前先做基本清潔</li>
      </ul>

      <p class="mb-3">❄️ 專業安裝，冷氣先會夠凍又耐用！</p>
      <p class="mb-3">（我哋唔止裝機，仲教你點保養，部機用多幾年都得！）</p>

      <p>需要調整內容或查詢其他服務，隨時聯絡我哋！ 😊</p>
    `,
    image: '/services/installation.jpg',
    slug: 'installation'
  },
  {
    id: 4,
    title: '清洗冷氣',
    description: '清洗各類型冷氣設備，徹底清除積塵、黴菌和細菌，改善室內空氣質素。',
    detail: `
      <h4 class="text-lg font-bold mb-3">🧹 冷氣清洗服務內容</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✔ 清洗各類型冷氣機</li>
        <li>✔ 中央冷氣系統清洗</li>
        <li>✔ 水冷式櫃機運炮清潔</li>
        <li>✔ 大型水塔清洗</li>
        <li>✔ 隔塵網、水泵、水喉清洗</li>
        <li>✔ 水盤、風喉、風管清潔</li>
        <li>✔ 通風系統全面清洗</li>
      </ul>

      <p class="mb-3">🌿 我哋採用環保清潔劑同專業設備，確保清洗效果徹底，唔會損壞設備。</p>

      <p class="mb-3">⏰ 溫馨提示：建議每3-6個月做一次專業清洗，尤其係多塵、濕氣重或者有敏感人士嘅環境。</p>

    
      <h4 class="text-lg font-bold mb-3">💨 冷氣「噏味」頂唔順？ 🥵 越開越唔凍又嘥電？</h4>
      <p class="mb-3">🚿 我哋幫你徹底「大掃除」！</p>

      <h5 class="font-bold mt-4 mb-2">🔍 點解要洗冷氣？</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✅ 慳電！ 冷氣積塵散熱差，電費隨時貴 20%！</li>
        <li>✅ 冇臭味！ 霉菌、細菌滋生，一開機就「噏住陣味」？洗走佢！</li>
        <li>✅ 健康！ 塵蟎、PM2.5 吹出嚟，搞到鼻敏感、咳唔停？</li>
        <li>✅ 耐用！ 定期清洗，部機冇咁易壞，慳返維修錢！</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">✨ 我哋嘅服務特點</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✔ 專業拆洗：蒸發器、風扇葉、排水槽 徹底清潔，唔係齋抹表面！</li>
        <li>✔ 高溫殺菌：用 蒸汽+環保清潔劑，KO 霉菌同細菌！</li>
        <li>✔ 檢查隱患：順便幫你睇吓有冇塞排水管、漏雪種等問題！</li>
        <li>✔ 明碼實價：$500起/部，洗得乾淨又放心！</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">📅 優惠推廣</h5>
      <p class="mb-3">📢 預約清洗 2部或以上，即送 有優惠 ！</p>
      <p class="mb-3">（數量有限，快啲 WhatsApp 我哋啦！📲62156152）</p>

      <h5 class="font-bold mt-4 mb-2">👨🔧 適合邊啲人？</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>🏠 住家：屋企有細路、長輩，怕冷氣吹出嚟唔乾淨？</li>
        <li>🏢 辦公室：成日有人病？可能係冷氣太污糟！</li>
        <li>🍴 餐廳/店舖：冷氣「油煙味」勁？我哋幫你搞掂！</li>
      </ul>

      <p class="mb-3">📌 溫馨提示：冷氣機 每年至少洗1次，夏天前洗就最啱！</p>
      <p class="mb-3">📞 立即預約：62156152（同發冷氣工程有限公司）</p>

      <p class="mb-3">🌬️ 洗走污糟嘢，冷氣清新又夠凍！</p>
      <p>（你嘅健康同部機嘅壽命，就係咁簡單！😉）</p>
    `,
    image: '/services/cleaning.jpg',
    slug: 'cleaning'
  },
  {
    id: 5,
    title: '冷氣維修',
    description: '檢查及維修冷氣系統，快速診斷故障原因，提供專業維修服務。',
    detail: `
      <h4 class="text-lg font-bold mb-3">檢查及維修服務</h4>
      
      <h5 class="font-bold mt-4 mb-2">🔍 專業檢查項目</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✅ 散熱風扇機件及啤呤檢測</li>
        <li>✅ 分體機壓縮器狀況評估</li>
        <li>✅ 雪種壓力值測試</li>
        <li>✅ 出風量、出風溫度及回風溫度檢查</li>
        <li>✅ 送風機摩打、壓縮機及散熱扇運作檢查</li>
        <li>✅ 電壓值、電流值測量</li>
        <li>✅ 排水系統保溫情況評估</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">🛠️ 維修服務範圍</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✔ 設置冷氣開關掣</li>
        <li>✔ 包保溫處理</li>
        <li>✔ 加裝水泵</li>
        <li>✔ 更換摩打、電容器、電子板</li>
        <li>✔ 更換壓縮機</li>
        <li>✔ 更換室內機及室外機</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">💡 服務特點</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📌 上門檢查費用：$450起</li>
        <li>💰 如選用本公司維修服務，檢查費可扣減維修費用（洗機或入雪種除外）</li>
        <li>🔧 配備先進診斷工具，快速準確找出故障原因</li>
        <li>✨ 維修服務包括90天保養，確保設備穩定運行</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">冷氣唔凍？漏水？成日熄機？</h4>
      <p class="mb-3">我哋快修專家30分鐘到場，即場診斷！</p>

      <h5 class="font-bold mt-4 mb-2">🚨 常見急修問題</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✅ 完全唔凍：雪種漏、壓縮機故障</li>
        <li>✅ 滴水漏冰：排水管塞、隔熱棉老化</li>
        <li>✅ 自動熄機：電子板短路、過熱保護</li>
        <li>✅ 怪聲異味：風扇摩打損壞、霉菌滋生</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">💎 維修優勢</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✔ 原廠零件｜日本/外國品牌專用配件</li>
        <li>✔ 免檢查費｜維修後先收錢（不成功不收費）</li>
        <li>✔ 資深團隊｜15年經驗，專攻疑難雜症</li>
        <li>✔ 價錢透明｜WhatsApp 62156152 即時報價，絕無隱藏收費</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">💰 限時優惠（至8月31日）</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>🔥 急修特快服務：3小時內到場 ➔ 9折</li>
        <li>🔥 長者優惠：60歲以上 ➔ 免$500上門費</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">📍 服務流程</h5>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>WhatsApp報料：拍片講症狀更快報價</li>
        <li>師傅上門：攜帶專業檢測儀器</li>
        <li>即場維修：80%問題1小時內搞掂</li>
        <li>保養跟進：維修後享3個月保養期</li>
      </ul>

      <h5 class="font-bold mt-4 mb-2">📞 24小時緊急熱線</h5>
      <p class="mb-3">📲 電話：62156152</p>
      <p class="mb-3">⏰ 營業時間：</p>
      <p class="mb-3">平日 9:00-18:00｜假日 9:00-13:00</p>
      <p class="mb-3">（暴雨/打風照常服務）</p>

      <h5 class="font-bold mt-4 mb-2">❗ 維修小貼士</h5>
      <p class="mb-3">⚠️ 冷氣突然停機？先試：</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>關電源15分鐘重啟</li>
        <li>清洗隔塵網</li>
        <li>檢查遙控器電池</li>
      </ul>

      <p class="mb-3">「最怕拖症！細問題變大修理，早Call早著數！」</p>
      <p>需要其他服務（清洗/安裝）？我哋一條龍幫到手！ 😊</p>
    `,
    image: '/services/repair.png',
    slug: 'repair'
  },
  {
    id: 6,
    title: '牌照顧問',
    description: '通風証明、年檢、小型工程等牌照申請顧問服務。',
    detail: `
      <h4 class="text-lg font-bold mb-3">牌照顧問服務範圍</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>通風証明</li>
        <li>年檢</li>
        <li>小型工程</li>
        <li>小型工程文件（1,2,3級）</li>
        <li>核證食物業處所沒有違例建築工程 (違建工程) (UBW-1/UBW-2)</li>
        <li>結構工程師結構、負重報告 (AP/RSE)</li>
        <li>符合規定証明書A (衛生規定)</li>
        <li>符合規定証明書B (樓宇結構規定)</li>
        <li>符合規定証明書C (消防安全規定)</li>
        <li>符合規定証明書D (通風設施規定)</li>
        <li>通風系統數據表</li>
        <li>消防、通風週年檢查証明書 (FSI 251/AIC)</li>
        <li>電力安全証明書 (WR1 / WR2)</li>
        <li>氣體 (煤氣/石油氣) 開工及完工証明文件</li>
        <li>窗戶檢驗證明書</li>
      </ul>
      <p class="mb-3">我們熟悉香港各政府部門的法規要求，能夠協助客戶順利完成各類牌照申請。</p>
      <p>我們的顧問團隊包括註冊工程師和專業技術人員，確保所有文件和工程符合法定標準。</p>
    `,
    image: '/services/license.jpg',
    slug: 'license'
  },
  {
    id: 7,
    title: 'VRV及VRF多聯機',
    description: '專業安裝及維護VRV及VRF多聯機系統，提供高效的空調解決方案。',
    detail: `
      <h4 class="text-lg font-bold mb-3">🏢 商用/住宅多聯機冷氣有問題？我哋由設計到維修一條龍搞掂！</h4>
      <h4 class="text-lg font-bold mb-3">🔧 服務範圍</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✅ 專業維修：冷氣唔凍、漏水、出Error Code？即日上門檢查！</li>
        <li>✅ 新機安裝：日本大金/三菱/日立多聯機，包設計同埋工程跟進</li>
        <li>✅ 系統設計：幫你計準制冷量，慳電又夠凍，唔會裝完先發現唔夠力</li>
        <li>✅ 定期保養：簽約年保計劃，預防故障，延長機命</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">💎 我哋嘅優勢</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✔ 原廠認證技術團隊，唔會亂咁整</li>
        <li>✔ 用 專業儀器 檢查雪種壓力、電流，唔係齋睇表面</li>
        <li>✔ 提供 3D管道設計圖，CAD ，BIM，安裝前睇清楚</li>
        <li>✔ 明碼實價，唔會整完先話要加錢</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">💰 優惠推廣</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📢 新客首次維修：檢查費$1000(原價$1500)，維修再扣返</li>
        <li>📢 安裝套餐：包5匹主機+3台室內機，特價48,800起</li>
        <li>📢∗∗年保計劃∗∗：每年2次檢查+1次清洗，平均每月$800有找</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">📞 即刻聯絡我哋</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📲 WhatsApp報價：62156152（同發冷氣工程有限公司）</li>
        <li>🏠 公司地址：屯門新平街2號屯門工業中心A座10樓A1室</li>
        <li>⏰ 服務時間：朝9晚6（緊急情況24小時）</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">💡 客戶常見問題</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>❓ 「多聯機同普通分體機有咩分別？」</li>
        <li>👉 更慳位、更慳電，一拖十都得，適合辦公室、大單位</li>
        <li>❓ 「洗一次要幾錢？」</li>
        <li>👉 視乎台數，$500/台起，包消毒同檢查</li>
        <li>❓ 「安裝要幾耐？」</li>
        <li>👉 一般3-5個工作天，唔會影響你營業</li>
      </ul>
      <p class="mb-3">🏆 20年經驗團隊，過千宗成功案例，信心保證！</p>
    `,
    image: '/services/3.jpg',
    slug: 'vrv-vrf'
  },
  {
    id: 8,
    title: '中央空調',
    description: '提供中央空調系統的設計、安裝及維護服務，適合大型商業空間。',
    detail: `
      <h4 class="text-lg font-bold mb-3">中央空調服務內容</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>專業設計及安裝中央空調系統</li>
        <li>定期維護及檢查，確保系統運行效率</li>
        <li>提供故障排除及維修服務</li>
      </ul>
      <p class="mb-3">如需了解更多，請致電：3188 0271</p>

      <h4 class="text-lg font-bold mb-3">🏢 商用/住宅多聯機冷氣有問題？我哋由設計到維修一條龍搞掂！</h4>
      <h4 class="text-lg font-bold mb-3">🔧 服務範圍</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✅ 專業維修：冷氣唔凍、漏水、出Error Code？即日上門檢查！</li>
        <li>✅ 新機安裝：日本大金/三菱/日立多聯機，包設計同埋工程跟進</li>
        <li>✅ 系統設計：幫你計準制冷量，慳電又夠凍，唔會裝完先發現唔夠力</li>
        <li>✅ 定期保養：簽約年保計劃，預防故障，延長機命</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">💎 我哋嘅優勢</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>✔ 原廠認證技術團隊，唔會亂咁整</li>
        <li>✔ 用 專業儀器 檢查雪種壓力、電流，唔係齋睇表面</li>
        <li>✔ 提供 3D管道設計圖，CAD ，BIM，安裝前睇清楚</li>
        <li>✔ 明碼實價，唔會整完先話要加錢</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">💰 優惠推廣</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📢 新客首次維修：檢查費$1000(原價$1500)，維修再扣返</li>
        <li>📢 安裝套餐：包5匹主機+3台室內機，特價48,800起</li>
        <li>📢∗∗年保計劃∗∗：每年2次檢查+1次清洗，平均每月$800有找</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">📞 即刻聯絡我哋</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>📲 WhatsApp報價：62156152（同發冷氣工程有限公司）</li>
        <li>🏠 公司地址：屯門新平街2號屯門工業中心A座10樓A1室</li>
        <li>⏰ 服務時間：朝9晚6（緊急情況24小時）</li>
      </ul>
      <h4 class="text-lg font-bold mb-3">💡 客戶常見問題</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>❓ 「多聯機同普通分體機有咩分別？」</li>
        <li>👉 更慳位、更慳電，一拖十都得，適合辦公室、大單位</li>
        <li>❓ 「洗一次要幾錢？」</li>
        <li>👉 視乎台數，$500/台起，包消毒同檢查</li>
        <li>❓ 「安裝要幾耐？」</li>
        <li>👉 一般3-5個工作天，唔會影響你營業</li>
      </ul>
      <p class="mb-3">🏆 20年經驗團隊，過千宗成功案例，信心保證！</p>
    `,
    image: '/services/2.jpg',
    slug: 'central-air-conditioning'
  },
  {
    id: 9,
    title: '通風工程',
    description: '提供專業的通風系統設計及安裝服務，改善室內空氣質素。',
    detail: `
      <h4 class="text-lg font-bold mb-3">通風工程簡介</h4>
      <p class="mb-3">通風工程是建築環境與能源應用工程的重要分支，主要涉及空氣的輸送、分配、淨化及環境控制，目的是保障室內空氣品質（IAQ）、溫度適宜，並滿足安全或製程需求。</p>

      <h4 class="text-lg font-bold mb-3">主要功能</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>改善空氣品質：排出污濁空氣（如CO₂、甲醛、粉塵），引入新鮮空氣</li>
        <li>控制溫濕度：配合空調系統調節環境舒適度或製程需求</li>
        <li>安全排煙/排毒：火災時排出煙霧，或實驗室/工廠排除有害氣體</li>
        <li>節能環保：透過熱回收裝置減少能量損失</li>
      </ul>

      <h4 class="text-lg font-bold mb-3">應用場景</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>民用建築：住宅、商場、辦公大樓</li>
        <li>工業領域：工廠車間、無塵室</li>
        <li>特殊場所：隧道、地鐵站、地下空間</li>
        <li>災害防控：火災排煙系統</li>
      </ul>

      <h4 class="text-lg font-bold mb-3">系統類型</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>自然通風：利用風壓、熱壓</li>
        <li>機械通風：全面通風及局部通風</li>
        <li>混合通風：結合自然與機械方式</li>
      </ul>

      <h4 class="text-lg font-bold mb-3">關鍵設備</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>風扇：軸流風扇、離心風機</li>
        <li>風管：鍍鋅鐵皮、酚醛複合管等</li>
        <li>淨化裝置：過濾器、活性碳吸附、UV殺菌</li>
        <li>控制系統：感知器連動變頻風機調節風量</li>
      </ul>

      <h4 class="text-lg font-bold mb-3">設計要點</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>風量計算：依人數、污染源或換氣次數</li>
        <li>氣流組織：優化送風口/回風口位置避免死角</li>
        <li>噪音控制：選用低噪音設備，加裝消音器</li>
        <li>能源效率：符合LEED、WELL等綠建築認證要求</li>
      </ul>
    `,
    image: '/services/1.jpg',
    slug: 'ventilation'
  }
];

const ServicesPage: NextPage = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { openModal: openContactModal } = useContactModal();

  const openServiceModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Layout
      title="冷氣工程服務 | 冷氣安裝、維修、保養、清洗、檢查 | 大金VRV專家 - 同發冷氣工程"
      description="同發冷氣工程提供專業冷氣安裝、維修、保養、清洗及檢查服務，大金VRV/VRF系統專家，多年冷氣工程經驗，服務包括家用分體式及商用中央空調系統，覆蓋香港全區。"
    >
      <Head>
        <meta name="keywords" content="冷氣保養,冷氣檢查,檢查冷氣,VRV,VRF,大金,大金VRV,冷氣維修,維修冷氣,洗冷氣,冷氣工程,冷氣清洗,冷氣安裝,冷氣公司,服務範圍" />
        <link rel="canonical" href="https://www.aircon88.com/services" />
      </Head>

      {/* 頂部橫幅 */}
      <div className="relative bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-banner.jpg"
            alt="同發冷氣工程服務範圍"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">業務範圍</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            我們提供全方位冷氣工程服務，滿足不同客戶的需求
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>

      {/* 服務介紹部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">我們的服務</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們提供全方位冷氣工程服務，滿足各種客戶需求
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                id={service.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => openServiceModal(service)}
                    className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center"
                  >
                    了解更多
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服務流程部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">我們的服務流程</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              從預約到完工，我們提供專業、高效的服務流程，確保每一步都符合客戶期望
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">預約諮詢</h3>
                <p className="text-gray-600">電話或網上預約，我們的客服團隊會詳細了解您的需求</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">上門評估</h3>
                <p className="text-gray-600">專業技術人員上門評估，提供最適合的解決方案和報價</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">服務執行</h3>
                <p className="text-gray-600">按照約定時間執行服務，嚴格按照專業標準操作</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">完工確認</h3>
                <p className="text-gray-600">服務完成後，確認客戶滿意度，提供後續保養建議</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服務優勢部分 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">為什麼選擇我們？</h2>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">專業團隊</h3>
              <p className="text-center">擁有多年經驗的技術團隊，持有相關專業資格證書</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">快速響應</h3>
              <p className="text-center">特設冷氣工程車隊，快速響應客戶需求，提供及時服務</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">合理收費</h3>
              <p className="text-center">明碼實價，絕不含隱藏收費，提供詳細報價和服務說明</p>
            </div>
          </div>
        </div>
      </section>

      {/* 聯繫我們部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">需要我們的服務？</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            無論是家居、商業還是工業冷氣需求，我們都能提供專業的解決方案
          </p>
          <button 
            onClick={openContactModal}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white border border-primary transition-colors shadow-lg"
          >
            立即聯繫我們
          </button>
        </div>
      </section>

      {/* 服務詳情彈窗 */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 animate-fadeIn overflow-y-auto max-h-[90vh]">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedService.title}</h3>
                <div 
                  className="prose prose-lg max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: selectedService.detail }}
                />
                
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => {
                      closeModal();
                      openContactModal();
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-white text-primary hover:bg-primary hover:text-white border border-primary transition-colors shadow-md"
                  >
                    預約此服務
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ServicesPage; 