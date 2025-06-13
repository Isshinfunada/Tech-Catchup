# 週次タスク一覧

## Week 1: 開発基盤
- [ ] Apple Container のドキュメント確認
- [ ] Apple Container をインストールし動作を確認
- [ ] tmux を導入して `~/.tmux.conf` を作成
- [ ] Neovim に LSP プラグインを設定
- [ ] Colima をインストールしてバックアップ環境を用意

## Week 2: App A 完了
- [ ] Bun をインストール
- [ ] Hono プロジェクトを作成
- [ ] CRUD エンドポイントを実装
- [ ] OpenAPI 3.1 定義 `api.yaml` を自動生成
- [ ] CI で `api.yaml` を公開

## Week 3: App B 着手
- [ ] Flutter 開発環境を構築
- [ ] ログイン画面など基本 UI を作成
- [ ] Supabase Auth を組み込む
- [ ] Realtime 機能でチャットを実装
- [ ] Firebase FCM を設定して Push 通知を確認

## Week 4: gRPC 基盤
- [ ] Rust toolchain をインストール
- [ ] `proto` ファイルを作成
- [ ] gRPC コード生成を実行
- [ ] tonic を使ったサーバの雛形を動かす

## Week 5: 分析強化
- [ ] DuckDB を導入して ETL スクリプトを書く
- [ ] 変換結果を Parquet/CSV として出力
- [ ] Snowflake への接続設定を行う
- [ ] DuckDB からデータを Snowflake にロード
- [ ] ロード後のテーブルを確認

## Week 6: App D 着手
- [ ] Python 仮想環境を準備
- [ ] FastAPI のプロジェクト雛形を作成
- [ ] LangChain を導入し Retriever を実装
- [ ] Snowflake をベクトルストアとして接続
- [ ] RAG API を公開

## Week 7: E2E 統合
- [ ] gRPC-Gateway を設定し REST/gRPC 両対応にする
- [ ] Flutter クライアントから各 API を呼び出す
- [ ] 全体フローの統合テストを実施

## Week 8: 本番相当
- [ ] Cloud Run 用 Dockerfile と Build 設定を整備
- [ ] CI/CD パイプラインで自動デプロイ
- [ ] k6 を用いて負荷試験を実行
- [ ] 結果に基づき Cloud Run の設定を調整
