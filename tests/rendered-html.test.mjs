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
  assert.match(html, /Почему у такого крутого профессионала так мало клиентов/);
  assert.match(html, /Найду вам следующего (?:<em>)?клиента(?:<\/em>)? за 4 недели работы/);
  assert.match(html, /Если задолбались учиться и повышать квалификацию/);
  assert.match(html, /Не лезем в холодняк, рекламу, рассылки, спам/);
  assert.match(html, /Последние кейсы/);
  assert.match(html, /За 1 сессию/);
  assert.match(html, /За 2 сессию/);
  assert.match(html, /За 3 сессию/);
  assert.match(html, /Скопировать сообщение/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
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
  assert.doesNotMatch(html, /\/app\/globals\.css|\/@id\/|virtual:vite-rsc/);
});
