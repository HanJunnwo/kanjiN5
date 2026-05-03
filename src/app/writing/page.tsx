"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { kanjiData, categories, categoryEmoji, KanjiCategory } from "@/data/kanji";

type HanziWriterType = any;

export default function WritingPage() {
  const [activeCategory, setActiveCategory] = useState<KanjiCategory | "Semua">("Semua");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuizzing, setIsQuizzing] = useState(false);
  const [quizResult, setQuizResult] = useState<"correct" | "incorrect" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriterType | null>(null);
  const HanziWriterRef = useRef<any>(null);

  const filteredKanji = useMemo(() => {
    if (activeCategory === "Semua") return kanjiData;
    return kanjiData.filter((k) => k.category === activeCategory);
  }, [activeCategory]);

  const currentKanji = filteredKanji[currentIndex] ?? filteredKanji[0];

  // Calculate canvas size based on viewport
  const [canvasSize, setCanvasSize] = useState(300);
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      const size = Math.min(w - 80, 420);
      setCanvasSize(size);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Load HanziWriter dynamically
  useEffect(() => {
    import("hanzi-writer").then((mod) => {
      HanziWriterRef.current = mod.default;
    });
  }, []);

  useEffect(() => {
    if (containerRef.current && currentKanji && HanziWriterRef.current) {
      containerRef.current.innerHTML = "";
      setIsQuizzing(false);
      setQuizResult(null);
      writerRef.current = HanziWriterRef.current.create(containerRef.current, currentKanji.character, {
        width: canvasSize,
        height: canvasSize,
        padding: 15,
        showOutline: true,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 200,
        strokeColor: "#8b5cf6",
        outlineColor: "rgba(255,255,255,0.15)",
        drawingColor: "#06b6d4",
        radicalColor: "#6d28d9",
      });
    }
  }, [currentKanji, canvasSize]);

  const handleAnimate = () => {
    if (writerRef.current) {
      setIsQuizzing(false);
      setQuizResult(null);
      writerRef.current.animateCharacter();
    }
  };

  const handleQuiz = () => {
    if (writerRef.current) {
      setIsQuizzing(true);
      setQuizResult(null);
      writerRef.current.quiz({
        onComplete: (summary: { totalMistakes: number }) => {
          setQuizResult(summary.totalMistakes === 0 ? "correct" : "incorrect");
          setIsQuizzing(false);
        },
      });
    }
  };

  const handleReset = () => {
    if (writerRef.current) {
      setIsQuizzing(false);
      setQuizResult(null);
      writerRef.current.cancelQuiz();
      writerRef.current.showCharacter();
    }
  };

  const handlePrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => Math.min(filteredKanji.length - 1, i + 1));
  };

  const handleCategoryChange = (cat: KanjiCategory | "Semua") => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const pct = ((currentIndex + 1) / filteredKanji.length) * 100;

  return (
    <div className="app-wrapper">
      <main className="page-content">
        {/* Header */}
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="page-title">Latihan Menulis</h1>
            <p className="page-subtitle">
              {filteredKanji.length} kanji · Ikuti urutan goresan
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: 20 }}
        >
          <div className="category-scroll">
            <button
              className={`category-pill ${activeCategory === "Semua" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Semua")}
            >
              🌸 Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {categoryEmoji[cat]} {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {currentKanji && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Kanji Info Header */}
            <div className="writing-info-card">
              <div className="writing-info-kanji">{currentKanji.character}</div>
              <div className="writing-info-details">
                <h2 className="writing-info-meaning">{currentKanji.meaning}</h2>
                <p className="writing-info-reading">
                  <span>音: {currentKanji.onyomi}</span>
                  {currentKanji.kunyomi && currentKanji.kunyomi !== "-" && (
                    <span> · 訓: {currentKanji.kunyomi}</span>
                  )}
                </p>
                <span className="badge badge-purple" style={{ marginTop: 4 }}>{currentKanji.category}</span>
              </div>
            </div>

            {/* Canvas Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentKanji.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="writing-canvas-wrapper"
              >
                <div
                  ref={containerRef}
                  className="writing-canvas"
                  style={{ width: canvasSize + 30, height: canvasSize + 30 }}
                />

                {isQuizzing && (
                  <div className="writing-quiz-hint">
                    <span className="writing-quiz-dot" />
                    Ikuti urutan goresan yang benar!
                  </div>
                )}

                {quizResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`writing-result ${quizResult}`}
                  >
                    {quizResult === "correct" ? "✅ Sempurna!" : "💪 Coba lagi!"}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="writing-actions">
              <button onClick={handleAnimate} className="writing-btn writing-btn-purple">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Animate
              </button>
              <button onClick={handleQuiz} className="writing-btn writing-btn-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                {isQuizzing ? "Menulis..." : "Tulis"}
              </button>
              <button onClick={handleReset} className="writing-btn writing-btn-slate">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                Reset
              </button>
            </div>

            {/* Navigation */}
            <div className="writing-nav">
              <button
                className="btn-secondary"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.4 : 1, minWidth: 90 }}
              >
                ← Prev
              </button>
              <span className="writing-counter">
                {currentIndex + 1} / {filteredKanji.length}
              </span>
              <button
                className="btn-secondary"
                onClick={handleNext}
                disabled={currentIndex === filteredKanji.length - 1}
                style={{ opacity: currentIndex === filteredKanji.length - 1 ? 0.4 : 1, minWidth: 90 }}
              >
                Next →
              </button>
            </div>

            {/* Progress */}
            <div style={{ marginTop: 16 }}>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </motion.div>
        )}
      </main>
      <Navbar />
    </div>
  );
}
