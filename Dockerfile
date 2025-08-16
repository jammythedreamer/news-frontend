# Production Dockerfile - Multi-stage build
FROM node:22-alpine AS builder

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 의존성 파일 복사
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 코드 복사
COPY . .

# 프로덕션 빌드
RUN pnpm run build

# nginx 스테이지
FROM nginx:alpine

# nginx 설정 파일 추가
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드된 파일을 nginx html 디렉토리로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 포트 노출
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]