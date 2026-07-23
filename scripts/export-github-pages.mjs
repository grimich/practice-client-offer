// Export the built vinext worker response and client assets to docs/ for GitHub Pages.
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const base = "/practice-client-offer";
const docs = new URL("../docs/", import.meta.url);
const assets = new URL("../docs/assets/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());

await rm(assets, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(new URL("../dist/client/assets/", import.meta.url), assets, {
  recursive: true,
});
await cp(
  new URL("../public/favicon.svg", import.meta.url),
  new URL("../docs/favicon.svg", import.meta.url),
);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll('"/assets/', `"${base}/assets/`)
  .replaceAll('"/favicon.svg', `"${base}/favicon.svg`);

await writeFile(new URL("../docs/index.html", import.meta.url), html, "utf8");

const written = await readFile(
  new URL("../docs/index.html", import.meta.url),
  "utf8",
);
if (written.includes("/app/globals.css") || written.includes("/@id/")) {
  throw new Error("Development asset references remain in static export");
}
