import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
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
}

test("server-renders the complete practice offer landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Следующий клиент — за 4 недели/);
  assert.match(html, /Для специалистов с личной практикой/);
  assert.match(html, /Почему у такого крутого профессионала так мало клиентов/);
  assert.match(html, /Найду вам следующего (?:<em>)?клиента(?:<\/em>)? за 4 недели работы/);
  assert.match(html, /Если задолбались учиться и повышать квалификацию/);
  assert.match(html, /Не лезем в холодняк, рекламу, рассылки, спам/);
  assert.match(html, /3 сессии за 4 недели/);
  assert.match(html, /портрет целевого клиента/i);
  assert.match(html, /Последние кейсы/);
  assert.match(html, /За 1 сессию/);
  assert.match(html, /За 2 сессию/);
  assert.match(html, /За 3 сессию/);
  assert.match(html, /Скопировать сообщение/);
  assert.match(html, /href="#top"/);
  assert.match(html, /href="#start"/);
  assert.match(html, /id="start"/);
  assert.match(
    html,
    /property="og:image" content="http:\/\/localhost\/og\.png"/,
  );
  assert.doesNotMatch(html, /профика|Соберём ICP|не обманываем|300К\+/);

  const processIndex = html.indexOf("Как это работает");
  const casesIndex = html.indexOf("Последние кейсы");
  assert.ok(
    processIndex >= 0 && casesIndex > processIndex,
    "the process must be explained before the cases",
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("global CSS leaves anchor scrolling interruptible", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(css, /html\s*\{[^}]*scroll-behavior:\s*smooth/i);
});

test("same-page links bypass the static runtime hash scroll lock", async () => {
  const source = await readFile(
    new URL("../app/AnchorLink.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /event\.preventDefault\(\)/);
  assert.match(source, /event\.stopPropagation\(\)/);
  assert.match(source, /scrollIntoView\(\{ behavior: "auto", block: "start" \}\)/);
});

test("GitHub Pages snapshot references production assets under the repository base path", async () => {
  const html = await readFile(
    new URL("../docs/index.html", import.meta.url),
    "utf8",
  );

  assert.match(
    html,
    /href="\/practice-client-offer\/assets\/index-[^"]+\.css"/,
  );
  assert.match(
    html,
    /property="og:image" content="https:\/\/grimich\.github\.io\/practice-client-offer\/og\.png"/,
  );
  assert.doesNotMatch(html, /\/app\/globals\.css|\/@id\/|virtual:vite-rsc/);
});

test("GitHub Pages ships the same social preview as the app", async () => {
  const [source, exported] = await Promise.all([
    readFile(new URL("../public/og.png", import.meta.url)),
    readFile(new URL("../docs/og.png", import.meta.url)),
  ]);

  assert.deepEqual(exported, source);
});
