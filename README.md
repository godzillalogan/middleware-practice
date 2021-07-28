
# middleware-practice

## 功能說明
在路由裡加入一支 middleware，目標是「伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡，包括：

* 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
* 請求的 HTTP 方法
* URL
* 伺服器回應的時間

## 顯示畫面
![middleware](README/middleware.PNG)

## 環境建置
* express : 4.17.1"
* moment : 2.29.1"
* nodemon : 2.0.12

## 使用方法

1. 終端機輸入指令 
   `git clone https://github.com/godzillalogan/middleware-practice.git`
2. 進入專案 
   `cd middleware-practice`
3. 安裝相關套件 
   `npm install`
4. 開啟專案 
   `npm run dev`
5. 出現以下訊息就可以在localhost:3000開啟本專案
   `App is running on http://localhost:3000`