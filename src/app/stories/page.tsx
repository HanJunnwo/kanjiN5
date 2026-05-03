"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { stories, Story } from "@/data/stories";
import { kanjiData } from "@/data/kanji";
import { BookIcon } from "@/components/icons/UIIcons";

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

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
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: 20, cursor: "pointer" }}
                onClick={() => setSelectedStory(story)}
                whileTap={{ scale: 0.98 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{story.title}</h3>
                  <span style={{ fontSize: 12, color: "var(--accent-purple)" }}>{story.kanjiUsed.length} Kanji</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 8, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                  {story.content}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="btn-secondary"
              style={{ marginBottom: 20, fontSize: 13 }}
            >
              ← Kembali ke Daftar
            </button>

            <div className="glass-card" style={{ padding: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--accent-purple)", marginBottom: 16 }}>
                {selectedStory.title}
              </h2>

              <div style={{ fontSize: 20, lineHeight: 2, color: "var(--text-primary)", marginBottom: 24, fontFamily: "'Noto Sans JP', serif" }}>
                {selectedStory.content.split('').map((char, i) => {
                  const isKanji = selectedStory.kanjiUsed.includes(char);
                  if (isKanji) {
                    const kanjiInfo = kanjiData.find(k => k.character === char);
                    return (
                      <span
                        key={i}
                        style={{ color: "var(--accent-cyan)", borderBottom: "2px solid var(--accent-cyan)", cursor: "help", padding: "0 2px" }}
                        title={kanjiInfo ? `${kanjiInfo.meaning} (${kanjiInfo.onyomi})` : undefined}
                      >
                        {char}
                      </span>
                    );
                  }
                  return <span key={i}>{char}</span>;
                })}
              </div>

              <div style={{ borderTop: "1px solid var(--glass-border)", paddingTop: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 8 }}>Terjemahan:</p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {selectedStory.translation}
                </p>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>Kanji yang digunakan:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selectedStory.kanjiUsed.map(char => {
                  const kanjiInfo = kanjiData.find(k => k.character === char);
                  if (!kanjiInfo) return null;
                  return (
                    <div
                      key={char}
                      style={{ background: "var(--glass-bg)", padding: "4px 10px", borderRadius: 8, border: "1px solid var(--glass-border)", fontSize: 14 }}
                    >
                      <span style={{ fontWeight: 700, color: "var(--accent-purple)", marginRight: 6 }}>{char}</span>
                      <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{kanjiInfo.meaning}</span>
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
