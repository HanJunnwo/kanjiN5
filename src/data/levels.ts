import { kanjiData } from "./kanji";

export interface Level {
  id: number;
  title: string;
  description: string;
  kanjiIds: number[];
  passingScore: number;
}

// Group kanji into 20 levels
// 144 kanji total. 144 / 20 ≈ 7-8 kanji per level.
export const levels: Level[] = Array.from({ length: 20 }, (_, i) => {
  const id = i + 1;
  const start = i * 7;
  const end = Math.min((i + 1) * 7, kanjiData.length);
  const kanjiIds = kanjiData.slice(start, end).map(k => k.id);

  return {
    id,
    title: `Level ${id}`,
    description: `Kuasai ${kanjiIds.length} kanji baru`,
    kanjiIds,
    passingScore: Math.ceil(kanjiIds.length * 0.8),
  };
});
