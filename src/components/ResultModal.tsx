"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrophyIcon, StarIcon, BookIcon, RefreshIcon } from "@/components/icons/UIIcons";
import { HomeIcon } from "@/components/icons/NavIcons";

interface ResultModalProps {
  isOpen: boolean;
  score: number;
  total: number;
  wrongCount: number;
  onRetry: () => void;
  onHome: () => void;
  onReview: () => void;
}

function getGrade(pct: number): { icon: React.ReactNode; title: string; subtitle: string; color: string } {
  if (pct === 100) return { icon: <TrophyIcon style={{ width: 40, height: 40 }} />, title: "Sempurna!", subtitle: "Luar biasa, kamu jawab semua dengan benar!", color: "var(--accent-gold)" };
  if (pct >= 80) return { icon: <StarIcon style={{ width: 40, height: 40 }} />, title: "Hebat!", subtitle: "Kamu sudah sangat menguasai kanji ini!", color: "var(--accent-emerald)" };
  if (pct >= 60) return { icon: <StarIcon style={{ width: 40, height: 40 }} />, title: "Bagus!", subtitle: "Terus latih kanji yang belum kamu hafal.", color: "var(--accent-cyan)" };
  if (pct >= 40) return { icon: <BookIcon style={{ width: 40, height: 40 }} />, title: "Terus Belajar!", subtitle: "Masih banyak kanji yang perlu dilatih.", color: "var(--accent-purple)" };
  return { icon: <RefreshIcon style={{ width: 40, height: 40 }} />, title: "Jangan Menyerah!", subtitle: "Mulai lagi dari awal, kamu pasti bisa!", color: "var(--accent-rose)" };
}

export default function ResultModal({
  isOpen,
  score,
  total,
  wrongCount,
  onRetry,
  onHome,
  onReview,
}: ResultModalProps) {
  if (!isOpen) return null;

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade = getGrade(pct);
  const circumference = 2 * Math.PI * 48;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="modal-sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="modal-drag-handle" />

            {/* Score ring */}
            <div className="result-score-ring">
              <svg width="120" height="120" viewBox="0 0 112 112">
                <circle
                  cx="56" cy="56" r="48"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="56" cy="56" r="48"
                  fill="none"
                  stroke={grade.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
                />
              </svg>
              <div className="accuracy-center">
                <motion.span
                  className="accuracy-value"
                  style={{ color: grade.color, WebkitTextFillColor: grade.color }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  {pct}%
                </motion.span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="result-grade" style={{ display: "flex", justifyContent: "center", color: grade.color }}>{grade.icon}</div>
              <h2 className="result-title" style={{ color: grade.color }}>
                {grade.title}
              </h2>
              <p className="result-subtitle">{grade.subtitle}</p>

              <div className="result-stats">
                <div className="result-stat">
                  <div className="result-stat-value" style={{ color: "var(--accent-emerald)" }}>
                    {score}
                  </div>
                  <div className="result-stat-label">Benar</div>
                </div>
                <div className="result-stat">
                  <div className="result-stat-value" style={{ color: "var(--accent-rose)" }}>
                    {wrongCount}
                  </div>
                  <div className="result-stat-label">Salah</div>
                </div>
                <div className="result-stat">
                  <div className="result-stat-value" style={{ color: "var(--accent-cyan)" }}>
                    {total}
                  </div>
                  <div className="result-stat-label">Total</div>
                </div>
              </div>

              <div className="result-actions">
                <button className="btn-primary" onClick={onRetry} id="result-retry-btn" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <RefreshIcon style={{ width: 18, height: 18, marginRight: 8 }} /> Ulangi Quiz
                </button>
                {wrongCount > 0 && (
                  <button className="btn-secondary" onClick={onReview} id="result-review-btn" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <BookIcon style={{ width: 18, height: 18, marginRight: 8 }} /> Review yang Salah
                  </button>
                )}
                <button className="btn-secondary" onClick={onHome} id="result-home-btn" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <HomeIcon style={{ width: 18, height: 18, marginRight: 8 }} /> Kembali ke Home
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
