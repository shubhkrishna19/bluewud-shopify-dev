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
