# Stage 1: Build
FROM node:20-alpine AS build-stage
WORKDIR /app

# 只複製 package.json（不複製 lock 文件）
# 因為 lock 文件在 Windows 上生成，包含 Windows 平台的 Rollup 二進位
# 在 Alpine Linux 上需要重新解析正確的 rollup-linux-arm64-musl
COPY package.json ./
RUN npm install

# 複製剩餘源代碼
COPY . .

# 直接用 npx 呼叫 vite
RUN npx vite build

# Stage 2: Production (Nginx 靜態服務)
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
