"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { kanjiData, categories, categoryEmoji } from "@/data/kanji";
import { useProgress } from "@/hooks/useProgress";
import { FlameIcon, BookIcon } from "@/components/icons/UIIcons";
import { QuizIcon, PenIcon } from "@/components/icons/NavIcons";
import { HeroJapanIcon } from "@/components/icons/HeroIllustration";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 25 } },
};

export default function HomePage() {
  const { progress, accuracy } = useProgress();
  const totalKanji = kanjiData.length;
  const masteredCount = progress.masteredKanjiIds.length;

  return (
    <div className="app-wrapper">
      <main className="page-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero */}
          <motion.div className="hero-section" variants={itemVariants}>
            <div className="hero-logo" aria-hidden="true" style={{ display: "inline-flex", justifyContent: "center" }}>
              <HeroJapanIcon />
            </div>
            <h1 className="hero-title">Kanji N5 Quiz</h1>
            <p className="hero-subtitle">
              103 kanji JLPT N5 — belajar kapan saja, di mana saja
            </p>
          </motion.div>

          {/* Streak */}
          {progress.streak > 0 && (
            <motion.div className="streak-card" variants={itemVariants}>
              <FlameIcon className="streak-icon" />
              <div className="streak-text">
                <h3>{progress.streak} Hari Streak!</h3>
                <p>Kamu sudah belajar {progress.streak} hari berturut-turut</p>
              </div>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-value">{totalKanji}</div>
                <div className="stat-label">Total Kanji</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{masteredCount}</div>
                <div className="stat-label">Dikuasai</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{progress.totalQuizzes > 0 ? `${accuracy}%` : "-"}</div>
                <div className="stat-label">Akurasi</div>
              </div>
            </div>

            {masteredCount > 0 && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>Progress penguasaan</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent-purple)" }}>
                    {Math.round((masteredCount / totalKanji) * 100)}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(masteredCount / totalKanji) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Main Actions */}
          <motion.div variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">Mulai Belajar</h2>
            </div>
            <div className="action-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Link href="/learn" className="action-card purple" id="home-learn-btn">
                <BookIcon className="action-icon" />
                <span className="action-title">Flashcard</span>
                <span className="action-desc">Belajar kanji</span>
              </Link>
              <Link href="/writing" className="action-card cyan" id="home-write-btn">
                <PenIcon className="action-icon" />
                <span className="action-title">Latihan Menulis</span>
                <span className="action-desc">Tulis kanji fullscreen</span>
              </Link>
              <Link href="/levels" className="action-card gold" id="home-quiz-btn">
                <QuizIcon className="action-icon" />
                <span className="action-title">Ujian JLPT</span>
                <span className="action-desc">50 soal N5 style</span>
              </Link>
              <Link href="/stories" className="action-card purple" id="home-stories-btn">
                <BookIcon className="action-icon" />
                <span className="action-title">Bacaan</span>
                <span className="action-desc">Cerita dengan furigana</span>
              </Link>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <div className="section-header">
              <h2 className="section-title">Kategori</h2>
              <p className="section-subtitle">{categories.length} kategori kanji N5</p>
            </div>
            <div className="category-scroll">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/learn?category=${encodeURIComponent(cat)}`}
                  className="category-pill"
                  id={`category-${cat.replace(/\s/g, "-").toLowerCase()}`}
                >
                  <span>{categoryEmoji[cat]}</span>
                  <span>{cat}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick tips */}
          <motion.div variants={itemVariants} style={{ marginTop: 24 }}>
            <div className="glass-card" style={{ padding: "16px 20px" }}>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                💡 Tips Belajar
              </p>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Belajar <strong style={{ color: "var(--text-primary)" }}>10 kanji sehari</strong> lebih efektif dari hafal banyak sekaligus. Gunakan flashcard sebelum quiz!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Navbar />
    </div>
  );
}
