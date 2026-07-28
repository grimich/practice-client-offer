# Handoff

- Objective: publish the revised «Следующий клиент» landing page from the video feedback.
- Current state: the first screen names the audience and roles; audience and symptoms are split; the mechanism and three-session cadence appear before cases; unclear `300К+`, `ICP`, `профик`, and distrust-triggering wording are removed.
- Last verified fact: local build/export and 5 tests pass; desktop 1440×900 and mobile 390×844 have no horizontal overflow; the real static GitHub Pages export scrolls away from both `#start` and `#top` after using its CTA links.
- Do not invent: contact links, client names, revenue attribution, guarantees beyond the supplied cases.
- Next action: replace the copy-message CTA with a direct messenger or calendar link when supplied.
- Verification: `npm run build`; `npm run pages:export`; `node --test tests\rendered-html.test.mjs`; then check GitHub Pages, Sites, both anchor directions, and the social preview.
