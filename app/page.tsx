import type { Metadata } from "next";
import { CopyCta } from "./CopyCta";

export const metadata: Metadata = {
  title: "Следующий клиент — за 4 недели",
  description:
    "Работа для специалистов с личной практикой: находим сильное предложение и проверяем его через тёплый нетворк.",
};

const fit = [
  "Это тем, кто делает свою практику / запускает свои продукты за деньги.",
  "Если очереди клиентов, кидающих в вас деньги, пока не случилось.",
  "Если не знаете, как продвигаться.",
  "Если все клиенты — сарафан.",
  "Если ваш продукт / услуга близки к вашей профессиональной карьере и там 5+ лет опыта.",
  "Если в расписании всё ещё куча свободных окон.",
  "Если задолбались учиться и повышать квалификацию.",
  "Особенно если ваше предложение в духе «я могу всё что угодно сделать для кого угодно».",
  "И одновременно чуть подёргивает от слова «продажи».",
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
    title: "За 1 сессию",
    text: "Собираем контекст, находим опасения, страхи и несостыковки, формулируем задачу-цель, проверяем её на валидность ожиданиям, смотрим на цены, затраты, бизнес-модель, ожидания, делаем разведку.",
    homework: "Домашка — ходим по нетворку, генерим беседы.",
  },
  {
    number: "02",
    title: "За 2 сессию",
    text: "Разбираем домашку, генерим гипотезы и проверки гипотез: 1 ниша, 1 сегмент, 1 индустрия, деньги сразу, видимый эффект в деньгах, принятие решения быстрое, до целевых клиентов одно рукопожатие.",
    homework: "Домашка — ходим по нетворку, генерим беседы.",
  },
  {
    number: "03",
    title: "За 3 сессию",
    text: "Разбираем домашку, докручиваем гипотезы, снова идём в рынок.",
    homework: "Не сидим над теорией — проверяем всё на реальности.",
  },
];

const outcomes = [
  "Получим сразу клиентов",
  "Проверим от 1 до 5 гипотез на реальности",
  "Соберём уверенный оффер",
  "Сузимся в нишу",
  "Соберём ICP",
  "Соберём финмодельку",
  "Выберем и проверим подходящие каналы привлечения",
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="В начало">
          СЛЕДУЮЩИЙ <span>КЛИЕНТ</span>
        </a>
        <a className="nav-link" href="#start">
          Хочу следующего клиента ↘
        </a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="eyebrow">Поиск проблемы, стоящей решения, через экспертность и нетворк</div>
        <h1>
          Найду вам следующего <em>клиента</em> за 4 недели работы
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            Устали ждать, пока клиенты сами начнут кидаться в вас деньгами?
          </p>
          <a className="button button-accent" href="#start">
            Хочу следующего клиента
          </a>
        </div>
        <div className="scribble" aria-hidden="true">
          ↓ через экспертность и нетворк
        </div>
      </section>

      <section className="recognition section-pad">
        <div className="wrap two-col">
          <div>
            <p className="kicker">Кому это</p>
            <h2>
              Почему в личной практике профика нет новых клиентов?
              <br /><br />
              Почему у такого крутого профессионала так мало клиентов?
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
            <h2>Последние кейсы</h2>
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
              и до десятка клиентов с чеками 300К+ за полгода
            </p>
          </div>
        </div>
      </section>

      <section className="principles section-pad">
        <div className="wrap">
          <p className="kicker kicker-light">Как ищем клиентов</p>
          <h2>
            По тёплому нетворку.
          </h2>
          <div className="principle-row">
            <span>Без холодняка</span>
            <span>Без рекламы</span>
            <span>Без спама</span>
            <span>Без инфобиза</span>
            <span>Без лишних затрат</span>
          </div>
          <p className="principle-copy">
            Клиентов ищем по тёплому нетворку. Не лезем в холодняк, рекламу,
            рассылки, спам, не тратим лишних денег. Не инфобизим, не обманываем.
            Не лезем в неизведанное.
          </p>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="wrap">
          <div className="section-head split-head">
            <div>
              <p className="kicker">Чаще всего понадобится</p>
              <h2>Докрутить предложение и пойти с людьми пить кофе.</h2>
            </div>
            <p>
              Докрутить предложение / оффер / гипотезу. Посмотреть, что объединяет
              текущих клиентов. Собрать гипотезы на проверку и критерии целевых
              людей-заказчиков: их роли, контекст, ожидания, точки принятия решения.
              Посидеть над своей записной книжкой, вспомнить, кто близок к таким,
              и пойти с ними попить кофе.
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
            <p className="kicker">На выходе</p>
            <h2>Всё проверим на реальности.</h2>
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

      <section className="start section-pad" id="start">
        <div className="wrap start-grid">
          <div>
            <p className="kicker">Найду вам следующего клиента</p>
            <h2>
              За 4 недели работы.
            </h2>
            <p className="start-copy">
              Всё собираем в живом диалоге, никаких брифов, табличек, формочек.
              Разговоры пишем, отдаём ИИшке.
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
        Хочу следующего клиента
      </a>
    </main>
  );
}
