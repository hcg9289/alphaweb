# Stage 1: Build
FROM node:20-alpine as build-stage
WORKDIR /app

# 利用 Docker cache，先處理依賴
COPY package*.json ./
# 使用 npm ci (Clean Install) 確保環境 100% 相同，且不會嘗試修改 package-lock.json
RUN npm install

# 複製剩餘源代碼
COPY . .
# 執行編譯 (Vite 會將結果輸出到 dist/)
RUN npm run build

# Stage 2: Production
FROM nginx:stable-alpine
# 將建置好的靜態檔案移入 Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
