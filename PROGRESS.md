# 週次タスク一覧

## Week 1: 開発基盤
### Apple Container
- [ ] ドキュメントを確認
- [ ] インストール
- [ ] サンプル起動で動作検証
### 開発環境
- [ ] tmux をインストール
- [ ] `~/.tmux.conf` を作成
- [ ] Neovim に LSP を設定
### Colima fallback
- [ ] Colima をインストール
- [ ] Apple Container 不調時の代替を確認

## Week 2: App A (Edge API + VM 隔離)
### Bun + Hono
- [ ] Bun をインストール
- [ ] Hono プロジェクトを作成
- [ ] CRUD エンドポイントを実装
- [ ] OpenAPI 3.1 定義 `api.yaml` を自動生成
- [ ] CI で `api.yaml` を公開
- [ ] Apple Container 上で Bun/Hono を起動
- [ ] VM 隔離が機能するか確認

## Week 3: App B 着手
### Flutter 基礎
- [ ] Flutter SDK をインストール
- [ ] ログイン画面など UI を作成
- [ ] Claude Code で UI コードをブラッシュアップ
- [ ] Supabase Auth を組み込む
- [ ] Realtime チャットを実装
- [ ] Firebase FCM で Push 通知確認

## Week 4: App C gRPC 基盤
### Rust gRPC Server
- [ ] Rust toolchain をインストール
- [ ] `proto` ファイルを作成
- [ ] gRPC コード生成を実行
- [ ] tonic でサーバ雛形を動かす
- [ ] gRPC クライアントからテレメトリ送信
- [ ] 受信データをローカルに保存

## Week 5: App C 分析強化
### DuckDB → Snowflake
- [ ] DuckDB をインストール
- [ ] ETL スクリプトを実装
- [ ] Parquet/CSV 出力を確認
- [ ] Snowflake 接続を設定
- [ ] DuckDB から Snowflake へロード
- [ ] テーブル内容を検証
- [ ] サンプルデータで ETL をテスト

## Week 6: App D (LLM Doc QA)
### FastAPI + LangChain
- [ ] Python 仮想環境を準備
- [ ] FastAPI プロジェクト雛形を作成
- [ ] LangChain Retriever を実装
- [ ] Snowflake ベクトルストアを接続
- [ ] RAG API を公開
- [ ] OpenAPI ドキュメントを自動生成

## Week 7: E2E 統合
### 各アプリ連携
- [ ] gRPC-Gateway を設定 (REST/gRPC)
- [ ] Flutter クライアントから API 呼び出し
- [ ] 統合テストを実施
- [ ] docker compose で全サービス起動

## Week 8: 本番相当
### Cloud Run
- [ ] Dockerfile と Build 設定を整備
- [ ] CI/CD パイプラインで自動デプロイ
- [ ] k6 で負荷試験を実行
- [ ] 結果に基づき Cloud Run の設定を調整
- [ ] 最終デモを実施

