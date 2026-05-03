"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vocabularyData } from "@/data/vocabulary";

export default function VocabularyPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <header className="header">
        <h1 className="title">Latihan Kosakata</h1>
        <p className="subtitle">Hafalkan kosakata berdasarkan kelompok kata</p>
      </header>

      <div className="tabs" style={{ display: 'flex', gap: '8px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '8px' }}>
        {vocabularyData.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeTab === index ? 'var(--primary)' : 'var(--bg-card)',
              color: activeTab === index ? 'white' : 'var(--text-main)',
              fontWeight: activeTab === index ? 'bold' : 'normal',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              boxShadow: activeTab === index ? 'var(--shadow-md)' : 'none',
            }}
          >
            {category.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="vocab-list"
          style={{ display: 'grid', gap: '12px' }}
        >
          {vocabularyData[activeTab].items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="vocab-card"
              style={{
                background: 'var(--bg-card)',
                padding: '16px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '4px' }}>
                  {item.word}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  {item.reading}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '16px', fontWeight: '500', color: 'var(--text-main)' }}>
                  {item.meaning}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
