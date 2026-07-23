# Handoff

- Objective: publish the first complete version of the «Следующий клиент» landing page.
- Current state: the copy is restored close to the user's source wording; the GitHub Pages export uses production assets under the repository base path.
- Last verified fact: the production build, export, copy regression test, and asset-path regression test pass locally.
- Do not invent: contact links, client names, revenue attribution, guarantees beyond the supplied cases.
- Next action: after deployment, visually verify desktop and mobile layouts; replace the copy-message CTA with a direct messenger or calendar link when supplied.
- Verification: `npm.cmd run build`; `npm.cmd run pages:export`; `node.exe --test tests\rendered-html.test.mjs`; then check the public URL.
