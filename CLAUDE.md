# CLAUDE.md

必ず日本語で回答してください。
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Tech-Catchup learning repository for an 8-week backend development roadmap. The project focuses on modern backend technologies and their integration across different application architectures.

## Key Technologies and Applications

The project involves building 6 sample applications (A-F) using various technologies:

- **App A**: Edge API with Apple Container, Bun, Hono, OpenAPI
- **App B**: Realtime Chat with Flutter, Supabase, Firebase FCM
- **App C**: IoT Telemetry with Rust (tonic), gRPC, DuckDB, Snowflake, Cloud Run
- **App D**: LLM Doc QA with FastAPI, LangChain, Snowflake
- **App E**: MCP Automation Hub with Playwright MCP, Nest.js, Kotlin
- **App F**: Browser E2E Test Suite with Playwright, Bun, FastAPI

## Development Environment Setup

The project uses:

- **Apple Container** as the primary runtime environment (with Colima as fallback)
- **tmux + Neovim** for local development with LSP support
- Various package managers: Bun for JavaScript/TypeScript, standard toolchains for other languages

## Architecture Patterns

- **API Layer**: Multiple frameworks (Hono, FastAPI, Nest.js) with OpenAPI specification generation
- **Communication**: Both REST and gRPC protocols, with gRPC-Gateway for dual exposure
- **Data Flow**: Edge devices → gRPC → Processing APIs → Analytics (DuckDB → Snowflake)
- **Real-time**: WebSocket connections via Supabase Realtime
- **Containerization**: Cloud Run for auto-scaling deployments

## Weekly Progress Structure

Progress is tracked in `PROGRESS.md` with weekly milestones from development environment setup (Week 1) through production deployment and load testing (Week 8).

## Language and Communication

- All documentation and commits should be in Japanese
- Use formal tone with structured, MECE (Mutually Exclusive, Collectively Exhaustive) outputs
- Avoid verbose expressions and maintain concise technical explanations

## Neovim Usage Instructions

- The user is learning Neovim and prefers to use it for file editing
- When providing instructions that involve file operations, always include the corresponding vim commands alongside regular instructions
- Examples:
  - File operations: `:e filename.txt` (open), `:w` (save), `:q` (quit)
  - Search: `/search_term` (search), `n` (next), `N` (previous)
  - Replace: `:%s/old/new/g` (replace all)
  - Navigation: `gg` (top), `G` (bottom), `0` (line start), `$` (line end)
  - Edit: `i` (insert), `a` (append), `o` (new line), `dd` (delete line), `yy` (copy line), `p` (paste)
