"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import KanjiCard, { KanjiMiniCard } from "@/components/KanjiCard";
import { kanjiData, categories, categoryEmoji, KanjiCategory } from "@/data/kanji";
import { Suspense } from "react";
import { CardsIcon, ListIcon } from "@/components/icons/UIIcons";

function LearnContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") as KanjiCategory | null;

  const [activeCategory, setActiveCategory] = useState<KanjiCategory | "Semua">(
    initialCat || "Semua"
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"flashcard" | "list">("flashcard");

  const filteredKanji = useMemo(() => {
    if (activeCategory === "Semua") return kanjiData;
    return kanjiData.filter((k) => k.category === activeCategory);
  }, [activeCategory]);

  const currentKanji = filteredKanji[currentIndex] ?? filteredKanji[0];

  const handlePrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex((i) => Math.min(filteredKanji.length - 1, i + 1));

  const handleCategoryChange = (cat: KanjiCategory | "Semua") => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <div className="app-wrapper">
      <main className="page-content">
        {/* Header */}
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="page-title">Belajar Kanji</h1>
            <p className="page-subtitle">
              {filteredKanji.length} kanji{activeCategory !== "Semua" ? ` · ${activeCategory}` : ""}
            </p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className={`btn-icon ${viewMode === "flashcard" ? "active" : ""}`}
              onClick={() => setViewMode("flashcard")}
              title="Mode Flashcard"
              id="view-flashcard-btn"
              style={viewMode === "flashcard" ? { borderColor: "var(--accent-purple)", color: "var(--accent-purple)" } : {}}
            >
              <CardsIcon style={{ width: 22, height: 22 }} />
            </button>
            <button
              className={`btn-icon ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="Mode List"
              id="view-list-btn"
              style={viewMode === "list" ? { borderColor: "var(--accent-purple)", color: "var(--accent-purple)" } : {}}
            >
              <ListIcon style={{ width: 22, height: 22 }} />
            </button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: 24 }}
        >
          <div className="category-scroll">
            <button
              className={`category-pill ${activeCategory === "Semua" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Semua")}
              id="cat-all-btn"
            >
              🌸 Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
                id={`cat-${cat.replace(/\s/g, "-").toLowerCase()}-btn`}
              >
                {categoryEmoji[cat]} {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Flashcard Mode */}
        {viewMode === "flashcard" && currentKanji && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentKanji.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              >
                <KanjiCard kanji={currentKanji} showNumber />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="learn-controls">
              <button
                className="btn-secondary"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                id="learn-prev-btn"
                style={{ opacity: currentIndex === 0 ? 0.4 : 1, minWidth: 100 }}
              >
                ← Prev
              </button>
              <span className="learn-counter">
                {currentIndex + 1} / {filteredKanji.length}
              </span>
              <button
                className="btn-secondary"
                onClick={handleNext}
                disabled={currentIndex === filteredKanji.length - 1}
                id="learn-next-btn"
                style={{ opacity: currentIndex === filteredKanji.length - 1 ? 0.4 : 1, minWidth: 100 }}
              >
                Next →
              </button>
            </div>

            {/* Progress bar */}
            <div style={{ marginTop: 20 }}>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${((currentIndex + 1) / filteredKanji.length) * 100}%` }}
                />
              </div>
              <p style={{ textAlign: "center", marginTop: 8, fontSize: 11, color: "var(--text-muted)" }}>
                Tap kartu untuk flip • Swipe prev/next
              </p>
            </div>
          </motion.div>
        )}

        {/* List Mode */}
        {viewMode === "list" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="learn-list-container">
              {filteredKanji.map((kanji, i) => (
                <motion.div
                  key={kanji.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, type: "spring" }}
                >
                  <KanjiMiniCard kanji={kanji} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      <Navbar />
    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="loading-spinner"><div className="spinner" /></div>}>
      <LearnContent />
    </Suspense>
  );
}
