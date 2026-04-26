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
    <div className="flip-card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front">
          {showNumber && (
            <span className="badge badge-purple" style={{ marginBottom: 12 }}>
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

        {/* Back */}
        <div className="flip-card-back">
          <span className="flip-prompt">Arti & Cara Baca</span>
          <p className="kanji-meaning">{kanji.meaning}</p>
          <div style={{ marginBottom: 12 }}>
            <p className="kanji-reading" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <MeaningIcon style={{ width: 18, height: 18 }} /> {kanji.onyomi}
            </p>
            {kanji.kunyomi && kanji.kunyomi !== "-" && (
              <p className="kanji-sub">Kunyomi: {kanji.kunyomi}</p>
            )}
          </div>
          <span className="badge badge-cyan">{kanji.category}</span>
          <span className="flip-hint" style={{ marginTop: 12, display: "flex", alignItems: "center" }}>
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
      style={{
        background: flipped
          ? "linear-gradient(145deg, rgba(6,182,212,0.1) 0%, rgba(8,8,18,0.9) 100%)"
          : "var(--glass-bg)",
        border: `1px solid ${flipped ? "rgba(6,182,212,0.25)" : "var(--glass-border)"}`,
        borderRadius: "var(--radius-md)",
        padding: "16px",
        cursor: "pointer",
        backdropFilter: "blur(16px)",
        transition: "all 0.3s ease",
        minHeight: 90,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <span
        style={{
          fontSize: 36,
          fontFamily: "'Noto Sans JP', serif",
          fontWeight: 700,
          background: "var(--gradient-aurora)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          minWidth: 44,
          textAlign: "center",
          flexShrink: 0,
        }}
      >
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
          >
            <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>
              Tap untuk lihat arti
            </p>
            <p style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-purple)" }}>
              {kanji.onyomi}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <p style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>
              {kanji.meaning}
            </p>
            <p style={{ fontSize: 12, color: "var(--accent-cyan)" }}>
              {kanji.onyomi}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
