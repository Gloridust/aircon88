# 同發冷氣工程有限公司官方網站

這是同發冷氣工程有限公司的官方網站源代碼。該網站使用 Next.js 和 Tailwind CSS 構建，提供了公司服務、案例展示和聯繫方式等信息。

## 技術棧

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 類型安全的 JavaScript
- [React](https://reactjs.org/) - UI 庫

## 功能

- 響應式設計，適配各種設備
- SEO 優化
- 結構化數據標記
- 客戶案例展示
- 服務價目表
- 聯繫表單

## 設計說明

- 網站僅使用白色模式（Light Mode），不支持黑暗模式（Dark Mode）
- 按鈕和文字顏色經過優化，確保在各種設備上易於閱讀：
  - 主色調：藍色（#0066cc）
  - 次色調：深藍色（#004080）- 用於提高對比度和可讀性
- 按鈕樣式標準化為兩種類型：
  - 主要按鈕（Primary）：藍色背景，白色粗體字體 - 用於主要操作，如"立即聯繫我們"
  - 次要按鈕（Secondary）：白色背景，藍色粗體字體，藍色邊框 - 用於次要操作，如"查看更多客戶案例"、"服務價格"
  - 所有按鈕都有陰影效果和懸停狀態，提升用戶體驗
- 按鈕樣式交替使用原則：
  - 在同一區域中，如果有多個按鈕，應使用不同的樣式以區分主次關係
  - 在深色背景上的次要按鈕（Secondary）需要特殊處理，確保文字顏色可讀
- 鏈接採用底部邊框而非傳統下劃線，提升視覺效果

## 組件結構

- `Button.tsx` - 通用按鈕組件，提供標準化的按鈕樣式
  - 支持 primary 和 secondary 兩種變體
  - 支持 sm、md、lg 三種尺寸
  - 可通過 className 屬性進行自定義樣式擴展

## 圖片配置路徑

網站使用的圖片文件存放在以下路徑：

- **公司 Logo**: `/public/logo.jpeg` - 用於網站導航欄和頁腳（白底不透明圖片，無需上下留白）
- **網站圖標**: `/public/favicon.ico` - 用於瀏覽器標籤頁顯示
- **首頁橫幅背景**: `/public/hero-bg.jpg` - 首頁頂部大型橫幅背景
- **客戶案例圖片**: `/public/clients/` - 存放客戶案例相關圖片
  - 格式: `/public/clients/client-1.jpg`, `/public/clients/client-2.jpg` 等
  - 在 `src/components/ClientShowcase.tsx` 中配置
- **品牌展示圖片**: `/public/brands/` - 存放冷氣品牌相關圖片
  - 格式: `/public/brands/gree.png`, `/public/brands/daikin.png` 等
  - 在 `src/components/BrandShowcase.tsx` 中配置

如需更新或替換圖片，請確保新圖片與原圖片具有相同的文件名和格式，或者更新相應組件中的引用路徑。

## 開發

### 安裝依賴

```bash
npm install
# 或
yarn
```

### 運行開發服務器

```bash
npm run dev
# 或
yarn dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 構建生產版本

```bash
npm run build
# 或
yarn build
```

### 運行生產版本

```bash
npm run start
# 或
yarn start
```

## 部署

該網站可以部署到任何支持 Next.js 的平台，如 Vercel、Netlify 或自託管服務器。

## 聯繫信息

同發冷氣工程有限公司
- 電話：3188-0271
- 手機：6215-6152
- 傳真：3019-6274
- 電郵：cs.aircon88@gmail.com
- 地址：屯門新平街2號屯門工業中心A座10樓A1室
