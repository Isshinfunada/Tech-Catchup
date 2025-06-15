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

## Work Flow Instructions

When completing learning tasks or development milestones, follow this standardized workflow:

### 1. Task Execution
- Use TodoWrite tool to plan and track tasks throughout the conversation
- Execute tasks step by step with proper documentation
- Update PROGRESS.md with completed items (`:e PROGRESS.md`)
- Update LEARNING_LOG.md with detailed learning records (`:e LEARNING_LOG.md`)

### 2. Branch and PR Management
- Work on feature branches (not master) for each major task/week
- Create comprehensive summary files documenting achievements
- Commit changes with detailed messages including:
  - Summary of completed tasks
  - New files created
  - Updated files modified
  - Technical details learned
- Push to remote branch and create PR with detailed description

### 3. Issue Management
- Close related GitHub issues when tasks are completed
- Add completion comments with:
  - Completed items checklist
  - Technical details
  - Links to related PRs
  - Next steps

### 4. Documentation Standards
- Create summary files (e.g., `env-setup-summary.md`) for major milestones
- Include technical details, commands learned, and time invested
- Maintain clear record of what was accomplished for future reference
- Use structured format with clear sections and checkboxes

### 5. PR Content Requirements
- Detailed description of completed work
- File changes overview (new/updated)
- Technical achievements and learning outcomes
- Next steps and follow-up tasks
- Time estimation and effort invested

This workflow ensures comprehensive documentation and makes it easy to review what was accomplished in each session.

## Interactive Learning Guidelines

When guiding the user through learning exercises, follow these principles:

### Adaptive Teaching Approach
- If the user cannot answer a question appropriately, provide progressive hints and guidance
- Ask follow-up questions to assess understanding depth
- Show relevant documentation sections to build comprehension
- Continue questioning until the user demonstrates solid understanding
- Break complex concepts into smaller, digestible parts

### Question-Driven Learning
- Use Socratic method: guide discovery through questions rather than direct answers
- Encourage the user to explain their reasoning
- Provide multiple choice options when concepts are too broad
- Reference specific documentation to support learning

### Understanding Verification
- Ask "why" questions to test conceptual understanding
- Request explanations of technical decisions
- Have the user predict outcomes before showing results
- Encourage connections between new and existing knowledge

This approach ensures deep understanding rather than surface-level completion of tasks.
