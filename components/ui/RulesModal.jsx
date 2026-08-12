'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function RulesModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Game Rules</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-900">
                  How scoring works
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close rules"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>Each correct answer is worth <strong className="font-semibold text-slate-900">0.5 points</strong> for accuracy.</span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>A speed bonus is added to <strong className="font-semibold text-slate-900">every correct answer</strong>, based on your total time to finish the quiz.</span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>Finish in under <strong className="font-semibold text-slate-900">0.8 × number of questions</strong> (for example, 8s for 10 questions) → <strong className="font-semibold text-slate-900">+0.5 bonus each</strong>.</span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>Finish in under <strong className="font-semibold text-slate-900">1.2 × number of questions</strong> (for example, 12s for 10 questions) → <strong className="font-semibold text-slate-900">+0.35 bonus each</strong>.</span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>Slower than that → <strong className="font-semibold text-slate-900">+0.25 bonus each</strong>.</span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>Max possible per question is <strong className="font-semibold text-slate-900">1.0</strong>, and your final score is shown as a percentage.</span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>If you are inactive for <strong className="font-semibold text-slate-900">60 seconds</strong>, the quiz pauses automatically and the paused time does not count.</span>
              </li>
              <li className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 text-base text-blue-600">▸</span>
                <span>Each question-count mode (10/15/20/25) keeps its own high score and is displayed after the round ends.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}