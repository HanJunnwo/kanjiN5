"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import ResultModal from "@/components/ResultModal";
import { kanjiData, categories, categoryEmoji, Kanji } from "@/data/kanji";
import { useProgress } from "@/hooks/useProgress";
import { MeaningIcon, ReadingIcon, WritingIcon } from "@/components/icons/UIIcons";
import { QuizIcon } from "@/components/icons/NavIcons";

type QuizMode = "meaning" | "reading" | "kanji";
type QuizState = "setup" | "playing" | "finished";

const QUIZ_MODES = [
  {
    id: "meaning" as QuizMode,
    icon: <MeaningIcon />,
    title: "Tebak Arti",
    desc: "Lihat kanji → pilih arti yang benar",
    color: "var(--accent-purple)",
  },
  {
    id: "reading" as QuizMode,
    icon: <ReadingIcon />,
    title: "Tebak Cara Baca",
    desc: "Lihat kanji → pilih cara baca yang benar",
    color: "var(--accent-cyan)",
  },
  {
    id: "kanji" as QuizMode,
    icon: <WritingIcon />,
    title: "Tebak Kanji",
    desc: "Lihat arti → pilih kanji yang benar",
    color: "var(--accent-gold)",
  },
];

const QUIZ_COUNTS = [5, 10, 20, 30, 50];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function generateQuestion(
  question: Kanji,
  allKanji: Kanji[],
  mode: QuizMode
): { options: string[]; correctAnswer: string; questionText: string; subText?: string } {
  const others = shuffle(allKanji.filter((k) => k.id !== question.id)).slice(0, 3);

  if (mode === "meaning") {
    const correctAnswer = question.meaning;
    const options = shuffle([correctAnswer, ...others.map((k) => k.meaning)]);
    return { options, correctAnswer, questionText: question.character };
  } else if (mode === "reading") {
    const correctAnswer = question.onyomi;
    const options = shuffle([correctAnswer, ...others.map((k) => k.onyomi)]);
    return { options, correctAnswer, questionText: question.character, subText: "Pilih cara baca (Onyomi)" };
  } else {
    const correctAnswer = question.character;
    const options = shuffle([correctAnswer, ...others.map((k) => k.character)]);
    return { options, correctAnswer, questionText: question.meaning, subText: `Cara baca: ${question.onyomi}` };
  }
}

