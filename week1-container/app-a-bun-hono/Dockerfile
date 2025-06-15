# Bun + Hono開発環境用Dockerfile
FROM oven/bun:1.2.16

# 作業ディレクトリを設定
WORKDIR /app

# package.json と bun.lock をコピー（依存関係の効率的なインストール）
COPY package.json bun.lock* ./

# 依存関係をインストール
RUN bun install

# ソースコードをコピー
COPY . .

# ポートを公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["bun", "run", "dev"]