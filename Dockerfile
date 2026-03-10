# Stage 1: Build
FROM node:20-alpine AS build-stage
WORKDIR /app

# 利用 Docker cache，先處理依賴
COPY package*.json ./
RUN npm install

# 複製剩餘源代碼
COPY . .

# 直接用 npx 呼叫 vite，繞過 npm script 路徑問題
RUN npx vite build

# Stage 2: Production (Nginx 靜態服務)
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
