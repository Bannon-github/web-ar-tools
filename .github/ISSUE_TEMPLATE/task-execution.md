---
name: Task Execution
about: Execute one masterplan task via mobile AI app
labels: [ai:mobile, task:ready]
---

## Task Metadata
- Task ID:
- Title:
- Package:
- Branch:

## Prompt Source
`planning/prompts/TASK-XXX.md`

## Execution Steps
1. Paste prompt into Claude/Grok Android app
2. Apply resulting code changes on the task branch
3. Run checks locally or via CI
4. Open PR using template

## Definition of Done
- [ ] Acceptance criteria met
- [ ] Tests added/updated
- [ ] Lint/typecheck/test passing
- [ ] Changeset added (if package changes)
