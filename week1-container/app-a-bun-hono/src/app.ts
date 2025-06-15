import { Hono } from 'hono'

// Honoアプリケーションを作成
const app = new Hono()

// 基本的なHello World API
app.get('/', (c) => {
  return c.text('Hello Hono! リアルタイムチャットAPI開発中...')
})

// ヘルスチェック用エンドポイント
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'realtime-chat-api'
  })
})

// API情報エンドポイント
app.get('/api', (c) => {
  return c.json({
    name: 'Realtime Chat API',
    version: '1.0.0',
    description: 'Bun + Hono で作るリアルタイムチャットAPI',
    endpoints: {
      health: '/health',
      rooms: '/api/rooms (coming soon)',
      messages: '/api/messages (coming soon)'
    }
  })
})

export default app