import type { Metadata } from "next";
import { CopyCta } from "./CopyCta";

export const metadata: Metadata = {
  title: "Следующий клиент — за 4 недели",
  description:
    "Работа для специалистов с личной практикой: находим сильное предложение и проверяем его через тёплый нетворк.",
};

const fit = [
  "У вас 5+ лет профессионального опыта",
  "Клиенты приходят в основном по сарафану",
  "В расписании всё ещё много свободных окон",
  "Предложение звучит как «могу всё для всех»",
  "Вы не понимаете, как продвигаться",
  "От слова «продажи» немного дёргает",
  "Вы устали учиться вместо того, чтобы продавать",
];

const cases = [
  { who: "СТО", result: "от гипотезы до первого клиента", time: "4 дня" },
  { who: "Психолог", result: "от гипотезы до +1 клиента", time: "3 дня" },
  {
    who: "Телесный терапевт",
    result: "от гипотез до +1 клиента",
    time: "3 недели",
  },
  {
    who: "Продуктовый менеджер",
    result: "от гипотезы до первой продажи",
    time: "2 недели",
  },
];

const sessions = [
  {
    number: "01",
    title: "Разобрать реальность",
    text: "Соберём контекст, опасения и несостыковки. Сформулируем цель, сверим её с ценой, затратами, бизнес-моделью и вашим реальным ресурсом.",
    homework: "Домашка: идти в тёплый нетворк и собирать разговоры.",
  },
  {
    number: "02",
    title: "Выбрать сильную гипотезу",
    text: "Разберём разговоры. Ищем связку: одна ниша, один сегмент, одна индустрия, быстрый эффект в деньгах и целевой клиент на расстоянии одного рукопожатия.",
    homework: "Домашка: снова идти к людям и проверять гипотезу.",
  },
  {
    number: "03",
    title: "Докрутить и продать",
    text: "Смотрим на факты, отбрасываем слабое, усиливаем рабочую гипотезу и снова идём в рынок — уже с уверенным предложением.",
    homework: "Результат: не презентация, а проверка на живых людях.",
  },
];

const outcomes = [
  "Проверите от 1 до 5 гипотез в реальности",
  "Соберёте уверенный оффер",
  "Сузитесь до рабочей ниши",
  "Опишете ICP — своего целевого заказчика",
  "Посчитаете простую финмодель",
  "Проверите подходящие каналы привлечения",
  "И, если гипотеза и действия сработают, получите клиента",
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="В начало">
          СЛЕДУЮЩИЙ <span>КЛИЕНТ</span>
        </a>
        <a className="nav-link" href="#start">
          Обсудить практику ↘
        </a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="eyebrow">Для профи с личной практикой · 5+ лет опыта</div>
        <h1>
          Найду вам
          <br />
          следующего <em>клиента</em>
          <br />
          за 4 недели
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            Не через холодняк, рекламу и контент-марафон. Найдём проблему,
            которую вы умеете решать, соберём предложение и проверим его через
            ваш тёплый нетворк.
          </p>
          <a className="button button-accent" href="#start">
            Хочу следующего клиента
          </a>
        </div>
        <div className="scribble" aria-hidden="true">
          ↓ не ещё один курс
        </div>
      </section>

      <section className="recognition section-pad">
        <div className="wrap two-col">
          <div>
            <p className="kicker">Узнаёте себя?</p>
            <h2>
              Крутой профессионал.
              <br />
              А клиентов почему-то мало.
            </h2>
          </div>
          <ul className="check-list">
            {fit.map((item) => (
              <li key={item}>
                <span>+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="proof section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Последние кейсы</p>
            <h2>Не «когда-нибудь». Быстро до факта.</h2>
          </div>
          <div className="case-grid">
            {cases.map((item) => (
              <article className="case-card" key={item.who}>
                <p className="case-who">{item.who}</p>
                <p className="case-result">{item.result}</p>
                <p className="case-time">{item.time}</p>
              </article>
            ))}
          </div>
          <div className="big-proof">
            <strong>300К+</strong>
            <p>
              чеки у части клиентов — до десятка продаж за полгода
            </p>
          </div>
        </div>
      </section>

      <section className="principles section-pad">
        <div className="wrap">
          <p className="kicker kicker-light">Как ищем</p>
          <h2>
            По-человечески.
            <br />
            Через тех, кто уже рядом.
          </h2>
          <div className="principle-row">
            <span>Без холодняка</span>
            <span>Без рекламы</span>
            <span>Без спама</span>
            <span>Без инфобиза</span>
            <span>Без лишних затрат</span>
          </div>
          <p className="principle-copy">
            Докрутим предложение, увидим общее в текущих клиентах, соберём
            критерии заказчика и вспомним, кто из вашей записной книжки уже
            находится рядом с такими людьми. А потом — позовём их на кофе.
          </p>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="wrap">
          <div className="section-head split-head">
            <div>
              <p className="kicker">Что будем делать</p>
              <h2>Три сессии. Между ними — рынок.</h2>
            </div>
            <p>
              Никаких брифов, формочек и таблиц ради таблиц. Работаем в живом
              диалоге. Разговоры записываем и отдаём ИИ, чтобы не терять факты.
            </p>
          </div>
          <div className="session-list">
            {sessions.map((session) => (
              <article className="session" key={session.number}>
                <span className="session-number">{session.number}</span>
                <div>
                  <h3>{session.title}</h3>
                  <p>{session.text}</p>
                  <p className="homework">{session.homework}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outcome section-pad">
        <div className="wrap two-col">
          <div>
            <p className="kicker">Что останется у вас</p>
            <h2>Не теория. Рабочая система решений.</h2>
          </div>
          <ol className="outcome-list">
            {outcomes.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="honesty section-pad">
        <div className="wrap honesty-grid">
          <p className="kicker">Честная рамка</p>
          <div>
            <h2>Я не продаю волшебную очередь из клиентов.</h2>
            <p>
              Я отвечаю за ясность, гипотезы, разбор фактов и следующий сильный
              шаг. Вы — за разговоры и действия между сессиями. Обещание
              работает, когда мы оба выходим в рынок, а не только красиво
              думаем о нём.
            </p>
          </div>
        </div>
      </section>

      <section className="start section-pad" id="start">
        <div className="wrap start-grid">
          <div>
            <p className="kicker">Начать</p>
            <h2>
              Где прямо сейчас
              <br />
              теряются ваши клиенты?
            </h2>
            <p className="start-copy">
              Начнём с короткого разговора. Посмотрим, что мешает: слишком
              широкое предложение, не тот сегмент, слабая гипотеза или сам
              разговор о продаже.
            </p>
          </div>
          <CopyCta />
        </div>
      </section>

      <footer className="footer wrap">
        <p>© 2026 · Следующий клиент</p>
        <a href="#top">Наверх ↑</a>
      </footer>

      <a className="mobile-cta" href="#start">
        Обсудить практику
      </a>
    </main>
  );
}
