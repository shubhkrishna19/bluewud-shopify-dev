---
description: How to delegate and manage multiple agents for project execution.
---

# Swarm Manager Workflow

Use this workflow to orchestrate multiple subagents for complex tasks. This ensures a "Mega Brain" approach where each sub-task is executed with precision and verified.

## 👥 Subagent Roles

1.  **Artist (CSS Specialist)**: Handles layout, animations, glassmorphism, and responsive design. Uses `ui-ux-pro-max` skill.
2.  **Liquifier (Liquid Specialist)**: Handles Shopify logic, schema, sections, snippets, and data structures. Uses `shopify-development` skill.
3.  **Logic (JS Specialist)**: Handles interactive components, AJAX, search modal behaviors, and performance tracking.
4.  **Reviewer (Quality Assurance)**: Dispatched after any implementation to verify against requirements and check for lint/syntax errors.

## 🔄 Execution Protocol

1.  **Plan**: Break the user request into Atomic Tasks.
2.  **Dispatch**: Call `browser_subagent` or relevant tool with a clear "Role-based" prompt.
    *   *Example Prompt*: "You are the Artist agent. Refine the Glassmorphism header using Skill UI-UX Pro Max guidelines..."
3.  **Monitor**: Read the subagent's execution details.
4.  **Review**: Dispatch a Reviewer subagent to verify the implementation.
5.  **Merge & Commit**: Push the verified changes to `main`.

## 🛠️ Skills Synergy
- Always reference `ui-ux-pro-max` for design.
- Always reference `shopify-development` for Shopify APIs.
- Use `agent-manager-skill` to monitor agent health and status.

// turbo-all
// Every command in this swarm execution should be safe to run autonomously once approved.
