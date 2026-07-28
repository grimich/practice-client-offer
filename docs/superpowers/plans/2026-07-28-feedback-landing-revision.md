# Feedback Landing Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Пересобрать лендинг по обратной связи из трёх видео, сохранив авторский вординг и устранив зависание прокрутки после перехода по якорям.

**Architecture:** Остаёмся в одной странице Next/vinext. Контент и порядок секций меняются в `app/page.tsx`, интерактив копирования — в `app/CopyCta.tsx`, визуальные корректировки — в `app/globals.css`; серверный HTML и GitHub Pages export проверяются текущим Node test runner. Публикация идёт в существующие GitHub Pages и Sites без создания нового проекта.

**Tech Stack:** Next 16, React 19, TypeScript, CSS, Node test runner, vinext, GitHub Pages, Sites.

**Execution choice:** пользователь дал команду «гоу», поэтому план исполняется в текущей сессии; один независимый субагент используется только для финального read-only review.

---

### Task 1: Зафиксировать регрессии текста и структуры

**Files:**
- Modify: `tests/rendered-html.test.mjs`

- [ ] **Step 1: Write the failing tests**

Добавить проверки:

```js
assert.match(html, /Для специалистов с личной практикой/);
assert.match(html, /3 сессии за 4 недели/);
assert.match(html, /портрет целевого клиента/i);
assert.doesNotMatch(html, /профика|Соберём ICP|не обманываем|300К\+/);

const processIndex = html.indexOf("Как это работает");
const casesIndex = html.indexOf("Последние кейсы");
assert.ok(processIndex >= 0 && casesIndex > processIndex);
```

Обновить якорный контракт:

```js
assert.match(html, /href="#start"/);
assert.match(html, /id="start"/);
```

- [ ] **Step 2: Run tests to verify RED**

Run:

```powershell
npm test
```

Expected: сборка проходит, первый тест падает на отсутствующем новом первом экране / порядке секций / запрещённой лексике.

### Task 2: Пересобрать историю и CTA

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/CopyCta.tsx`

- [ ] **Step 1: Split audience from symptoms**

Заменить смешанный список на два массива:

```ts
const audience = [
  "Делаете свою практику / запускаете свои продукты за деньги.",
  "Ваш продукт / услуга близки к вашей профессиональной карьере и там 5+ лет опыта.",
];

const symptoms = [
  "Все клиенты — сарафан.",
  "В расписании всё ещё куча свободных окон.",
  "Не знаете, как продвигаться.",
  "Ваше предложение в духе «я могу всё что угодно сделать для кого угодно».",
  "И одновременно чуть подёргивает от слова «продажи».",
];
```

Использовать один вопрос: «Почему у такого крутого профессионала так мало клиентов?». Маркер списка сделать типографским тире, а не похожим на раскрывающийся `+`.

- [ ] **Step 2: Make the first screen explicit**

Сохранить обещание:

```tsx
<h1>
  Найду вам следующего <em>клиента</em> за 4 недели работы
</h1>
```

Добавить до первого CTA:

```tsx
<div className="eyebrow">
  Для специалистов с личной практикой, услугами и продуктами
</div>
<p className="hero-copy">
  Я помогаю докрутить предложение и собрать гипотезы. Вы идёте в реальные
  разговоры по своему тёплому нетворку. Вместе проверяем, за что готовы платить.
</p>
```

- [ ] **Step 3: Move the mechanism before proof**

Порядок после распознавания:

1. «Как ищем клиентов» — один недублирующий блок про тёплый нетворк.
2. «Как это работает» — определение гипотезы, роли и три сессии.
3. «Последние кейсы».
4. «На выходе».
5. CTA.

Добавить:

```tsx
<p className="process-cadence">
  3 сессии за 4 недели. Между ними — разговоры по тёплому нетворку.
</p>
<p>
  Гипотеза здесь — кому и с каким предложением идём.
