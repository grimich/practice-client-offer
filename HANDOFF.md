# Handoff

- Objective: publish the first complete version of the «Следующий клиент» landing page.
- Current state: the copy is restored close to the user's source wording; the GitHub Pages export uses production assets under the repository base path.
- Last verified fact: production build/export/tests pass; public page has no horizontal overflow at 1440×900 or 390×844.
- Do not invent: contact links, client names, revenue attribution, guarantees beyond the supplied cases.
- Next action: replace the copy-message CTA with a direct messenger or calendar link when supplied.
- Verification: `npm.cmd run build`; `npm.cmd run pages:export`; `node.exe --test tests\rendered-html.test.mjs`; then check the public URL.
