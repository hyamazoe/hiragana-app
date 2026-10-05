"use client";

import { useEffect, useState } from "react";

type Group = "Сэйон" | "Дакуон・хандакуон" | "Ёон";

type Card = {
  kana: string;
  reading: string;
  group: Group;
};

const cards: Card[] = [
  // 清音：あ行
  { kana: "あ", reading: "А", group: "Сэйон" },
  { kana: "い", reading: "И", group: "Сэйон" },
  { kana: "う", reading: "У", group: "Сэйон" },
  { kana: "え", reading: "Э", group: "Сэйон" },
  { kana: "お", reading: "О", group: "Сэйон" },

  // 清音：か行
  { kana: "か", reading: "Ка", group: "Сэйон" },
  { kana: "き", reading: "Ки", group: "Сэйон" },
  { kana: "く", reading: "Ку", group: "Сэйон" },
  { kana: "け", reading: "Кэ", group: "Сэйон" },
  { kana: "こ", reading: "Ко", group: "Сэйон" },

  // 清音：さ行
  { kana: "さ", reading: "Са", group: "Сэйон" },
  { kana: "し", reading: "Си", group: "Сэйон" },
  { kana: "す", reading: "Су", group: "Сэйон" },
  { kana: "せ", reading: "Сэ", group: "Сэйон" },
  { kana: "そ", reading: "Со", group: "Сэйон" },

  // 清音：た行
  { kana: "た", reading: "Та", group: "Сэйон" },
  { kana: "ち", reading: "Ти", group: "Сэйон" },
  { kana: "つ", reading: "Цу", group: "Сэйон" },
  { kana: "て", reading: "Тэ", group: "Сэйон" },
  { kana: "と", reading: "То", group: "Сэйон" },

  // 清音：な行
  { kana: "な", reading: "На", group: "Сэйон" },
  { kana: "に", reading: "Ни", group: "Сэйон" },
  { kana: "ぬ", reading: "Ну", group: "Сэйон" },
  { kana: "ね", reading: "Нэ", group: "Сэйон" },
  { kana: "の", reading: "Но", group: "Сэйон" },

  // 清音：は行
  { kana: "は", reading: "Ха", group: "Сэйон" },
  { kana: "ひ", reading: "Хи", group: "Сэйон" },
  { kana: "ふ", reading: "Фу", group: "Сэйон" },
  { kana: "へ", reading: "Хэ", group: "Сэйон" },
  { kana: "ほ", reading: "Хо", group: "Сэйон" },

  // 清音：ま行
  { kana: "ま", reading: "Ма", group: "Сэйон" },
  { kana: "み", reading: "Ми", group: "Сэйон" },
  { kana: "む", reading: "Му", group: "Сэйон" },
  { kana: "め", reading: "Мэ", group: "Сэйон" },
  { kana: "も", reading: "Мо", group: "Сэйон" },

  // 清音：や行
  { kana: "や", reading: "Я", group: "Сэйон" },
  { kana: "ゆ", reading: "Ю", group: "Сэйон" },
  { kana: "よ", reading: "Ё", group: "Сэйон" },

  // 清音：ら行
  { kana: "ら", reading: "Ра", group: "Сэйон" },
  { kana: "り", reading: "Ри", group: "Сэйон" },
  { kana: "る", reading: "Ру", group: "Сэйон" },
  { kana: "れ", reading: "Рэ", group: "Сэйон" },
  { kana: "ろ", reading: "Ро", group: "Сэйон" },

  // 清音：わ行
  { kana: "わ", reading: "Ва", group: "Сэйон" },
  { kana: "を", reading: "О", group: "Сэйон" },
  { kana: "ん", reading: "Н", group: "Сэйон" },

  // 濁音：が行
  { kana: "が", reading: "Га", group: "Дакуон・хандакуон" },
  { kana: "ぎ", reading: "Ги", group: "Дакуон・хандакуон" },
  { kana: "ぐ", reading: "Гу", group: "Дакуон・хандакуон" },
  { kana: "げ", reading: "Гэ", group: "Дакуон・хандакуон" },
  { kana: "ご", reading: "Го", group: "Дакуон・хандакуон" },

  // 濁音：ざ行
  { kana: "ざ", reading: "Дза", group: "Дакуон・хандакуон" },
  { kana: "じ", reading: "Дзи", group: "Дакуон・хандакуон" },
  { kana: "ず", reading: "Дзу", group: "Дакуон・хандакуон" },
  { kana: "ぜ", reading: "Дзэ", group: "Дакуон・хандакуон" },
  { kana: "ぞ", reading: "Дзо", group: "Дакуон・хандакуон" },

  // 濁音：だ行
  { kana: "だ", reading: "Да", group: "Дакуон・хандакуон" },
  { kana: "ぢ", reading: "Дзи", group: "Дакуон・хандакуон" },
  { kana: "づ", reading: "Дзу", group: "Дакуон・хандакуон" },
  { kana: "で", reading: "Дэ", group: "Дакуон・хандакуон" },
  { kana: "ど", reading: "До", group: "Дакуон・хандакуон" },

  // 濁音：ば行
  { kana: "ば", reading: "Ба", group: "Дакуон・хандакуон" },
  { kana: "び", reading: "Би", group: "Дакуон・хандакуон" },
  { kana: "ぶ", reading: "Бу", group: "Дакуон・хандакуон" },
  { kana: "べ", reading: "Бэ", group: "Дакуон・хандакуон" },
  { kana: "ぼ", reading: "Бо", group: "Дакуон・хандакуон" },

  // 半濁音：ぱ行
  { kana: "ぱ", reading: "Па", group: "Дакуон・хандакуон" },
  { kana: "ぴ", reading: "Пи", group: "Дакуон・хандакуон" },
  { kana: "ぷ", reading: "Пу", group: "Дакуон・хандакуон" },
  { kana: "ぺ", reading: "Пэ", group: "Дакуон・хандакуон" },
  { kana: "ぽ", reading: "По", group: "Дакуон・хандакуон" },

  // 拗音：きゃ行
  { kana: "きゃ", reading: "Кя", group: "Ёон" },
  { kana: "きゅ", reading: "Кю", group: "Ёон" },
  { kana: "きょ", reading: "Кё", group: "Ёон" },

  // 拗音：しゃ行
  { kana: "しゃ", reading: "Ся", group: "Ёон" },
  { kana: "しゅ", reading: "Сю", group: "Ёон" },
  { kana: "しょ", reading: "Сё", group: "Ёон" },

  // 拗音：ちゃ行
  { kana: "ちゃ", reading: "Тя", group: "Ёон" },
  { kana: "ちゅ", reading: "Тю", group: "Ёон" },
  { kana: "ちょ", reading: "Тё", group: "Ёон" },

  // 拗音：にゃ行
  { kana: "にゃ", reading: "Ня", group: "Ёон" },
  { kana: "にゅ", reading: "Ню", group: "Ёон" },
  { kana: "にょ", reading: "Нё", group: "Ёон" },

  // 拗音：ひゃ行
  { kana: "ひゃ", reading: "Хя", group: "Ёон" },
  { kana: "ひゅ", reading: "Хю", group: "Ёон" },
  { kana: "ひょ", reading: "Хё", group: "Ёон" },

  // 拗音：みゃ行
  { kana: "みゃ", reading: "Мя", group: "Ёон" },
  { kana: "みゅ", reading: "Мю", group: "Ёон" },
  { kana: "みょ", reading: "Мё", group: "Ёон" },

  // 拗音：りゃ行
  { kana: "りゃ", reading: "Ря", group: "Ёон" },
  { kana: "りゅ", reading: "Рю", group: "Ёон" },
  { kana: "りょ", reading: "Рё", group: "Ёон" },

  // 拗音：ぎゃ行
  { kana: "ぎゃ", reading: "Гя", group: "Ёон" },
  { kana: "ぎゅ", reading: "Гю", group: "Ёон" },
  { kana: "ぎょ", reading: "Гё", group: "Ёон" },

  // 拗音：じゃ行
  { kana: "じゃ", reading: "Дзя", group: "Ёон" },
  { kana: "じゅ", reading: "Дзю", group: "Ёон" },
  { kana: "じょ", reading: "Дзё", group: "Ёон" },

  // 拗音：びゃ行
  { kana: "びゃ", reading: "Бя", group: "Ёон" },
  { kana: "びゅ", reading: "Бю", group: "Ёон" },
  { kana: "びょ", reading: "Бё", group: "Ёон" },

  // 拗音：ぴゃ行
  { kana: "ぴゃ", reading: "Пя", group: "Ёон" },
  { kana: "ぴゅ", reading: "Пю", group: "Ёон" },
  { kana: "ぴょ", reading: "Пё", group: "Ёон" },
];

