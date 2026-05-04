"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { examQuestions, ExamQuestion } from "@/data/examQuestions";
import { useProgress } from "@/hooks/useProgress";
import { QuizIcon } from "@/components/icons/NavIcons";

const QUESTIONS_PER_LEVEL = 6;
const TOTAL_LEVELS = 10;

interface LevelInfo {
  id: number;
  title: string;
  questions: ExamQuestion[];
  passingScore: number;
}

function buildLevels(): LevelInfo[] {
  return Array.from({ length: TOTAL_LEVELS }, (_, i) => {
    const start = i * QUESTIONS_PER_LEVEL;
    const end = Math.min(start + QUESTIONS_PER_LEVEL, examQuestions.length);
    const qs = examQuestions.slice(start, end);
    return {
      id: i + 1,
      title: `Level ${i + 1}`,
      questions: qs,
      passingScore: Math.ceil(qs.length * 0.6),
    };
  });
}

const typeLabels: Record<string, { label: string; color: string }> = {
  reading: { label: "読み方", color: "var(--accent-purple)" },
  kanji: { label: "漢字", color: "var(--accent-cyan)" },
  vocabulary: { label: "語彙", color: "var(--accent-gold)" },
  grammar: { label: "文法", color: "var(--accent-emerald)" },
};

export default function LevelsPage() {
  const { progress, completeLevel, recordQuiz } = useProgress();
  const levels = useMemo(buildLevels, []);

  const [activeLevel, setActiveLevel] = useState<LevelInfo | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setShowExplanation(true);

    if (answer === activeLevel!.questions[currentIdx].correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < activeLevel!.questions.length) {
      setCurrentIdx((i) => i + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      const finalScore = score + (selectedAnswer === activeLevel!.questions[currentIdx].correctAnswer ? 0 : 0);
      setQuizFinished(true);
      recordQuiz(score, activeLevel!.questions.length, []);
      if (score >= activeLevel!.passingScore) {
        completeLevel(activeLevel!.id);
      }
    }
  };

  const resetQuiz = () => {
    setActiveLevel(null);
    setCurrentIdx(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setShowExplanation(false);
  };

  const startLevel = (level: LevelInfo) => {
    setActiveLevel(level);
    setCurrentIdx(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setShowExplanation(false);
  };

  // LEVEL SELECT
  if (!activeLevel) {
    return (
      <div className="app-wrapper">
        <main className="page-content">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="page-header">
            <div>
              <h1 className="page-title">Ujian JLPT N5</h1>
              <p className="page-subtitle">50 soal bergaya ujian JLPT N5</p>
            </div>
            <QuizIcon style={{ width: 32, height: 32, color: "var(--accent-gold)" }} />
          </motion.div>

          <div className="exam-level-grid">
            {levels.map((level, i) => {
              const isCompleted = (progress.completedLevels || []).includes(level.id);
              const isLocked = level.id > 1 && !(progress.completedLevels || []).includes(level.id - 1);

              return (
                <motion.button
                  key={level.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={!isLocked ? { scale: 0.96 } : {}}
                  onClick={() => !isLocked && startLevel(level)}
                  className={`exam-level-card ${isCompleted ? "completed" : ""} ${isLocked ? "locked" : ""}`}
                >
                  <div className="exam-level-number">
                    {isLocked ? "🔒" : isCompleted ? "✅" : level.id}
                  </div>
                  <div className="exam-level-info">
                    <h3>{level.title}</h3>
                    <p>{level.questions.length} soal · Min. {level.passingScore} benar</p>
                  </div>
                  {!isLocked && <span className="exam-level-arrow">→</span>}
                </motion.button>
              );
            })}
          </div>
        </main>
        <Navbar />
      </div>
    );
  }

  // QUIZ FINISHED
  if (quizFinished) {
    const pct = Math.round((score / activeLevel.questions.length) * 100);
    const passed = score >= activeLevel.passingScore;
    return (
      <div className="app-wrapper">
        <main className="page-content">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="exam-result-card">
            <div className="exam-result-emoji">{passed ? "🎉" : "💪"}</div>
            <h2 className="exam-result-title">{passed ? "Level Selesai!" : "Coba Lagi!"}</h2>
            <p className="exam-result-score">{score} / {activeLevel.questions.length} benar ({pct}%)</p>
            <p className="exam-result-min">Minimal {activeLevel.passingScore} untuk lulus</p>

            <div className="exam-result-bar-wrapper">
              <div className="progress-bar" style={{ height: 10 }}>
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ background: passed ? "var(--accent-emerald)" : "var(--accent-rose)" }}
                />
              </div>
            </div>

            <div className="exam-result-actions">
              <button onClick={resetQuiz} className="btn-primary" style={{ flex: 1 }}>
                {passed ? "Kembali" : "Ulangi"}
              </button>
              {passed && activeLevel.id < TOTAL_LEVELS && (
                <button
                  onClick={() => {
                    const next = levels.find((l) => l.id === activeLevel.id + 1);
                    if (next) startLevel(next);
                  }}
                  className="btn-secondary"
                  style={{ flex: 1 }}
                >
                  Level Berikutnya →
                </button>
              )}
            </div>
          </motion.div>
        </main>
        <Navbar />
      </div>
    );
  }

  // PLAYING
  const q = activeLevel.questions[currentIdx];
  const pct = Math.round((currentIdx / activeLevel.questions.length) * 100);
  const tl = typeLabels[q.type] || typeLabels.reading;

  return (
    <div className="app-wrapper">
      <main className="page-content">
        {/* Header */}
        <div className="exam-play-header">
          <div className="exam-play-top">
            <span className="exam-play-level">{activeLevel.title}</span>
            <span className="exam-play-counter">Soal {currentIdx + 1} / {activeLevel.questions.length}</span>
            <span className="quiz-score-badge">⭐ {score}</span>
          </div>
          <div className="progress-bar">
            <motion.div className="progress-fill" animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }} style={{ background: "var(--accent-gold)" }} />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          >
            <div className="exam-question-card">
              <span className="exam-type-badge" style={{ color: tl.color, borderColor: tl.color }}>{tl.label}</span>

              <p className="exam-question-text">{q.question}</p>
              {q.context && <p className="exam-question-context">{q.context}</p>}
            </div>

            {/* Options */}
            <div className="exam-options">
              {q.options.map((opt, i) => {
                let cls = "exam-option";
                if (isAnswered) {
                  if (opt === q.correctAnswer) cls += " correct";
                  else if (opt === selectedAnswer && opt !== q.correctAnswer) cls += " wrong";
                }
                return (
                  <motion.button
                    key={i}
                    className={cls}
                    onClick={() => handleAnswer(opt)}
                    disabled={isAnswered}
                    whileTap={{ scale: isAnswered ? 1 : 0.97 }}
                  >
                    <span className="exam-option-letter">{String.fromCharCode(65 + i)}</span>
                    <span className="exam-option-text">{opt}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="exam-explanation"
              >
                <p className="exam-explanation-label">
                  {selectedAnswer === q.correctAnswer ? "✅ Benar!" : "❌ Salah!"}
                </p>
                <p className="exam-explanation-text">{q.explanation}</p>
                <button onClick={handleNext} className="btn-primary" style={{ width: "100%", marginTop: 16 }}>
                  {currentIdx + 1 < activeLevel.questions.length ? "Soal Berikutnya →" : "Lihat Hasil"}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <Navbar />
    </div>
  );
}
