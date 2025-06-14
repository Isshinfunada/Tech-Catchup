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

#### Neovim基本操作チュートリアル
- インタラクティブな方式でNeovimの基本操作を習得
  - カーソル移動（`hjkl`, `w`, `b`, `0`, `$`, `gg`, `G`）
  - モード切り替え（`i`, `a`, `o`, `Esc`）
  - テキスト編集（`x`, `dd`, `dw`, `yy`, `p`, `u`, `Ctrl+r`）
  - ビジュアルモード（`v`, `V`, `Ctrl+v`）
  - ファイル操作（`:w`, `:q`, `:wq`, `:q!`）
  - 検索・置換（`/pattern`, `n`, `N`, `:s///g`, `:%s///g`）

#### AstroNvim導入
- 既存のNeovim設定をバックアップ後、AstroNvim v5.3.3をインストール
- 全プラグインの自動インストール完了
- モダンなUI、LSP統合、ファイル管理機能を利用可能に

#### tmux基本理解
- tmuxの目的と利点を理解：
  - ターミナルマルチプレクサとしての役割
  - セッション永続化による作業継続性
  - 画面分割による効率的なマルチタスク
- 基本的なセッション管理（作成、デタッチ、アタッチ）を実践

### 次回のタスク
- Issue #2
- Colima のフォールバック設定

### 質問・課題
特になし
---
