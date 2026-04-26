"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useProgress } from "@/hooks/useProgress";
import { kanjiData } from "@/data/kanji";
import { TrophyIcon, FlameIcon, StarIcon, BookIcon, RefreshIcon } from "@/components/icons/UIIcons";
import { ProgressIcon } from "@/components/icons/NavIcons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 25 } },
};

export default function ProgressPage() {
  const { progress, accuracy, resetProgress } = useProgress();

  const wrongKanji = useMemo(
    () => kanjiData.filter((k) => progress.wrongKanjiIds.includes(k.id)),
    [progress.wrongKanjiIds]
  );

  const masteredKanji = useMemo(
    () => kanjiData.filter((k) => progress.masteredKanjiIds.includes(k.id)),
    [progress.masteredKanjiIds]
  );

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (accuracy / 100) * circumference;

  return (
    <div className="app-wrapper">
      <main className="page-content">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div className="page-header" variants={itemVariants}>
            <div>
              <h1 className="page-title">Progress Saya</h1>
              <p className="page-subtitle">Statistik belajar kanji N5</p>
            </div>
            <ProgressIcon style={{ width: 32, height: 32, color: "var(--accent-purple)" }} />
          </motion.div>

          {/* Accuracy Ring */}
          <motion.div className="progress-hero" variants={itemVariants}>
            <div className="accuracy-ring-wrapper">
              <svg width="140" height="140" viewBox="0 0 124 124">
                <circle
                  cx="62" cy="62" r="54"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="62" cy="62" r="54"
                  fill="none"
                  stroke="url(#progressGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="accuracy-center">
                <span className="accuracy-value">
                  {progress.totalAnswered > 0 ? `${accuracy}%` : "-"}
                </span>
                <span className="accuracy-label">Akurasi</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
              {progress.totalAnswered > 0
                ? `${progress.totalCorrect} benar dari ${progress.totalAnswered} soal`
                : "Belum ada data quiz"}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants}>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-item-icon"><TrophyIcon style={{ width: 24, height: 24, color: "var(--accent-gold)" }} /></div>
                <div className="stat-item-value">{progress.totalQuizzes}</div>
                <div className="stat-item-label">Quiz Selesai</div>
              </div>
              <div className="stat-item">
                <div className="stat-item-icon"><FlameIcon style={{ width: 24, height: 24, color: "var(--accent-rose)" }} /></div>
                <div className="stat-item-value">{progress.streak}</div>
                <div className="stat-item-label">Hari Streak</div>
              </div>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-item-icon"><StarIcon style={{ width: 24, height: 24, color: "var(--accent-emerald)" }} /></div>
                <div className="stat-item-value">{masteredKanji.length}</div>
                <div className="stat-item-label">Dikuasai</div>
              </div>
              <div className="stat-item">
                <div className="stat-item-icon"><BookIcon style={{ width: 24, height: 24, color: "var(--accent-cyan)" }} /></div>
                <div className="stat-item-value">{wrongKanji.length}</div>
                <div className="stat-item-label">Perlu Dilatih</div>
              </div>
            </div>
          </motion.div>

          {/* Overall progress bar */}
          <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
            <div
              className="glass-card"
              style={{ padding: "16px 20px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>
                  Kanji Terpelajari
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-purple)" }}>
                  {masteredKanji.length} / {kanjiData.length}
                </span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${(masteredKanji.length / kanjiData.length) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Kanji yang Sering Salah */}
          <motion.div variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">❌ Perlu Dilatih Lagi</h2>
              <p className="section-subtitle">
                {wrongKanji.length > 0
                  ? `${wrongKanji.length} kanji sering salah`
                  : "Belum ada kanji yang salah"}
              </p>
            </div>

            {wrongKanji.length > 0 ? (
              <div className="kanji-list">
                {wrongKanji.map((kanji, i) => (
                  <motion.div
                    key={kanji.id}
                    className="kanji-list-item"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span className="kanji-list-char">{kanji.character}</span>
                    <div className="kanji-list-info">
                      <h4>{kanji.meaning}</h4>
                      <p>{kanji.onyomi}</p>
                    </div>
                    <span className="badge badge-purple">{kanji.category}</span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: 16 }}
                >
                  <Link
                    href="/quiz"
                    className="btn-primary"
                    id="review-quiz-btn"
                    style={{ width: "100%", justifyContent: "center", display: "flex" }}
                  >
                    <RefreshIcon style={{ width: 18, height: 18, marginRight: 8 }} /> Quiz Ulang Kanji Ini
                  </Link>
                </motion.div>
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-state-icon"><TrophyIcon style={{ width: 48, height: 48, color: "var(--accent-gold)" }} /></span>
                <p className="empty-state-text">
                  Belum ada kanji yang salah dijawab.<br />
                  Mulai quiz untuk mulai tracking!
                </p>
                <Link href="/quiz" className="btn-primary" id="start-first-quiz-btn" style={{ marginTop: 16, display: "inline-flex" }}>
                  Mulai Quiz Sekarang
                </Link>
              </div>
            )}
          </motion.div>

          {/* Quiz History */}
          {progress.quizHistory.length > 0 && (
            <motion.div variants={itemVariants} style={{ marginTop: 24 }}>
              <div className="section-header">
                <h2 className="section-title">📈 Riwayat Quiz</h2>
              </div>
              <div className="kanji-list">
                {progress.quizHistory.slice(0, 7).map((entry, i) => {
                  const pct = Math.round((entry.score / entry.total) * 100);
                  return (
                    <div key={i} className="kanji-list-item">
                      <span style={{ minWidth: 32, display: "flex", alignItems: "center" }}>
                        {pct >= 80 ? <StarIcon style={{ width: 20, height: 20, color: "var(--accent-emerald)" }} /> : pct >= 60 ? <StarIcon style={{ width: 20, height: 20, color: "var(--accent-cyan)" }} /> : <BookIcon style={{ width: 20, height: 20, color: "var(--accent-purple)" }} />}
                      </span>
                      <div className="kanji-list-info">
                        <h4>{entry.date}</h4>
                        <p>{entry.score} / {entry.total} benar</p>
                      </div>
                      <span
                        className="badge"
                        style={{
                          background: pct >= 80 ? "rgba(16,185,129,0.12)" : pct >= 60 ? "rgba(6,182,212,0.12)" : "rgba(244,63,94,0.12)",
                          color: pct >= 80 ? "var(--accent-emerald)" : pct >= 60 ? "var(--accent-cyan)" : "var(--accent-rose)",
                          borderColor: pct >= 80 ? "rgba(16,185,129,0.25)" : pct >= 60 ? "rgba(6,182,212,0.25)" : "rgba(244,63,94,0.25)",
                        }}
                      >
                        {pct}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Reset */}
          {progress.totalQuizzes > 0 && (
            <motion.div variants={itemVariants} style={{ marginTop: 24 }}>
              <button
                onClick={() => {
                  if (confirm("Reset semua progress? Data akan hilang permanen.")) {
                    resetProgress();
                  }
                }}
                id="reset-progress-btn"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "transparent",
                  border: "1px solid rgba(244,63,94,0.2)",
                  borderRadius: "var(--radius-full)",
                  color: "var(--accent-rose)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                🗑️ Reset Progress
              </button>
            </motion.div>
          )}
        </motion.div>
      </main>
      <Navbar />
    </div>
  );
}
