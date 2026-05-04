"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { stories, Story } from "@/data/stories";
import { kanjiData } from "@/data/kanji";
import { BookIcon } from "@/components/icons/UIIcons";

function StoryTextDisplay({ content, furigana, kanjiUsed }: { content: string; furigana: Record<string, string>; kanjiUsed: string[] }) {
  // Convert content to hiragana version
  const getHiraganaVersion = () => {
    return content
      .split("")
      .map(char => {
        if (kanjiUsed.includes(char) && furigana[char]) {
          return furigana[char];
        }
        return char;
      })
      .join("");
  };

  const hiraganaContent = getHiraganaVersion();
  const paragraphs = content.split("\n\n");
  const hiraganaParas = hiraganaContent.split("\n\n");

  return (
    <div className="story-text-display">
      {paragraphs.map((para, idx) => (
        <div key={idx} className="story-paragraph-block">
          {/* Kanji version */}
          <div className="story-kanji-text">
            {para.split("\n").map((line, lineIdx) => (
              <div key={lineIdx} className="story-text-line">
                {line.split("").map((char, charIdx) => {
                  const isKanji = kanjiUsed.includes(char);
                  return (
                    <span
                      key={charIdx}
                      className={isKanji ? "story-kanji-char-highlight" : ""}
                      title={isKanji && kanjiData.find(k => k.character === char) ? `${kanjiData.find(k => k.character === char)?.meaning}` : ""}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Hiragana version */}
          <div className="story-hiragana-text">
            {hiraganaParas[idx]?.split("\n").map((line, lineIdx) => (
              <div key={lineIdx} className="story-text-line">
                {line}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const difficultyConfig = {
  mudah: { label: "Mudah", color: "var(--accent-emerald)", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.25)" },
  sedang: { label: "Sedang", color: "var(--accent-gold)", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)" },
  sulit: { label: "Sulit", color: "var(--accent-rose)", bg: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.25)" },
};

type DisplayMode = "both" | "kanji-only" | "hiragana-only";

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("both");

  const getHiraganaVersion = (content: string, furigana: Record<string, string>) => {
    return content
      .split("")
      .map(char => {
        // Jika ada di furigana record, gunakan hiragana
        if (furigana[char]) {
          return furigana[char];
        }
        // Jika bukan kanji, kembalikan seperti semula
        return char;
      })
      .join("");
  };

  const getModeLabel = (): string => {
    switch (displayMode) {
      case "both": return "🔤 Hiragana + Kanji";
      case "kanji-only": return "🔤 Kanji Only";
      case "hiragana-only": return "🔤 Hiragana Only";
    }
  };

  const cycleDisplayMode = () => {
    setDisplayMode(mode => {
      if (mode === "both") return "kanji-only";
      if (mode === "kanji-only") return "hiragana-only";
      return "both";
    });
  };

  return (
    <div className="app-wrapper">
      <main className="page-content">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          <div>
            <h1 className="page-title">Bacaan Kanji</h1>
            <p className="page-subtitle">Latih kemampuan membaca dalam konteks</p>
          </div>
          <BookIcon style={{ width: 32, height: 32, color: "var(--accent-purple)" }} />
        </motion.div>

        {!selectedStory ? (
          <div style={{ display: "grid", gap: 16 }}>
            {stories.map((story, i) => {
              const dc = difficultyConfig[story.difficulty];
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card story-list-card"
                  onClick={() => setSelectedStory(story)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="story-list-header">
                    <div>
                      <h3 className="story-list-title">{story.title}</h3>
                      <div className="story-list-meta">
                        <span className="badge" style={{ background: dc.bg, color: dc.color, borderColor: dc.border, border: `1px solid ${dc.border}` }}>
                          {dc.label}
                        </span>
                        <span className="story-list-info">📖 {story.readTime} menit</span>
                        <span className="story-list-info">漢 {story.kanjiUsed.length} kanji</span>
                      </div>
                    </div>
                    <span className="story-list-arrow">→</span>
                  </div>
                  <p className="story-list-preview">{story.content.replace(/\n/g, " ").slice(0, 80)}...</p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="story-control-bar">
              <button onClick={() => setSelectedStory(null)} className="btn-secondary">
                ← Kembali
              </button>
              <button
                onClick={cycleDisplayMode}
                className="btn-secondary"
                style={{ borderColor: "var(--accent-cyan)", color: "var(--accent-cyan)" }}
              >
                {getModeLabel()}
              </button>
            </div>

            <div className="glass-card story-reader-card">
              <div className="story-reader-header">
                <h2 className="story-reader-title">{selectedStory.title}</h2>
                <div className="story-reader-badges">
                  {(() => { const dc = difficultyConfig[selectedStory.difficulty]; return (
                    <span className="badge" style={{ background: dc.bg, color: dc.color, border: `1px solid ${dc.border}` }}>{dc.label}</span>
                  ); })()}
                  <span className="badge badge-cyan">📖 {selectedStory.readTime} menit</span>
                </div>
              </div>

              <div className={`story-content ${displayMode === "both" ? "with-furigana" : "no-furigana"}`}>
                {displayMode === "both" && (
                  <StoryTextDisplay content={selectedStory.content} furigana={selectedStory.furigana} kanjiUsed={selectedStory.kanjiUsed} />
                )}
                {displayMode === "kanji-only" && (
                  <div className="story-plain-text">
                    {selectedStory.content.split("").map((char, i) => {
                      if (char === "\n") return <br key={i} />;
                      const isKanji = selectedStory.kanjiUsed.includes(char);
                      if (isKanji) {
                        const info = kanjiData.find(k => k.character === char);
                        return (
                          <span key={i} className="story-kanji-highlight" title={info ? `${info.meaning} (${info.onyomi})` : undefined}>
                            {char}
                          </span>
                        );
                      }
                      return <span key={i}>{char}</span>;
                    })}
                  </div>
                )}
                {displayMode === "hiragana-only" && (
                  <div className="story-plain-text">
                    {getHiraganaVersion(selectedStory.content, selectedStory.furigana).split("").map((char, i) => {
                      if (char === "\n") return <br key={i} />;
                      return <span key={i}>{char}</span>;
                    })}
                  </div>
                )}
              </div>

              <div className="story-translation-section">
                <p className="story-translation-label">🇮🇩 Terjemahan</p>
                <p className="story-translation-text">{selectedStory.translation}</p>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <p className="story-kanji-list-title">Kanji yang digunakan:</p>
              <div className="story-kanji-grid">
                {selectedStory.kanjiUsed.map(char => {
                  const info = kanjiData.find(k => k.character === char);
                  if (!info) return null;
                  return (
                    <div key={char} className="story-kanji-tag">
                      <span className="story-kanji-tag-char">{char}</span>
                      <span className="story-kanji-tag-meaning">{info.meaning}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </main>
      <Navbar />
    </div>
  );
}
