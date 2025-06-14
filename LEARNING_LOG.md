# Tech-Catchup 学習ログ

> 8週間のバックエンド開発ロードマップの学習記録とQ&A

## 2025-06-14 - Day 1

### 完了タスク
#### 開発環境セットアップ（tmux + Neovim）
- **tmux 3.5a** と **Neovim 0.11.1** が既にインストール済みであることを確認
- tmux設定ファイル（`~/.tmux.conf`）を作成
  - プレフィックスキーをCtrl-aに変更
  - Vimライクなペイン操作
  - マウス操作対応
  - 256色ターミナルサポート
  - エスケープ時間を短縮（Neovim用）
- Neovim LSP設定（`~/.config/nvim/init.lua`）を実装
  - lazy.nvim パッケージマネージャー
  - LSP-Zero フレームワーク
  - Mason（LSPサーバー管理）
  - 主要言語サポート: TypeScript/JavaScript, Rust, Python, Go, Lua
  - ファイルエクスプローラー、ファジーファインダー、Git統合
  - Tokyo Night カラーテーマ

### 学習メモ
- tmuxとNeovimが既にインストールされていたため、セットアップは設定ファイルの作成のみで完了
- LSP設定では、プロジェクトで使用予定の言語（TypeScript, Rust, Python, Go）に対応
- 次回Neovim起動時に自動的にプラグインがインストールされる仕組み

### 次回のタスク
- Apple Container の調査とセットアップ
- Colima のフォールバック設定

### 質問・課題
（今回は特になし）

---
