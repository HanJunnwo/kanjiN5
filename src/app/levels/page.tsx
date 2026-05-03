"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { levels, Level } from "@/data/levels";
import { kanjiData, Kanji } from "@/data/kanji";
import { useProgress } from "@/hooks/useProgress";
import { QuizIcon } from "@/components/icons/NavIcons";

export default function LevelsPage() {
  const router = useRouter();
  const { progress, completeLevel } = useProgress();
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);

  // Quiz state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const levelQuestions = useMemo(() => {
    if (!activeLevel) return [];

    return activeLevel.kanjiIds.map(id => {
      const kanji = kanjiData.find(k => k.id === id)!;
      // Generate a context-based question or simple reading/meaning
      const type = Math.random() > 0.5 ? "reading" : "meaning";

      const others = kanjiData
        .filter(k => k.id !== kanji.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      if (type === "reading") {
        const correctAnswer = kanji.onyomi;
        const options = [correctAnswer, ...others.map(o => o.onyomi)].sort(() => Math.random() - 0.5);
        return {
          question: `Apa cara baca (Onyomi) dari kanji "${kanji.character}"?`,
          options,
          correctAnswer,
          kanji: kanji.character
        };
      } else {
        const correctAnswer = kanji.meaning;
        const options = [correctAnswer, ...others.map(o => o.meaning)].sort(() => Math.random() - 0.5);
        return {
          question: `Apa arti dari kanji "${kanji.character}"?`,
          options,
          correctAnswer,
          kanji: kanji.character
        };
      }
    });
  }, [activeLevel]);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === levelQuestions[currentIdx].correctAnswer) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentIdx + 1 < levelQuestions.length) {
        setCurrentIdx(i => i + 1);
        setIsAnswered(false);
        setSelectedAnswer(null);
      } else {
        setQuizFinished(true);
        if (score + (answer === levelQuestions[currentIdx].correctAnswer ? 1 : 0) >= (activeLevel?.passingScore || 0)) {
          completeLevel(activeLevel!.id);
        }
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setActiveLevel(null);
    setCurrentIdx(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuizFinished(false);
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
            <h1 className="page-title">Level Ujian</h1>
            <p className="page-subtitle">Selesaikan 20 level tantangan Kanji</p>
          </div>
          <QuizIcon style={{ width: 32, height: 32, color: "var(--accent-gold)" }} />
        </motion.div>

        {!activeLevel ? (
          <div className="level-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {levels.map((level) => {
              const isCompleted = (progress.completedLevels || []).includes(level.id);
              const isLocked = level.id > 1 && !(progress.completedLevels || []).includes(level.id - 1);

              return (
                <motion.button
                  key={level.id}
                  whileTap={!isLocked ? { scale: 0.95 } : {}}
                  onClick={() => !isLocked && setActiveLevel(level)}
                  className={`level-card ${isCompleted ? "completed" : ""} ${isLocked ? "locked" : ""}`}
                  style={{
                    aspectRatio: "1/1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isLocked ? "rgba(255,255,255,0.05)" : isCompleted ? "var(--accent-purple)" : "var(--glass-bg)",
                    border: `1px solid ${isCompleted ? "var(--accent-purple)" : "var(--glass-border)"}`,
                    borderRadius: 16,
                    cursor: isLocked ? "not-allowed" : "pointer",
                    position: "relative",
                    opacity: isLocked ? 0.5 : 1
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 800, color: isCompleted ? "#fff" : "var(--text-primary)" }}>{level.id}</span>
                  {isLocked && <span style={{ fontSize: 10 }}>🔒</span>}
                  {isCompleted && <span style={{ position: "absolute", top: 4, right: 6, fontSize: 10 }}>✅</span>}
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div className="quiz-container">
            {!quizFinished ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14 }}>
                  <span>{activeLevel.title}: Soal {currentIdx + 1} / {levelQuestions.length}</span>
                  <span>Skor: {score}</span>
                </div>

                <div className="progress-bar" style={{ marginBottom: 24 }}>
                  <div
                    className="progress-fill"
                    style={{ width: `${((currentIdx + 1) / levelQuestions.length) * 100}%`, background: "var(--accent-gold)" }}
                  />
                </div>

                <div className="glass-card" style={{ padding: 32, textAlign: "center", marginBottom: 24 }}>
                   <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 12 }}>{levelQuestions[currentIdx].question}</p>
                   <p style={{ fontSize: 64, fontWeight: 800, color: "var(--text-primary)", fontFamily: "'Noto Sans JP', serif" }}>
                     {levelQuestions[currentIdx].kanji}
                   </p>
                </div>

                <div style={{ display: "grid", gap: 12 }}>
                  {levelQuestions[currentIdx].options.map((opt, i) => {
                    let style = { background: "var(--glass-bg)", borderColor: "var(--glass-border)" };
                    if (isAnswered) {
                      if (opt === levelQuestions[currentIdx].correctAnswer) {
                        style = { background: "rgba(34, 197, 94, 0.2)", borderColor: "#22c55e" };
                      } else if (opt === selectedAnswer) {
                        style = { background: "rgba(239, 68, 68, 0.2)", borderColor: "#ef4444" };
                      }
                    }

                    return (
                      <button
                        key={i}
                        disabled={isAnswered}
                        onClick={() => handleAnswer(opt)}
                        style={{
                          padding: 16,
                          borderRadius: 12,
                          border: "1px solid",
                          textAlign: "left",
                          fontSize: 15,
                          fontWeight: 600,
                          ...style
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card"
                style={{ padding: 40, textAlign: "center" }}
              >
                <div style={{ fontSize: 64, marginBottom: 16 }}>
                  {score >= activeLevel.passingScore ? "🎉" : "💪"}
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
                  {score >= activeLevel.passingScore ? "Level Selesai!" : "Coba Lagi!"}
                </h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
                  Skor kamu: {score} / {levelQuestions.length}<br />
                  (Minimal {activeLevel.passingScore} untuk lulus)
                </p>

                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={resetQuiz} className="btn-primary" style={{ flex: 1 }}>
                    {score >= activeLevel.passingScore ? "Selesai" : "Ulangi"}
                  </button>
                  {score >= activeLevel.passingScore && activeLevel.id < 20 && (
                    <button
                      onClick={() => {
                        const nextLevel = levels.find(l => l.id === activeLevel.id + 1);
                        resetQuiz();
                        setActiveLevel(nextLevel || null);
                      }}
                      className="btn-secondary"
                      style={{ flex: 1 }}
                    >
                      Level Berikutnya
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </main>
      <Navbar />
    </div>
  );
}