</p>
```

Убрать неясный блок `300К+`, фразы «не обманываем» и «не лезем в неизведанное».

- [ ] **Step 4: Clarify outcomes without inventing results**

Использовать:

```ts
const outcomes = [
  "Цель — следующий клиент",
  "Проверим от 1 до 5 гипотез на реальности",
  "Соберём уверенный оффер",
  "Сузимся в нишу",
  "Соберём портрет целевого клиента",
  "Соберём финмодельку",
  "Выберем и проверим подходящие способы выхода на клиентов",
];
```

В `CopyCta` убрать повтор обещания в label и сделать честный текущий шаг:

```tsx
<p className="copy-label">Сообщение для старта</p>
<p className="copy-hint">
  Скопируйте и отправьте мне там, где мы уже общаемся.
</p>
```

- [ ] **Step 5: Run tests to verify GREEN**

Run:

```powershell
npm test
```

Expected: все Node tests проходят.

### Task 3: Исправить якорную прокрутку и адаптив

**Files:**
- Modify: `app/globals.css`
- Modify: `tests/rendered-html.test.mjs`

- [ ] **Step 1: Record the root cause**

Подтверждённое сравнение живой страницы:

- без hash ручная прокрутка меняет `scrollY`;
- после клика `#start` `scrollY` остаётся у target и wheel/PageUp возвращаются туда;
- `overflow-y` у `html` и `body` остаётся `visible`;
- в CSS нет `:target`, scroll snap и фиксированного scroll container;
- единственная глобальная scroll-модификация — `html { scroll-behavior: smooth; }`.

Гипотеза: глобальная smooth-анимация якоря в текущем браузерном окружении продолжает повторно выравнивать активный target и перехватывает дальнейшую прокрутку.

- [ ] **Step 2: Write a failing CSS contract**

Добавить чтение `app/globals.css` и проверку:

```js
assert.doesNotMatch(css, /html\s*\{[^}]*scroll-behavior:\s*smooth/i);
```

Run:

```powershell
node --test tests/rendered-html.test.mjs
```

Expected: FAIL, пока глобальный smooth scroll остаётся.

- [ ] **Step 3: Apply the minimal fix**

Удалить глобальный `scroll-behavior: smooth`; оставить якоря нативными. Не добавлять `overflow`-патчи.

- [ ] **Step 4: Validate responsive layout**

На локальной собранной версии проверить desktop 1440×900 и mobile 390×844:

- `document.documentElement.scrollWidth <= window.innerWidth`;
- hero не обрезает заголовок;
- после `#start` wheel/PageUp меняют `scrollY`;
- `#top` возвращает наверх и после этого прокрутка остаётся доступной.

### Task 4: Review, verify and publish

**Files:**
- Modify: `docs/index.html`
- Modify: `docs/assets/*` through the existing export script
- Modify: `HANDOFF.md`
- Modify: `TASKS.md`

- [ ] **Step 1: Run full verification**

Run:

```powershell
npm test
npm run lint
npm run pages:export
node --test tests/rendered-html.test.mjs
```

Expected: every command exits `0`.

- [ ] **Step 2: Run independent read-only review**

Review the diff against:

- original wording and `Я / вы / мы`;
- all P0/P1/P2 findings from `vids/transcripts/feedback_summary.md`;
- no invented contacts, testimonials, prices, guarantees or case details;
- no horizontal overflow or anchor freeze.

- [ ] **Step 3: Commit and push**

Stage only site source, tests, plan/docs and exported GitHub Pages output. Do not stage `.transcribe-venv`, raw media, audio, or temporary scripts.

Commit message:

```text
revise landing from video feedback
```

Push `main`.

- [ ] **Step 4: Publish exact source through Sites**

Reuse project id from `.openai/hosting.json`, package the exact validated source, save one version, deploy it with the applicable access flow, poll to terminal success, and open the returned production URL.

- [ ] **Step 5: Verify public GitHub Pages**

Open `https://grimich.github.io/practice-client-offer/`, confirm the new first screen and anchor scroll behavior, and keep that page as the user-facing handoff tab.
