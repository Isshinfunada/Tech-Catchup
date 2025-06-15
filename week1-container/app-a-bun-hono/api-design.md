# リアルタイムチャットAPI設計

## 基本仕様

### ルーム管理
- **最大参加者数**: 5人
- **自動クローズ**: 5分間メッセージ受信なしで自動終了
- **ルーム状態**: active, inactive, closed
- **アクセス制御**: 招待制（作成者が招待コードを生成・管理）

### ユーザー管理
- **参加方法**: ルーム作成 or 既存ルーム参加
- **ユーザー識別**: 一意ID（UUID）とニックネーム

## API エンドポイント設計

### 1. ルーム管理API (REST)

#### ルーム作成
```http
POST /api/rooms
Content-Type: application/json

{
  "creatorName": "太郎"
}

Response:
{
  "roomId": "room_123",
  "creatorId": "user_456", 
  "inviteCode": "ABC123XYZ",
  "status": "active",
  "participantCount": 1,
  "createdAt": "2025-06-15T12:00:00Z"
}
```

#### ルーム参加
```http
POST /api/rooms/join
Content-Type: application/json

{
  "userName": "花子",
  "inviteCode": "ABC123XYZ"
}

Response:
{
  "userId": "user_789",
  "roomInfo": {
    "roomId": "room_123",
    "status": "active",
    "participantCount": 2,
    "participants": ["太郎", "花子"]
  }
}
```

#### ルーム一覧取得
```http
GET /api/rooms

Response:
{
  "rooms": [
    {
      "roomId": "room_123",
      "status": "active", 
      "participantCount": 2,
      "lastActivity": "2025-06-15T12:05:00Z"
    }
  ]
}
```

### 2. メッセージAPI (REST)

#### メッセージ送信
```http
POST /api/rooms/{roomId}/messages
Content-Type: application/json

{
  "userId": "user_456",
  "message": "こんにちは！"
}

Response:
{
  "messageId": "msg_001",
  "timestamp": "2025-06-15T12:05:30Z",
  "status": "sent"
}
```

#### メッセージ履歴取得
```http
GET /api/rooms/{roomId}/messages?limit=50&before=msg_001

Response:
{
  "messages": [
    {
      "messageId": "msg_001",
      "userId": "user_456",
      "userName": "太郎",
      "message": "こんにちは！",
      "timestamp": "2025-06-15T12:05:30Z"
    }
  ],
  "hasMore": false
}
```

### 3. リアルタイム通信 (WebSocket)

#### 接続エンドポイント
```
WebSocket: /ws/rooms/{roomId}
Query: userId={userId}
```

#### WebSocketメッセージ形式

**入力（クライアント → サーバー）**
```json
{
  "type": "message",
  "data": {
    "message": "リアルタイムメッセージです"
  }
}

{
  "type": "typing",
  "data": {
    "isTyping": true
  }
}
```

**出力（サーバー → クライアント）**
```json
{
  "type": "message",
  "data": {
    "messageId": "msg_002",
    "userId": "user_789", 
    "userName": "花子",
    "message": "リアルタイムメッセージです",
    "timestamp": "2025-06-15T12:06:00Z"
  }
}

{
  "type": "user_joined",
  "data": {
    "userId": "user_999",
    "userName": "次郎",
    "participantCount": 3
  }
}

{
  "type": "room_closed",
  "data": {
    "reason": "inactivity_timeout"
  }
}
```

## データモデル

### Room
```typescript
interface Room {
  id: string;
  status: 'active' | 'inactive' | 'closed';
  participants: Map<string, User>;
  messages: Message[];
  createdAt: Date;
  lastActivity: Date;
  maxParticipants: number;
  inactivityTimeout: number; // 5分 = 300000ms
}
```

### User
```typescript
interface User {
  id: string;
  name: string;
  joinedAt: Date;
  isConnected: boolean;
}
```

### Message
```typescript
interface Message {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'system';
}
```

## 技術実装方針

### 1. 段階的実装
1. **Phase 1**: REST API（ルーム・メッセージ管理）
2. **Phase 2**: WebSocket統合（リアルタイム通信）
3. **Phase 3**: 自動クリーンアップ（タイムアウト処理）

### 2. データ永続化
- **初期**: インメモリ（学習目的）
- **拡張**: SQLite（ローカルファイル）

### 3. エラーハンドリング
- 参加者数上限チェック
- 不正なルームIDの処理
- WebSocket接続エラー対応

## 次ステップの学習ポイント

1. **Honoの基本ルーティング**
2. **TypeScript型定義とバリデーション** 
3. **WebSocket実装パターン**
4. **非同期処理とタイマー管理**
5. **エラーハンドリングとログ**

---

**作成日**: 2025-06-15
**仕様バージョン**: v1.0