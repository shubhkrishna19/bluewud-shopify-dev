# Multi-Agent Coordination Rules (Bluewud Shopify)

This repository uses parallel AI agents. To avoid duplicate work, **every agent must follow the rules below**.

## 1) Claiming Work (required)
- Before starting, **claim a unique task** in `MASTER_COLLABORATION_FILE.md` using the Task Locking protocol:
  - Add `[/] In Progress - <Agent Name>` to the task row.
  - If you are creating a new task, append the next sequential ID.
- If a task is already marked in progress by another agent, **pick a different task**.

## 2) Announce Your Task Choice
- Add a short entry in the **Developer Logs** section:
  - `YYYY-MM-DD (Agent Name): Selected task <ID> - <short name>.`

## 3) Update Completion
- When done, mark the task `[x] Done` and include the commit hash in the Notes column.
- Add a brief completion log entry.

## 4) Commit Discipline
- Keep each task in **one cohesive commit**.
- If you must amend, do so **before** updating the task log with the final commit hash.

## 5) Avoid Overlap
- **Never** pick the same task as another agent in the same batch.
- If unsure, claim a different task and note the handoff in the Developer Logs.

## 6) Communication & Best Practices
- Prefer small, reversible changes.
- Preserve existing `data-` attributes and IDs for JS compatibility.
- Use `assets/theme-update.css` for new styles.
- Keep Liquid changes minimal and modular.
- Document any assumptions or dependencies in the Developer Logs.

## 7) Mandatory Agent Contribution
- Every agent that reads this file must **append one collaboration best practice** under the section below.

### Agent-Contributed Best Practices
- **Codex**: Keep task scopes small and update `MASTER_COLLABORATION_FILE.md` before committing to avoid clashes.
- **Codex**: Re-check `MASTER_COLLABORATION_FILE.md` after a short wait before committing to confirm no task conflicts.
- **Codex**: Log task selection promptly so other agents can switch before doing any significant work.
- **Codex**: Prefer copying source snippets verbatim first, then layer integration changes in separate commits to ease review.
- **Codex**: For large Liquid snippets, avoid partial edits—copy whole files to reduce merge conflicts and review time.
- **Codex**: When porting a snippet, also port any helper snippets it renders to avoid runtime gaps.
- **Codex**: Confirm snippet callers supply needed objects (e.g., `section`, `block`) or guard for missing context.
- **Codex**: Document when a port uses existing theme logic instead of Whisper for traceability.
- **Codex**: When porting assets, mirror filenames and keep them in the same asset type to avoid broken imports.
- **Codex**: For larger feature ports, include the JS asset plus primary Liquid snippets together to keep behavior aligned.
- **Codex**: If Whisper references a missing snippet, add a thin compatibility wrapper to existing theme functionality.
- **Codex**: When minifying assets, keep source formatting changes documented in the collaboration log.
- **Codex**: If you add a new setting, update both `settings_schema.json` and `settings_data.json` defaults.
- **Codex**: For new product UX features, add a snippet + asset pair and wire it into the relevant product template.
- **Codex**: Keep any UI polish styles minimal and scoped to avoid unintended overrides.
- **Codex**: For recovery flows, include a clear dismiss action and persist state in localStorage.
- **Codex**: Add a theme setting toggle when introducing user-facing recovery features.
- **Codex**: For homepage polish, scope styles to the specific section class to avoid cross-page bleed.
