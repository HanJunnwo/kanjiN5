"use client";
import { useState, useEffect, useCallback } from "react";

export interface ProgressData {
  totalQuizzes: number;
  totalCorrect: number;
  totalAnswered: number;
  wrongKanjiIds: number[];
  masteredKanjiIds: number[];
  streak: number;
  lastStudyDate: string;
  quizHistory: { date: string; score: number; total: number }[];
  completedLevels: number[]; // Array of level IDs that are completed
}

const DEFAULT_PROGRESS: ProgressData = {
  totalQuizzes: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  wrongKanjiIds: [],
  masteredKanjiIds: [],
  streak: 0,
  lastStudyDate: "",
  quizHistory: [],
  completedLevels: [],
};

const STORAGE_KEY = "kanji_n5_progress";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(DEFAULT_PROGRESS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const save = useCallback((data: ProgressData) => {
    setProgress(data);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, []);

  const recordQuiz = useCallback(
    (score: number, total: number, wrongIds: number[]) => {
      const today = new Date().toISOString().slice(0, 10);
      setProgress((prev) => {
        const newWrong = Array.from(new Set([...prev.wrongKanjiIds, ...wrongIds]));
        const newMastered = prev.masteredKanjiIds.filter((id) => !wrongIds.includes(id));
        const streak =
          prev.lastStudyDate === today
            ? prev.streak
            : prev.lastStudyDate === getPreviousDay(today)
            ? prev.streak + 1
            : 1;

        const updated: ProgressData = {
          ...prev,
          totalQuizzes: prev.totalQuizzes + 1,
          totalCorrect: prev.totalCorrect + score,
          totalAnswered: prev.totalAnswered + total,
          wrongKanjiIds: newWrong,
          masteredKanjiIds: newMastered,
          streak,
          lastStudyDate: today,
          quizHistory: [
            { date: today, score, total },
            ...prev.quizHistory.slice(0, 29),
          ],
          completedLevels: prev.completedLevels || [],
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch {}
        return updated;
      });
    },
    []
  );

  const markMastered = useCallback((kanjiId: number) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        masteredKanjiIds: Array.from(new Set([...prev.masteredKanjiIds, kanjiId])),
        wrongKanjiIds: prev.wrongKanjiIds.filter((id) => id !== kanjiId),
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const completeLevel = useCallback((levelId: number) => {
    setProgress((prev) => {
      const completedLevels = Array.from(new Set([...(prev.completedLevels || []), levelId]));
      const updated = { ...prev, completedLevels };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const resetProgress = useCallback(() => {
    save(DEFAULT_PROGRESS);
  }, [save]);

  const accuracy =
    progress.totalAnswered > 0
      ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
      : 0;

  return { progress, recordQuiz, markMastered, completeLevel, resetProgress, accuracy };
}

function getPreviousDay(dateStr: string): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}
