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
# 注入快取破壞設定：index.html no-cache，靜態資源長快取
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Level 3: 讓 nginx 以非 root user(101) 執行
# 預建快取目錄並移交產權，避免 Permission denied
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
    && chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/log/nginx \
    && touch /var/run/nginx.pid \
    && chown nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
