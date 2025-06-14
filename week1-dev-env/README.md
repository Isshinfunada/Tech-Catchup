# Week 1: 開発環境セットアップ

> Issue #3 関連 - tmux + Neovim開発環境構築

## 概要

効率的なバックエンド開発のため、tmuxとNeovim with LSPを設定しました。さらにAstroNvimを導入してモダンな開発環境を構築しています。

## 完了項目

### ✅ 基本環境
- [x] tmux 3.5a 動作確認済み
- [x] Neovim 0.11.1 動作確認済み  
- [x] ~/.tmux.conf 設定完了
- [x] AstroNvim v5.3.3 導入完了

### ✅ スキル習得
- [x] Neovim基本操作マスター（移動、編集、検索、置換）
- [x] tmux概念理解（セッション、ウィンドウ、ペイン）
- [x] AstroNvim機能習得（LSP、ファイル管理、Git統合）

## ファイル構成

```
week1-dev-env/
├── README.md                   # このファイル
├── env-setup-summary.md        # 完了レポート
├── neovim-tutorial.md          # Neovim基本操作ガイド
└── practice.txt                # 練習用サンプルファイル
```

## 技術スタック

- **tmux 3.5a**: ターミナルマルチプレクサ
- **Neovim 0.11.1**: モダンテキストエディタ
- **AstroNvim v5.3.3**: Neovimディストリビューション
- **LSP**: Language Server Protocol統合
- **Lazy.nvim**: プラグインマネージャー

## 主要な設定・操作

### tmux基本操作
```bash
tmux new -s session_name    # セッション作成
Ctrl+b d                    # デタッチ
tmux ls                     # セッション一覧
tmux a -t session_name      # アタッチ
```

### Neovimキーバインド
```
# 移動: hjkl, w/b, 0/$, gg/G
# 編集: i/a/o, x/dd, yy/p, u/Ctrl+r  
# 検索: /pattern, n/N
# 置換: :s///g, :%s///g
# ファイル: :w, :q, :e filename
```

### AstroNvim機能
```
:Neotree     # ファイルエクスプローラー
:Mason       # LSP・Formatter管理
:Lazy        # プラグイン管理
<Space>t     # ターミナルトグル
```

## 学習時間

約3時間（チュートリアル + 環境セットアップ）

## 関連リンク

- [Issue #3](https://github.com/Isshinfunada/Tech-Catchup/issues/3)
- [PR #11](https://github.com/Isshinfunada/Tech-Catchup/pull/11)

## 次のステップ

開発環境が整ったので、次はApple Container基盤構築（Issue #2）に進みます。