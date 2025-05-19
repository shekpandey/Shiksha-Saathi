import { useState } from 'react';

const flashcards = {
  en: [
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "What is 2 + 2?", answer: "4" },
  ],
  hi: [
    { question: "भारत की राजधानी क्या है?", answer: "नई दिल्ली" },
    { question: "2 + 2 क्या होता है?", answer: "4" },
  ],
};

function Shiksha() {
  const [lang, setLang] = useState('en');
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
    setIndex(0);
    setFlipped(false);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % flashcards[lang].length);
    setFlipped(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <button
        onClick={toggleLang}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded shadow"
      >
        {lang === 'en' ? 'Switch to Hindi' : 'अंग्रेज़ी में बदलें'}
      </button>

      <div
        className={`w-80 h-48 bg-white border rounded-lg flex items-center justify-center text-xl text-center shadow-lg transition-transform duration-300 ease-in-out cursor-pointer ${flipped ? 'rotate-y-180' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="px-4">
          {flipped
            ? flashcards[lang][index].answer
            : flashcards[lang][index].question}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={nextCard}
          className="px-4 py-2 bg-green-500 text-white rounded shadow"
        >
          {lang === 'en' ? 'Next Card' : 'अगला कार्ड'}
        </button>
        <button
          onClick={() => alert(lang === 'en' ? 'Marked as Known!' : 'ज्ञात के रूप में चिह्नित!')}
          className="px-4 py-2 bg-yellow-500 text-white rounded shadow"
        >
          {lang === 'en' ? 'Know' : 'जानता हूँ'}
        </button>
        <button
          onClick={() => alert(lang === 'en' ? 'Marked as Unknown!' : 'अज्ञात के रूप में चिह्नित!')}
          className="px-4 py-2 bg-red-500 text-white rounded shadow"
        >
          {lang === 'en' ? "Don't Know" : 'नहीं जानता'}
        </button>
      </div>
    </div>
  );
}

export default Shiksha;