export default function QuizPage() {
  const router = useRouter();
  const { recordQuiz } = useProgress();

  const [quizState, setQuizState] = useState<QuizState>("setup");
  const [selectedMode, setSelectedMode] = useState<QuizMode>("meaning");
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  // Quiz playing state
  const [questions, setQuestions] = useState<Kanji[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongIds, setWrongIds] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startQuiz = useCallback(() => {
    const pool =
      selectedCategory === "Semua"
        ? kanjiData
        : kanjiData.filter((k) => k.category === selectedCategory);
    const shuffled = shuffle(pool).slice(0, questionCount);
    setQuestions(shuffled);
    setCurrentIdx(0);
    setScore(0);
    setWrongIds([]);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowResult(false);
    setQuizState("playing");
  }, [questionCount, selectedCategory]);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (isAnswered) return;
      const currentKanji = questions[currentIdx];
      const { correctAnswer } = generateQuestion(currentKanji, kanjiData, selectedMode);
      const isCorrect = answer === correctAnswer;

      setSelectedAnswer(answer);
      setIsAnswered(true);

      if (isCorrect) {
        setScore((s) => s + 1);
      } else {
        setWrongIds((ids) => [...ids, currentKanji.id]);
      }

      timerRef.current = setTimeout(() => {
        if (currentIdx + 1 >= questions.length) {
          // finished
          const finalScore = isCorrect ? score + 1 : score;
          const finalWrong = isCorrect ? wrongIds : [...wrongIds, currentKanji.id];
          recordQuiz(finalScore, questions.length, finalWrong);
          setScore(finalScore);
          setWrongIds(finalWrong);
          setShowResult(true);
          setQuizState("finished");
        } else {
          setCurrentIdx((i) => i + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
        }
      }, 900);
    },
    [isAnswered, questions, currentIdx, selectedMode, score, wrongIds, recordQuiz]
  );

  const handleRetry = () => {
    setShowResult(false);
    startQuiz();
  };

  const handleHome = () => {
    setShowResult(false);
    setQuizState("setup");
    router.push("/");
  };

  const handleReview = () => {
    setShowResult(false);
    setQuizState("setup");
    router.push("/progress");
  };

  // SETUP SCREEN
  if (quizState === "setup") {
    return (
      <div className="app-wrapper">
        <main className="page-content">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-header"
          >
            <div>
              <h1 className="page-title">Quiz Kanji</h1>
              <p className="page-subtitle">Pilih mode dan mulai quiz!</p>
            </div>
            <QuizIcon style={{ width: 32, height: 32, color: "var(--accent-cyan)" }} />
          </motion.div>

          {/* Mode Selection */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="section-header">
              <h2 className="section-title">Mode Quiz</h2>
            </div>
            <div className="mode-grid">
              {QUIZ_MODES.map((mode) => (
                <button
                  key={mode.id}
                  className={`mode-card ${selectedMode === mode.id ? "selected" : ""}`}
                  onClick={() => setSelectedMode(mode.id)}
                  id={`mode-${mode.id}-btn`}
                  style={{ width: "100%", textAlign: "left" }}
                >
                  <div
                    className="mode-icon"
                    style={{
                      background: `${mode.color}20`,
                      borderColor: `${mode.color}30`,
                    }}
                  >
                    {mode.icon}
                  </div>
                  <div className="mode-info">
                    <h3 style={{ color: selectedMode === mode.id ? mode.color : "var(--text-primary)" }}>
                      {mode.title}
                    </h3>
                    <p>{mode.desc}</p>
                  </div>
                  {selectedMode === mode.id && (
                    <span style={{ marginLeft: "auto", color: mode.color, fontSize: 18 }}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: 24 }}
          >
            <div className="section-header">
              <h2 className="section-title">Kategori</h2>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {selectedCategory === "Semua"
                  ? `${kanjiData.length} kanji`
                  : `${kanjiData.filter((k) => k.category === selectedCategory).length} kanji`}
              </span>
            </div>
            <div className="category-scroll">
              <button
                className={`category-pill ${selectedCategory === "Semua" ? "active" : ""}`}
                onClick={() => setSelectedCategory("Semua")}
                id="quiz-cat-all-btn"
              >
                🌸 Semua
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                  id={`quiz-cat-${cat.replace(/\s|&/g, "-").toLowerCase()}-btn`}
                >
                  {categoryEmoji[cat]} {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Question Count */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: 24 }}
          >
            <div className="section-header">
              <h2 className="section-title">Jumlah Soal</h2>
            </div>
            <div className="setup-count-selector">
              {QUIZ_COUNTS.map((count) => {
                const poolSize =
                  selectedCategory === "Semua"
                    ? kanjiData.length
                    : kanjiData.filter((k) => k.category === selectedCategory).length;
                const isDisabled = count > poolSize;
                return (
                  <button
                    key={count}
                    className={`count-pill ${questionCount === count ? "active" : ""}`}
                    onClick={() => !isDisabled && setQuestionCount(Math.min(count, poolSize))}
                    id={`count-${count}-btn`}
                    style={{ opacity: isDisabled ? 0.35 : 1, cursor: isDisabled ? "not-allowed" : "pointer" }}
                  >
                    {count} soal
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Start Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ marginTop: 32 }}
          >
            {(() => {
              const poolSize =
                selectedCategory === "Semua"
                  ? kanjiData.length
                  : kanjiData.filter((k) => k.category === selectedCategory).length;
              const canStart = poolSize >= 4;
              return (
                <>
                  {!canStart && (
                    <p style={{ textAlign: "center", color: "var(--accent-gold)", fontSize: 13, marginBottom: 12 }}>
                      ⚠️ Kategori ini memiliki terlalu sedikit kanji untuk quiz (min. 4)
                    </p>
                  )}
                  <button
                    className="btn-primary"
                    onClick={startQuiz}
                    id="start-quiz-btn"
                    disabled={!canStart}
                    style={{ width: "100%", fontSize: 16, padding: "16px", opacity: canStart ? 1 : 0.5 }}
                  >
                    Mulai Quiz — {Math.min(questionCount, poolSize)} Soal
                    {selectedCategory !== "Semua" && (
                      <span style={{ fontSize: 12, marginLeft: 8, opacity: 0.8 }}>· {selectedCategory}</span>
                    )}
                  </button>
                </>
              );
            })()}
          </motion.div>
        </main>
        <Navbar />
      </div>
    );
  }

  // PLAYING SCREEN
  const currentKanji = questions[currentIdx];
  if (!currentKanji) return null;
  const { options, correctAnswer, questionText, subText } = generateQuestion(
    currentKanji,
    kanjiData,
    selectedMode
  );
  const isKanjiMode = selectedMode === "kanji";
  const pct = Math.round(((currentIdx) / questions.length) * 100);

  return (
    <div className="app-wrapper">
      <main className="page-content">
        {/* Quiz Header */}
        <motion.div
          className="quiz-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="quiz-progress-info">
            <span className="quiz-question-number">
              Soal {currentIdx + 1} / {questions.length}
            </span>
            <span className="quiz-score-badge">⭐ {score} benar</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            className="quiz-question-card"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          >
            <span className="quiz-mode-tag">
              {QUIZ_MODES.find((m) => m.id === selectedMode)?.title}
            </span>
            {isKanjiMode ? (
              <>
                <p className="quiz-question-label" style={{ marginTop: 12 }}>Arti:</p>
                <p style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", margin: "8px 0" }}>
                  {questionText}
                </p>
                {subText && (
                  <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>{subText}</p>
                )}
                <p className="quiz-question-label" style={{ marginTop: 8 }}>Pilih kanji yang tepat:</p>
              </>
            ) : (
              <>
                <p className="quiz-question-label" style={{ marginTop: 12 }}>Kanji:</p>
                <span className="quiz-kanji">{questionText}</span>
                {subText && (
                  <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>{subText}</p>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`options-${currentIdx}`}
            className="quiz-options"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {options.map((option, i) => {
              let optionClass = "quiz-option";
              if (isAnswered) {
                if (option === correctAnswer) optionClass += " correct";
                else if (option === selectedAnswer && option !== correctAnswer) optionClass += " wrong";
              }
              return (
                <motion.button
                  key={`${currentIdx}-${i}`}
                  className={optionClass}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                  id={`option-${i}-btn`}
                  whileTap={{ scale: isAnswered ? 1 : 0.96 }}
                  style={{
                    fontFamily: isKanjiMode ? "'Noto Sans JP', serif" : "Inter, sans-serif",
                    fontSize: isKanjiMode ? 28 : 14,
                    fontWeight: isKanjiMode ? 700 : 600,
                  }}
                >
                  {option}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Result modal */}
        <ResultModal
          isOpen={showResult}
          score={score}
          total={questions.length}
          wrongCount={wrongIds.length}
          onRetry={handleRetry}
          onHome={handleHome}
          onReview={handleReview}
        />
      </main>
      <Navbar />
    </div>
  );
}
