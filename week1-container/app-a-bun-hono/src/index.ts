import app from './app'

// サーバーのポート設定
const port = process.env.PORT || 3000

console.log(`🔥 Hono サーバーを起動中...`)
console.log(`📡 ポート: ${port}`)
console.log(`🌐 URL: http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}