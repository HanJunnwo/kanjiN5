"use client";

import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';

interface KanjiWriterProps {
  character: string;
  size?: number;
}

const KanjiWriter: React.FC<KanjiWriterProps> = ({ character, size = 150 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [isQuizzing, setIsQuizzing] = useState(false);

  useEffect(() => {
    if (containerRef.current && character) {
      containerRef.current.innerHTML = '';
      writerRef.current = HanziWriter.create(containerRef.current, character, {
        width: size,
        height: size,
        padding: 5,
        showOutline: true,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 200,
        strokeColor: '#8b5cf6', // purple-500
        outlineColor: '#e2e8f0', // slate-200
        drawingColor: '#06b6d4', // cyan-500
      });
      setIsQuizzing(false);
    }
  }, [character, size]);

  const animate = () => {
    if (writerRef.current) {
      setIsQuizzing(false);
      writerRef.current.animateCharacter();
    }
  };

  const startQuiz = () => {
    if (writerRef.current) {
      setIsQuizzing(true);
      writerRef.current.quiz();
    }
  };

  const reset = () => {
    if (writerRef.current) {
        setIsQuizzing(false);
        writerRef.current.cancelQuiz();
        writerRef.current.showCharacter();
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div
        ref={containerRef}
        style={{
          background: 'white',
          borderRadius: 12,
          padding: 8,
          width: size + 16,
          height: size + 16,
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
          border: '2px solid rgba(0,0,0,0.05)'
        }}
      />
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', width: '100%' }}>
        <button
          onClick={animate}
          className="btn-writer btn-writer-purple"
        >
          Animate
        </button>
        <button
          onClick={startQuiz}
          className="btn-writer btn-writer-cyan"
        >
          {isQuizzing ? 'Retry' : 'Tulis'}
        </button>
        <button
          onClick={reset}
          className="btn-writer btn-writer-slate"
        >
          Reset
        </button>
      </div>
      {isQuizzing && (
        <p style={{ fontSize: 11, color: 'var(--accent-cyan)', fontWeight: 600 }}>
          Ikuti urutan goresan!
        </p>
      )}
    </div>
  );
};

export default KanjiWriter;
