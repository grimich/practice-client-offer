import assert from "node:assert/strict";
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
  assert.match(html, /Найду вам/);
  assert.match(html, /Последние кейсы/);
  assert.match(html, /Три сессии/);
  assert.match(html, /Честная рамка/);
  assert.match(html, /Скопировать сообщение/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