function randomIndex(excludeIndex?: number) {
  if (cards.length < 2) {
    return 0;
  }

  let index = Math.floor(Math.random() * cards.length);

  while (index === excludeIndex) {
    index = Math.floor(Math.random() * cards.length);
  }

  return index;
}

export default function Home() {
  const [cardIndex, setCardIndex] = useState(() => randomIndex());
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  const card = cards[cardIndex];

  useEffect(() => {
    setSpeechSupported("speechSynthesis" in window);

    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
  };

  const speakKana = () => {
    if (!("speechSynthesis" in window)) {
      setSpeechSupported(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(card.kana);

    // 画面がロシア語でも、ひらがなは日本語として発音する
    utterance.lang = "ja-JP";
    utterance.rate = 0.65;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (event) => {
      if (event.error !== "canceled" && event.error !== "interrupted") {
        setSpeechSupported(false);
      }

      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const nextCard = () => {
    stopSpeaking();
    setCardIndex((currentIndex) => randomIndex(currentIndex));
    setShowAnswer(false);
    setAnsweredCount((count) => count + 1);
  };

  return (
    <main
      lang="ru"
      className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-5 py-8 text-slate-900"
    >
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Флэш-карточки хираганы
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Сначала подумайте о чтении, затем проверьте ответ
          </p>
        </header>

        <section className="flex flex-1 flex-col justify-center">
          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                {card.group}
              </span>

              <span className="text-sm text-slate-500">
                Ответов: {answeredCount}
              </span>
            </div>

            <div className="flex min-h-72 items-center justify-center">
              <p
                lang="ja"
                className={`font-bold leading-none tracking-tight text-slate-900 ${
                  card.kana.length > 1 ? "text-[7rem]" : "text-[11rem]"
                }`}
                aria-label={`Задание: ${card.kana}`}
              >
                {card.kana}
              </p>
            </div>

            <div className="min-h-24 text-center">
              {showAnswer ? (
                <>
                  <p className="text-sm text-slate-500">Чтение</p>

                  <p className="mt-1 text-5xl font-bold text-sky-700">
                    {card.reading}
                  </p>
                </>
              ) : (
                <p className="pt-8 text-slate-400">
                  Вспомните чтение и покажите ответ
                </p>
              )}
            </div>

            {speechSupported ? (
              <div className="mt-2 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={speakKana}
                  className="min-h-14 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 font-bold text-violet-800 transition active:scale-[0.98]"
                  aria-label={`Прослушать: ${card.kana}`}
                >
                  🔊 Слушать
                </button>

                <button
                  type="button"
                  onClick={stopSpeaking}
                  disabled={!isSpeaking}
                  className="min-h-14 rounded-2xl border border-slate-300 bg-white px-4 py-3 font-bold text-slate-700 transition enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ⏹ Остановить
                </button>
              </div>
            ) : (
              <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-center text-sm text-amber-800">
                Озвучивание недоступно в этом браузере.
              </p>
            )}
          </div>
        </section>

        <div className="mt-8 grid gap-3">
          {!showAnswer ? (
            <button
              type="button"
              onClick={() => setShowAnswer(true)}
              className="min-h-16 rounded-2xl bg-sky-600 px-5 py-4 text-lg font-bold text-white shadow-lg transition active:scale-[0.98]"
            >
              Показать ответ
            </button>
          ) : (
            <button
              type="button"
              onClick={nextCard}
              className="min-h-16 rounded-2xl bg-emerald-600 px-5 py-4 text-lg font-bold text-white shadow-lg transition active:scale-[0.98]"
            >
              Следующая карточка
            </button>
          )}

          <button
            type="button"
            onClick={nextCard}
            className="min-h-14 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition active:scale-[0.98]"
          >
            Не знаю・Пропустить
          </button>
        </div>
      </div>
    </main>
  );
}