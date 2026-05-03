"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Kanji } from "@/data/kanji";
import { TapIcon, MeaningIcon } from "@/components/icons/UIIcons";

interface KanjiCardProps {
  kanji: Kanji;
  showNumber?: boolean;
}

export default function KanjiCard({ kanji, showNumber = false }: KanjiCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front">
          <div onClick={() => setFlipped(true)} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', gap: 12 }}>
            {showNumber && (
              <span className="badge badge-purple" style={{ marginBottom: 4 }}>
                #{kanji.id}
              </span>
            )}
            <span className="flip-prompt">Kanji</span>
            <span className="kanji-display" aria-label={`Kanji: ${kanji.character}`}>
              {kanji.character}
            </span>
            <span className="flip-hint" style={{ display: "flex", alignItems: "center" }}>
              <TapIcon style={{ width: 14, height: 14, marginRight: 4 }} /> tap untuk lihat arti
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back" onClick={() => setFlipped(false)}>
          <div className="kanji-back-content">
            <div className="kanji-back-header">
              <span className="flip-prompt">Arti & Cara Baca</span>
              <span className="badge badge-cyan">{kanji.category}</span>
            </div>

            <div className="kanji-meaning-section">
              <p className="kanji-meaning">{kanji.meaning}</p>
              <div className="kanji-readings">
                <p className="kanji-reading">
                  <MeaningIcon style={{ width: 16, height: 16 }} />
                  <span className="reading-label">On:</span>
                  <span>{kanji.onyomi}</span>
                </p>
                {kanji.kunyomi && kanji.kunyomi !== "-" && (
                  <p className="kanji-reading">
                    <MeaningIcon style={{ width: 16, height: 16 }} />
                    <span className="reading-label">Kun:</span>
                    <span>{kanji.kunyomi}</span>
                  </p>
                )}
              </div>
            </div>

            {kanji.examples && kanji.examples.length > 0 && (
              <div className="kanji-examples-section">
                <p className="examples-label">📚 Contoh Kata</p>
                <div className="examples-list">
                  {kanji.examples.map((ex, i) => (
                    <div key={i} className="example-item">
                      <div className="example-header">
                        <span className="example-word">{ex.word}</span>
                        <span className="example-reading">{ex.reading}</span>
                      </div>
                      <p className="example-meaning">{ex.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <span className="flip-hint" style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TapIcon style={{ width: 14, height: 14, marginRight: 4 }} /> tap untuk kembali
          </span>
        </div>
      </div>
    </div>
  );
}

// Mini version used in list
export function KanjiMiniCard({ kanji }: { kanji: Kanji }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      onClick={() => setFlipped(!flipped)}
      className="kanji-mini-card"
    >
      <span className="mini-kanji-char">
        {kanji.character}
      </span>
      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="mini-card-front"
          >
            <p className="mini-card-hint">Tap untuk lihat</p>
            <p className="mini-card-reading">{kanji.onyomi}</p>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="mini-card-back"
          >
            <p className="mini-card-meaning">{kanji.meaning}</p>
            <p className="mini-card-category">{kanji.category}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
