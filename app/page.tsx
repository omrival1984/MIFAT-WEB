export default function Home() {
  return (
    <main className="bg-[#f7faf8] text-[#181c1b]">

      {/* HERO */}
      <section className="px-6 py-20 text-center bg-[#004234] text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          פתרונות מתקדמים לפינוי וטיפול בפסולת בישראל
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#d7dbd9]">
          מעל 50 שנות ניסיון בניהול, מחזור והטמנת פסולת
        </p>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          תחומי הפעילות שלנו
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">פינוי פסולת בניין</h3>
            <p>שירותי פינוי מקצועיים לאתרי בנייה והריסה</p>
          </div>

          <div className="bg-white border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">מחזור פסולת</h3>
            <p>תהליכי מיון ומחזור מתקדמים לשימוש חוזר</p>
          </div>

          <div className="bg-white border p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">הטמנת פסולת</h3>
            <p>אתרי הטמנה מורשים לפי תקנים מחמירים</p>
          </div>

        </div>
      </section>

    </main>
  );
}
